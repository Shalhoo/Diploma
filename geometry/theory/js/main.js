//________________________________________________Анимация кнопок________________________________________
// const back = document.querySelector('#back')
// const back_click = document.querySelector('#back_click')

back_click.style.display = 'none'
back.onmousedown = function() {
    back.style.display = 'none'
    back_click.style.display = 'block'
}
     
back_click.onmouseup = function() {
    back.style.display = 'block'
    back_click.style.display = 'none'
}

// const start = document.querySelector('#start')
// const start_click = document.querySelector('#start_click')
// const play = document.querySelector('#play')
// const play_click = document.querySelector('#play_click')

start_click.style.display = 'none'
play.style.display = 'none'
play_click.style.display = 'none'
start.onmousedown = function() {
    // start.style.display = 'none'
    start_click.style.display = 'block'
}
     
start_click.onmouseup = function() {
    play.style.display = 'block'
    start_click.style.display = 'none'
}

play.onmousedown = function() {
    play.style.display = 'none'
    play_click.style.display = 'block'
}

play_click.onmouseup = function() {
    start.style.display = 'block'
    play_click.style.display = 'none'
}

// const forward = document.querySelector('#forward')
// const forward_click = document.querySelector('#forward_click')

forward_click.style.display = 'none'
forward.onmousedown = function() {
    forward.style.display = 'none'
    forward_click.style.display = 'block'
}
     
forward_click.onmouseup = function() {
    forward.style.display = 'block'
    forward_click.style.display = 'none'
}


// const again = document.querySelector('#again')
// const again_click = document.querySelector('#again_click')

again_click.style.display = 'none'
again.onmousedown = function() {
    again.style.display = 'none'
    again_click.style.display = 'block'
}
     
again_click.onmouseup = function() {
    again.style.display = 'block'
    again_click.style.display = 'none'
}
