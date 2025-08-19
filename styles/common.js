import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: { flex: 1, resizeMode: 'cover' },
  keyboardView: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: { alignItems: 'center', marginTop: 30, marginBottom: 20 },
  title: { color: 'white', fontSize: 28, fontWeight: '800' },
  subtitle: { color: '#ddd', fontSize: 14, marginTop: 6, textAlign: 'center' },

  searchContainer: { gap: 12 },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 46,
    fontSize: 16,
  },
  button: {
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563eb',
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '700' },

  toggle: {
    height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center',
  },
  toggleOn: { backgroundColor: '#16a34a' },
  toggleOff: { backgroundColor: '#334155' },
  toggleText: { color: 'white', fontWeight: '700' },

  resultCard: {
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 12,
    gap: 6,
  },
  resultTitle: { fontSize: 16, fontWeight: '800', color: '#0b1220' },
  resultMeta: { fontSize: 13, color: '#475569' },
  badge: { marginTop: 4, fontSize: 12, color: '#be123c', fontWeight: '700' },

  smallButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ea5e9',
  },
  smallButtonText: { color: 'white', fontWeight: '700' },

  footer: { alignItems: 'center', marginTop: 20 },
  footerText: { color: '#94a3b8', fontSize: 12 },
});
