var i = 0;
let click_stop = 0;
let click_begin = 0
let animationPaused = false;
let done = 0;
let circle_2 = document.getElementsByClassName("circle_2")
let blue_line_1 = document.getElementsByClassName("blue_line_1")
let blue_line_2 = document.getElementsByClassName("blue_line_2")
let p_12 = document.getElementsByClassName("p_12")
let c_12 = document.getElementsByClassName("c_12")
let c_A2 = document.getElementsByClassName("c_A2")
let A_2 = document.getElementsByClassName("A2")
let B_2 = document.getElementsByClassName("B2")
let green_lines = document.getElementsByClassName("green_lines")
let c_B2 = document.getElementsByClassName("c_B2")
let green_c = document.getElementsByClassName("green_c")
let C_2 = document.getElementsByClassName("C2")
let orange_line = document.getElementsByClassName("orange_line")
let c_C2 = document.getElementsByClassName("c_C2")
let orange_c = document.getElementsByClassName("orange_c")
let pink_c = document.getElementsByClassName("pink_c")
let pink_p = document.getElementsByClassName("pink_p")
let pink_lines = document.getElementsByClassName("pink_lines")
let purple_c = document.getElementsByClassName("purple_c")
let purple_p = document.getElementsByClassName("purple_p")
let purple_lines = document.getElementsByClassName("purple_lines")
let red_line = document.getElementsByClassName("red_line")
let green = document.getElementsByClassName("green")
let blue = document.getElementsByClassName("blue")




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
         circle_2[0].style.setProperty('--var_1', '500');
         circle_2[0].style.setProperty('--var_2', '0');
         circle_2[0].style.animation = "change_in_a_circle 3s forwards"
         circle_2[0].style.animationDelay = "0.5s";
		return start_animation( circle_2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    blue_line_1[0].style.setProperty('--width_1', '0');
                    blue_line_1[0].style.setProperty('--width_2', '250');
                    blue_line_1[0].style.animation = "change_width 1.5s forwards"
                    blue_line_1[0].style.animationDelay = "3.5s";
                    resolve(start_animation(blue_line_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    blue_line_2[0].style.setProperty('--height_1', '190');
                    blue_line_2[0].style.setProperty('--height_2', '390');
                    blue_line_2[0].style.animation = "change_height 1.5s forwards"
                    blue_line_2[0].style.animationDelay = "5.5s";
                    resolve(start_animation(blue_line_2[0]));
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
	done = "animation_3 is done";
}

function animation_4() {
	if(done = "animation_3 is done") {
         p_12[0].style.animation = "long_blink 3s forwards"
         p_12[0].style.animationDelay = "0.5s";
		return start_animation(p_12[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_12[1].style.animation = "long_blink 3s forwards"
                    p_12[1].style.animationDelay = "0.5s";
                    resolve(start_animation(p_12[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_12[0].style.animation = "long_blink 3s forwards"
                    c_12[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_12[0]));
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
	done = "animation_4 is done";
}


function animation_5() {
	if(done = "animation_4 is done") {
        circle_2[0].style.opacity = "0"
        p_12[0].style.opacity = "0"
        p_12[1].style.opacity = "0"
        c_12[0].style.opacity = "0"
        blue_line_1[0].style.opacity = "0"
        blue_line_2[0].style.opacity = "0"
        play.style.display = 'none',
        start.style.display = 'block';
    }
	done = "animation_5 is done";
}


function animation_10() {
    if (done = "animation_5 is done") {
      A_2[0].style.animation = "blink 2s forwards";
      A_2[0].style.animationDelay = "0.5s";
      return start_animation(A_2[0]).then(() => {
        if (!animationPaused) {
          return new Promise((resolve) => {
            c_A2[0].style.animation = "blink 2s forwards";
            c_A2[0].style.animationDelay = "0.5s";
            resolve(start_animation(c_A2[0]));
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
    done = "animation_10 is done";
  }
  


function animation_11() {
	if(done = "animation_10 is done") {
        green_c[0].style.setProperty('--var_1', '0');
        green_c[0].style.setProperty('--var_2', '100');
        green_c[0].style.setProperty('--var_3', '0');
        green_c[0].style.setProperty('--var_4', '200');
        green_c[0].style.setProperty('--var_5', '0');
        green_c[0].style.setProperty('--var_6', '0');
        green_c[0].style.setProperty('--var_7', '300');
        green_c[0].style.setProperty('--var_8', '0');
        green_c[0].style.animation = " change_strokeDasharray 2s forwards"
        green_c[0].style.animationDelay = "0.5s";
		return start_animation(green_c[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_lines[0].style.setProperty('--height_1', '150');
                    green_lines[0].style.setProperty('--height_2', '350');
                    green_lines[0].style.animation = "change_height 2s forwards"
                    green_lines[0].style.animationDelay = "2.5s";
                    resolve(start_animation(green_lines[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    green_lines[1].style.setProperty('--width_1', '168');
                    green_lines[1].style.setProperty('--width_2', '319');
                    green_lines[1].style.animation = "change_width 2s forwards"
                    green_lines[1].style.animationDelay = "4.5s";
                    resolve(start_animation(green_lines[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_B2[0].style.animation = "blink 2s forwards"
                    c_B2[0].style.animationDelay = "6.5s";
                    resolve(start_animation(c_B2[0]));
				});
			}
        }).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    B_2[0].style.animation = "blink 2s forwards"
                    B_2[0].style.animationDelay = "6.5s";
                    resolve(start_animation(B_2[0]));
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
	done = "animation_11 is done";
}

function animation_12() {
	if(done = "animation_11 is done") {
        orange_c[0].style.setProperty('--var_1', '1430');
        orange_c[0].style.setProperty('--var_2', '300');
        orange_c[0].style.animation = "change_in_a_circle 3s forwards";
        orange_c[0].style.animationDelay = "0.5s";
		return start_animation(orange_c[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    orange_line[0].style.setProperty('--width_1', '160');
                    orange_line[0].style.setProperty('--width_2', '460');
                    orange_line[0].style.animation = "change_width 1.5s forwards"
                    orange_line[0].style.animationDelay = "2s";
                    resolve(start_animation(orange_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_C2[0].style.animation = "blink 2s forwards"
                    c_C2[0].style.animationDelay = "4s";
                    resolve(start_animation(c_C2[0]));
				});
			}
        }).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    C_2[0].style.animation = "blink 2s forwards"
                    C_2[0].style.animationDelay = "4s";
                    resolve(start_animation(C_2[0]));
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
	done = "animation_12 is done";
}

function animation_13() {
	if(done = "animation_12 is done") {
        circle_2[0].style.opacity = "0"
        blue_line_1[0].style.opacity = "0"
         blue_line_2[0].style.opacity = "0"
         p_12[0].style.opacity = "0"
         p_12[1].style.opacity = "0"
         c_12[0].style.opacity = "0"
         c_A2[0].style.opacity = "0"
         A_2[0].style.opacity = "0"
         B_2[0].style.opacity = "0"
         green_lines[0].style.opacity = "0"
         green_lines[1].style.opacity = "0"
         c_B2[0].style.opacity = "0"
         green_c[0].style.opacity = "0"
         C_2[0].style.opacity = "0"
         orange_line[0].style.opacity = "0"
         c_C2[0].style.opacity = "0"
         orange_c[0].style.opacity = "0"
         circle_2[0].style.setProperty('--var_1', '500');
         circle_2[0].style.setProperty('--var_2', '0');
         circle_2[0].style.animation = "change_in_a_circle 3s forwards"
         circle_2[0].style.animationDelay = "0.5s";
		return start_animation( circle_2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    blue_line_1[0].style.setProperty('--width_1', '0');
                    blue_line_1[0].style.setProperty('--width_2', '250');
                    blue_line_1[0].style.animation = "change_width 1.5s forwards"
                    blue_line_1[0].style.animationDelay = "3.5s";
                    resolve(start_animation(blue_line_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    blue_line_2[0].style.setProperty('--height_1', '190');
                    blue_line_2[0].style.setProperty('--height_2', '390');
                    blue_line_2[0].style.animation = "change_height 1.5s forwards"
                    blue_line_2[0].style.animationDelay = "5.5s";
                    resolve(start_animation(blue_line_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_12[0].style.animation = "blink 2s forwards"
                    p_12[0].style.animationDelay = "7s";
                    resolve(start_animation(p_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_12[1].style.animation = "blink 2s forwards"
                    p_12[1].style.animationDelay = "7s";
                    resolve(start_animation(p_12[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_12[0].style.animation = "blink 2s forwards"
                    c_12[0].style.animationDelay = "7s";
                    resolve(start_animation(c_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "8.5s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "8.5s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_13 is done";
}

function animation_14() {
	if(done = "animation_13 is done") {
        circle_2[0].style.opacity = "1"
        blue_line_1[0].style.opacity = "1"
         blue_line_2[0].style.opacity = "1"
         p_12[0].style.opacity = "1"
         p_12[1].style.opacity = "1"
         c_12[0].style.opacity = "1"
         c_A2[0].style.opacity = "1"
         A_2[0].style.opacity = "1"
         B_2[0].style.opacity = "1"
         green_lines[0].style.opacity = "1"
         green_lines[1].style.opacity = "1"
         c_B2[0].style.opacity = "1"
         green_c[0].style.opacity = "1"
         C_2[0].style.opacity = "1"
         orange_line[0].style.opacity = "1"
         c_C2[0].style.opacity = "1"
         orange_c[0].style.opacity = "1"
         pink_c[0].style.setProperty('--var_1', '1430');
         pink_c[0].style.setProperty('--var_2', '600');
         pink_c[0].style.animation = "change_in_a_circle 3s forwards";
         pink_c[0].style.animationDelay = "0.5s";
         return start_animation(pink_c[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    pink_lines[0].style.setProperty('--height_1', '150');
                    pink_lines[0].style.setProperty('--height_2', '390');
                    pink_lines[0].style.animation = "change_height 1s forwards"
                    pink_lines[0].style.animationDelay = "2s";
                    resolve(start_animation(pink_lines[0]));
				});
			}
		}).then(() => {
             if(!animationPaused) {
                 return new Promise((resolve) => {
                     pink_lines[1].style.setProperty('--width_1', '160');
                     pink_lines[1].style.setProperty('--width_2', '460');
                     pink_lines[1].style.animation = "change_width 1s forwards"
                     pink_lines[1].style.animationDelay = "3s";
                     resolve(start_animation(pink_lines[1]));
                 });
             }
         }).then(() => {
             if(!animationPaused) {
                 return new Promise((resolve) => {
                     pink_p[0].style.animation = "blink 1s forwards"
                     pink_p[0].style.animationDelay = "4s";
                     resolve(start_animation(pink_p[0]));
                 });
             }
         }).then(() => {
             if(!animationPaused) {
                 return new Promise((resolve) => {
                    purple_c[0].style.setProperty('--var_1', '0');
                    purple_c[0].style.setProperty('--var_2', '400');
                    purple_c[0].style.setProperty('--var_3', '0');
                    purple_c[0].style.setProperty('--var_4', '400');
                    purple_c[0].style.setProperty('--var_5', '0');
                    purple_c[0].style.setProperty('--var_6', '0');
                    purple_c[0].style.setProperty('--var_7', '800');
                    purple_c[0].style.setProperty('--var_8', '0');
                    purple_c[0].style.animation = " change_strokeDasharray 1s forwards"
                    purple_c[0].style.animationDelay = "5s";
                     resolve(start_animation(purple_c[0]));
                 });
             }
         }).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_lines[0].style.setProperty('--height_1', '150');
                    purple_lines[0].style.setProperty('--height_2', '390');
                    purple_lines[0].style.animation = "change_height 1s forwards"
                    purple_lines[0].style.animationDelay = "6s";
                    resolve(start_animation(purple_lines[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    purple_lines[1].style.setProperty('--height_1', '150');
                    purple_lines[1].style.setProperty('--height_2', '390');
                    purple_lines[1].style.animation = "change_height 1s forwards"
                    purple_lines[1].style.animationDelay = "7s";
                    resolve(start_animation(purple_lines[1]));
				});
			}
		}).then(() => {
             if(!animationPaused) {
                 return new Promise((resolve) => {
                     purple_lines[2].style.setProperty('--width_1', '160');
                     purple_lines[2].style.setProperty('--width_2', '460');
                     purple_lines[2].style.animation = "change_width 1s forwards"
                     purple_lines[2].style.animationDelay = "8s";
                     resolve(start_animation(purple_lines[2]));
                 });
             }
         }).then(() => {
            if(!animationPaused) {
                return new Promise((resolve) => {
                    purple_p[0].style.animation = "blink 1s forwards"
                    purple_p[0].style.animationDelay = "9s";
                    resolve(start_animation(purple_p[0]));
                });
            }
        }).then(() => {
            if(!animationPaused) {
                return new Promise((resolve) => {
                    purple_p[1].style.animation = "blink 1s forwards"
                    purple_p[1].style.animationDelay = "10s";
                    resolve(start_animation(purple_p[1]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "11s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "11s";
						resolve(start_animation(start));
				});
			}
		})
	}
     done = "animation_14 is done";
 }

 function animation_15() {
	if(done = "animation_14 is done") {
        red_line[0].style.setProperty('--width_1', '160');
        red_line[0].style.setProperty('--width_2', '430');
        red_line[0].style.animation = "change_width 2.5s forwards"
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
	done = "animation_15 is done";
}

function animation_16() {
	if(done = "animation_14 is done") {
        red_line[1].style.setProperty('--height_1', '240');
        red_line[1].style.setProperty('--height_2', '262');
        red_line[1].style.animation = "change_height 1s forwards"
        red_line[1].style.animationDelay = "0.5s";
		return start_animation(red_line[1]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					red_line[2].style.setProperty('--width_1', '370');
                    red_line[2].style.setProperty('--width_2', '445');
                    red_line[2].style.animation = "change_width 1.5s forwards"
                    red_line[2].style.animationDelay = "1.5s";
                    resolve(start_animation(red_line[2]));
                });
            }
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "2.5s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "2.5s";
						resolve(start_animation(start));
				});
			}
		})
	}
     done = "animation_16 is done";
 }

 function animation_17() {
	if(done = "animation_16 is done") {
        green[0].style.opacity = "0"
        blue[0].style.opacity = "0"
        green[0].style.setProperty('--height_1', '0');
        green[0].style.setProperty('--height_2', '420');
        green[0].style.animation = "change_heigh_color 3s forwards"
        green[0].style.animationDelay = "0.5s";
		return start_animation(green[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					blue[0].style.setProperty('--width_1', '0');
                    blue[0].style.setProperty('--width_2', '600');
                    blue[0].style.animation = "change_width_color 4s forwards"
                    blue[0].style.animationDelay = "2.5s";
                    resolve(start_animation(blue[0]));
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
     done = "animation_17 is done";
 }
