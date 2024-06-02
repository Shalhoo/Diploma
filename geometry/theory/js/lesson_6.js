var red_el = document.getElementsByClassName("red_el")
var blue_el = document.getElementsByClassName("blue_el")
var l_2 = document.getElementsByClassName("l_2")
var l_1 = document.getElementsByClassName("l_1")
var A_1 = document.getElementsByClassName("A_1")
var A_2 = document.getElementsByClassName("A_2")
var m_1 = document.getElementsByClassName("m_1")
var m_2 = document.getElementsByClassName("m_2")

var i = 0;
let click_stop = 0;
let click_begin = 0
let animationPaused = false;
let done = 0;


function start_animation(element, pauseTime = 0) {
	return new Promise((resolve) => {
		resolve(); // Обещание выполнено
		if(!animationPaused) {
			element.style.animationPlayState = 'running';
		}
		if(pauseTime > 0) {
			animation.currentTime = pauseTime; // Установить текущее время анимации
		}
	});
}

function pause_animations() {
	let all_el_for_pause = document.querySelectorAll(index_elem.concat(index_animation))
	for(let i = 0; i < all_el_for_pause.length; i++) {
		all_el_for_pause[i].style.animationPlayState = 'paused';
	}
	all_el_for_pause = document.querySelectorAll(index_elem.concat(index_animation+1))
	for(let i = 0; i < all_el_for_pause.length; i++) {
		all_el_for_pause[i].style.animationPlayState = 'paused';
	}
}

function animation_4() {
	if(done == 0) {
    red_el[0].style.setProperty('--width_1', '130');
    red_el[0].style.setProperty('--width_2', '252');
    red_el[0].style.animation = "change_width 3s forwards"
    red_el[0].style.animationDelay = "0.5s";
    return start_animation(red_el[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          l_2[0].style.animation = "blink 2s forwards"
          l_2[0].style.animationDelay = "1s";
          resolve(start_animation(l_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          l_2[1].style.animation = "blink 2s forwards"
          l_2[1].style.animationDelay = "1s";
          resolve(start_animation(l_2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          l_1[1].style.animation = "blink 2s forwards"
          l_1[1].style.animationDelay = "1s";
          resolve(start_animation(l_1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          l_1[0].style.animation = "blink 2s forwards"
          l_1[0].style.animationDelay = "1s";
          resolve(start_animation(l_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_2[0].style.animation = "blink 2s forwards"
          A_2[0].style.animationDelay = "3s";
          resolve(start_animation(A_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_2[1].style.animation = "blink 2s forwards"
          A_2[1].style.animationDelay = "3s";
          resolve(start_animation(A_2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_1[1].style.animation = "blink 2s forwards"
          A_1[1].style.animationDelay = "3s";
          resolve(start_animation(A_1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_1[0].style.animation = "blink 2s forwards"
          A_1[0].style.animationDelay = "3s";
          resolve(start_animation(A_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "5s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "5s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_4 is done";
}

function animation_5() {
	if(done = "animation_4 is done") {
    blue_el[0].style.setProperty('--width_1', '222');
    blue_el[0].style.setProperty('--width_2', '500');
    blue_el[0].style.animation = "change_width 5s forwards"
    blue_el[0].style.animationDelay = "0.5s";
    return start_animation(blue_el[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          m_2[0].style.animation = "blink 2s forwards"
          m_2[0].style.animationDelay = "2s";
          resolve(start_animation(m_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          m_2[1].style.animation = "blink 2s forwards"
          m_2[1].style.animationDelay = "2s";
          resolve(start_animation(m_2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          m_1[1].style.animation = "blink 2s forwards"
          m_1[1].style.animationDelay = "2s";
          resolve(start_animation(m_1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          m_1[0].style.animation = "blink 2s forwards"
          m_1[0].style.animationDelay = "2s";
          resolve(start_animation(m_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_2[2].style.animation = "blink 2s forwards"
          A_2[2].style.animationDelay = "4s";
          resolve(start_animation(A_2[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_2[3].style.animation = "blink 2s forwards"
          A_2[3].style.animationDelay = "4s";
          resolve(start_animation(A_2[3]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_1[2].style.animation = "blink 2s forwards"
          A_1[2].style.animationDelay = "4s";
          resolve(start_animation(A_1[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          A_1[3].style.animation = "blink 2s forwards"
          A_1[3].style.animationDelay = "4s";
          resolve(start_animation(A_1[3]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "6s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "6s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_5 is done";
}