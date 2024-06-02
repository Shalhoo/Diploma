
var i = 0;
let click_stop = 0;
let click_begin = 0
let animationPaused = false;
let done = 0;
var sum_2 = document.getElementsByClassName("sum_2")
var l_2 = document.getElementsByClassName("l_2")
var el_11 = document.getElementsByClassName("el_11")
var el_12 = document.getElementsByClassName("el_12")
var el_22 = document.getElementsByClassName("el_22")
var el_21 = document.getElementsByClassName("el_21")
var line_11_12 = document.getElementsByClassName("line_11_12")
var line_22_21 = document.getElementsByClassName("line_22_21")
var line_11_21 = document.getElementsByClassName("line_11_21")
var c_11 = document.getElementsByClassName("c_11")
var c_12 = document.getElementsByClassName("c_12")
var c_21 = document.getElementsByClassName("c_21")
var c_22 = document.getElementsByClassName("c_22")
var dash_l1 = document.getElementsByClassName("dash_l1")
var dash_l2 = document.getElementsByClassName("dash_l2")
var el_m1 = document.getElementsByClassName("el_m1")
var el_m2 = document.getElementsByClassName("el_m2")
var el_P1 = document.getElementsByClassName("el_P1")
var el_P2 = document.getElementsByClassName("el_P2")
var el_42 = document.getElementsByClassName("el_42")
var el_51 = document.getElementsByClassName("el_51")
var c_42 = document.getElementsByClassName("c_42")
var c_51 = document.getElementsByClassName("c_51")
var c_P1 = document.getElementsByClassName("c_P1")
var c_P2 = document.getElementsByClassName("c_P2")
var line_P1_P2 = document.getElementsByClassName("line_P1_P2")
var line_32_42 = document.getElementsByClassName("line_32_42")
var line_52_51 = document.getElementsByClassName("line_52_51")
var el_51 = document.getElementsByClassName("el_51")
var el_52 = document.getElementsByClassName("el_52")
var el_31 = document.getElementsByClassName("el_31")
var el_32 = document.getElementsByClassName("el_32")
var el_42 = document.getElementsByClassName("el_42")
var c_41 = document.getElementsByClassName("c_41")
var c_42 = document.getElementsByClassName("c_42")
var c_32 = document.getElementsByClassName("c_32")
var c_51 = document.getElementsByClassName("c_51")
var line_l2_P2 = document.getElementsByClassName("line_l2_P2")
var line_51_P1 = document.getElementsByClassName("line_51_P1")

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


