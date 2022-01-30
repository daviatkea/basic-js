console.clear()

// First
const btn1 = document.querySelector('#btn-1'),
      box1 = document.querySelector('.box-1')

function clickHandler1() {
  box1.classList.add('js-1')
}

btn1.addEventListener('click', clickHandler1)


// Second
const btn2 = document.querySelector('#btn-2'),
      boxes = document.querySelectorAll('.box')

function clickHandler2() {
  boxes.forEach( box => {
    box.classList.add('js-2')
  })
}

btn2.addEventListener('click', clickHandler2)


// Third
const btn3 = document.querySelector('#btn-3'),
      headings = document.querySelectorAll('.heading-box')

function clickHandler3() {
  headings.forEach( box => {
    const heading = box.querySelector('h5')
    heading.classList.add('js-3')
  })
}

btn3.addEventListener('click', clickHandler3)


// Fourth
const btn4 = document.querySelector('#btn-4'),
      cards = document.querySelectorAll('.card')

function clickHandler4() {
  cards.forEach( card => {
    const children = card.querySelectorAll(':scope > *')
    children.forEach(child => {
      child.classList.add('js-4')
    })
  })
}

btn4.addEventListener('click', clickHandler4)