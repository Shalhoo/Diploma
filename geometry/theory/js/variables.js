const start = document.querySelector('#start');
const play = document.querySelector('#play');
const start_click = document.querySelector('#start_click')
const play_click = document.querySelector('#play_click')
const back = document.querySelector('#back')
const back_click = document.querySelector('#back_click')
const forward = document.querySelector('#forward')
const forward_click = document.querySelector('#forward_click')
const again = document.querySelector('#again')
const again_click = document.querySelector('#again_click')
const anim = document.querySelector('.animation')
const animate = document.querySelector('.anim_4')
let name = ".num_";
var name_func = "animation_"
var d = "()"
let l = 0;
let g = 0;
let n = 0;
let el = 1;
let ind = "ind_";
let index = 1;
let index_animation = 1;
let j17;
let func17 = "box_animate_";
let index_elem = ".ind_";
func = "box_animate_";
click = 0;
click_forward = 0;
click_play = 0;
click_back = 0;
click_again = 0;
click_play = 0;
click_stop = 0;
click_play_again = 0;


if (start.addEventListener('mousedown', begin)) {
    begin();
} else if (play.addEventListener('mousedown', stop)) {
    stop();
} else if (forward.addEventListener('mousedown', switch_forward)) {
    switch_forward();
} else if (back.addEventListener('mousedown', switch_back)) {
    switch_back();
} else if (again.addEventListener('mousedown', switch_again)) {
    switch_again();
};



function stop() {
    animationPaused = true; // Приостановить анимацию
    pause_animations();
    click_stop = 1;
    click_play = 0;
    console.log("click_stop = " + click_stop)
}

function switch_forward(event) {
        let all_el = document.querySelectorAll(index_elem.concat(index+1))
        if (click_play == 1) {
        for(let p = 0; p < 1; p++) {
        all_el = document.querySelectorAll(index_elem.concat(index+p))
        for (var i = 0; i < all_el.length; i++) {
            all_el[i].style.animation = "forwards"
        };
    }
}
//проблема здесь

// let all_el1 = document.querySelectorAll(index_elem.concat(index))
        // for (var i = 0; i < all_el1.length; i++) {
        //     all_el1[i].style.animation = "forwards"
        // };
         if (document.getElementById(index+1) != null ){
            text = document.getElementById(index); 
            text.classList.replace(func.concat(1), func.concat(2));
            text = document.getElementById(index+1);
            text.classList.replace(func.concat(2), func.concat(1));
            event.preventDefault();
            for (var w = 0; w < all_el.length; w++) {
                all_el[w].style.opacity = 1
                console.log(index_elem.concat(index_animation));
            };
            all_el = document.querySelectorAll(index_elem.concat(index))
            for (var w = 0; w < all_el.length; w++) {
                if(all_el[w].classList.contains(ind.concat(index+1))) {
                    all_el[w].style.opacity = 0;
                }
                // if(all_el[w].classList.contains(ind.concat(index-1))) {
                //     all_el[w].style.opacity = 1;
                // }
            }
            //проблема здесь
            index ++;
            index_animation++;
        }
        else 
        {
            for (var w = 0; w < all_el.length; w++) {
                all_el[w].style.opacity = 1
            };
            index = index;
            index_animation = index_animation;
        }
    if (window[name_func.concat(index_animation)] == null) {
        click = 0;
    } else {
        click = 1;
    }
    play.style.display = 'none';
    start.style.display = 'block';
    click_again = 0;
    click_play = 0;
    click_back = 0;
    click_forward = 1;
    console.log("click = " + click)
    console.log("index = " + index)
    console.log("index animation = " + index_animation);
}

