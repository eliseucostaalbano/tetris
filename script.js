const grid = document.querySelector('.grid')
let blocos = Array.from(document.querySelectorAll('.grid div'))
const placarDisplay = document.getElementById('placar');
const startbtn = document.getElementById('Start-button')
const width = 10
// let nextRandom = 0
// let timerId
// let score = 0



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
let rotacaoAtual = 0

// aletoriamente criar uma peça

let random = Math.floor(Math.random() * osTetrominos.length)

let atual = osTetrominos[random][rotacaoAtual]

// desenhando as peças

function desenhar(){
  atual.forEach(index => {
blocos[posiçãoAtual + index].classList.add('tetromino')
  })

}

function apagar(){
  atual.forEach(index => {
    blocos[posiçãoAtual + index].classList.remove('tetromino')
      })
}


// fazer as peças se mover
timerId = setInterval(mover, 1000)

function mover(){
  apagar()
  posiçãoAtual += width
  desenhar()
  pare()
}

// criando a função pare
function pare(){
  if(atual.some(index => blocos[posiçãoAtual + index + width].classList.contains('final'))){
 atual.forEach(index => blocos[posiçãoAtual + index].classList.add('final'))

//  uma nova peça começa a cair
   random = Math.floor(Math.random() * osTetrominos.length)
   atual = osTetrominos[random][rotacaoAtual]
   posiçãoAtual = 4
   desenhar()
  }
}