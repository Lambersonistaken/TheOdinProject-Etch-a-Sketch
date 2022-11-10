

const btn_16 = document.getElementById("mod-16")
const btn_32 = document.getElementById("mod-32")
const btn_64 = document.getElementById("mod-64")
const clearBtn = document.getElementById("clear")
const grid = document.getElementById('grid')

let DEFAULT_SIZE = 16



let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

clearBtn.addEventListener("click", () => {
    clearGrid()
    setupGrid(DEFAULT_SIZE)
})

btn_16.addEventListener("click", () => {
    clearGrid()
    setupGrid(DEFAULT_SIZE)
})

btn_32.addEventListener("click", () => {
    clearGrid()
    setupGrid(DEFAULT_SIZE*2)
})

btn_64.addEventListener("click", () => {
    clearGrid()
    setupGrid(DEFAULT_SIZE*4)
})


  function setupGrid(size) {
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', color)
        gridElement.addEventListener('mousedown', color)
        grid.appendChild(gridElement)
      }
  }


       
  function color(e) {
    if (e.type === 'mouseover' && !mouseDown) return 
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  }
        
  function clearGrid() {
    grid.innerHTML = ''
  }




    window.onload = () => {
        setupGrid(DEFAULT_SIZE)
      }
