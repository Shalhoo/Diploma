var f_1 = document.getElementsByClassName("f_1")
var f_2 = document.getElementsByClassName("f_2")
var h_1 = document.getElementsByClassName("h_1")
var h_2 = document.getElementsByClassName("h_2")
var K1_f1 = document.getElementsByClassName("K1_f1")
var K1_h1 = document.getElementsByClassName("K1_h1")
var K2_f2 = document.getElementsByClassName("K2_f2")
var K2_h2 = document.getElementsByClassName("K2_h2")
var wave_1 = document.getElementsByClassName("wave_1")
var wave_2 = document.getElementsByClassName("wave_2")
var line_l2 = document.getElementsByClassName("line_l2")
var p_12 = document.getElementsByClassName("p_12")
var l2 = document.getElementsByClassName("l2")
var sum_2 = document.getElementsByClassName("sum_2")
var el_12 = document.getElementsByClassName("12")
var c_M1 = document.getElementsByClassName("c_M1")
var c_11 = document.getElementsByClassName("c_11")
var c_21 = document.getElementsByClassName("c_21")
var c_22 = document.getElementsByClassName("c_22")
var line_11_12 = document.getElementsByClassName("line_11_12")
var line_11_21 = document.getElementsByClassName("line_11_21")
var line_22_21 = document.getElementsByClassName("line_22_21")
var el_22 = document.getElementsByClassName("22")
var el_21 = document.getElementsByClassName("21")
var el_11 = document.getElementsByClassName("11")
var M_1 = document.getElementsByClassName("M_1")
var l_1 = document.getElementsByClassName("l_1")
var line_M1_M2 = document.getElementsByClassName("line_M1_M2")
var M_2 = document.getElementsByClassName("M_2")
var c_M2 = document.getElementsByClassName("c_M2")
var c_K2 = document.getElementsByClassName("c_K2")
var c_K1 = document.getElementsByClassName("c_K1")
var K1 = document.getElementsByClassName("K1")
var K2 = document.getElementsByClassName("K2")
var line_K1_M1 = document.getElementsByClassName("line_K1_M1")
var line_K2_M2 = document.getElementsByClassName("line_K2_M2")
var grey_c = document.getElementsByClassName("grey_c")
var dash = document.getElementsByClassName("dash")
var long_red_line = document.getElementsByClassName("long_red_line")
var red_dash = document.getElementsByClassName("red_dash")
var c_K = document.getElementsByClassName("c_K*")
var K = document.getElementsByClassName("K*")
var K_M1 = document.getElementsByClassName("K_M1")
var HB_line = document.getElementsByClassName("HB_line")
var HB = document.getElementsByClassName("HB")
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
        K2_f2[0].style.setProperty('--width_1', '75');
        K2_f2[0].style.setProperty('--width_2', '190');
        K2_f2[0].style.animation = "change_width 3s forwards"
        K2_f2[0].style.animationDelay = "0.5s";
            return start_animation(K2_f2).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    f_2[0].style.animation = "blink 2s forwards"
					f_2[0].style.animationDelay = "3s";
					    resolve(start_animation(f_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    f_2[1].style.animation = "blink 2s forwards"
					f_2[1].style.animationDelay = "3s";
					    resolve(start_animation(f_2[1]));
                    });
                }
				}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    K2_h2[0].style.setProperty('--width_1', '75');
                    K2_h2[0].style.setProperty('--width_2', '300');
                    K2_h2[0].style.animation = "change_width 3s forwards"
                    K2_h2[0].style.animationDelay = "5s";
					    resolve(start_animation(K2_h2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    h_2[1].style.animation = "blink 2s forwards"
					h_2[1].style.animationDelay = "7.5s";
					    resolve(start_animation(h_2[1]));
                    });
                }
			}).then(() => {
                if(!animationPaused) {
                    return new Promise((resolve) => {
                        h_2[0].style.animation = "blink 2s forwards"
                        h_2[0].style.animationDelay = "7.5s";
                            resolve(start_animation(h_2[0]));
                        });
                    }
            }).then(() => {
                if(!animationPaused) {
                    return new Promise((resolve) => {
                        K1_f1[0].style.setProperty('--width_1', '75');
                        K1_f1[0].style.setProperty('--width_2', '300');
                        K1_f1[0].style.animation = "change_width 3s forwards"
                        K1_f1[0].style.animationDelay = "9.5s";
                            resolve(start_animation(K1_f1[0]));
                    });
                }
            }).then(() => {
                if(!animationPaused) {
                    return new Promise((resolve) => {
                        f_1[1].style.animation = "blink 2s forwards"
                        f_1[1].style.animationDelay = "12s";
                            resolve(start_animation(f_1[1]));
                        });
                    }
                }).then(() => {
                    if(!animationPaused) {
                        return new Promise((resolve) => {
                            f_1[0].style.animation = "blink 2s forwards"
                            f_1[0].style.animationDelay = "12s";
                                resolve(start_animation(f_1[0]));
                            });
                        }
                }).then(() => {
                if(!animationPaused) {
                    return new Promise((resolve) => {
                        K1_h1[0].style.setProperty('--width_1', '75');
                        K1_h1[0].style.setProperty('--width_2', '300');
                        K1_h1[0].style.animation = "change_width 3s forwards"
                        K1_h1[0].style.animationDelay = "14s";
                            resolve(start_animation(K1_h1[0]));
                    });
                }
            }).then(() => {
                if(!animationPaused) {
                    return new Promise((resolve) => {
                        h_1[1].style.animation = "blink 2s forwards"
                        h_1[1].style.animationDelay = "16.5s";
                            resolve(start_animation(h_1[1]));
                        });
                    }
                }).then(() => {
                    if(!animationPaused) {
                        return new Promise((resolve) => {
                            h_1[0].style.animation = "blink 2s forwards"
                            h_1[0].style.animationDelay = "16.5s";
                                resolve(start_animation(h_1[0]));
                            });
                        }
					}).then(() => {
						if(!animationPaused) {
							return new Promise((resolve) => {
									play.style.animation = "change_display_1 0.1s forwards"
									play.style.animationDelay = "18s";
									resolve(start_animation(play));
								});
							}
						}).then(() => {
							if(!animationPaused) {
								return new Promise((resolve) => {
									start.style.animation = "change_display 0.1s forwards"
									start.style.animationDelay = "18s";
									resolve(start_animation(start));
							});
						}
					})
				}
	done = "animation_4 is done";
}