function switch_back() {
    // let all_el = document.querySelectorAll(index_elem.concat(index_animation))
if (click_play == 1) {
    let all_el = document.querySelectorAll(index_elem.concat(index_animation+1))
            for (var i = 0; i < all_el.length; i++) {
                all_el[i].style.opacity = 0
                all_el[i].style.animation = "none"
            };
            index_animation = index;
        }

    else if (click_forward == 1 && index > 1 && document.getElementById(index+1) == null) {
        all_el = document.querySelectorAll(index_elem.concat(index_animation+1))
                for (var i = 0; i < all_el.length; i++) {
                    all_el[i].style.animation = "none"
                    all_el[i].style.opacity = 0
                };
            }
else if (click_back == 1 && index > 1 || click_forward == 1 && index > 1) {
    index--;
    all_el = document.querySelectorAll(index_elem.concat(index_animation))
    text = document.getElementById(index);
    text.classList.replace(func.concat(2), func.concat(1));
    text = document.getElementById(index+1);
    text.classList.replace(func.concat(1), func.concat(2));
            for (var i = 0; i < all_el.length; i++) {
                all_el[i].style.animation = "none"
                all_el[i].style.opacity = 0
            };
            index_animation--;
    } 
    else if (index == 1) {
        index = 1;
        index_animation = 1;
        document.getElementById(index).classList.replace(func.concat(2), func.concat(1));
    }
    if (window[name_func.concat(index_animation)] == null) {
        click = 0;
    } else {
        click = 1;
    }
    all_el = document.querySelectorAll(index_elem.concat(index))
    for (var w = 0; w < all_el.length; w++) {
        if(all_el[w].classList.contains(ind.concat(index+1))) {
            all_el[w].style.opacity = 1;
        }
    }
    play.style.display = 'none';
    start.style.display = 'block';
    click_again = 0;
    click_back = 1;
    click_forward = 0;
    click_play = 0;
    // click = "идем назад";
    console.log("click = " + click)
    console.log("index = " + index)
    console.log("index_animation = " + index_animation)
}

function switch_again() {
    let text = document.getElementById(index);
    text.classList.replace(func.concat(1), func.concat(2));
    text = document.getElementById(1);
    text.classList.replace(func.concat(2), func.concat(1));
    play.style.display = 'none';
    start.style.display = 'block';
    while (index > 0) {
        let all_el = document.querySelectorAll(index_elem.concat(index_animation + 1))
        console.log(all_el)
        event.preventDefault();
        for (var i = 0; i < all_el.length; i++) {
            // all_el[i].classList.toggle("on_display");
            all_el[i].style.opacity = 0
            all_el[i].style.animation = "none"
            console.log(document.querySelectorAll(index_elem.concat(index_animation)))
        }
        index_animation--;
        index--;
    }
    click_again = 1;
    click_back = 0;
    click_forward = 0;
    click_play = 0;
    index = 1;
    index_animation = 1;
    el = 1;
    click = 0;
    done = 0;
    console.log("click = " + click)
}

