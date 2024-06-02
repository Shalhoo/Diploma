var A_2 = (document.getElementsByClassName('A_2')); 
var A_1 = (document.getElementsByClassName('A_1'))
var B_1 = (document.getElementsByClassName('B_1'))
var B_2 = (document.getElementsByClassName('B_2'))
var pink_line = (document.getElementsByClassName('pink_line'))
var red_line = (document.getElementsByClassName('red_line'))
var sum_2 = (document.getElementsByClassName('sum_2'))
var vert_line = (document.getElementsByClassName('vert_line'))
var connect_line = (document.getElementsByClassName('connect_line'))
var blue_line = (document.getElementsByClassName('blue_line'))
var line_l1 = (document.getElementsByClassName('line_l1'))
var circle_l1 = (document.getElementsByClassName('circle_l1'))
var m1 = (document.getElementsByClassName('m1'))
var p_11 = (document.getElementsByClassName('p_11'))
var p_12 = (document.getElementsByClassName('p_12'))
var p_11_p_12 = (document.getElementsByClassName('p_11_p_12'))
var line_m1 = (document.getElementsByClassName('line_m1'))
var circle_m1 = (document.getElementsByClassName('circle_m1'))
var blue_c = (document.getElementsByClassName('blue_c'))
var blue_p = (document.getElementsByClassName('blue_p'))
var yellow = (document.getElementsByClassName('yellow'))
var blue = (document.getElementsByClassName('blue'))
var B_2_B_1 = (document.getElementsByClassName('B_2_B_1'))
var A_2_A_1 = (document.getElementsByClassName('A_2_A_1'))
var i = 0;
var done = 0;
var Flag = false;
var a;
var currentTime = 0;
let timer1;
let opacityState = 1;
let startTime = Date.now();
let elapsedTime = 0;
let animationPaused = false;
let pauseTime = 0;
let globalPauseTime = 0;
let animationProgress = 0;
let pause = 0;
let animation;
let click_stop = 0;
let click_begin = 0