function animation_3() {
	if(done == 0) {
        sum_2[0].style.opacity = "1";
        sum_2[0].style.animation = "long_blink 3s forwards"
        sum_2[0].style.animationDelay = "0.5s";
		return start_animation( sum_2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    l_2[0].style.animation = "long_blink 3s forwards"
                    l_2[0].style.animationDelay = "0.5s";
                    resolve(start_animation(l_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    l_2[1].style.animation = "long_blink 3s forwards"
                    l_2[1].style.animationDelay = "0.5s";
                    resolve(start_animation(l_2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "3s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_3 is done";
}

function animation_4() {
	if(done = "animation_3 is done") {
        line_11_12[0].style.setProperty('--height_1', '100');
        line_11_12[0].style.setProperty('--height_2', '350');
        line_11_12[0].style.animation = "change_height 3s forwards"
        line_11_12[0].style.animationDelay = "0.5s";
		return start_animation(line_11_12[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_22_21[0].style.setProperty('--height_1', '100');
                    line_22_21[0].style.setProperty('--height_2', '280');
                    line_22_21[0].style.animation = "change_height 3s forwards"
                    line_22_21[0].style.animationDelay = "0.5s";
                    resolve(start_animation(line_22_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_11_21[0].style.setProperty('--width_1', '90');
                    line_11_21[0].style.setProperty('--width_2', '220');
                    line_11_21[0].style.animation = "change_width 3s forwards"
                    line_11_21[0].style.animationDelay = "3s";
                    resolve(start_animation(line_11_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_11[0].style.animation = "blink 2s forwards"
                    c_11[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_11[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_12[0].style.animation = "blink 2s forwards"
                    c_12[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_21[0].style.animation = "blink 2s forwards"
                    c_21[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_22[0].style.animation = "blink 2s forwards"
                    c_22[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_11[0].style.animation = "blink 2s forwards"
                    el_11[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_11[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_11[1].style.animation = "blink 2s forwards"
                    el_11[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_11[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[0].style.animation = "blink 2s forwards"
                    el_12[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[1].style.animation = "blink 2s forwards"
                    el_12[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_12[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[0].style.animation = "blink 2s forwards"
                    el_21[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[1].style.animation = "blink 2s forwards"
                    el_21[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_21[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[0].style.animation = "blink 2s forwards"
                    el_22[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[1].style.animation = "blink 2s forwards"
                    el_22[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_22[1]));
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
	done = "animation_4 is done";
}


function animation_5() {
	if(done ="animation_4 is done") {
        dash_l1[0].style.animation = "long_blink 3s forwards"
        dash_l1[0].style.animationDelay = "0.5s";
		return start_animation(dash_l1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    dash_l2[0].style.animation = "long_blink 3s forwards"
                    dash_l2[0].style.animationDelay = "0.5s";
                    resolve(start_animation(dash_l2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_m1[0].style.animation = "long_blink 3s forwards"
                    el_m1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(el_m1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_m1[1].style.animation = "long_blink 3s forwards"
                    el_m1[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_m1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_m2[0].style.animation = "long_blink 3s forwards"
                    el_m2[0].style.animationDelay = "0.5s";
                    resolve(start_animation(el_m2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_m2[1].style.animation = "long_blink 3s forwards"
                    el_m2[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_m2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "3s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_5 is done";
}


function animation_6() {
	if(done ="animation_5 is done") {
        dash_l1[0].style.animation = "long_blink 3s forwards"
        dash_l1[0].style.animationDelay = "0.5s";
		return start_animation(dash_l1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_11_21[0].style.animation = "long_blink 3s forwards"
                    line_11_21[0].style.animationDelay = "0.5s";
                    resolve(start_animation(line_11_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_11[0].style.animation = "long_blink 3s forwards"
                    el_11[0].style.animationDelay = "0.5s";
                    resolve(start_animation(el_11[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_11[1].style.animation = "long_blink 3s forwards"
                    el_11[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_11[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[0].style.animation = "long_blink 3s forwards"
                    el_21[0].style.animationDelay = "0.5s";
                    resolve(start_animation(el_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[1].style.animation = "long_blink 3s forwards"
                    el_21[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_21[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_m1[0].style.animation = "long_blink 3s forwards"
                    el_m1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(el_m1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_m1[1].style.animation = "long_blink 3s forwards"
                    el_m1[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_m1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_21[0].style.animation = "long_blink 3s forwards"
                    c_21[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_11[0].style.animation = "long_blink 3s forwards"
                    c_11[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_11[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "3s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_6 is done";
}


function animation_7() {
	if(done ="animation_6 is done") {
        el_P1[0].style.animation = "blink 2s forwards"
        el_P1[0].style.animationDelay = "0.5s";
		return start_animation(el_P1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_P1[1].style.animation = "blink 2s forwards"
                    el_P1[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_P1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_P1[0].style.animation = "blink 2s forwards"
                    c_P1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_P1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_P1_P2[0].style.setProperty('--top_1', '260');
                    line_P1_P2[0].style.setProperty('--top_2', '40');
                    line_P1_P2[0].style.setProperty('--height_1', '90');
                    line_P1_P2[0].style.setProperty('--height_2', '310');
                    line_P1_P2[0].style.animation = "change_height_top_down 2s forwards"
                    line_P1_P2[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_P1_P2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_P2[0].style.animation = "blink 2s forwards"
                    el_P2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_P2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_P2[1].style.animation = "blink 2s forwards"
                    el_P2[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_P2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_P2[0].style.animation = "blink 2s forwards"
                    c_P2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_P2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_32_42[0].style.setProperty('--top_1', '306');
                    line_32_42[0].style.setProperty('--top_2', '41');
                    line_32_42[0].style.setProperty('--height_1', '70');
                    line_32_42[0].style.setProperty('--height_2', '336');
                    line_32_42[0].style.animation = "change_height_top_down 2s forwards"
                    line_32_42[0].style.animationDelay = "6.5s";
                    resolve(start_animation(line_32_42[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_52_51[0].style.setProperty('--height_1', '100');
                    line_52_51[0].style.setProperty('--height_2', '306');
                    line_52_51[0].style.animation = "change_height 2s forwards"
                    line_52_51[0].style.animationDelay = "6.5s";
                    resolve(start_animation(line_52_51[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_42[0].style.animation = "blink 2s forwards"
					el_42[0].style.animationDelay = "8.5s";
                    resolve(start_animation(el_42[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_42[1].style.animation = "blink 2s forwards"
					el_42[1].style.animationDelay = "8.5s";
                    resolve(start_animation(el_42[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_42[0].style.animation = "blink 2s forwards"
					c_42[0].style.animationDelay = "8.5s";
                    resolve(start_animation(c_42[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_51[0].style.animation = "blink 2s forwards"
					el_51[0].style.animationDelay = "8.5s";
                    resolve(start_animation(el_51[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_51[1].style.animation = "blink 2s forwards"
					el_51[1].style.animationDelay = "8.5s";
                    resolve(start_animation(el_51[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_51[0].style.animation = "blink 2s forwards"
					c_51[0].style.animationDelay = "8.5s";
                    resolve(start_animation(c_51[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_52[0].style.animation = "blink 2s forwards"
					el_52[0].style.animationDelay = "8.5s";
                    resolve(start_animation(el_52[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_52[1].style.animation = "blink 2s forwards"
					el_52[1].style.animationDelay = "8.5s";
                    resolve(start_animation(el_52[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_52[2].style.animation = "blink 2s forwards"
					el_52[2].style.animationDelay = "8.5s";
                    resolve(start_animation(el_52[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_42[0].style.animation = "blink 2s forwards"
					el_42[0].style.animationDelay = "8.5s";
                    resolve(start_animation(el_42[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_42[1].style.animation = "blink 2s forwards"
					el_42[1].style.animationDelay = "8.5s";
                    resolve(start_animation(el_42[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_42[0].style.animation = "blink 2s forwards"
					c_42[0].style.animationDelay = "8.5s";
                    resolve(start_animation(c_42[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_32[0].style.animation = "blink 2s forwards"
					el_32[0].style.animationDelay = "8.5s";
                    resolve(start_animation(el_32[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_32[1].style.animation = "blink 2s forwards"
					el_32[1].style.animationDelay = "8.5s";
                    resolve(start_animation(el_32[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_32[0].style.animation = "blink 2s forwards"
					c_32[0].style.animationDelay = "8.5s";
                    resolve(start_animation(c_32[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_31[0].style.animation = "blink 2s forwards"
					el_31[0].style.animationDelay = "8.5s";
                    resolve(start_animation(el_31[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_31[1].style.animation = "blink 2s forwards"
					el_31[1].style.animationDelay = "8.5s";
                    resolve(start_animation(el_31[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_31[2].style.animation = "blink 2s forwards"
					el_31[2].style.animationDelay = "8.5s";
                    resolve(start_animation(el_31[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_31[3].style.animation = "blink 2s forwards"
					el_31[3].style.animationDelay = "8.5s";
                    resolve(start_animation(el_31[3]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_41[0].style.animation = "blink 2s forwards"
					c_41[0].style.animationDelay = "8.5s";
                    resolve(start_animation(c_41[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "10s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "10s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_7 is done";
}


function animation_9() {
	if(done ="animation_7 is done") {
        line_l2_P2[0].style.setProperty('--height_1', '100');
        line_l2_P2[0].style.setProperty('--height_2', '176');
        line_l2_P2[0].style.animation = "change_height 2s forwards"
        line_l2_P2[0].style.animationDelay = "0.5s";
		return start_animation(line_l2_P2[0]).then(() => {
		if(!animationPaused) {
			return new Promise((resolve) => {
					play.style.animation = "change_display_1 0.1s forwards"
					play.style.animationDelay = "2s";
					resolve(start_animation(play));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					start.style.animation = "change_display 0.1s forwards"
					start.style.animationDelay = "2s";
					resolve(start_animation(start));
			});
		}
	})
}
	done = "animation_9 is done";
}

function animation_10() {
	if(done = "animation_9 is done") {
        line_51_P1[0].style.setProperty('--height_1', '250');
        line_51_P1[0].style.setProperty('--height_2', '310');
        line_51_P1[0].style.animation = "change_height 2s forwards"
        line_51_P1[0].style.animationDelay = "0.5s";
		return start_animation(line_51_P1[0]).then(() => {
		if(!animationPaused) {
			return new Promise((resolve) => {
					play.style.animation = "change_display_1 0.1s forwards"
					play.style.animationDelay = "2s";
					resolve(start_animation(play));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					start.style.animation = "change_display 0.1s forwards"
					start.style.animationDelay = "2s";
					resolve(start_animation(start));
			});
		}
	})
}
	done = "animation_10 is done";
}
