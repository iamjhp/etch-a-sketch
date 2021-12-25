let color = 'black'
const gridContainer = document.querySelector('.grid')
const slider = document.querySelector('#slider')
const silderValue = document.querySelector('.value')

function generateGrid(val = 16) {
    //const gridContainer = document.querySelector('.grid')

    let size = val * val

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

function createNewCells() {
    const newCells = document.querySelectorAll('.cell')
    newCells.forEach(cell => cell.addEventListener('mouseover', draw))

    return newCells
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
    silderValue.textContent = slider.value
    generateGrid(slider.value)
    let newCells = createNewCells()
    init(newCells)
})

function init(cells) {
    rgbButtonEventListener(cells)
    blackButtonEventListener(cells)
}

slider.addEventListener('change', () => {
    color = 'black'
    silderValue.textContent = slider.value
    removeChildNodes(gridContainer)
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${slider.value}, auto)`)
    generateGrid(slider.value)
    let newCells = createNewCells()
    init(newCells)
})

init(cells)

