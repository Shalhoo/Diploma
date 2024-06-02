var line_h2 = (document.getElementsByClassName('line_h2'))
var h2 = (document.getElementsByClassName('h2'))
var line_h1 = (document.getElementsByClassName('line_h1'))
var h1 = (document.getElementsByClassName('h1'))
var vert_lines = (document.getElementsByClassName('vert_lines'))
var vert_el = (document.getElementsByClassName('vert_el'))
var A2_A1 = (document.getElementsByClassName('A2_A1'))
var A1 = (document.getElementsByClassName('A1'))
var B1 = (document.getElementsByClassName('B1'))
var B2 = (document.getElementsByClassName('B2'))
var A2 = (document.getElementsByClassName('A2'))
var B2_B1 = (document.getElementsByClassName('B2_B1'))
var el_1 = (document.getElementsByClassName('el_1'))
var el_2 = (document.getElementsByClassName('el_2'))
var el_3 = (document.getElementsByClassName('el_3'))
var red_line1 = (document.getElementsByClassName('red_line1'))
var red_line2 = (document.getElementsByClassName('red_line2'))
var l1 = (document.getElementsByClassName('l1'))
var l2 = (document.getElementsByClassName('l2'))
var red_circles = (document.getElementsByClassName('red_circles'))
var i = 0;
var done = 0;
let click_stop = 0;
let click_begin = 0
let animationPaused = false;

function start_animation(element, pauseTime = 0) {
    return new Promise((resolve) => {
        resolve(); // Обещание выполнено
        if (!animationPaused) {
            element.style.animationPlayState = 'running';
        }
        if (pauseTime > 0) {
            animation.currentTime = pauseTime; // Установить текущее время анимации
        }
    });
}

function pause_animations() {
    let all_el_for_pause = document.querySelectorAll(index_elem.concat(index_animation))
    for (let i = 0; i < all_el_for_pause.length; i++) {
        all_el_for_pause[i].style.animationPlayState = 'paused';
    }
    all_el_for_pause = document.querySelectorAll(index_elem.concat(index_animation + 1))
    for (let i = 0; i < all_el_for_pause.length; i++) {
        all_el_for_pause[i].style.animationPlayState = 'paused';
    }
}

