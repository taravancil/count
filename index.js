const wordCountEl = document.getElementById('word-count')
const charCountEl = document.getElementById('char-count')
const textEl = document.querySelector('textarea')
textEl.addEventListener('input', this.handleInput)

function handleInput (e) {
  const text = e.target.value
  const charCount = text.length || 0
  const wordCount = text.split(' ').filter(Boolean).length || 0

  charCountEl.innerText = charCount
  wordCountEl.innerText = wordCount
}

document.addEventListener('DOMContentLoaded', function () {
  const isDat = window.DatArchive && window.location.origin.startsWith('dat:')
  const url = isDat
    ? `beaker://library/${window.location}`
    : 'https://github.com/taravancil/count'

  document.getElementById('source-url').href = url
})