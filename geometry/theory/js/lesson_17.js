var el_A2 = (document.getElementsByClassName('num_1'))
var el_B2 = (document.getElementsByClassName('num_2'))
var vertical_l2 = (document.getElementsByClassName('vertical'))
var el_C2 = (document.getElementsByClassName('num_3'))
var el_l2 = (document.getElementsByClassName('l2'))
var triangle = (document.getElementsByClassName('triangle_m2'))
var m2 = (document.getElementsByClassName('m2'))
var E2 = (document.getElementsByClassName('E2'))
var A2_B2 = (document.getElementsByClassName('A2_B2'))
var C2_E2 = (document.getElementsByClassName('C2_E2'))
var vert_line_1 = (document.getElementsByClassName('vert_line_1'))
var vert_line_2 = (document.getElementsByClassName('vert_line_2'))
var blue = (document.getElementsByClassName('blue'))
var yellow = (document.getElementsByClassName('yellow'))
var i = 0;
var done = 0;
var animationPaused = false;
var click_stop = 0;
var click_begin = 0

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
		// startTime = Date.now();
		el_A2[0].style.animation = "blink 2s forwards"
        el_A2[0].style.animationDelay = "0.5s";
		return start_animation(el_A2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					//   setTimeout(() => {
		el_B2[0].style.animation = "blink 2s forwards"
        el_B2[0].style.animationDelay = "3s";
					resolve(start_animation(el_B2[0]));
					//   }, 2000);
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					//   setTimeout(() => {
		el_C2[0].style.animation = "blink 2s forwards"
        el_C2[0].style.animationDelay = "5s";
					resolve(start_animation(el_C2[0]));
					//   }, 2000);
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "7s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "7s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_4 is done";
}
function animation_5() {
	if(done = "animation_4 is done") {
		// startTime = Date.now();
		// line_l1[0].style.opacity = 1;
		vertical_l2[0].style.setProperty('--height_1', '120');
		vertical_l2[0].style.setProperty('--height_2', '320');
		vertical_l2[0].style.animation = "change_height 1.5s forwards"
		vertical_l2[0].style.animationDelay = "0.5s";
		return start_animation(vertical_l2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					//   setTimeout(() => {
            el_l2[0].style.animation = "blink 2s forwards"
            el_l2[0].style.animationDelay = "2.5s";
					resolve(start_animation(el_l2[0]));
					//   }, 2000);
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "4.7s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "4.7s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_5 is done";
}


function animation_6() {
	if(done = "animation_5 is done") {
    triangle[0].style.setProperty('--width_1', '160');
		triangle[0].style.setProperty('--widtht_2', '320');
		triangle[0].style.animation = "change_width 1.5s forwards"
		triangle[0].style.animationDelay = "0.5s";
		return start_animation(triangle[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          triangle[1].style.setProperty('--width_1', '220');
          triangle[1].style.setProperty('--widtht_2', '320');
          triangle[1].style.animation = "change_width 1.5s forwards"
          triangle[1].style.animationDelay = "1.5s";
					resolve(start_animation(triangle[1]));
					//   }, 2000);
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          triangle[2].style.setProperty('--width_1', '120');
          triangle[2].style.setProperty('--widtht_2', '320');
          triangle[2].style.animation = "change_width 1.5s forwards"
          triangle[2].style.animationDelay = "3s";
					resolve(start_animation(triangle[2]));
					//   }, 2000);
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          m2[0].style.animation = "blink 2.5s forwards"
          m2[0].style.animationDelay = "4.7s";
					resolve(start_animation(m2[0]));
					//   }, 2000);
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "8.9s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "8.9s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_6 is done";
}