const wordCountEl = document.getElementById('word-count')
const charCountEl = document.getElementById('char-count')
const textEl = document.querySelector('textarea')
textEl.addEventListener('input', this.handleInput)

function handleInput (e) {
  const text = e.target.value
  const charCount = text.length
  const wordCount = text.split(' ').filter(Boolean).length

  charCountEl.innerText = charCount || ''
  wordCountEl.innerText = wordCount || ''
}