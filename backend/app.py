from flask import Flask, request, jsonify, send_file
from pytubefix import YouTube
from moviepy.editor import AudioFileClip
import os


app = Flask(__name__)

@app.route("/descargar", methods=["POST"])
def descargar_audio_mp3():
    data = request.get_json()
    url = data.get("url")

    if not url:
        return jsonify({"error": "URL no proporcionada"}), 400

    try:
        yt = YouTube(url)
        audio_stream = yt.streams.filter(only_audio=True).first()
        archivo_temp = audio_stream.download(output_path="downloads")
        archivo_mp3 = os.path.splitext(archivo_temp)[0] + ".mp3"

        audio_clip = AudioFileClip(archivo_temp)
        audio_clip.write_audiofile(archivo_mp3)
        audio_clip.close()
        os.remove(archivo_temp)

        return send_file(archivo_mp3, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    os.makedirs("downloads", exist_ok=True)
    app.run(host="0.0.0.0", port=5000)
