const grid = document.querySelector('.grid')
let blocos = Array.from(document.querySelectorAll('.grid div'))
const placarDisplay = document.getElementById('placar');
const startbtn = document.getElementById('Start-button')
const width = 10
let nextRandom = 0
let timerId
let score = 0

// console.log(blocos)

// as peças de tetris

