let color = 'black'

function generateGrid() {
    const gridContainer = document.querySelector('.grid')

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
rgb.addEventListener('click', () => {
    handleMouseoverEvent(cells, setToRgbColor)
})

const black = document.querySelector('#black')
black.addEventListener('click', () => {
    handleMouseoverEvent(cells, setToBlackColor)
})

const reset = document.querySelector('click', () => {
    
})
