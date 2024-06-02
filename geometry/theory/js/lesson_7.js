var line_h1 = (document.getElementsByClassName('line_h1'))
var line_h2 = (document.getElementsByClassName('line_h2'))
var h1 = (document.getElementsByClassName('h1'))
var h2 = (document.getElementsByClassName('h2'))
var line_f1 = (document.getElementsByClassName('line_f1'))
var line_f2 = (document.getElementsByClassName('line_f2'))
var f1 = (document.getElementsByClassName('f1'))
var f2 = (document.getElementsByClassName('f2'))
var h1_f1 = (document.getElementsByClassName('h1_f1'))
var l1_d1 = (document.getElementsByClassName('l1_d1'))
var l1 = (document.getElementsByClassName('l_1'))
var d1 = (document.getElementsByClassName('d1'))
var l2 = (document.getElementsByClassName('l_2'))
var d2 = (document.getElementsByClassName('d2'))
var l1_l2 = (document.getElementsByClassName('l1_l2'))
var d1_d2 = (document.getElementsByClassName('d1_d2'))
var l2_d2 = (document.getElementsByClassName('l2_d2'))
var circle_p1 = (document.getElementsByClassName('P1'))
var circle_p2 = (document.getElementsByClassName('P2'))
var P1_P2 = (document.getElementsByClassName('P1_P2'))
var m2 = (document.getElementsByClassName('m2'))
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
    line_h1[0].style.opacity = 0;
    line_h2[0].style.opacity = 0;
    h1[0].style.opacity = 0;
    h2[0].style.opacity = 0;
    line_h1[0].style.setProperty('--height_1', '250');
    line_h1[0].style.setProperty('--height_2', '450');
    line_h1[0].style.animation = "change_height 2.5s forwards"
    line_h1[0].style.animationDelay = "0.5s";
            return start_animation(line_h1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
    line_h2[0].style.setProperty('--width_1', "10");
    line_h2[0].style.setProperty('--width_2', '350');
    line_h2[0].style.animation = "change_width 2.5s forwards"
    line_h2[0].style.animationDelay = "0.5s";
					    resolve(start_animation(line_h2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            h1[0].style.animation = "blink 2s forwards"
            h1[0].style.animationDelay = "2.2s";
            resolve(start_animation(h1[0]));
                    });
                }
				}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            h2[0].style.animation = "blink 2s forwards"
            h2[0].style.animationDelay = "2.2s";
            resolve(start_animation(h2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "4.2s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "4.2s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_3 is done";
}


function animation_4() {
  line_f1[0].style.opacity = 0;
  line_f2[0].style.opacity = 0;
  f1[0].style.opacity = 0;
  f2[0].style.opacity = 0;
	if(done = "animation_3 is done") {
    line_f2[0].style.setProperty('--height_1', '50');
    line_f2[0].style.setProperty('--height_2', '250');
    line_f2[0].style.animation = "change_height 2.5s forwards"
    line_f2[0].style.animationDelay = "0.5s";
            return start_animation(line_f1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            line_f1[0].style.setProperty('--width_1', "10");
            line_f1[0].style.setProperty('--width_2', '350');
            line_f1[0].style.animation = "change_width 2.5s forwards"
            line_f1[0].style.animationDelay = "0.5s";
					    resolve(start_animation(line_f2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            f1[0].style.animation = "blink 2s forwards"
            f1[0].style.animationDelay = "2.2s";
            resolve(start_animation(f1[0]));
                    });
                }
				}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            f2[0].style.animation = "blink 2s forwards"
            f2[0].style.animationDelay = "2.2s";
            resolve(start_animation(f2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "4.2s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "4.2s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_4 is done";
}


function animation_5() {
  h1_f1[0].style.opacity = 0;
	if(done = "animation_4 is done") {
    h1_f1[0].style.setProperty('--width_1', '70');
    h1_f1[0].style.setProperty('--width_2', '350');
    h1_f1[0].style.animation = "change_width 2.5s forwards"
    h1_f1[0].style.animationDelay = "0.5s";
            return start_animation(line_f1[0]).then(() => {
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
							play.style.animation = "change_display_1 0.1s forwards"
							play.style.animationDelay = "2.1s";
							resolve(start_animation(play));
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
							start.style.animation = "change_display 0.1s forwards"
							start.style.animationDelay = "2.1s";
							resolve(start_animation(start));
					});
				}
			})
		}
	done = "animation_5 is done";
}

