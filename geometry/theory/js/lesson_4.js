var blue_1 = (document.getElementsByClassName('blue_1'))
var blue_2 = (document.getElementsByClassName('blue_2'))
var point_1_2 = (document.getElementsByClassName('point_1_2'))
var point_3_1 = (document.getElementsByClassName('point_3_1'))
var green_number = (document.getElementsByClassName('green_number'))
var line_12_22 = (document.getElementsByClassName('line_12_22'))
var bracket = (document.getElementsByClassName('bracket'))
var red_line = (document.getElementsByClassName('red_line'))
var p_31 = (document.getElementsByClassName('p_31'))
var p_41 = (document.getElementsByClassName('p_41'))
var p_42 = (document.getElementsByClassName('p_42'))
var p_32 = (document.getElementsByClassName('p_32'))
var line_41_32 = (document.getElementsByClassName('line_41_32'))
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



function animation_3() {
	if(done == 0) {
                        blue_1[0].style.setProperty('--width_1', '0');
                        blue_1[0].style.setProperty('--width_2', '350');
                        blue_1[0].style.setProperty('--left_1', '176');
                        blue_1[0].style.setProperty('--left_2', '210');
                        blue_1[0].style.animation = "apper_right_left 1.8s forwards"
                        blue_1[0].style.animationDelay = "0.5s";
            return start_animation(blue_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        blue_1[1].style.setProperty('--width_1', '0');
                        blue_1[1].style.setProperty('--width_2', '350');
                        blue_1[1].style.setProperty('--left_1', '176');
                        blue_1[1].style.setProperty('--left_2', '210');
                        blue_1[1].style.animation = "apper_right_left 1.8s forwards"
                        blue_1[1].style.animationDelay = "0.5s";
					    resolve(start_animation(blue_1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        blue_2[0].style.setProperty('--width_1', '0');
                        blue_2[0].style.setProperty('--width_2', '350');
                        blue_2[0].style.setProperty('--left_1', '176');
                        blue_2[0].style.setProperty('--left_2', '210');
                        blue_2[0].style.animation = "apper_right_left 2.1s forwards"
                        blue_2[0].style.animationDelay = "1.5s";
					    resolve(start_animation(blue_2[0]));
                    });
                }
				}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        blue_2[1].style.setProperty('--width_1', '0');
                        blue_2[1].style.setProperty('--width_2', '350');
                        blue_2[1].style.setProperty('--left_1', '176');
                        blue_2[1].style.setProperty('--left_2', '210');
                        blue_2[1].style.animation = "apper_right_left 2.1s forwards"
                        blue_2[1].style.animationDelay = "1.5s";
					    resolve(start_animation(blue_2[1]));
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
        point_1_2[0].style.animation = "blink 2s forwards"
		return start_animation(point_1_2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_number[0].style.animation = "blink 2s forwards"
					green_number[0].style.animationDelay = "2s";
                    resolve(start_animation(green_number[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        line_12_22[0].style.setProperty('--height_1', '120');
                        line_12_22[0].style.setProperty('--height_2', '420');
                        line_12_22[0].style.animation = "change_height 1.5s forwards"
                        line_12_22[0].style.animationDelay = "4s";
                        resolve(start_animation(line_12_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_number[1].style.animation = "blink 2s forwards"
					green_number[1].style.animationDelay = "5.5s";
		            resolve(start_animation(green_number[1]))
                    });
                }
        }).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_number[2].style.animation = "blink 2s forwards"
					green_number[2].style.animationDelay = "7.5s";
		            resolve(start_animation(green_number[2]))
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "9.5s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "9.5s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_4 is done";
}


function animation_5() {
	if(done = "animation_4 is done") {
        point_1_2[0].style.animation = "blink 2s forwards"
		return start_animation(point_1_2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_number[0].style.animation = "blink 2s forwards"
                    resolve(start_animation(green_number[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    bracket[0].style.animation = "blink 2s forwards"
                    resolve(start_animation(bracket[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_number[2].style.animation = "blink 2s forwards"
                    resolve(start_animation(green_number[2]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        red_line[0].style.setProperty('--width_1', '0');
                        red_line[0].style.setProperty('--width_2', '350');
                        red_line[0].style.setProperty('--left_1', '176');
                        red_line[0].style.setProperty('--left_2', '210');
                        red_line[0].style.animation = "apper_right_left 3.8s forwards"
                        red_line[0].style.animationDelay = "1s";
                        resolve(start_animation(red_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "3.3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "3.3s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_5 is done";
}


function animation_6() {
	if(done = "animation_5 is done") {
        p_41[0].style.animation = "blink 2s forwards"
        point_3_1[0].style.opacity = "0";
		return start_animation(p_41[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_41_32[0].style.setProperty('--height_1', '0');
                    line_41_32[0].style.setProperty('--height_2', '332');
                    line_41_32[0].style.setProperty('--top_1', '-52');
                    line_41_32[0].style.setProperty('--top_2', '-20');
                    line_41_32[0].style.animation = "change_height_top_down 2s forwards"
                    line_41_32[0].style.animationDelay = "2s";
                    resolve(start_animation( line_41_32[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_32[0].style.animation = "blink 2s forwards"
                    p_32[0].style.animationDelay = "4s";
                    resolve(start_animation(p_32[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_32[0].style.animation = "blink 2s forwards"
                    p_32[0].style.animationDelay = "5s";
                    resolve(start_animation( p_32[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_42[0].style.animation = "blink 2s forwards"
                    p_42[0].style.animationDelay = "7s";
                    resolve(start_animation(p_42[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "8.6s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "8.6s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_6 is done";
}

function animation_7() {
	if(done = "animation_6 is done") {
        point_3_1[0].style.opacity = "0";
        p_32[0].style.animation = "blink 2s forwards"
		return start_animation(p_41[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_41[0].style.animation = "blink 2s forwards"
                    p_41[0].style.animationDelay = "2s";
                    resolve(start_animation(p_41[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    bracket[1].style.animation = "blink 2s forwards"
                    bracket[1].style.animationDelay = "2s";
                    resolve(start_animation(bracket[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                        red_line[1].style.setProperty('--width_1', '0');
                        red_line[1].style.setProperty('--width_2', '350');
                        red_line[1].style.setProperty('--left_1', '176');
                        red_line[1].style.setProperty('--left_2', '210');
                        red_line[1].style.animation = "apper_right_left 3.8s forwards"
                        red_line[1].style.animationDelay = "4s";
                        resolve(start_animation(red_line[1]));
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
	done = "animation_7 is done";
}