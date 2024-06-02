var i = 0;
let click_stop = 0;
let click_begin = 0
let animationPaused = false;
let done = 0;
var B_2 = document.getElementById("B2")
var B_1 = document.getElementById("B1")
var C_2 = document.getElementById("C2")
var C_1 = document.getElementById("C1")
var F_2 = document.getElementById("F2")
var F_1 = document.getElementById("F1")
var D_2 = document.getElementById("D2")
var D_1 = document.getElementById("D1")
var line_C2 = document.getElementsByClassName("line_C2")
var sum_2 = document.getElementsByClassName("sum_2")
var line_12_22 = document.getElementsByClassName("line_12_22")
var line_C2_B2 = document.getElementsByClassName("line_C2_B2")
var line_11_12 = document.getElementsByClassName("line_11_12")
var line_21_22 = document.getElementsByClassName("line_21_22")
var line_11_21 = document.getElementsByClassName("line_11_21")
var el_12 = document.getElementsByClassName("el_12")
var el_11 = document.getElementsByClassName("el_11")
var el_21 = document.getElementsByClassName("el_21")
var el_22 = document.getElementsByClassName("el_22")
var c_P1 = document.getElementsByClassName("c_P1")
var el_P1 = document.getElementsByClassName("el_P1")
var c_P2 = document.getElementsByClassName("c_P2")
var el_P2 = document.getElementsByClassName("el_P2")
var line_P1_P2 = document.getElementsByClassName("line_P1_P2")
var el_42 = document.getElementsByClassName("el_42")
var el_32 = document.getElementsByClassName("el_32")
var line_42_32 = document.getElementsByClassName("line_42_32")
var del_2 = document.getElementsByClassName("del_2")
var line_del2 = document.getElementsByClassName("line_del2")
var el_31 = document.getElementsByClassName("el_31")
var el_41 = document.getElementsByClassName("el_41")
var el_Q1 = document.getElementsByClassName("el_Q1")
var c_Q1 = document.getElementsByClassName("c_Q1")
var line_31_41 = document.getElementsByClassName("line_31_41")
var line_32_31 = document.getElementsByClassName("line_32_31")
var line_42_41 = document.getElementsByClassName("line_42_41")
var line_Q1_Q2 = document.getElementsByClassName("line_Q1_Q2")
var el_Q2 = document.getElementsByClassName("el_Q2")
var c_Q2 = document.getElementsByClassName("c_Q2")
var line_P1_Q1 = document.getElementsByClassName("line_P1_Q1")
var line_P2_Q2 = document.getElementsByClassName("line_P2_Q2")
var c_52 = document.getElementsByClassName("c_52")
var el_52 = document.getElementsByClassName("el_52")
var line_52_51 = document.getElementsByClassName("line_52_51")
var line_P2_52 = document.getElementsByClassName("line_P2_52")
var c_51 = document.getElementsByClassName("c_51")
var el_51 = document.getElementsByClassName("el_51")
var line_F2_12 = document.getElementsByClassName("line_F2_12")
var line_F2_Q2 = document.getElementsByClassName("line_F2_Q2")
var c_61 = document.getElementsByClassName("c_61")
var el_61 = document.getElementsByClassName("el_61")
var c_62 = document.getElementsByClassName("c_62")
var el_62 = document.getElementsByClassName("el_62")
var c_72 = document.getElementsByClassName("c_72")
var el_72 = document.getElementsByClassName("el_72")
var el_71 = document.getElementsByClassName("el_71")
var line_61_62 = document.getElementsByClassName("line_61_62")
var el_ind22 = document.getElementsByClassName("elements")

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
        B_1.style.animation = "long_blink 3s forwards"
        B_1.style.animationDelay = "0.5s";
		return start_animation(B_1).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    B_2.style.animation = "long_blink 3s forwards"
                    B_2.style.animationDelay = "0.5s";
                    resolve(start_animation(B_2));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    C_1.style.animation = "long_blink 3s forwards"
                    C_1.style.animationDelay = "0.5s";
                    resolve(start_animation(C_1));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    C_2.style.animation = "long_blink 3s forwards"
                    C_2.style.animationDelay = "0.5s";
                    resolve(start_animation(C_2));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    F_1.style.animation = "long_blink 3s forwards"
                    F_1.style.animationDelay = "3.5s";
                    resolve(start_animation(F_1));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    F_2.style.animation = "long_blink 3s forwards"
                    F_2.style.animationDelay = "3.5s";
                    resolve(start_animation(F_2));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    D_1.style.animation = "long_blink 3s forwards"
                    D_1.style.animationDelay = "3.5s";
                    resolve(start_animation(D_1));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    D_2.style.animation = "long_blink 3s forwards"
                    D_2.style.animationDelay = "3.5s";
                    resolve(start_animation(D_2));
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
        line_C2[0].style.setProperty('--width_1', '0');
        line_C2[0].style.setProperty('--width_2', '33');
        line_C2[0].style.animation = "change_width 1s forwards"
        line_C2[0].style.animationDelay = "0.5s";
		return start_animation(line_C2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    sum_2[0].style.animation = "blink 2s forwards"
                    sum_2[0].style.animationDelay = "1.5s";
                    resolve(start_animation(sum_2[0]));
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
        line_12_22[0].style.setProperty('--width_1', '37');
        line_12_22[0].style.setProperty('--width_2', '88');
        line_12_22[0].style.animation = "change_width 1.5s forwards"
        line_12_22[0].style.animationDelay = "0.5s";
		return start_animation(line_12_22[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[0].style.animation = "blink 2s forwards"
                    el_12[0].style.animationDelay = "2s";
                    resolve(start_animation(el_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[1].style.animation = "blink 2s forwards"
                    el_12[1].style.animationDelay = "2s";
                    resolve(start_animation(el_12[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[0].style.animation = "blink 2s forwards"
                    el_22[0].style.animationDelay = "4s";
                    resolve(start_animation(el_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[1].style.animation = "blink 2s forwards"
                    el_22[1].style.animationDelay = "4s";
                    resolve(start_animation(el_22[1]));
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
	done = "animation_5 is done";
}

function animation_6() {
	if(done = "animation_5 is done") {
        line_C2_B2[0].style.animation = "long_blink 3s forwards"
        line_C2_B2[0].style.animationDelay = "0.5s";
		return start_animation(line_C2_B2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[0].style.animation = "long_blink 3s forwards"
                    el_12[0].style.animationDelay = "0.5s";
                    resolve(start_animation(el_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_12[1].style.animation = "long_blink 3s forwards"
                    el_12[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_12[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[0].style.animation = "long_blink 3s forwards"
                    el_22[0].style.animationDelay = "0.5s";
                    resolve(start_animation(el_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_22[1].style.animation = "long_blink 3s forwards"
                    el_22[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_22[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    C_2.style.animation = "long_blink 3s forwards"
                    C_2.style.animationDelay = "0.5s";
                    resolve(start_animation(C_2));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    B_2.style.animation = "long_blink 3s forwards"
                    B_2.style.animationDelay = "0.5s";
                    resolve(start_animation(B_2));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    sum_2[0].style.animation = "long_blink 3s forwards"
                    sum_2[0].style.animationDelay = "0.5s";
                    resolve(start_animation(sum_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_12_22[0].style.animation = "long_blink 3s forwards"
                    line_12_22[0].style.animationDelay = "0.5s";
                    resolve(start_animation(line_12_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_C2[0].style.animation = "long_blink 3s forwards"
                    line_C2[0].style.animationDelay = "0.5s";
                    resolve(start_animation(line_C2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_11_12[0].style.setProperty('--height_1', '32');
                    line_11_12[0].style.setProperty('--height_2', '340');
                    line_11_12[0].style.animation = "change_height 2s forwards"
                    line_11_12[0].style.animationDelay = "3s";
                    resolve(start_animation(line_11_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_11[0].style.animation = "blink 2s forwards"
                    el_11[0].style.animationDelay = "5s";
                    resolve(start_animation(el_11[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_11[1].style.animation = "blink 2s forwards"
                    el_11[1].style.animationDelay = "5s";
                    resolve(start_animation(el_11[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_21_22[0].style.setProperty('--height_1', '72');
                    line_21_22[0].style.setProperty('--height_2', '206');
                    line_21_22[0].style.animation = "change_height 2s forwards"
                    line_21_22[0].style.animationDelay = "7s";
                    resolve(start_animation(line_21_22[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[0].style.animation = "blink 2s forwards"
                    el_21[0].style.animationDelay = "9s";
                    resolve(start_animation(el_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_21[1].style.animation = "blink 2s forwards"
                    el_21[1].style.animationDelay = "9s";
                    resolve(start_animation(el_21[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_11_21[0].style.setProperty('--width_1', '230');
                    line_11_21[0].style.setProperty('--width_2', '295');
                    line_11_21[0].style.animation = "change_width 2s forwards"
                    line_11_21[0].style.animationDelay = "11s";
                    resolve(start_animation(line_11_21[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_P1[0].style.animation = "blink 2s forwards"
                    el_P1[0].style.animationDelay = "13s";
                    resolve(start_animation(el_P1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_P1[1].style.animation = "blink 2s forwards"
                    el_P1[1].style.animationDelay = "13s";
                    resolve(start_animation(el_P1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_P1[0].style.animation = "blink 2s forwards"
                    c_P1[0].style.animationDelay = "13s";
                    resolve(start_animation(c_P1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "15s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "15s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_6 is done";
}

function animation_7() {
	if(done = "animation_6 is done") {
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
                    resolve(start_animation( c_P1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_P1_P2[0].style.setProperty('--height_1', '52');
                    line_P1_P2[0].style.setProperty('--height_2', '272');
                    line_P1_P2[0].style.setProperty('--top_1', '321');
                    line_P1_P2[0].style.setProperty('--top_2', '103');
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
                    resolve(start_animation( c_P2[0]));
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

function animation_8() {
	if(done = "animation_7 is done") {
        line_42_32[0].style.setProperty('--width_1', '0');
        line_42_32[0].style.setProperty('--width_2', '326');
        line_42_32[0].style.setProperty('--left_1', '490');
        line_42_32[0].style.setProperty('--left_2', '144');
        line_42_32[0].style.setProperty('--top_1', '87');
        line_42_32[0].style.setProperty('--top_2', '12.5');
        line_42_32[0].style.animation = "apper_right_left_scale 2s forwards"
        line_42_32[0].style.animationDelay = "0.5s";
		return start_animation(line_42_32[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_42[0].style.animation = "blink 2s forwards"
                    el_42[0].style.animationDelay = "2.5s";
                    resolve(start_animation(el_42[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_42[1].style.animation = "blink 2s forwards"
                    el_42[1].style.animationDelay = "2.5s";
                    resolve(start_animation(el_42[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_32[0].style.animation = "blink 2s forwards"
                    el_32[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_32[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_32[1].style.animation = "blink 2s forwards"
                    el_32[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_42[1]));
				});
			}
        }).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_del2[0].style.setProperty('--width_1', '70');
                    line_del2[0].style.setProperty('--width_2', '110');
                    line_del2[0].style.setProperty('--left_1', '190');
                    line_del2[0].style.setProperty('--left_2', '159');
                    line_del2[0].style.animation = "apper_right_left 2s forwards"
                    line_del2[0].style.animationDelay = "6.5s";
                    resolve(start_animation(line_del2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    del_2[0].style.animation = "blink 2s forwards"
                    del_2[0].style.animationDelay = "8.5s";
                    resolve(start_animation(del_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    del_2[1].style.animation = "blink 2s forwards"
                    del_2[1].style.animationDelay = "8.5s";
                    resolve(start_animation(del_2[1]));
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
	done = "animation_8 is done";
}

function animation_10() {
	if(done = "animation_8 is done") {
        line_32_31[0].style.setProperty('--height_1', '84');
        line_32_31[0].style.setProperty('--height_2', '262');
        line_32_31[0].style.animation = "change_height 2s forwards"
        line_32_31[0].style.animationDelay = "0.5s";
		return start_animation(line_32_31[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_31[0].style.animation = "blink 2s forwards"
                    el_31[0].style.animationDelay = "2.5s";
                    resolve(start_animation( el_31[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_31[1].style.animation = "blink 2s forwards"
                    el_31[1].style.animationDelay = "2.5s";
                    resolve(start_animation(el_31[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_42_41[0].style.setProperty('--height_1', '123');
                    line_42_41[0].style.setProperty('--height_2', '355');
                    line_42_41[0].style.animation = "change_height 2s forwards"
                    line_42_41[0].style.animationDelay = "4.5s";
                    resolve(start_animation(line_42_41[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_41[0].style.animation = "blink 2s forwards"
                    el_41[0].style.animationDelay = "6.5s";
                    resolve(start_animation(el_41[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_41[1].style.animation = "blink 2s forwards"
                    el_41[1].style.animationDelay = "6.5s";
                    resolve(start_animation(el_41[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_31_41[0].style.setProperty('--width_1', '130');
                    line_31_41[0].style.setProperty('--width_2', '355');
                    line_31_41[0].style.animation = "change_width 2s forwards"
                    line_31_41[0].style.animationDelay = "8.5s";
                    resolve(start_animation( line_31_41[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Q1[0].style.animation = "blink 2s forwards"
                    el_Q1[0].style.animationDelay = "10.5s";
                    resolve(start_animation(el_Q1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Q1[1].style.animation = "blink 2s forwards"
                    el_Q1[1].style.animationDelay = "10.5s";
                    resolve(start_animation(el_Q1[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_Q1[0].style.animation = "blink 2s forwards"
                    c_Q1[0].style.animationDelay = "10.5s";
                    resolve(start_animation(c_Q1[0]));
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
	done = "animation_10 is done";
}

function animation_11() {
	if(done = "animation_10 is done") {
        el_Q1[0].style.animation = "blink 2s forwards"
        el_Q1[0].style.animationDelay = "0.5s";
		return start_animation(el_Q1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Q1[1].style.animation = "blink 2s forwards"
                    el_Q1[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_Q1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_Q1[0].style.animation = "blink 2s forwards"
                    c_Q1[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_Q1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_Q1_Q2[0].style.setProperty('--height_1', '130');
                    line_Q1_Q2[0].style.setProperty('--height_2', '305');
                    line_Q1_Q2[0].style.setProperty('--top_1', '187');
                    line_Q1_Q2[0].style.setProperty('--top_2', '-6');
                    line_Q1_Q2[0].style.animation = "change_height_top_down 2s forwards"
                    line_Q1_Q2[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_Q1_Q2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Q2[0].style.animation = "blink 2s forwards"
                    el_Q2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_Q2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_Q2[1].style.animation = "blink 2s forwards"
                    el_Q2[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_Q2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_Q2[0].style.animation = "blink 2s forwards"
                    c_Q2[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_Q2[0]));
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
	done = "animation_11 is done";
}


function animation_12() {
	if(done = "animation_11 is done") {
        line_P2_Q2[0].style.setProperty('--width_1', '200');
        line_P2_Q2[0].style.setProperty('--width_2', '260');
        line_P2_Q2[0].style.animation = "change_width 2s forwards"
        line_P2_Q2[0].style.animationDelay = "0.5s";
		return start_animation(line_P2_Q2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_P1_Q1[0].style.setProperty('--width_1', '200');
                    line_P1_Q1[0].style.setProperty('--width_2', '260');
                    line_P1_Q1[0].style.animation = "change_width 2s forwards"
                    line_P1_Q1[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_P1_Q1[0]));
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
	done = "animation_12 is done";
}


function animation_14() {
	if(done = "animation_12 is done") {el_22[0].style.opacity = "0"
    el_22[1].style.opacity = "0"
    el_22[2].style.opacity = "1"
    el_22[3].style.opacity = "1"
    el_52[0].style.animation = "blink 2s forwards"
    el_52[0].style.animationDelay = "0.5s";
    return start_animation(el_52[0]).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                el_52[1].style.animation = "blink 2s forwards"
                el_52[1].style.animationDelay = "0.5s";
                resolve(start_animation(el_52[1]));
            });
        }
    }).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                el_52[2].style.animation = "blink 2s forwards"
                el_52[2].style.animationDelay = "0.5s";
                resolve(start_animation(el_52[2]));
            });
        }
    }).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                el_52[3].style.animation = "blink 2s forwards"
                el_52[3].style.animationDelay = "0.5s";
                resolve(start_animation(el_52[3]));
            });
        }
    }).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                c_52[0].style.animation = "blink 2s forwards"
                c_52[0].style.animationDelay = "0.5s";
                resolve(start_animation(c_52[0]));
            });
        }
    }).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                line_52_51[0].style.setProperty('--height_1', '270');
                line_52_51[0].style.setProperty('--height_2', '377');
                line_52_51[0].style.animation = "change_height 2s forwards"
                line_52_51[0].style.animationDelay = "2.5s";
                resolve(start_animation(line_52_51[0]));
            });
        }
    }).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                el_51[0].style.animation = "blink 2s forwards"
                el_51[0].style.animationDelay = "4.5s";
                resolve(start_animation(el_51[0]));
            });
        }
    }).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                el_51[1].style.animation = "blink 2s forwards"
                el_51[1].style.animationDelay = "4.5s";
                resolve(start_animation(el_51[1]));
            });
        }
    }).then(() => {
        if(!animationPaused) {
            return new Promise((resolve) => {
                c_51[0].style.animation = "blink 2s forwards"
                c_51[0].style.animationDelay = "4.5s";
                resolve(start_animation(c_51[0]));
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
	done = "animation_14 is done";
}

function animation_15() {
	if(done = "animation_14 is done") {
        line_P2_52[0].style.setProperty('--width_1', '76');
        line_P2_52[0].style.setProperty('--width_2', '124');
        line_P2_52[0].style.animation = "change_width 2s forwards"
        line_P2_52[0].style.animationDelay = "0.5s";
		return start_animation(line_P2_52[0]).then(() => {
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
	done = "animation_15 is done";
}

function animation_16() {
	if(done = "animation_15 is done") {
        line_F2_12[0].style.setProperty('--width_1', '235');
        line_F2_12[0].style.setProperty('--width_2', '240');
        line_F2_12[0].style.animation = "change_width 1s forwards"
        line_F2_12[0].style.animationDelay = "0.5s";
		return start_animation(line_F2_12[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    line_F2_Q2[0].style.setProperty('--width_1', '240');
                    line_F2_Q2[0].style.setProperty('--width_2', '309');
                    line_F2_Q2[0].style.animation = "change_width 1s forwards"
                    line_F2_Q2[0].style.animationDelay = "1.5s";
                    resolve(start_animation(line_F2_Q2[0]));
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


function animation_18() {
	if(done = "animation_16 is done") {
        el_61[0].style.animation = "blink 2s forwards"
        el_61[0].style.animationDelay = "0.5s";
		return start_animation(line_C2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_61[1].style.animation = "blink 2s forwards"
                    el_61[1].style.animationDelay = "0.5s";
                    resolve(start_animation(el_61[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_61[0].style.animation = "blink 2s forwards"
                    c_61[0].style.animationDelay = "0.5s";
                    resolve(start_animation(c_61[0]));
				});
			}
		}).then(() => {
            if(!animationPaused) {
                return new Promise((resolve) => {
                    line_61_62[0].style.setProperty('--height_1', '40');
                    line_61_62[0].style.setProperty('--height_2', '270');
                    line_61_62[0].style.setProperty('--top_1', '280');
                    line_61_62[0].style.setProperty('--top_2', '28');
                    line_61_62[0].style.animation = "change_height_top_down 2s forwards"
                    line_61_62[0].style.animationDelay = "2.5s";
                    resolve(start_animation(line_61_62[0]));
                });
            }
        }).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_62[0].style.animation = "blink 2s forwards"
                    el_62[0].style.animationDelay = "4.5s";
                    resolve(start_animation(el_62[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_62[1].style.animation = "blink 2s forwards"
                    el_62[1].style.animationDelay = "4.5s";
                    resolve(start_animation(el_62[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_62[0].style.animation = "blink 2s forwards"
                    c_62[0].style.animationDelay = "4.5s";
                    resolve(start_animation(c_62[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_71[0].style.animation = "blink 2s forwards"
                    el_71[0].style.animationDelay = "6.5s";
                    resolve(start_animation(el_71[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_71[1].style.animation = "blink 2s forwards"
                    el_71[1].style.animationDelay = "6.5s";
                    resolve(start_animation(el_71[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_72[0].style.animation = "blink 2s forwards"
                    el_72[0].style.animationDelay = "8.5s";
                    resolve(start_animation(el_72[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    el_72[1].style.animation = "blink 2s forwards"
                    el_72[1].style.animationDelay = "8.5s";
                    resolve(start_animation(el_72[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
                    c_72[0].style.animation = "blink 2s forwards"
                    c_72[0].style.animationDelay = "8.5s";
                    resolve(start_animation(c_72[0]));
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
	done = "animation_18 is done";
}

function animation_21() {
	if(done = "animation_18 is done") {
        el_ind22[0].style.animation = "change_opasity 3s forwards"
        el_ind22[0].style.animationDelay = "0.5s";
		return start_animation( el_ind22[0]).then(() => {
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
	done = "animation_21 is done";
}
