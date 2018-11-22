export default function getRootUrl() {
  const port = process.env.PORT || 8000;
  const dev = process.env.NODE_ENV !== "producction";
  const ROOT_URL = dev ? `` : `https://emanuel-sosa.me`;

  return ROOT_URL;
}
