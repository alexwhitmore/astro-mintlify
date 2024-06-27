export function extractHeaders(content) {
  const headerRegex = /<h([2-6])\s+id="([^"]+)"[^>]*>(.*?)<\/h\1>/g
  const headers = []
  let match

  while ((match = headerRegex.exec(content)) !== null) {
    headers.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, '').trim(),
    })
  }

  return headers
}