function animation_4() {
	if(done == 0) {
		A_2[0].style.animation = "blink 2s forwards"
		return start_animation(A_2[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					document.documentElement.style.setProperty('--height_1', '128');
					document.documentElement.style.setProperty('--height_2', '250');
					A_2_A_1[0].style.animation = "change_height 2s forwards"
					A_2_A_1[0].style.animationDelay = "2s";
					resolve(start_animation(A_2_A_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					A_1[0].style.animation = "blink 2s forwards"
					resolve(start_animation(A_1[0]));
					A_1[0].style.animationDelay = "4s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "6.1s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "6.1s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_4 is done";
}

function animation_5() {
	if(done = "animation_4 is done") {
		// B_1[0].style.opacity = 0;
		B_1[0].style.animation = "blink 2s forwards"
		return start_animation(B_1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					document.documentElement.style.setProperty('--height_1', '224');
					document.documentElement.style.setProperty('--height_2', '376');
					document.documentElement.style.setProperty('--top_1', '180');
					document.documentElement.style.setProperty('--top_2', '27');
					B_2_B_1[0].style.animation = "change_height_top_down 2s forwards"
					B_2_B_1[0].style.animationDelay = "2s";
					resolve(start_animation(B_2_B_1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					B_2[0].style.animation = "blink 2s forwards"
					resolve(start_animation(B_2[0]));
					B_2[0].style.animationDelay = "4s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "6.1s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "6.1s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_5 is done";
}

function animation_7() {
	if(done = "animation_5 is done") {
		// pink_line[0].style.opacity = 0;
		document.documentElement.style.setProperty('--width_1', '5');
		document.documentElement.style.setProperty('--width_2', '300');
		document.documentElement.style.setProperty('--left_1', '547');
		document.documentElement.style.setProperty('--left_2', '252');
		pink_line[0].style.animation = "apper_right_left 2s forwards"
		return start_animation(pink_line[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					sum_2[0].style.animation = "blink 2s forwards"
					sum_2[0].style.animationDelay = "2s";
					resolve(start_animation(sum_2[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					sum_2[1].style.animation = "blink 2s forwards"
					resolve(start_animation(sum_2[1]));
					sum_2[1].style.animationDelay = "4s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "5.8s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "5.8s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_7 is done";
}

function animation_8() {
	if(done = "animation_7 is done") {
		// line_l1[0].style.opacity = 0;
		document.documentElement.style.setProperty('--height_1', '180');
		document.documentElement.style.setProperty('--height_2', '250');
		line_l1[0].style.animation = "change_height 2s forwards"
		return start_animation(line_l1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					document.documentElement.style.setProperty('--width_1', '61');
					document.documentElement.style.setProperty('--width_2', '259');
					circle_l1[0].style.animation = "change_width 2s forwards"
					circle_l1[0].style.animationDelay = "2s";
					resolve(start_animation(circle_l1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					vert_line[0].style.animation = "blink 2s forwards"
					resolve(start_animation(vert_line[0]));
					vert_line[0].style.animationDelay = "4s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "5.8s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "5.8s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_8 is done";
}

function animation_9() {
	if(done = "animation_8 is done") {
		// line_l1[0].style.opacity = 0;
		document.documentElement.style.setProperty('--height_1', '180');
		document.documentElement.style.setProperty('--height_2', '250');
		line_m1[0].style.animation = "change_height 2s forwards"
		return start_animation(line_m1[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					document.documentElement.style.setProperty('--width_1', '139');
					document.documentElement.style.setProperty('--width_2', '381');
					circle_m1[0].style.animation = "change_width 2s forwards"
					circle_m1[0].style.animationDelay = "2s";
					resolve(start_animation(circle_m1[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					m1[0].style.animation = "blink 2s forwards"
					resolve(start_animation(m1[0]));
					m1[0].style.animationDelay = "4s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "5.8s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "5.8s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_9 is done";
}

function animation_10() {
	if(done = "animation_9 is done") {
		// line_l1[0].style.opacity = 0;
		p_11[0].style.animation = "blink 2s forwards"
		return start_animation(p_11[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					document.documentElement.style.setProperty('--height_1', '180');
					document.documentElement.style.setProperty('--height_2', '341');
					document.documentElement.style.setProperty('--top_1', '190');
					document.documentElement.style.setProperty('--top_2', '27');
					p_11_p_12[0].style.animation = "change_height_top_down 1.2s forwards"
					p_11_p_12[0].style.animationDelay = "2.7s";
					resolve(start_animation(p_11_p_12[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					p_12[0].style.animation = "blink 2s forwards"
					resolve(start_animation(p_12[0]));
					p_12[0].style.animationDelay = "4.2s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "6.3s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "6.3s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_10 is done";
}
function animation_11() {
	if(done = "animation_10 is done") {
		// line_l1[0].style.opacity = 0;
		blue_line[0].style.setProperty('--width_1', '87');
		blue_line[0].style.setProperty('--width_2', '300');
		blue_line[0].style.setProperty('--left_1', '465');
		blue_line[0].style.setProperty('--left_2', '252');
		// console.log(getComputedStyle("--left_2") )
			blue_line[0].style.animation = "apper_right_left 0.8s forwards"
			blue_line[0].style.animationDelay = "0.7s";
		return start_animation(blue_line[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						vert_line[1].style.setProperty('--height_1', '156');
						vert_line[1].style.setProperty('--height_2', '250');
					vert_line[1].style.animation = "change_height 0.5s forwards"
					vert_line[1].style.animationDelay = "1.7s";
					resolve(start_animation(vert_line[1]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						blue_c[0].style.setProperty('--width_1', '76');
						blue_c[0].style.setProperty('--width_2', '235');
					blue_c[0].style.animation = "change_width 0.8s forwards"
					resolve(start_animation(blue_c[0]));
					blue_c[0].style.animationDelay = "2.3s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						vert_line[2].style.setProperty('--height_1', '156');
						vert_line[2].style.setProperty('--height_2', '250');
					vert_line[2].style.animation = "change_height 0.5s forwards"
					vert_line[2].style.animationDelay = "3.3s";
					resolve(start_animation(vert_line[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						blue_c[1].style.setProperty('--width_1', '140');
						blue_c[1].style.setProperty('--width_2', '366');
					blue_c[1].style.animation = "change_width 0.8s forwards"
					resolve(start_animation(blue_c[1]));
					blue_c[1].style.animationDelay = "4s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					blue_p[0].style.animation = "blink 1.5s forwards"
					resolve(start_animation(blue_p[0]));
					blue_p[0].style.animationDelay = "4.8s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						connect_line[0].style.setProperty('--height_1', '158');
						connect_line[0].style.setProperty('--height_2', '317');
						connect_line[0].style.setProperty('--top_1', '197');
						connect_line[0].style.setProperty('--top_2', '27');
					connect_line[0].style.animation = "change_height_top_down 0.5s forwards"
					resolve(start_animation(connect_line[0]));
					connect_line[0].style.animationDelay = "6.4s";
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					blue_p[1].style.animation = "blink 1.5s forwards"
					resolve(start_animation(blue_p[1]));
					blue_p[1].style.animationDelay = "7.1s";
				});
			}
		}).then(() => {
			{
				// line_l1[0].style.opacity = 0;
				blue_line[1].style.setProperty('--width_1', '87');
				blue_line[1].style.setProperty('--width_2', '300');
				blue_line[1].style.setProperty('--left_1', '465');
				blue_line[1].style.setProperty('--left_2', '252');
				blue_line[1].style.animation = "apper_right_left 0.8s forwards"
				blue_line[1].style.animationDelay = "8.8s";
				return start_animation(blue_line[1]).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								vert_line[3].style.setProperty('--height_1', '156');
								vert_line[3].style.setProperty('--height_2', '250');
							vert_line[3].style.animation = "change_height 0.5s forwards"
							vert_line[3].style.animationDelay = "9.8s";
							resolve(start_animation(vert_line[3]));
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								blue_c[2].style.setProperty('--width_1', '76');
								blue_c[2].style.setProperty('--width_2', '235');
							blue_c[2].style.animation = "change_width 0.8s forwards"
							resolve(start_animation(blue_c[2]));
							blue_c[2].style.animationDelay = "10.4s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								vert_line[4].style.setProperty('--height_1', '156');
								vert_line[4].style.setProperty('--height_2', '250');
							vert_line[4].style.animation = "change_height 0.5s forwards"
							vert_line[4].style.animationDelay = "11.4s";
							resolve(start_animation(vert_line[4]));
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								blue_c[3].style.setProperty('--width_1', '140');
								blue_c[3].style.setProperty('--width_2', '366');
							blue_c[3].style.animation = "change_width 0.8s forwards"
							resolve(start_animation(blue_c[3]));
							blue_c[3].style.animationDelay = "12.1s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
							blue_p[2].style.animation = "blink 1.5s forwards"
							resolve(start_animation(blue_p[2]));
							blue_p[2].style.animationDelay = "12.9s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								connect_line[1].style.setProperty('--height_1', '182');
								connect_line[1].style.setProperty('--height_2', '300');
								connect_line[1].style.setProperty('--top_1', '144');
								connect_line[1].style.setProperty('--top_2', '27');
							connect_line[1].style.animation = "change_height_top_down 0.5s forwards"
							resolve(start_animation(connect_line[1]));
							connect_line[1].style.animationDelay = "14.5s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
							blue_p[3].style.animation = "blink 1.5s forwards"
							resolve(start_animation(blue_p[3]));
							blue_p[3].style.animationDelay = "15.2s";
						});
					}
				});
			}
		}).then(() => {
			{
				// line_l1[0].style.opacity = 0;
				blue_line[2].style.setProperty('--width_1', '87');
				blue_line[2].style.setProperty('--width_2', '300');
				blue_line[2].style.setProperty('--left_1', '465');
				blue_line[2].style.setProperty('--left_2', '252');
				blue_line[2].style.animation = "apper_right_left 0.8s forwards"
				blue_line[2].style.animationDelay = "16.9s";
				return start_animation(blue_line[2]).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								vert_line[5].style.setProperty('--height_1', '156');
								vert_line[5].style.setProperty('--height_2', '250');
							vert_line[5].style.animation = "change_height 0.5s forwards"
							vert_line[5].style.animationDelay = "17.9s";
							resolve(start_animation(vert_line[5]));
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								blue_c[4].style.setProperty('--width_1', '76');
								blue_c[4].style.setProperty('--width_2', '235');
							blue_c[4].style.animation = "change_width 0.8s forwards"
							resolve(start_animation(blue_c[4]));
							blue_c[4].style.animationDelay = "18.5s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								vert_line[6].style.setProperty('--height_1', '156');
								vert_line[6].style.setProperty('--height_2', '250');
							vert_line[6].style.animation = "change_height 0.5s forwards"
							vert_line[6].style.animationDelay = "19.5s";
							resolve(start_animation(vert_line[6]));
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								blue_c[5].style.setProperty('--width_1', '140');
								blue_c[5].style.setProperty('--width_2', '366');
							blue_c[5].style.animation = "change_width 0.8s forwards"
							resolve(start_animation(blue_c[5]));
							blue_c[5].style.animationDelay = "20.2s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
							blue_p[4].style.animation = "blink 1.5s forwards"
							resolve(start_animation(blue_p[4]));
							blue_p[4].style.animationDelay = "21s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								connect_line[2].style.setProperty('--height_1', '122');
								connect_line[2].style.setProperty('--height_2', '270');
								connect_line[2].style.setProperty('--top_1', '174');
								connect_line[2].style.setProperty('--top_2', '28');
							connect_line[2].style.animation = "change_height_top_down 0.5s forwards"
							resolve(start_animation(connect_line[2]));
							connect_line[2].style.animationDelay = "22.6s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
							blue_p[5].style.animation = "blink 1.5s forwards"
							resolve(start_animation(blue_p[5]));
							blue_p[5].style.animationDelay = "23.3s";
						});
					}
				});
			}
		}).then(() => {
			{
				// line_l1[0].style.opacity = 0;
				blue_line[3].style.setProperty('--width_1', '87');
				blue_line[3].style.setProperty('--width_2', '300');
				blue_line[3].style.setProperty('--left_1', '465');
				blue_line[3].style.setProperty('--left_2', '252');
				blue_line[3].style.animation = "apper_right_left 0.8s forwards"
				blue_line[3].style.animationDelay = "25s";
				return start_animation(blue_line[3]).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								vert_line[7].style.setProperty('--height_1', '156');
								vert_line[7].style.setProperty('--height_2', '250');
							vert_line[7].style.animation = "change_height 0.5s forwards"
							vert_line[7].style.animationDelay = "26s";
							resolve(start_animation(vert_line[7]));
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								blue_c[6].style.setProperty('--width_1', '76');
								blue_c[6].style.setProperty('--width_2', '235');
							blue_c[6].style.animation = "change_width 0.8s forwards"
							resolve(start_animation(blue_c[6]));
							blue_c[6].style.animationDelay = "26.6s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								vert_line[8].style.setProperty('--height_1', '156');
								vert_line[8].style.setProperty('--height_2', '250');
							vert_line[8].style.animation = "change_height 0.5s forwards"
							vert_line[8].style.animationDelay = "27.6s";
							resolve(start_animation(vert_line[8]));
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								blue_c[7].style.setProperty('--width_1', '140');
								blue_c[7].style.setProperty('--width_2', '366');
							blue_c[7].style.animation = "change_width 0.8s forwards"
							resolve(start_animation(blue_c[7]));
							blue_c[7].style.animationDelay = "28.3s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
							blue_p[6].style.animation = "blink 1.5s forwards"
							resolve(start_animation(blue_p[6]));
							blue_p[6].style.animationDelay = "29.1s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
								connect_line[3].style.setProperty('--height_1', '190');
								connect_line[3].style.setProperty('--height_2', '340');
								connect_line[3].style.setProperty('--top_1', '173');
								connect_line[3].style.setProperty('--top_2', '28');
							connect_line[3].style.animation = "change_height_top_down 0.5s forwards"
							resolve(start_animation(connect_line[3]));
							connect_line[3].style.animationDelay = "30.7s";
						});
					}
				}).then(() => {
					if(!animationPaused) {
						return new Promise((resolve) => {
							blue_p[7].style.animation = "blink 1.5s forwards"
							resolve(start_animation(blue_p[7]));
							blue_p[7].style.animationDelay = "31.4s";
						});
					}
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						play.style.animation = "change_display_1 0.1s forwards"
						play.style.animationDelay = "33s";
						resolve(start_animation(play));
					});
				}
			}).then(() => {
				if(!animationPaused) {
					return new Promise((resolve) => {
						start.style.animation = "change_display 0.1s forwards"
						start.style.animationDelay = "33s";
						resolve(start_animation(start));
				});
			}
		})
	}
	done = "animation_11 is done";
}




function animation_12() {
	if(done = "animation_11 is done") {
		red_line[0].style.opacity = 0;
		red_line[0].style.setProperty('--height_1', '120');
		red_line[0].style.setProperty('--height_2', '380');
		red_line[0].style.animation = "change_height 2.5s forwards"
		red_line[0].style.animationDelay = "0.5s";
		return start_animation(red_line[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					setTimeout(function() {
						play.style.display = 'none',
							start.style.display = 'block';
					}, 3200);
				});
			}
		})
	}
	done = "animation_12 is done";
}


function animation_13() {
	if(done = "animation_12 is done") {
		blue[0].style.opacity = 0;
		yellow[0].style.opacity = 0;
		blue[0].style.setProperty('--width_1', '10');
		blue[0].style.setProperty('--width_2', '320');
		blue[0].style.animation = "change_width_color 1.5s forwards"
		blue[0].style.animationDelay = "0.5s";
		return start_animation(blue[0]).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
						yellow[0].style.setProperty('--width_1', '200');
						yellow[0].style.setProperty('--width_2', '380');
						yellow[0].style.animation = "change_width_color 1.5s forwards"
						yellow[0].style.animationDelay = "1.7s";
					resolve(start_animation(yellow[0]));
				});
			}
		}).then(() => {
			if(!animationPaused) {
				return new Promise((resolve) => {
					setTimeout(function() {
						play.style.display = 'none',
							start.style.display = 'block';
					}, 3000);
				});
			}
		})
	}
	done = "animation_13 is done";
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