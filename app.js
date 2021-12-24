let color = 'black'
const gridContainer = document.querySelector('.grid')

function generateGrid() {
    //const gridContainer = document.querySelector('.grid')

    let size = 16 * 16

    for (let i = 0; i < size; i++) {
        const div = document.createElement('div')
        div.classList.add('cell')
        gridContainer.appendChild(div)
    }
}

function draw(e) {
    this.setAttribute('style', `background-color: ${color}`)
}

function getRandomColor() {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    return 'rgb(' + rand(0, 255) + ", " + rand(0, 255) + ", " + rand(0, 255) + ")"
}

function setToRgbColor() {
    color = getRandomColor()
}

function setToBlackColor() {
    color = 'black'
}

function removeChildNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild)
    }
}

function handleMouseoverEvent(cells, newColor) {
    newColor()
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        draw
        newColor()
    }))
}

generateGrid()

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => cell.addEventListener('mouseover', draw))

const rgb = document.querySelector('#rgb')
const rgbButtonEventListener = (cells) => {
    rgb.addEventListener('click', () => {
        handleMouseoverEvent(cells, setToRgbColor)
    })
}

const black = document.querySelector('#black')
const blackButtonEventListener = (cells) => {
    black.addEventListener('click', () => {
        handleMouseoverEvent(cells, setToBlackColor)
    })
}

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    color = 'black'
    removeChildNodes(gridContainer)
    generateGrid()
    const newCells = document.querySelectorAll('.cell')
    newCells.forEach(cell => cell.addEventListener('mouseover', draw))
    init(newCells)
})

function init(cells) {
    rgbButtonEventListener(cells)
    blackButtonEventListener(cells)
}

init(cells)

