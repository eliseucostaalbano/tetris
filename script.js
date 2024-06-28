const grid = document.querySelector('.grid')
let blocos = Array.from(document.querySelectorAll('.grid div'))
const placarDisplay = document.getElementById('placar');
const startbtn = document.getElementById('Start-button')
const width = 10
const displayBlocos = document.querySelectorAll('.mini-grid div')
const displayWidth = 4
const displayIndex = 0
let proximoRandom = 0
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
timerId = setInterval(moverBaixo, 1000)

// chamar funções com KeyCodes

function controle(e){
  if(e.keyCode === 37)
  {
    moverEsquerda()
  }
    else if(e.keyCode === 38){
      rotacionar()
    }else if(e.keyCode === 39){
      moverDireita()
    }else if(e.keyCode === 40){
      moverBaixo()
    }

}

document.addEventListener('keyup', controle)

function moverBaixo(){
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
   random = proximoRandom
   proximoRandom = Math.floor(Math.random() * osTetrominos.length)
   atual = osTetrominos[random][rotacaoAtual]
   posiçãoAtual = 4
   desenhar()
   displayForma()
  }
}

// mover o tetromino para esquerda , a menos que estaja na ponta ou bloqueado
function moverEsquerda(){
  apagar()
  
  const pontaEsquerda = atual.some(index => (posiçãoAtual + index) % width === 0 )

  if(!pontaEsquerda) posiçãoAtual -=1
  if(atual.some(index => blocos[posiçãoAtual + index].classList.contains('final'))){
    posiçãoAtual += 1
  }
  desenhar()
}

// mover o tetromino para direita , a menos que estaja na ponta ou bloqueado
function moverDireita(){
  apagar()
  
  const pontaDireita = atual.some(index => (posiçãoAtual + index) % width === width -  1 )

  if(!pontaDireita) posiçãoAtual +=1
  if(atual.some(index => blocos[posiçãoAtual + index].classList.contains('final'))){
    posiçãoAtual -= 1
  }
  desenhar()
}

// conserta a rotaçao nos lados
function haDireita() {
  return current.some(index => (posiçãoAtual + index + 1) % width === 0)
}
function haEsquerda() {
  return current.some(index => (posiçãoAtual + index) % width === 0)
}

function rotacionar(){
  apagar()
  rotacaoAtual++
  if(rotacaoAtual === atual.length){
    rotacaoAtual = 0
  }
  atual= osTetrominos[random] [rotacaoAtual]
  desenhar()
}

// mostar proxima peça no mini-grid

// os tetromino sem rotação
  const proximosTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
    [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
    [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
    [0, 1, displayWidth, displayWidth+1], //oTetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
  ]

  // mostrar a forma no mini grid
  function displayForma(){
 displayBlocos.forEach(bloco => {
  bloco.classList.remove('tetromino')
 })
 proximosTetrominoes[proximoRandom].forEach(index => {
  displayBlocos[displayIndex + index].classList.add('tetromino')
 })
  }