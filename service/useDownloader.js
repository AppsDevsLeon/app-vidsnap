// Llama a tu backend Flask
const BACKEND_URL = 'http://localhost:5000/descargar';

export async function useDownloader(url, formato = 'mp3') {
  const res = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, formato }),
  });

  if (!res.ok) {
    throw new Error('Falló la descarga');
  }
  // Aquí puedes manejar blob/archivo si lo necesitas
  return res;
}

export default useDownloader;