function animation_8() {
	if(done = "animation_5 is done") {
    l1_d1[0].style.opacity = 0;
    l1[0].style.opacity = 0;
    l1[1].style.opacity = 0;
    d1[0].style.opacity = 0;
    d1[1].style.opacity = 0;
    l2_d2[0].style.opacity = 0;
    d2[0].style.opacity = 0;
    d2[1].style.opacity = 0;
    l2[1].style.opacity = 0;
    l2[0].style.opacity = 0;
    d1_d2[0].style.opacity = 0;
    l1_l2[0].style.opacity = 0;
    l1_d1[0].style.setProperty('--width_1', '80');
    l1_d1[0].style.setProperty('--width_2', '200');
    l1_d1[0].style.animation = "change_width 1.5s forwards"
    l1_d1[0].style.animationDelay = "0.5s";
            return start_animation(l1_d1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            l1[0].style.animation = "blink 2s forwards"
            l1[0].style.animationDelay = "2.2s";
            resolve(start_animation(l1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            l1[1].style.animation = "blink 2s forwards"
            l1[1].style.animationDelay = "2.2s";
            resolve(start_animation(l1[1]));
                    });
                }
				}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            d1[0].style.animation = "blink 2s forwards"
            d1[0].style.animationDelay = "2.2s";
            resolve(start_animation(d1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            d1[1].style.animation = "blink 2s forwards"
            d1[1].style.animationDelay = "2.2s";
            resolve(start_animation(d1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            l1_l2[0].style.setProperty('--height_1', '32');
            l1_l2[0].style.setProperty('--height_2', '365');
            l1_l2[0].style.setProperty('--top_1', '332');
            l1_l2[0].style.setProperty('--top_2', '0');
            l1_l2[0].style.animation = "change_height_top_down 1.5s forwards"
            l1_l2[0].style.animationDelay = "4.5s";
            resolve(start_animation(l1_l2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            d1_d2[0].style.setProperty('--height_1', '169');
            d1_d2[0].style.setProperty('--height_2', '280');
            d1_d2[0].style.setProperty('--top_1', '109');
            d1_d2[0].style.setProperty('--top_2', '0');
            d1_d2[0].style.animation = "change_height_top_down 1.5s forwards"
            d1_d2[0].style.animationDelay = "4.5s";
            resolve(start_animation(d1_d2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            l2[0].style.animation = "blink 2s forwards"
            l2[0].style.animationDelay = "6.3s";
            resolve(start_animation(l2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            l2[1].style.animation = "blink 2s forwards"
            l2[1].style.animationDelay = "6.3s";
            resolve(start_animation(l2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            d2[0].style.animation = "blink 2s forwards"
            d2[0].style.animationDelay = "6.3s";
            resolve(start_animation(d2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            d2[1].style.animation = "blink 2s forwards"
            d2[1].style.animationDelay = "6.3s";
            resolve(start_animation(d2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            l2_d2[0].style.setProperty('--height_1', '100');
            l2_d2[0].style.setProperty('--height_2', '250');
            l2_d2[0].style.animation = "change_height 1.5s forwards"
            l2_d2[0].style.animationDelay = "8.6s";
            resolve(start_animation(l2_d2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "10.2s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "10.2s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_8 is done";
}


function animation_9() {
  circle_p1[0].style.opacity = 0;
  P1_P2[0].style.opacity = 0;
  circle_p2[0].style.opacity = 0;
	if(done = "animation_8 is done") {
    circle_p1[0].style.animation = "blink 2s forwards"
    circle_p1[0].style.animationDelay = "0.5s";
            return start_animation(circle_p1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          P1_P2[0].style.setProperty('--height_1', '137');
          P1_P2[0].style.setProperty('--height_2', '312');
          P1_P2[0].style.setProperty('--top_1', '178');
          P1_P2[0].style.setProperty('--top_2', '0');
            P1_P2[0].style.animation = "change_height_top_down 1.5s forwards"
            P1_P2[0].style.animationDelay = "2.1s";
					    resolve(start_animation(P1_P2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
            circle_p2[0].style.animation = "blink 2s forwards"
            circle_p2[0].style.animationDelay = "3.6s";
            resolve(start_animation(circle_p2[0]));
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
	done = "animation_9 is done";
}


function animation_10() {
  m2[0].style.opacity = 0;
  m2[1].style.opacity = 0;
	if(done = "animation_9 is done") {
    m2[0].style.setProperty('--height_1', '70');
    m2[0].style.setProperty('--height_2', '350');
      m2[0].style.animation = "change_height 2.5s forwards"
      m2[0].style.animationDelay = "0.5s";
            return start_animation(m2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
          m2[1].style.animation = "blink 2s forwards"
          m2[1].style.animationDelay = "1.9s";
          m2[1].style.animationDelay = "1.9s";
					    resolve(start_animation(m2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "4.3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "4.3s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_10 is done";
}
