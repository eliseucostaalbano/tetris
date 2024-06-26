const grid = document.querySelector('.grid')
let blocos = Array.from(document.querySelectorAll('.grid div'))
const placarDisplay = document.getElementById('placar');
const startbtn = document.getElementById('Start-button')
const width = 10
let nextRandom = 0
let timerId
let score = 0



// as peças de tetris

 const lTetromino = [
   [1, width+1, width*2+1, 2],
   [width, width+1, width+2, width*2+2],
   [1, width+1, width*2+1, width*2],
   [width, width+1, width+2, width*2+2]
 ]
   
 const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

const osTetrominos = [ lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

let posiçãoAtual = 4
let atual = osTetrominos[0][0]

// desenhando as peças




// console.log(osTetrominos [0] [0])