function animation_4() {
    if (done == 0) {
        line_h2[0].style.opacity = 0;
        vert_lines[0].style.opacity = 0;
        h2[0].style.opacity = 0;
        h2[1].style.opacity = 0;
        h1[0].style.opacity = 0;
        h1[1].style.opacity = 0;
        line_h1[0].style.opacity = 0;
        line_h2[0].style.setProperty('--width_1', '100');
        line_h2[0].style.setProperty('--width_2', '450');
        line_h2[0].style.animation = "change_width 1.8s forwards"
        line_h2[0].style.animationDelay = "0.5s";
        return start_animation(line_h2[0]).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    h2[0].style.animation = "blink 2s forwards"
                    h2[0].style.animationDelay = "2.3s";
                    resolve(start_animation(h2[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    h2[1].style.animation = "blink 2s forwards"
                    h2[1].style.animationDelay = "2.3s";
                    resolve(start_animation(h2[1]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    h2[0].style.animation = "blink 2s forwards"
                    h2[0].style.animationDelay = "2.3s";
                    resolve(start_animation(h2[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_lines[0].style.setProperty('--height_1', '80');
                    vert_lines[0].style.setProperty('--height_2', '290');
                    vert_lines[0].style.animation = "change_height 1.8s forwards"
                    vert_lines[0].style.animationDelay = "4.6s";
                    resolve(start_animation(vert_lines[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    line_h1[0].style.setProperty('--width_1', '100');
                    line_h1[0].style.setProperty('--width_2', '450');
                    line_h1[0].style.animation = "change_width 1.8s forwards"
                    line_h1[0].style.animationDelay = "6.4s";
                    resolve(start_animation(line_h1[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    h1[1].style.animation = "blink 2s forwards"
                    h1[1].style.animationDelay = "8.2s";
                    resolve(start_animation(h1[1]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    h1[0].style.animation = "blink 2s forwards"
                    h1[0].style.animationDelay = "8.2s";
                    resolve(start_animation(h1[0]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "10.5s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "10.5s";
						resolve(start_animation(start));
				});
			}
		})
	}
    done = "animation_4 is done";
}

function animation_5() {
    if (done = "animation_4 is done") {
        A2_A1[0].style.opacity = 0;
        A1[0].style.opacity = 0;
        A2_A1[0].style.setProperty('--height_1', '80');
        A2_A1[0].style.setProperty('--height_2', '290');
        A2_A1[0].style.animation = "change_height 1.8s forwards"
        A2_A1[0].style.animationDelay = "0.5s";
        return start_animation(A2_A1[0]).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    A1[0].style.animation = "blink 2s forwards"
                    A1[0].style.animationDelay = "2.3s";
                    resolve(start_animation(A1[0]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "4.6s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "4.6s";
						resolve(start_animation(start));
				});
			}
		})
	}
    done = "animation_5 is done";
}

function animation_6() {
    if (done = "animation_5 is done") {
        el_1[0].style.opacity = 0;
        el_1[1].style.opacity = 0;
        el_1[2].style.opacity = 0;
        el_2[0].style.opacity = 0;
        el_2[1].style.opacity = 0;
        el_2[2].style.opacity = 0;
        el_3[0].style.opacity = 0;
        el_3[1].style.opacity = 0;
        el_3[2].style.opacity = 0;
        el_1[0].style.setProperty('--width_1', '180');
        el_1[0].style.setProperty('--width_2', '350');
        el_1[0].style.animation = "change_width 1s forwards"
        el_1[0].style.animationDelay = "0.5s";
        return start_animation(el_1[0]).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_1[1].style.setProperty('--height_1', '80');
                    el_1[1].style.setProperty('--height_2', '290');
                    el_1[1].style.animation = "change_height 2.5s forwards"
                    el_1[1].style.animationDelay = "1.2s";
                    resolve(start_animation(el_1[1]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_1[2].style.setProperty('--width_1', '100');
                    el_1[2].style.setProperty('--width_2', '450');
                    el_1[2].style.animation = "change_width 1s forwards"
                    el_1[2].style.animationDelay = "2.7s";
                    resolve(start_animation(el_1[2]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_2[0].style.setProperty('--width_1', '180');
                    el_2[0].style.setProperty('--width_2', '370');
                    el_2[0].style.animation = "change_width 1s forwards"
                    el_2[0].style.animationDelay = "4.3s";
                    resolve(start_animation(el_2[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_2[1].style.setProperty('--height_1', '80');
                    el_2[1].style.setProperty('--height_2', '290');
                    el_2[1].style.animation = "change_height 1.2s forwards"
                    el_2[1].style.animationDelay = "5.6s";
                    resolve(start_animation(el_2[1]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_2[2].style.setProperty('--width_1', '100');
                    el_2[2].style.setProperty('--width_2', '450');
                    el_2[2].style.animation = "change_width 1.7s forwards"
                    el_2[2].style.animationDelay = "6.5s";
                    resolve(start_animation(el_2[2]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_3[0].style.setProperty('--width_1', '100');
                    el_3[0].style.setProperty('--width_2', '470');
                    el_3[0].style.animation = "change_width 1s forwards"
                    el_3[0].style.animationDelay = "8.1s";
                    resolve(start_animation(el_3[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_3[1].style.setProperty('--height_1', '80');
                    el_3[1].style.setProperty('--height_2', '390');
                    el_3[1].style.animation = "change_height 1.2s forwards"
                    el_3[1].style.animationDelay = "9.4s";
                    resolve(start_animation(el_3[1]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    el_3[2].style.setProperty('--width_1', '100');
                    el_3[2].style.setProperty('--width_2', '480');
                    el_3[2].style.animation = "change_width 1.7s forwards"
                    el_3[2].style.animationDelay = "10.5s";
                    resolve(start_animation(el_2[2]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "12.4s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "12.4s";
						resolve(start_animation(start));
				});
			}
		})
	}
    done = "animation_6 is done";
}

function animation_8() {
    if (done = "animation_6 is done") {
        red_line1[0].style.opacity = 0;
        l1[0].style.opacity = 0;
        l1[1].style.opacity = 0;
        red_circles[0].style.opacity = 0;
        red_circles[1].style.opacity = 0;
        red_circles[2].style.opacity = 0;
        red_circles[3].style.opacity = 0;
        red_circles[4].style.opacity = 0;
        red_circles[5].style.opacity = 0;
        red_line1[0].style.setProperty('--height_1', '170');
        red_line1[0].style.setProperty('--height_2', '450');
        red_line1[0].style.animation = "change_height 1.8s forwards"
        red_line1[0].style.animationDelay = "0.5s";
        return start_animation(red_line1[0]).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    l1[0].style.animation = "blink 2s forwards"
                    l1[0].style.animationDelay = "2.3s";
                    resolve(start_animation(l1[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    l1[1].style.animation = "blink 2s forwards"
                    l1[1].style.animationDelay = "2.3s";
                    resolve(start_animation(l1[1]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[0].style.animation = "blink 1s forwards"
                    red_circles[0].style.animationDelay = "4.8s";
                    resolve(start_animation(red_circles[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[1].style.animation = "blink 1s forwards"
                    red_circles[1].style.animationDelay = "5.8s";
                    resolve(start_animation(red_circles[1]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[2].style.animation = "blink 1s forwards"
                    red_circles[2].style.animationDelay = "6.8s";
                    resolve(start_animation(red_circles[2]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[3].style.animation = "blink 1s forwards"
                    red_circles[3].style.animationDelay = "7.8s";
                    resolve(start_animation(red_circles[3]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[4].style.animation = "blink 1s forwards"
                    red_circles[4].style.animationDelay = "8.8s";
                    resolve(start_animation(red_circles[4]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[5].style.animation = "blink 1s forwards"
                    red_circles[5].style.animationDelay = "9.8s";
                    resolve(start_animation(red_circles[5]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "10.8s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "10.8s";
						resolve(start_animation(start));
				});
			}
		})
	}
    done = "animation_8 is done";
}

function animation_9() {
    if (done = "animation_8 is done") {
        vert_el[0].style.opacity = 0;
        vert_el[1].style.opacity = 0;
        vert_el[2].style.opacity = 0;
        vert_el[3].style.opacity = 0;
        vert_el[4].style.opacity = 0;
        vert_el[5].style.opacity = 0;
        vert_el[6].style.opacity = 0;
        vert_el[7].style.opacity = 0;
        vert_el[8].style.opacity = 0;
        vert_el[9].style.opacity = 0;
        vert_el[10].style.opacity = 0;
        red_circles[6].style.opacity = 0;
        red_circles[7].style.opacity = 0;
        red_circles[8].style.opacity = 0;
        red_circles[9].style.opacity = 0;
        red_circles[10].style.opacity = 0;
        red_circles[11].style.opacity = 0;
        red_line2[0].style.opacity = 0;
        l2[0].style.opacity = 0;
        l2[1].style.opacity = 0;
        vert_el[0].style.setProperty('--height_1', '170');
        vert_el[0].style.setProperty('--height_2', '192');
        vert_el[0].style.setProperty('--top_1', '50');
        vert_el[0].style.setProperty('--top_2', '30');
        vert_el[0].style.animation = "change_height_top_down 0.5s forwards"
        vert_el[0].style.animationDelay = "0.5s";
        return start_animation(vert_el[0]).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[6].style.animation = "blink 1s forwards"
                    red_circles[6].style.animationDelay = "1.3s";
                    resolve(start_animation(red_circles[6]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[1].style.setProperty('--height_1', '188');
                    vert_el[1].style.setProperty('--height_2', '208');
                    vert_el[1].style.setProperty('--top_1', '43');
                    vert_el[1].style.setProperty('--top_2', '27');
                    vert_el[1].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[1].style.animationDelay = "2.6s";
                    resolve(start_animation(vert_el[1]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[2].style.setProperty('--height_1', '134');
                    vert_el[2].style.setProperty('--height_2', '154');
                    vert_el[2].style.setProperty('--top_1', '43');
                    vert_el[2].style.setProperty('--top_2', '27');
                    vert_el[2].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[2].style.animationDelay = "3.3s";
                    resolve(start_animation(vert_el[2]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[7].style.animation = "blink 1s forwards"
                    red_circles[7].style.animationDelay = "4s";
                    resolve(start_animation(red_circles[7]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[3].style.setProperty('--height_1', '213');
                    vert_el[3].style.setProperty('--height_2', '233');
                    vert_el[3].style.setProperty('--top_1', '43');
                    vert_el[3].style.setProperty('--top_2', '27');
                    vert_el[3].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[3].style.animationDelay = "5.6s";
                    resolve(start_animation(vert_el[3]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[4].style.setProperty('--height_1', '102');
                    vert_el[4].style.setProperty('--height_2', '122');
                    vert_el[4].style.setProperty('--top_1', '43');
                    vert_el[4].style.setProperty('--top_2', '27');
                    vert_el[4].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[4].style.animationDelay = "6.3s";
                    resolve(start_animation(vert_el[4]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[8].style.animation = "blink 1s forwards"
                    red_circles[8].style.animationDelay = "7s";
                    resolve(start_animation(red_circles[8]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[5].style.setProperty('--height_1', '248');
                    vert_el[5].style.setProperty('--height_2', '268');
                    vert_el[5].style.setProperty('--top_1', '43');
                    vert_el[5].style.setProperty('--top_2', '27');
                    vert_el[5].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[5].style.animationDelay = "8.4s";
                    resolve(start_animation(vert_el[5]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[6].style.setProperty('--height_1', '82');
                    vert_el[6].style.setProperty('--height_2', '102');
                    vert_el[6].style.setProperty('--top_1', '43');
                    vert_el[6].style.setProperty('--top_2', '27');
                    vert_el[6].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[6].style.animationDelay = "9.1s";
                    resolve(start_animation(vert_el[6]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[9].style.animation = "blink 1s forwards"
                    red_circles[9].style.animationDelay = "9.8s";
                    resolve(start_animation(red_circles[9]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[7].style.setProperty('--height_1', '292');
                    vert_el[7].style.setProperty('--height_2', '318');
                    vert_el[7].style.setProperty('--top_1', '53');
                    vert_el[7].style.setProperty('--top_2', '27');
                    vert_el[7].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[7].style.animationDelay = "11.2s";
                    resolve(start_animation(vert_el[7]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[8].style.setProperty('--height_1', '62');
                    vert_el[8].style.setProperty('--height_2', '92');
                    vert_el[8].style.setProperty('--top_1', '53');
                    vert_el[8].style.setProperty('--top_2', '27');
                    vert_el[8].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[8].style.animationDelay = "11.9s";
                    resolve(start_animation(vert_el[8]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[10].style.animation = "blink 1s forwards"
                    red_circles[10].style.animationDelay = "12.6s";
                    resolve(start_animation(red_circles[10]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[9].style.setProperty('--height_1', '326');
                    vert_el[9].style.setProperty('--height_2', '354');
                    vert_el[9].style.setProperty('--top_1', '50');
                    vert_el[9].style.setProperty('--top_2', '27');
                    vert_el[9].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[9].style.animationDelay = "14s";
                    resolve(start_animation(vert_el[9]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    vert_el[10].style.setProperty('--height_1', '52');
                    vert_el[10].style.setProperty('--height_2', '83');
                    vert_el[10].style.setProperty('--top_1', '53');
                    vert_el[10].style.setProperty('--top_2', '27');
                    vert_el[10].style.animation = "change_height_top_down 0.5s forwards"
                    vert_el[10].style.animationDelay = "14.7s";
                    resolve(start_animation(vert_el[10]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_circles[11].style.animation = "blink 1s forwards"
                    red_circles[11].style.animationDelay = "15.4s";
                    resolve(start_animation(red_circles[11]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    red_line2[0].style.setProperty('--height_1', '50');
                    red_line2[0].style.setProperty('--height_2', '170');
                    red_line2[0].style.animation = "change_height 1.6s forwards"
                    red_line2[0].style.animationDelay = "17s";
                    resolve(start_animation(red_line2[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    l2[0].style.animation = "blink 2s forwards"
                    l2[0].style.animationDelay = "19s";
                    resolve(start_animation(l2[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    l2[1].style.animation = "blink 2s forwards"
                    l2[1].style.animationDelay = "19s";
                    resolve(start_animation(l2[1]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "21.3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "21.3s";
						resolve(start_animation(start));
				});
			}
		})
	}
    done = "animation_9 is done";
}

function animation_10() {
    if (done = "animation_9 is done") {
        B1[0].style.opacity = 0;
        B2[0].style.opacity = 0;
        B2_B1[0].style.opacity = 0;
        B1[0].style.animation = "blink 2s forwards"
        B1[0].style.animationDelay = "0.5s";
        return start_animation(B1[0]).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    B2_B1[0].style.setProperty('--height_1', '107');
                    B2_B1[0].style.setProperty('--height_2', '227');
                    B2_B1[0].style.setProperty('--top_1', '146');
                    B2_B1[0].style.setProperty('--top_2', '28');
                    B2_B1[0].style.animation = "change_height_top_down 1.3s forwards"
                    B2_B1[0].style.animationDelay = "2.7s";
                    resolve(start_animation(B2_B1[0]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    B2[0].style.animation = "blink 2s forwards"
                    B2[0].style.animationDelay = "4.4s";
                    resolve(start_animation(B2[0]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "6.9s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "6.9s";
						resolve(start_animation(start));
				});
			}
		})
	}
    done = "animation_10 is done";
}

function animation_11() {
    if (done = "animation_10 is done") {
        A1[0].style.animation = "blink 2s forwards"
        A1[0].style.animationDelay = "0.5s";
        return start_animation(A1[0]).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    A2[0].style.animation = "blink 2s forwards"
                    A2[0].style.animationDelay = "0.5s";
                    resolve(start_animation(A2[0]))
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    B1[0].style.animation = "blink 2s forwards"
                    B1[0].style.animationDelay = "2.7s";
                    resolve(start_animation(B1[0]));
                });
            }
        }).then(() => {
            if (!animationPaused) {
                return new Promise((resolve) => {
                    B2[0].style.animation = "blink 2s forwards"
                    B2[0].style.animationDelay = "2.7s";
                    resolve(start_animation(B2[0]));
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
    done = "animation_11 is done";
}