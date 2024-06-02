var el_A2 = (document.getElementsByClassName('num_1'))
var el_B2 = (document.getElementsByClassName('num_2'))
var el_A2_B2 = (document.getElementsByClassName('A2_B2'))
var el_C2 = (document.getElementsByClassName('num_3'))
var el_D2 = (document.getElementsByClassName('num_4'))
var el_C2_D2 = (document.getElementsByClassName('C2_D2'))
var blue = (document.getElementsByClassName('blue'))
var yellow = (document.getElementsByClassName('yellow'))
var i = 0;
var done = 0;
var animationPaused = false;
var click_stop = 0;
var click_begin = 0



function animation_3() {
	if(done == 0) {
		el_A2[0].style.animation = "blink 2s forwards"
        el_A2[0].style.animationDelay = "0.5s";
		return start_animation(el_A2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
				el_B2[0].style.animation = "blink 2s forwards"
        		el_B2[0].style.animationDelay = "3s";
					resolve(start_animation(el_B2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        el_A2_B2[0].style.setProperty('--height_1', '0');
                        el_A2_B2[0].style.setProperty('--height_2', '450');
                        el_A2_B2[0].style.animation = "change_height 2.5s forwards"
                        el_A2_B2[0].style.animationDelay = "5s";
					resolve(start_animation(el_A2_B2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        el_C2[0].style.animation = "blink 2s forwards"
                        el_C2[0].style.animationDelay = "7.5s";
					resolve(start_animation(el_C2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        el_D2[0].style.animation = "blink 2s forwards"
                        el_D2[0].style.animationDelay = "9.5s";
					resolve(start_animation(el_D2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        el_C2_D2[0].style.setProperty('--height_1', '0');
                        el_C2_D2[0].style.setProperty('--height_2', '450');
                        el_C2_D2[0].style.animation = "change_height 2.5s forwards"
                        el_C2_D2[0].style.animationDelay = "12s";
					resolve(start_animation(el_C2_D2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "13.3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "13.3s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_3 is done";
}
function animation_4() {
	if(done = "animation_3 is done") {
		// line_l1[0].style.opacity = 1;
		blue[0].style.setProperty('--width_1', '0');
		blue[0].style.setProperty('--width_2', '500');
		blue[0].style.setProperty('--left_1', '170');
		blue[0].style.setProperty('--left_2', '420');
		blue[0].style.animation = "apper_right_left_color 2.5s forwards"
		blue[0].style.animationDelay = "0.5s";
		return start_animation(blue[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						yellow[0].style.setProperty('--height_1', '0');
						yellow[0].style.setProperty('--height_2', '700');
						yellow[0].style.animation = "change_heigh_color 2.5s forwards"
						yellow[0].style.animationDelay = "3s";
					resolve(start_animation(yellow[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "5.5s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "5.5s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_4 is done";
}
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