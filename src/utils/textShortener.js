export default function textShortener(text, maxChar) {
  if (text.length > maxChar) {
    return `${text.slice(0, maxChar)}...`;
  }
  return text;
}
