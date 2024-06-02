var i = 0;
let click_stop = 0;
let click_begin = 0
let animationPaused = false;
let done = 0;
var A_1 = document.getElementsByClassName("A_1")
var c_A1 = document.getElementsByClassName("c_A1")
var A_2 = document.getElementsByClassName("A_2")
var c_A2 = document.getElementsByClassName("c_A2")
var M_1 = document.getElementsByClassName("M_1")
var c_M1 = document.getElementsByClassName("c_M1")
var line_A1_A2 = document.getElementsByClassName("line_A1_A2")
var M_2 = document.getElementsByClassName("M_2")
var c_M2 = document.getElementsByClassName("c_M2")
var line_M1_M2 = document.getElementsByClassName("line_M1_M2")
var line_K1_K2 = document.getElementsByClassName("line_K1_K2")
var K_1 = document.getElementsByClassName("K_1")
var c_K1 = document.getElementsByClassName("c_K1")
var K_2 = document.getElementsByClassName("K_2")
var c_K2 = document.getElementsByClassName("c_K2")
var green_circle = document.getElementsByClassName("green_circle")
var vert_line = document.getElementsByClassName("vert_line")
var green_line = document.getElementsByClassName("green_line")
var B_1 = document.getElementsByClassName("B_1")
var B_2 = document.getElementsByClassName("B_2")
var c_B1 = document.getElementsByClassName("c_B1")
var el_11 = document.getElementsByClassName("el_11")
var c_11 = document.getElementsByClassName("c_11")
var el_12 = document.getElementsByClassName("el_12")
var c_12 = document.getElementsByClassName("c_12")
var red_el = document.getElementsByClassName("red_el")
var line_B1_B2 = document.getElementsByClassName("line_B1_B2")
var line_11_12 = document.getElementsByClassName("line_11_12")
var purple_mini_circle = document.getElementsByClassName("purple_mini_circle")
var purple_circle = document.getElementsByClassName("purple_circle")
var purple_line = document.getElementsByClassName("purple_line")
var red_line = document.getElementsByClassName("red_line")


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
        A_1[0].style.animation = "blink 2s forwards"
        A_1[0].style.animationDelay = "0.5s";
		return start_animation(A_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_A1[0].style.animation = "blink 2s forwards"
                    c_A1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_A1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_A1_A2[0].style.setProperty('--height_1', '210');
                    line_A1_A2[0].style.setProperty('--height_2', '441');
                    line_A1_A2[0].style.setProperty('--top_1', '231');
                    line_A1_A2[0].style.setProperty('--top_2', '0');
                    line_A1_A2[0].style.animation = "change_height_top_down 2s forwards"
                    line_A1_A2[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_A1_A2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_A2[0].style.animation = "blink 2s forwards"
                    c_A2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_A2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    A_2[0].style.animation = "blink 2s forwards"
                    A_2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(A_2[0]));
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
	done = "animation_3 is done";
}


