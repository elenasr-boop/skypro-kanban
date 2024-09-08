export function safeString({ str }) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function deleteSpaces({ str }) {
  return str.replace(/\s+/g, "");
}