function begin() {
    start_click.onmouseup = function() {
            let all_el = document.querySelector(index_elem.concat(index_animation))
            if (click_stop == 1 ) {
                index--;
                index_animation--;
                play.style.display = 'block'
                start_click.style.display = 'none'
                animationPaused = false;
                window[name_func.concat(index_animation)]();
                console.log(index_animation)
                // alert("a")
                click_stop = 0;
                click_play = 1;
                click_play_again = 1;
                if (window[name_func.concat(index_animation)] == null) {
                    click = 0;
                } else {
                    click = 1;
                }
            }
            if (click_stop == 0){
            if (index == 2 && index_animation == 2 || window[name_func.concat(index_animation - 1)] == null && click_play_again == 0 && click == 0 && window[name_func.concat(index_animation)] == null || window[name_func.concat(index_animation - 1)] != null && click == 0 && window[name_func.concat(index_animation)] == null) {
                //________________если нет анимации с следующим текстовым окном________________
                let text = document.getElementById(index - 1);
                let next_text = document.getElementById(index);
                if (document.getElementById(index) == null) {
                    next_text= document.getElementById(index - 1);
                }
                text.classList.replace(func.concat(1), func.concat(2));
                next_text.classList.replace(func.concat(2), func.concat(1));
                play.style.display = 'block'
                start_click.style.display = 'none'
                setTimeout(() => {
                    start.style.display = 'block'
                    play.style.display = 'none'
                }, "100");
                console.log("нет анимации")
                if (window[name_func.concat(index_animation)] == null) {
                    click = 0;
                } else {
                    click = 1;
                }
                console.log("click = " + click)
                    //_____________________воспроизведение последней анимации_____________________
                if (document.getElementById(index + 1) == null) {
                    play.style.display = 'block'
                    start_click.style.display = 'none'
                    window[name_func.concat(index_animation - 1)]();
                    let text = document.getElementById(index - 2);
                    let next_text = document.getElementById(index - 1);
                    if (document.getElementById(index) == null) {
                        next_text= document.getElementById(index - 1);
                    }
                    text.classList.replace(func.concat(1), func.concat(2));
                    next_text.classList.replace(func.concat(2), func.concat(1));
                }
            }
            //________________если после этой анимации нет анимации____________
            else if (window[name_func.concat(index_animation - 1)] != undefined && click == 1 && click_forward == 0 && click_stop == 0 && window[name_func.concat(index_animation)] == null) {
                index--
                index_animation--
                play.style.display = 'block'
                start_click.style.display = 'none'
                let text = document.getElementById(index - 1);
                let next_text = document.getElementById(index);
                if (document.getElementById(index) == null) {
                    next_text= document.getElementById(index - 1);
                }
                text.classList.replace(func.concat(1), func.concat(2));
                next_text.classList.replace(func.concat(2), func.concat(1));
                window[name_func.concat(index_animation)]();
                console.log("есть анимация")
                if (window[name_func.concat(index_animation + 1)] == null) {
                    click = 0;
                } else {
                    click = 1;
                }
                console.log("click = " + click)
                console.log("здесь индекс " + index)
                console.log("click_stop = " + click_stop)
            }
            //________________если до этого была нажата кнопка пуск и есть анимация____________
                else if (click_play == 1 && click == 1 && window[name_func.concat(index_animation)] != null) {
                    play.style.display = 'block'
                    start_click.style.display = 'none'
                    let text = document.getElementById(index - 1);
                    let next_text = document.getElementById(index);
                    if (document.getElementById(index) == null) {
                            next_text= document.getElementById(index - 1);
                    }
                    text.classList.replace(func.concat(1), func.concat(2));
                    next_text.classList.replace(func.concat(2), func.concat(1));
                    window[name_func.concat(index_animation)]();
                    // resumeAnimation();
                    console.log("есть анимация")
                    if (window[name_func.concat(index_animation)] == null) {
                        click = 0;
                    } else {
                        click = 1;
                    }
                    console.log("click = " + click)
                    console.log("здесь индекс " + index)
                }
            //________________если до этого была нажата кнопка пуск и есть анимация____________
            else if (window[name_func.concat(index_animation - 1)] != undefined && click == 1 && click_forward == 0 && click_stop == 0 && window[name_func.concat(index_animation)] != null) {
                index--
                index_animation--
                play.style.display = 'block'
                start_click.style.display = 'none'
                let text = document.getElementById(index - 1);
                let next_text = document.getElementById(index);
                if (document.getElementById(index) == null) {
                    next_text= document.getElementById(index - 1);
                }
                text.classList.replace(func.concat(1), func.concat(2));
                next_text.classList.replace(func.concat(2), func.concat(1));
                window[name_func.concat(index_animation)]();
                // resumeAnimation();
                console.log("есть анимация")
                if (window[name_func.concat(index_animation)] == null) {
                    click = 0;
                } else {
                    click = 1;
                }
                console.log("click = " + click)
                console.log("здесь индекс " + index)
            }

            /*________________если до этого действия была нажата кнопка вперед и пуск и есть анимация
            или если на текущем тексте нет анимации, а на следующем есть и была нажата кнопка вперед*/
            else if (click_forward == 1 || click == 0) {
                play.style.display = 'block'
                start_click.style.display = 'none'
                let text = document.getElementById(index - 1);
                let next_text = document.getElementById(index);
                if (document.getElementById(index) == null) {
                    next_text= document.getElementById(index);
                }
                text.classList.replace(func.concat(1), func.concat(2));
                next_text.classList.replace(func.concat(2), func.concat(1));
                window[name_func.concat(index_animation)]();
                // resumeAnimation()
                // animation_4(animation);
                // console.log("pause = " + pause)
                console.log("есть анимация")
                if (window[name_func.concat(index_animation)] == null) {
                    click = 0;
                } else {
                    click = 1;
                }
                console.log("click = " + click)
            }
            click_stop = 0;
            click_play = 1;
            click_play_again == 0;
        }
        // else if (click_stop == 1 ) {
        //     window[name_func.concat(index_animation)]();
        //     index--;
        //     index_animation--;
        //     alert("a")
        // }
         
        }
    console.log("Номер анимации: " + index_animation + "; Номер текста: " + index)
    click_forward = 0;
    click_back = 0;
    click_again = 0;
    index++;
    index_animation++;
}
 //___________проблема с перелистыванием назад и последующим нажатием пуск
 