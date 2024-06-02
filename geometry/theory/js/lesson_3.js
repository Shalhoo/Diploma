var i = 0;
let click_stop = 0;
let click_begin = 0
let animationPaused = false;
let done = 0;
var line_A2_A = document.getElementsByClassName("line_A2_A")
var line_A2_A_A4 = document.getElementsByClassName("line_A2_A_A4")
var line_A_A3 = document.getElementsByClassName("line_A_A3")
var line_A2_A3 = document.getElementsByClassName("line_A2_A3")
var line_A_A1 = document.getElementsByClassName("line_A_A1")
var skew_line = document.getElementsByClassName("skew_line")
var c_A = document.getElementsByClassName("c_A")
var c_A1 = document.getElementsByClassName("c_A1")
var c_A4 = document.getElementsByClassName("c_A4")
var el_A4 = document.getElementsByClassName("el_A4")
var el_A = document.getElementsByClassName("el_A")
var el_A1 = document.getElementsByClassName("el_A1")
var el_Z = document.getElementsByClassName("el_Z")
var el_Y = document.getElementsByClassName("el_Y")
var el_X = document.getElementsByClassName("el_X")
var el_P1 = document.getElementsByClassName("el_P1")
var el_P4 = document.getElementsByClassName("el_P4")
var el_P3 = document.getElementsByClassName("el_P3")
var el_A3 = document.getElementsByClassName("el_A3")
var c_A3 = document.getElementsByClassName("c_A3")
var red_line = document.getElementsByClassName("red_line")
var coord_Y = document.getElementsByClassName("coord_Y")
var coord_X = document.getElementsByClassName("coord_X")
var skew_rect = document.getElementsByClassName("skew_rect")
var skew_rect_2 = document.getElementsByClassName("skew_rect_2")
var skew_rect_3 = document.getElementsByClassName("skew_rect_3")
var el_30 = document.getElementsByClassName("el_30")
var el_25 = document.getElementsByClassName("el_25")
var el_20 = document.getElementsByClassName("el_20")
var c_30 = document.getElementsByClassName("c_30")
var c_A2 = document.getElementsByClassName("c_A2")
var line_A2_A1 = document.getElementsByClassName("line_A2_A1")
var line_A2_A1_A4 = document.getElementsByClassName("line_A2_A1_A4")
var el_A2 = document.getElementsByClassName("el_A2")
var white_rect = document.getElementsByClassName("white_rect")
var line_x14 = document.getElementsByClassName("line_x14")
var line_A1_A4 = document.getElementsByClassName("line_A1_A4")

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
        line_A_A1[0].style.setProperty('--height_1', '250');
        line_A_A1[0].style.setProperty('--height_2', '160');
        line_A_A1[0].style.animation = "change_height 2s forwards"
        line_A_A1[0].style.animationDelay = "0.5s";
		return start_animation(line_A_A1[0]).then(() => {
			if(!animationPaused) {
                line_A2_A_A4[0].style.setProperty('--width_1', '180');
                line_A2_A_A4[0].style.setProperty('--width_2', '40');
                line_A2_A_A4[0].style.animation = "change_width 4s forwards"
                line_A2_A_A4[0].style.animationDelay = "2s";
				return new Promise((resolve) => {
                    resolve(start_animation(line_A2_A_A4[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Z[2].style.animation = "change_opacity_1 0.5s forwards"
                    el_Z[2].style.animationDelay = "6s";
                    resolve(start_animation(el_Z[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_A[0].style.animation = "change_opacity_1 0.5s forwards"
                    el_A[0].style.animationDelay = "6.5s";
                    resolve(start_animation(el_A[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_A[0].style.animation = "change_opacity_1 0.5s forwards"
                    c_A[0].style.animationDelay = "6.5s";
                    resolve(start_animation(c_A[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Y[0].style.animation = "change_opacity_1 0.5s forwards"
                    el_Y[0].style.animationDelay = "7s";
                    resolve(start_animation(el_Y[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Y[1].style.animation = "change_opacity_1 0.5s forwards"
                    el_Y[1].style.animationDelay = "7.5s";
                    resolve(start_animation(el_Y[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "8s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "8s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_3 is done";
}

function animation_4() {
	if(done = "animation_3 is done") {
        red_line[0].style.animation = "long_blink 3s forwards, change_opacity_1 0.5s forwards"
        red_line[0].style.animationDelay = "0.5s, 3s";
        // coord_Y[0].style.animation = " change_opacity_1 0.1s forwards"
        // coord_Y[0].style.animationDelay = "0s";
        // coord_Y[1].style.animation = " change_opacity_1 0.1s forwards"
        // coord_Y[1].style.animationDelay = "0s";
		return start_animation(red_line[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					skew_rect[0].style.animation = "transform-to-square 2s forwards"
                    skew_rect[0].style.animationDelay = "3.5s";
                    resolve(start_animation(skew_rect[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					skew_rect_2[0].style.animation = "transform-to-square2 2s forwards"
                    skew_rect_2[0].style.animationDelay = "3.5s";
                    resolve(start_animation(skew_rect_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					skew_line[0].style.animation = "change_opacity 0.5s forwards"
                    skew_line[0].style.animationDelay = "5s";
                    resolve(start_animation(skew_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					c_A4[0].style.zIndex = "5"
					c_A4[0].style.setProperty('--left_1', '125');
					c_A4[0].style.setProperty('--left_2', '113');
					c_A4[0].style.setProperty('--top_1', '0');
					c_A4[0].style.setProperty('--top_2', '117');
					c_A4[0].style.setProperty('--left_3', '187');
					c_A4[0].style.setProperty('--top_3', '74');
					c_A4[0].style.animation = "change_left_top 2s forwards, change_left_top1 2.65s forwards"
					c_A4[0].style.animationDelay = "3.5s, 12.5s";
                    resolve(start_animation(c_A4[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_A4[0].style.setProperty('--left_1', '287');
					el_A4[0].style.setProperty('--left_2', '250');
					el_A4[0].style.setProperty('--top_1', '83');
                    el_A4[0].style.setProperty('--top_2', '197');
					el_A4[0].style.setProperty('--left_3', '345');
					el_A4[0].style.setProperty('--top_3', '147');
					el_A4[0].style.animation = "change_left_top 2s forwards, change_left_top1 2.65s forwards"
					el_A4[0].style.animationDelay = "3.5s, 12.5s";
                    resolve(start_animation(el_A4[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					c_A1[0].style.setProperty('--left_1', '130');
					c_A1[0].style.setProperty('--left_2', '81');
					c_A1[0].style.setProperty('--top_1', '0');
					c_A1[0].style.setProperty('--top_2', '72');
					c_A1[0].style.animation = "change_left_top 2s forwards"
					c_A1[0].style.animationDelay = "3.5s";
                    resolve(start_animation(c_A1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_A1[0].style.setProperty('--left_1', '220');
					el_A1[0].style.setProperty('--left_2', '171');
					el_A1[0].style.setProperty('--top_1', '180');
					el_A1[0].style.setProperty('--top_2', '272');
					el_A1[0].style.animation = "change_left_top 2s forwards"
					el_A1[0].style.animationDelay = "3.5s";
                    resolve(start_animation(el_A1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_P1[0].style.setProperty('--left_1', '280');
					el_P1[0].style.setProperty('--left_2', '251');
					el_P1[0].style.setProperty('--top_1', '195');
					el_P1[0].style.setProperty('--top_2', '287');
					el_P1[0].style.animation = "change_left_top 2s forwards"
					el_P1[0].style.animationDelay = "3.5s";
                    resolve(start_animation(el_P1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_Y[2].style.setProperty('--left_1', '190');
					el_Y[2].style.setProperty('--left_2', '168');
					el_Y[2].style.setProperty('--top_1', '175');
					el_Y[2].style.setProperty('--top_2', '205');
					el_Y[2].style.animation = "change_left_top 2s forwards"
					el_Y[2].style.animationDelay = "3.5s";
                    resolve(start_animation(el_Y[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_Z[1].style.setProperty('--left_1', '290');
					el_Z[1].style.setProperty('--left_2', '290');
                    el_Z[1].style.setProperty('--top_1', '125');
					el_Z[1].style.setProperty('--top_2', '185');
                    el_Z[1].style.animation = "change_left_top 1.5s forwards, change_opacity_1 0.2s forwards"
					el_Z[1].style.animationDelay = "3.5s, 5s";
                    resolve(start_animation(el_Z[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_P4[0].style.setProperty('--left_1', '334');
					el_P4[0].style.setProperty('--left_2', '334');
                    el_P4[0].style.setProperty('--top_1', '85');
					el_P4[0].style.setProperty('--top_2', '215');
                    el_P4[0].style.animation = "change_left_top 1.5s forwards, change_opacity_1 0.2s forwards"
					el_P4[0].style.animationDelay = "3.5s, 5s";
                    resolve(start_animation(el_P4[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					coord_Y[0].style.setProperty('--left_1', '360');
					coord_Y[0].style.setProperty('--left_2', '295');
					coord_Y[0].style.setProperty('--top_1', '225');
					coord_Y[0].style.setProperty('--top_2', '295');
					coord_Y[0].style.animation = "change_left_top 2s forwards, change_opacity_1 0.2s forwards"
					coord_Y[0].style.animationDelay = "3.5s, 5s";
                    resolve(start_animation(coord_Y[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					coord_X[1].style.setProperty('--left_1', '365');
					coord_X[1].style.setProperty('--left_2', '335');
                    coord_X[1].style.setProperty('--top_1', '193');
					coord_X[1].style.setProperty('--top_2', '290');
                    coord_X[1].style.animation = "change_left_top 1.5s forwards, long_blink 3s forwards,change_opacity_1 0.1s forwards "
					coord_X[1].style.animationDelay = "3.5s, 5s, 7.5s";
                    resolve(start_animation(coord_X[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					coord_Y[1].style.animation = "change_opacity 0.4s forwards"
					coord_Y[1].style.animationDelay = " 5s";
                    resolve(start_animation(coord_Y[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_P4[1].style.animation = "long_blink 3s forwards"
					el_P4[1].style.animationDelay = "5.5s";
                    resolve(start_animation(el_P4[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					line_x14[0].style.setProperty('--width_1', '480');
					line_x14[0].style.setProperty('--width_2', '620');
					line_x14[0].style.animation = "change_width 3s forwards"
					line_x14[0].style.animationDelay = "8.5s";
                    resolve(start_animation(line_x14[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					coord_X[2].style.animation = "blink 2s forwards"
					coord_X[2].style.animationDelay = "10.5s";
                    resolve(start_animation(coord_X[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					skew_rect_3[0].style.animation = " scale_X 3s forwards"
					skew_rect_3[0].style.animationDelay = "12.5s";
                    resolve(start_animation(skew_rect_3[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
                line_A2_A1_A4[0].style.setProperty('--width_1', '113');
                line_A2_A1_A4[0].style.setProperty('--width_2', '220');
                line_A2_A1_A4[0].style.animation = "change_width 2s forwards"
                line_A2_A1_A4[0].style.animationDelay = "12.5s";
				return new Promise((resolve) => {
                    resolve(start_animation(line_A2_A1_A4[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_P4[2].style.animation = "long_blink 3s forwards"
					el_P4[2].style.animationDelay = "14.5s";
                    resolve(start_animation(el_P4[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_Z[3].style.animation = "change_opacity  0.5s forwards"
					el_Z[3].style.animationDelay = "13.5s";
                    resolve(start_animation(el_Z[3]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "17.5s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "17.5s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_4 is done";
}


function animation_7() {
	if(done = "animation_4 is done") {
        el_30[0].style.animation = "blink 2s forwards"
        el_30[0].style.animationDelay = "0.5s";
		return start_animation(el_30[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					c_30[0].style.animation = "blink 2s forwards"
					c_30[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_30[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					line_A2_A1[0].style.setProperty('--height_1', '130');
					line_A2_A1[0].style.setProperty('--height_2', '320');
					line_A2_A1[0].style.animation = "change_height 2s forwards"
					line_A2_A1[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_A2_A1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					c_30[0].style.opacity = "0"
					c_A2[1].style.setProperty('--top_1', '90');
					c_A2[1].style.setProperty('--top_2', '0');
					c_A2[1].style.animation = "change_top 1s forwards"
					c_A2[1].style.animationDelay = "4.5s";
					resolve(start_animation(c_A2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					c_A1[1].style.setProperty('--top_1', '-100');
					c_A1[1].style.setProperty('--top_2', '0');
					c_A1[1].style.animation = "change_top 2s forwards"
					c_A1[1].style.animationDelay = "4.5s";
					resolve(start_animation(c_A1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_A2[1].style.animation = "blink 2s forwards"
					el_A2[1].style.animationDelay = "6.5s";
                    resolve(start_animation(el_A2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_A1[1].style.animation = "blink 2s forwards"
					el_A1[1].style.animationDelay = "6.5s";
                    resolve(start_animation(el_A1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_25[0].style.animation = "blink 2s forwards, change_opacity_1 0.5s forwards"
					el_25[0].style.animationDelay = "8.5s, 20s";
                    resolve(start_animation(el_25[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_20[0].style.animation = "blink 2s forwards, change_opacity_1 0.5s forwards"
					el_20[0].style.animationDelay = "8.5s, 20s";
                    resolve(start_animation(el_20[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
                line_A1_A4[0].style.setProperty('--width_1', '20');
				line_A1_A4[0].style.setProperty('--width_2', '200');
				line_A1_A4[0].style.animation = "change_width 3s forwards"
				line_A1_A4[0].style.animationDelay = "10.5s";
				return new Promise((resolve) => {
                    resolve(start_animation( line_A1_A4[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_A4[1].style.animation = "blink 2s forwards"
					el_A4[1].style.animationDelay = "13.5s";
                    resolve(start_animation(el_A4[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					c_A4[1].style.animation = "blink 2s forwards"
					c_A4[1].style.animationDelay = "13.5s";
                    resolve(start_animation(c_A4[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					c_A4[1].style.animation = "blink 2s forwards"
					c_A4[1].style.animationDelay = "13.5s";
                    resolve(start_animation(c_A4[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					el_20[1].style.animation = "blink 2s forwards,change_opacity_1 0.5s forwards"
					el_20[1].style.animationDelay = "15.5s, 20s";
                    resolve(start_animation(el_20[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => { 
				white_rect[0].style.setProperty('--height_1', '0');
				white_rect[0].style.setProperty('--height_2', '500');
				white_rect[0].style.animation = "change_height 3s forwards"
				white_rect[0].style.animationDelay = "17.5s";
                    resolve(start_animation(white_rect[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					red_line[1].style.animation = "long_blink 3s forwards"
					red_line[1].style.animationDelay = "21s";
                    resolve(start_animation(red_line[1]));
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
	done = "animation_7 is done";
}