function animation_4() {
	if(done = "animation_3 is done") {
        M_1[0].style.animation = "blink 2s forwards"
        M_1[0].style.animationDelay = "0.5s";
		return start_animation(M_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_M1[0].style.animation = "blink 2s forwards"
                    c_M1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_M1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_M1_M2[0].style.setProperty('--height_1', '103');
                    line_M1_M2[0].style.setProperty('--height_2', '337');
                    line_M1_M2[0].style.setProperty('--top_1', '235');
                    line_M1_M2[0].style.setProperty('--top_2', '0');
                    line_M1_M2[0].style.animation = "change_height_top_down 2s forwards"
                    line_M1_M2[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_M1_M2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_M2[0].style.animation = "blink 2s forwards"
                    c_M2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_M2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    M_2[0].style.animation = "blink 2s forwards"
                    M_2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(M_2[0]));
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
	if(done = "animation_4 is done") {
        K_1[0].style.animation = "blink 2s forwards"
        K_1[0].style.animationDelay = "0.5s";
		return start_animation(K_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_K1[0].style.animation = "blink 2s forwards"
                    c_K1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_K1[0]));
				});
			}
		}).then(() => {
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
	done = "animation_5 is done";
}

function animation_6() {
	if(done = "animation_5 is done") {
        green_circle[0].style.setProperty('--var_1', '0');
        green_circle[0].style.setProperty('--var_2', '135');
        green_circle[0].style.setProperty('--var_3', '0');
        green_circle[0].style.setProperty('--var_4', '135');
        green_circle[0].style.setProperty('--var_5', '0');
        green_circle[0].style.setProperty('--var_6', '0');
        green_circle[0].style.setProperty('--var_7', '280');
        green_circle[0].style.setProperty('--var_8', '0');
        green_circle[0].style.animation = "change_strokeDasharray 2s forwards"
        green_circle[0].style.animationDelay = "0.5s";
		return start_animation(green_circle[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[0].style.setProperty('--height_1', '280');
                    vert_line[0].style.setProperty('--height_2', '340');
                    vert_line[0].style.setProperty('--top_1', '56');
                    vert_line[0].style.setProperty('--top_2', '0');
                    vert_line[0].style.animation = "change_height_top_down 1s forwards"
                    vert_line[0].style.animationDelay = "2.5s";
                    resolve(start_animation(vert_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[1].style.setProperty('--height_1', '65');
                    vert_line[1].style.setProperty('--height_2', '112');
                    vert_line[1].style.setProperty('--top_1', '47');
                    vert_line[1].style.setProperty('--top_2', '0');
                    vert_line[1].style.animation = "change_height_top_down 1s forwards"
                    vert_line[1].style.animationDelay = "3.5s";
                    resolve(start_animation(vert_line[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_line[0].style.setProperty('--left_1', '341');
                    green_line[0].style.setProperty('--left_2', '235');
                    green_line[0].style.setProperty('--width_1', '120');
                    green_line[0].style.setProperty('--width_2', '226');
                    green_line[0].style.animation = "apper_right_left 2s forwards"
                    green_line[0].style.animationDelay = "4.5s";
                    resolve(start_animation(green_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_K1[0].style.animation = "change_opasity_1 0.3s forwards"
                    c_K1[0].style.animationDelay = "6.5s";
                    resolve(start_animation(c_K1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    K_1[0].style.animation = "change_opasity_1 0.3s forwards"
                    K_1[0].style.animationDelay = "6.5s";
                    resolve(start_animation(K_1[0]));
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
	done = "animation_6 is done";
}

function animation_7() {
	if(done = "animation_6 is done") {
        K_1[0].style.animation = "blink 2s forwards"
        K_1[0].style.animationDelay = "0.5s";
		return start_animation(K_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_K1[0].style.animation = "blink 2s forwards"
                    c_K1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_K1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_K1_K2[0].style.setProperty('--height_1', '72');
                    line_K1_K2[0].style.setProperty('--height_2', '373');
                    line_K1_K2[0].style.setProperty('--top_1', '301');
                    line_K1_K2[0].style.setProperty('--top_2', '0');
                    line_K1_K2[0].style.animation = "change_height_top_down 2s forwards"
                    line_K1_K2[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_K1_K2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_K2[0].style.animation = "blink 2s forwards"
                    c_K2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_K2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    K_2[0].style.animation = "blink 2s forwards"
                    K_2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(K_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    B_1[0].style.animation = "change_opasity_1 0.3s forwards"
                    B_1[0].style.animationDelay = "6.5s";
                    resolve(start_animation(B_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_B1[0].style.animation = "change_opasity_1 0.3s forwards"
                    c_B1[0].style.animationDelay = "6.5s";
                    resolve(start_animation(c_B1[0]));
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
	done = "animation_7 is done";
}

function animation_8() {
	if(done = "animation_7 is done") {
        B_1[0].style.animation = "blink 2s forwards"
        B_1[0].style.animationDelay = "0.5s";
		return start_animation(B_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_B1[0].style.animation = "blink 2s forwards"
                    c_B1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_B1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_circle[1].style.setProperty('--var_1', '0');
                    green_circle[1].style.setProperty('--var_2', '100');
                    green_circle[1].style.setProperty('--var_3', '0');
                    green_circle[1].style.setProperty('--var_4', '200');
                    green_circle[1].style.setProperty('--var_5', '0');
                    green_circle[1].style.setProperty('--var_6', '0');
                    green_circle[1].style.setProperty('--var_7', '300');
                    green_circle[1].style.setProperty('--var_8', '0');
                    green_circle[1].style.animation = "change_strokeDasharray 2s forwards"
                    green_circle[1].style.animationDelay = "2.5s";
                    resolve(start_animation(green_circle[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[2].style.setProperty('--height_1', '103');
                    vert_line[2].style.setProperty('--height_2', '337');
                    vert_line[2].style.setProperty('--top_1', '235');
                    vert_line[2].style.setProperty('--top_2', '0');
                    vert_line[2].style.animation = "change_height_top_down 2s forwards"
                    vert_line[2].style.animationDelay = "4.5s";
                    resolve(start_animation(vert_line[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_line[1].style.setProperty('--left_1', '494');
                    green_line[1].style.setProperty('--left_2', '235');
                    green_line[1].style.setProperty('--width_1', '35');
                    green_line[1].style.setProperty('--width_2', '297');
                    green_line[1].style.animation = "apper_right_left 2s forwards"
                    green_line[1].style.animationDelay = "6.5s";
                    resolve(start_animation(green_line[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_B1_B2[0].style.setProperty('--height_1', '65');
                    line_B1_B2[0].style.setProperty('--height_2', '322');
                    line_B1_B2[0].style.setProperty('--top_1', '245');
                    line_B1_B2[0].style.setProperty('--top_2', '0');
                    line_B1_B2[0].style.animation = "change_height_top_down 2s forwards"
                    line_B1_B2[0].style.animationDelay = "8.5s";
                    resolve(start_animation(line_B1_B2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    B_2[0].style.animation = "blink 2s forwards"
                    B_2[0].style.animationDelay = "10.5s";
                    resolve(start_animation(B_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    red_el[0].style.animation = "blink 2s forwards"
                    red_el[0].style.animationDelay = "10.5s";
                    resolve(start_animation(red_el[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "12s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "12s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_8 is done";
}



function animation_9() {
	if(done = "animation_8 is done") {
        el_11[0].style.animation = "long_blink 3s forwards"
        el_11[0].style.animationDelay = "0.5s";
		return start_animation(el_11[0]).then(() => {
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
                    c_11[0].style.animation = "long_blink 3s forwards"
                    c_11[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_11[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_11_12[0].style.setProperty('--height_1', '65');
                    line_11_12[0].style.setProperty('--height_2', '434');
                    line_11_12[0].style.setProperty('--top_1', '365');
                    line_11_12[0].style.setProperty('--top_2', '0');
                    line_11_12[0].style.animation = "change_height_top_down 2s forwards"
                    line_11_12[0].style.animationDelay = "3.5s";
                    resolve(start_animation(line_11_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[0].style.animation = "blink 2s forwards"
                    el_12[0].style.animationDelay = "5.5s";
                    resolve(start_animation(el_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[1].style.animation = "blink 2s forwards"
                    el_12[1].style.animationDelay = "5.5s";
                    resolve(start_animation(el_12[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_12[0].style.animation = "blink 2s forwards"
                    c_12[0].style.animationDelay = "5.5s";
                    resolve(start_animation(c_12[0]));
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
	done = "animation_9 is done";
}

function animation_10() {
	if(done = "animation_9 is done") {
        purple_mini_circle[0].style.animation = "blink 1s forwards"
        purple_mini_circle[0].style.animationDelay = "0.5s";
		return start_animation(purple_mini_circle[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[1].style.animation = "blink 1s forwards"
                    purple_mini_circle[1].style.animationDelay = "1.5s";
                    resolve(start_animation(purple_mini_circle[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[2].style.animation = "blink 1s forwards"
                    purple_mini_circle[2].style.animationDelay = "2.5s";
                    resolve(start_animation(purple_mini_circle[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_circle[0].style.setProperty('--var_1', '0');
                    purple_circle[0].style.setProperty('--var_2', '100');
                    purple_circle[0].style.setProperty('--var_3', '0');
                    purple_circle[0].style.setProperty('--var_4', '200');
                    purple_circle[0].style.setProperty('--var_5', '0');
                    purple_circle[0].style.setProperty('--var_6', '0');
                    purple_circle[0].style.setProperty('--var_7', '300');
                    purple_circle[0].style.setProperty('--var_8', '0');
                    purple_circle[0].style.animation = "change_strokeDasharray 1s forwards"
                    purple_circle[0].style.animationDelay = "3.5s";
                    resolve(start_animation(purple_circle[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_line[0].style.setProperty('--left_1', '457');
                    purple_line[0].style.setProperty('--left_2', '235');
                    purple_line[0].style.setProperty('--width_1', '50');
                    purple_line[0].style.setProperty('--width_2', '277');
                    purple_line[0].style.animation = "apper_right_left 1s forwards"
                    purple_line[0].style.animationDelay = "4.5s";
                    resolve(start_animation(purple_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[3].style.animation = "blink 1s forwards"
                    purple_mini_circle[3].style.animationDelay = "5.5s";
                    resolve(start_animation(purple_mini_circle[3]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[3].style.setProperty('--height_1', '107');
                    vert_line[3].style.setProperty('--height_2', '422');
                    vert_line[3].style.setProperty('--top_1', '315');
                    vert_line[3].style.setProperty('--top_2', '0');
                    vert_line[3].style.animation = "change_height_top_down 1s forwards"
                    vert_line[3].style.animationDelay = "6.5s";
                    resolve(start_animation(vert_line[3]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[4].style.animation = "blink 1s forwards"
                    purple_mini_circle[4].style.animationDelay = "7.5s";
                    resolve(start_animation(purple_mini_circle[4]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[4].style.setProperty('--height_1', '117');
                    vert_line[4].style.setProperty('--height_2', '329');
                    vert_line[4].style.setProperty('--top_1', '216');
                    vert_line[4].style.setProperty('--top_2', '0');
                    vert_line[4].style.animation = "change_height_top_down 1s forwards"
                    vert_line[4].style.animationDelay = "8.5s";
                    resolve(start_animation(vert_line[4]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    red_el[1].style.animation = "blink 1s forwards"
                    red_el[1].style.animationDelay = "9.5s";
                    resolve(start_animation(red_el[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_circle[1].style.setProperty('--var_1', '0');
                    purple_circle[1].style.setProperty('--var_2', '100');
                    purple_circle[1].style.setProperty('--var_3', '0');
                    purple_circle[1].style.setProperty('--var_4', '200');
                    purple_circle[1].style.setProperty('--var_5', '0');
                    purple_circle[1].style.setProperty('--var_6', '0');
                    purple_circle[1].style.setProperty('--var_7', '300');
                    purple_circle[1].style.setProperty('--var_8', '0');
                    purple_circle[1].style.animation = "change_strokeDasharray 1s forwards"
                    purple_circle[1].style.animationDelay = "10.5s";
                    resolve(start_animation(purple_circle[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_line[1].style.setProperty('--left_1', '422');
                    purple_line[1].style.setProperty('--left_2', '237');
                    purple_line[1].style.setProperty('--width_1', '67');
                    purple_line[1].style.setProperty('--width_2', '250');
                    purple_line[1].style.animation = "apper_right_left 1s forwards"
                    purple_line[1].style.animationDelay = "11.5s";
                    resolve(start_animation(purple_line[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[5].style.animation = "blink 1s forwards"
                    purple_mini_circle[5].style.animationDelay = "12.5s";
                    resolve(start_animation(purple_mini_circle[5]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[5].style.setProperty('--height_1', '100');
                    vert_line[5].style.setProperty('--height_2', '407');
                    vert_line[5].style.setProperty('--top_1', '305');
                    vert_line[5].style.setProperty('--top_2', '0');
                    vert_line[5].style.animation = "change_height_top_down 1s forwards"
                    vert_line[5].style.animationDelay = "13.5s";
                    resolve(start_animation(vert_line[5]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[6].style.animation = "blink 1s forwards"
                    purple_mini_circle[6].style.animationDelay = "14.5s";
                    resolve(start_animation(purple_mini_circle[6]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[6].style.setProperty('--height_1', '112');
                    vert_line[6].style.setProperty('--height_2', '343');
                    vert_line[6].style.setProperty('--top_1', '235');
                    vert_line[6].style.setProperty('--top_2', '3');
                    vert_line[6].style.animation = "change_height_top_down 1s forwards"
                    vert_line[6].style.animationDelay = "15.5s";
                    resolve(start_animation(vert_line[6]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    red_el[2].style.animation = "blink 1s forwards"
                    red_el[2].style.animationDelay = "16.5s";
                    resolve(start_animation(red_el[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_circle[2].style.setProperty('--var_1', '0');
                    purple_circle[2].style.setProperty('--var_2', '100');
                    purple_circle[2].style.setProperty('--var_3', '0');
                    purple_circle[2].style.setProperty('--var_4', '200');
                    purple_circle[2].style.setProperty('--var_5', '0');
                    purple_circle[2].style.setProperty('--var_6', '0');
                    purple_circle[2].style.setProperty('--var_7', '300');
                    purple_circle[2].style.setProperty('--var_8', '0');
                    purple_circle[2].style.animation = "change_strokeDasharray 1s forwards"
                    purple_circle[2].style.animationDelay = "17.5s";
                    resolve(start_animation(purple_circle[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_line[2].style.setProperty('--left_1', '401');
                    purple_line[2].style.setProperty('--left_2', '235');
                    purple_line[2].style.setProperty('--width_1', '67');
                    purple_line[2].style.setProperty('--width_2', '233');
                    purple_line[2].style.animation = "apper_right_left 1s forwards"
                    purple_line[2].style.animationDelay = "18.5s";
                    resolve(start_animation(purple_line[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[7].style.animation = "blink 1s forwards"
                    purple_mini_circle[7].style.animationDelay = "19.5s";
                    resolve(start_animation(purple_mini_circle[7]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[7].style.setProperty('--height_1', '100');
                    vert_line[7].style.setProperty('--height_2', '397');
                    vert_line[7].style.setProperty('--top_1', '295');
                    vert_line[7].style.setProperty('--top_2', '0');
                    vert_line[7].style.animation = "change_height_top_down 1s forwards"
                    vert_line[7].style.animationDelay = "20.5s";
                    resolve(start_animation(vert_line[7]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_mini_circle[8].style.animation = "blink 1s forwards"
                    purple_mini_circle[8].style.animationDelay = "21.5s";
                    resolve(start_animation(purple_mini_circle[8]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    vert_line[8].style.setProperty('--height_1', '122');
                    vert_line[8].style.setProperty('--height_2', '355');
                    vert_line[8].style.setProperty('--top_1', '236');
                    vert_line[8].style.setProperty('--top_2', '2');
                    vert_line[8].style.animation = "change_height_top_down 1s forwards"
                    vert_line[8].style.animationDelay = "22.5s";
                    resolve(start_animation(vert_line[8]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    red_el[3].style.animation = "blink 1s forwards"
                    red_el[3].style.animationDelay = "23.5s";
                    resolve(start_animation(red_el[3]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "24s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "24s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_10 is done";
}


function animation_11() {
	if(done = "animation_10 is done") {
        red_line[0].style.setProperty('--height_1', '100');
        red_line[0].style.setProperty('--height_2', '580');
        red_line[0].style.animation = "change_height 1s forwards"
        red_line[0].style.animationDelay = "0.5s";
		return start_animation(red_line[0]).then(() => {
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
	done = "animation_11 is done";
}