function animation_5() {
	if(done = "animation_4 is done") {
        wave_1[0].style.setProperty('--height_1', '26');
        wave_1[0].style.setProperty('--height_2', '150');
        wave_1[0].style.animation = "change_height 3.8s forwards"
        wave_1[0].style.animationDelay = "0.5s";
		return start_animation(wave_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    wave_2[0].style.setProperty('--height_1', '206');
                    wave_2[0].style.setProperty('--height_2', '400');
                    wave_2[0].style.animation = "change_height 3.8s forwards"
                    wave_2[0].style.animationDelay = "4.3s";
                    resolve(start_animation(wave_2[0]));
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
	done = "animation_5 is done";
}


function animation_6() {
	if(done = "animation_5 is done") {
        line_l2[0].style.setProperty('--height_1', '50');
        line_l2[0].style.setProperty('--height_2', '100');
        line_l2[0].style.animation = "change_height 2s forwards"
        line_l2[0].style.animationDelay = "0.5s";
		return start_animation(line_l2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    l2[0].style.animation = "blink 2s forwards"
					l2[0].style.animationDelay = "2.5s";
                    resolve(start_animation(l2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    l2[1].style.animation = "blink 2s forwards"
					l2[1].style.animationDelay = "2.5s";
                    resolve(start_animation(l2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_l2[1].style.setProperty('--height_1', '50');
                    line_l2[1].style.setProperty('--height_2', '83');
                    line_l2[1].style.animation = "change_height 2s forwards"
					line_l2[1].style.animationDelay = "4.5s";
                    resolve(start_animation(l2[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    sum_2[0].style.animation = "blink 2s forwards"
					sum_2[0].style.animationDelay = "6.5s";
                    resolve(start_animation(sum_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    sum_2[1].style.animation = "blink 2s forwards"
					sum_2[1].style.animationDelay = "6.5s";
                    resolve(start_animation(sum_2[1]));
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
	done = "animation_6 is done";
}



function animation_7() {
	if(done = "animation_6 is done") {
        el_12[0].style.animation = "blink 2s forwards"
        el_12[0].style.animationDelay = "0.5s";
		return start_animation(el_12[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[1].style.animation = "blink 2s forwards"
                    el_12[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_12[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    p_12[0].style.animation = "blink 2s forwards"
					p_12[0].style.animationDelay = "0.5s";
                    resolve(start_animation(p_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_11_12[0].style.setProperty('--height_1', '40');
                    line_11_12[0].style.setProperty('--height_2', '243');
                    line_11_12[0].style.animation = "change_height 2s forwards"
					line_11_12[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_11_12[0]));
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
                    c_11[0].style.animation = "blink 2s forwards"
					c_11[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_11[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[0].style.animation = "blink 2s forwards"
					el_22[0].style.animationDelay = "6.5s";
                    resolve(start_animation(el_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[1].style.animation = "blink 2s forwards"
					el_22[1].style.animationDelay = "6.5s";
                    resolve(start_animation(el_22[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_22[0].style.animation = "blink 2s forwards"
					c_22[0].style.animationDelay = "6.5s";
                    resolve(start_animation(c_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_22_21[0].style.setProperty('--height_1', '40');
                    line_22_21[0].style.setProperty('--height_2', '400');
                    line_22_21[0].style.animation = "change_height 2s forwards"
					line_22_21[0].style.animationDelay = "8.5s";
                    resolve(start_animation(line_22_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[0].style.animation = "blink 2s forwards"
					el_21[0].style.animationDelay = "10.5s";
                    resolve(start_animation(el_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[1].style.animation = "blink 2s forwards"
					el_21[1].style.animationDelay = "10.5s";
                    resolve(start_animation(el_21[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_21[0].style.animation = "blink 2s forwards"
					c_21[0].style.animationDelay = "10.5s";
                    resolve(start_animation(c_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    l2[0].style.animation = "blink 2s forwards"
					l2[0].style.animationDelay = "12.5s";
                    resolve(start_animation(l2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_l2[0].style.animation = "blink 2s forwards"
					line_l2[0].style.animationDelay = "12.5s";
                    resolve(start_animation(line_l2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_11_21[0].style.setProperty('--height_1', '240');
                    line_11_21[0].style.setProperty('--height_2', '400');
                    line_11_21[0].style.animation = "change_height 2s forwards"
					line_11_21[0].style.animationDelay = "14.5s";
                    resolve(start_animation(line_11_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    l_1[0].style.animation = "blink 2s forwards"
					l_1[0].style.animationDelay = "16.5s";
                    resolve(start_animation(l_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    l_1[1].style.animation = "blink 2s forwards"
					l_1[1].style.animationDelay = "16.5s";
                    resolve(start_animation(l_1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "18s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "18s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_7 is done";
}



function animation_8() {
	if(done = "animation_7 is done") {
        M_1[0].style.animation = "blink 2s forwards"
        M_1[0].style.animationDelay = "0.5s";
		return start_animation(M_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    M_1[1].style.animation = "blink 2s forwards"
                    M_1[1].style.animationDelay = "0.5s";
                    resolve(start_animation(M_1[1]));
				});
			}
		}).then(() => {
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
                    line_M1_M2[0].style.setProperty('--height_1', '42');
                    line_M1_M2[0].style.setProperty('--height_2', '318');
                    line_M1_M2[0].style.setProperty('--top_1', '285');
                    line_M1_M2[0].style.setProperty('--top_2', '27');
                    line_M1_M2[0].style.animation = "change_height_top_down 2s forwards"
                    line_M1_M2[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_M1_M2[0]));
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
                    M_2[1].style.animation = "blink 2s forwards"
                    M_2[1].style.animationDelay = "4.5s";
                    resolve(start_animation(M_2[1]));
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
	done = "animation_8 is done";
}

function animation_9() {
	if(done = "animation_8 is done") {
        line_K2_M2[0].style.setProperty('--width_1', '42');
        line_K2_M2[0].style.setProperty('--width_2', '180');
        line_K2_M2[0].style.animation = "change_width 2s forwards"
        line_K2_M2[0].style.animationDelay = "0.5s";
		return start_animation(line_K2_M2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_K1_M1[0].style.setProperty('--width_1', '42');
                    line_K1_M1[0].style.setProperty('--width_2', '180');
                    line_K1_M1[0].style.animation = "change_width 2s forwards"
                    line_K1_M1[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_K1_M1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "4s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "4s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_9 is done";
}


function animation_10() {
	if(done = "animation_9 is done") {
        M_1[0].style.animation = "blink 2s forwards"
        M_1[0].style.animationDelay = "0.5s";
		return start_animation(M_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    M_1[1].style.animation = "blink 2s forwards"
                    M_1[1].style.animationDelay = "0.5s";
                    resolve(start_animation(M_1[1]));
				});
			}
		}).then(() => {
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
                    K1[0].style.animation = "blink 2s forwards"
                    K1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(K1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    K1[1].style.animation = "blink 2s forwards"
                    K1[1].style.animationDelay = "0.5s";
                    resolve(start_animation(K1[1]));
				});
			}
		}).then(() => {
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
                    line_K1_M1[0].style.animation = "blink 2s forwards"
                    line_K1_M1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(line_K1_M1[0]));
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
       long_red_line[0].style.setProperty('--width_1', '20');
       long_red_line[0].style.setProperty('--width_2', '70');
       long_red_line[0].style.animation = "change_width 2s forwards"
       long_red_line[0].style.animationDelay = "0.5s";
		return start_animation(line_l2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    K[0].style.animation = "blink 2s forwards"
					K[0].style.animationDelay = "2.5s";
                    resolve(start_animation(K[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_K[0].style.animation = "blink 2s forwards"
					c_K[0].style.animationDelay = "2.5s";
                    resolve(start_animation(c_K[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    red_dash[0].style.animation = "blink 2s forwards"
					red_dash[0].style.animationDelay = "2.5s";
                    resolve(start_animation(red_dash[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    red_dash[1].style.animation = "blink 2s forwards"
					red_dash[1].style.animationDelay = "2.5s";
                    resolve(start_animation(red_dash[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    dash[0].style.animation = "blink 2s forwards"
					dash[0].style.animationDelay = "2.5s";
                    resolve(start_animation(dash[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    dash[1].style.animation = "blink 2s forwards"
					dash[1].style.animationDelay = "2.5s";
                    resolve(start_animation(dash[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    grey_c[0].style.animation = "blink 2s forwards"
					grey_c[0].style.animationDelay = "2.5s";
                    resolve(start_animation(grey_c[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "4s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "4s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_11 is done";
}



function animation_12() {
	if(done = "animation_11 is done") {
        K_M1[0].style.setProperty('--width_1', '52');
        K_M1[0].style.setProperty('--width_2', '162');
        K_M1[0].style.animation = "change_width 2s forwards"
        K_M1[0].style.animationDelay = "0.5s";
		return start_animation(K_M1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    HB_line[0].style.setProperty('--width_1', '57');
                    HB_line[0].style.setProperty('--width_2', '102');
                    HB_line[0].style.animation = "change_width 2s forwards"
                    HB_line[0].style.animationDelay = "2.5s";
                    resolve(start_animation(HB_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    HB[0].style.animation = "blink 2s forwards"
                    HB[0].style.animationDelay = "4.5s";
                    resolve(start_animation(HB[0]));
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
	done = "animation_12 is done";
}
