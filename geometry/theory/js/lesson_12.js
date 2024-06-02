
var el_ind_3 = (document.getElementsByClassName('ind_3'))
var el_ind_4 = (document.getElementsByClassName('ind_4'))
var el_ind_5 = (document.getElementsByClassName('C1'))
var el_ind_5_line = (document.getElementsByClassName('C1_C2'))
var el_ind_6_circle = (document.getElementsByClassName('circle'))
var el_ind_6_A2_A3 = (document.getElementsByClassName('A2_A3'))
var el_ind_6_B2_B3 = (document.getElementsByClassName('B2_B3'))
var el_ind_6_A3 = (document.getElementsByClassName('A3'))
var el_ind_6_B3 = (document.getElementsByClassName('B3'))
var el_ind_6_delta3 = (document.getElementsByClassName('delta_3'))
var el_ind_6_delta1 = (document.getElementsByClassName('delta_1'))
var el_ind_6_hatch_A2_A3 = (document.getElementsByClassName('hatch_A2_A3'))
var el_ind_6_hatch_B2_B3 = (document.getElementsByClassName('hatch_B2_B3'))
var el_ind_7_line_A2_A1 = (document.getElementsByClassName('A2_A1'))
var el_ind_7_A1 = (document.getElementsByClassName('A1'))
var el_ind_7_A2_A1 = (document.getElementsByClassName('hatch_A2_A1'))
var el_ind_7_line_B2_B1 = (document.getElementsByClassName('B2_B1'))
var el_ind_7_B1 = (document.getElementsByClassName('B1'))
var el_ind_7_B2_B1 = (document.getElementsByClassName('hatch_B2_B1'))
var el_ind_7_x = (document.getElementsByClassName('x'))
var el_ind_8_l2 = (document.getElementsByClassName('l2'))
var el_ind_8_line_1 = (document.getElementsByClassName('line_1'))
var el_ind_8_line_2 = (document.getElementsByClassName('line_2'))
var el_ind_8_line_3 = (document.getElementsByClassName('line_3'))
var el_ind_8_line_4 = (document.getElementsByClassName('line_4'))
var el_ind_8_line_5 = (document.getElementsByClassName('line_5'))
var el_ind_8_line_6 = (document.getElementsByClassName('line_6'))
var el_ind_8_point_l3 = (document.getElementsByClassName('l3'))
var el_ind_8_point_l1 = (document.getElementsByClassName('l1'))
var el_ind_8_line_l2_l3 = (document.getElementsByClassName('l2_l3'))
var el_ind_8_line_l2_l1 = (document.getElementsByClassName('l2_l1'))
var red_line = (document.getElementsByClassName('red_line'))
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



function animation_3() {
  if (done == 0) {
    el_ind_3[0].style.opacity = 0;
    el_ind_4[0].style.opacity = 0;
    el_ind_4[1].style.opacity = 0;
    el_ind_3[0].style.animation = "blink 2s forwards"
      el_ind_3[0].style.animationDelay = "0.5s";
      return start_animation(el_ind_3[0]).then(() => {
        if (!animationPaused) {
            return new Promise((resolve) => {
              el_ind_4[0].style.animation = "blink 2s forwards"
              el_ind_4[0].style.animationDelay = "2.5s";
                resolve(start_animation(el_ind_4[0]));
            });
        }
    }).then(() => {
      if (!animationPaused) {
          return new Promise((resolve) => {
            el_ind_4[1].style.animation = "blink 2s forwards"
            el_ind_4[1].style.animationDelay = "4.5s";
              resolve(start_animation(el_ind_4[1]));
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
  if (done = "animation_3 is done") {
    el_ind_5[0].style.opacity = 0;
    el_ind_5_line[0].style.opacity = 0;
    el_ind_5_line[0].style.setProperty('--height_1', '0');
    el_ind_5_line[0].style.setProperty('--height_2', '280');
    el_ind_5_line[0].style.animation = "change_height 1.5s forwards"
    el_ind_5_line[0].style.animationDelay = "0.5s";
      return start_animation(el_ind_5_line[0]).then(() => {
        if (!animationPaused) {
            return new Promise((resolve) => {
              el_ind_5[0].style.animation = "blink 2s forwards"
              el_ind_5[0].style.animationDelay = "2s";
                resolve(start_animation(el_ind_5[0]));
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
  done = "animation_4 is done";
}

function animation_5() {
  if (done = "animation_4 is done") {
el_ind_6_circle[0].style.opacity = 0;
el_ind_6_A2_A3[0].style.opacity = 0;
el_ind_6_B2_B3[0].style.opacity = 0;
el_ind_6_A3[0].style.opacity = 0;
el_ind_6_B3[0].style.opacity = 0;
el_ind_6_delta3[0].style.opacity = 0;
el_ind_6_delta1[0].style.opacity = 0;
el_ind_6_hatch_B2_B3[0].style.opacity = 0;
el_ind_6_hatch_A2_A3[0].style.opacity = 0;
el_ind_6_circle[0].style.setProperty('--var_1', '0');
el_ind_6_circle[0].style.setProperty('--var_2', '235');
el_ind_6_circle[0].style.setProperty('--var_3', '0');
el_ind_6_circle[0].style.setProperty('--var_4', '235');
el_ind_6_circle[0].style.setProperty('--var_5', '0');
el_ind_6_circle[0].style.setProperty('--var_6', '0');
el_ind_6_circle[0].style.setProperty('--var_7', '471');
el_ind_6_circle[0].style.setProperty('--var_8', '0');
el_ind_6_circle[0].style.animation = "change_strokeDasharray 2.5s forwards"
el_ind_6_circle[0].style.animationDelay = "0.5s";
      return start_animation(el_ind_6_circle[0]).then(() => {
        if (!animationPaused) {
            return new Promise((resolve) => {
              el_ind_6_A2_A3[0].style.setProperty('--width_1', '0');
              el_ind_6_A2_A3[0].style.setProperty('--width_2', '300');
              el_ind_6_A2_A3[0].style.animation = "change_width 2.5s forwards"
              el_ind_6_A2_A3[0].style.animationDelay = "2.5s";
                resolve(start_animation(el_ind_6_A2_A3[0]));
            });
        }
  }).then(() => {
    if (!animationPaused) {
        return new Promise((resolve) => {
          el_ind_6_B2_B3[0].style.setProperty('--width_1', '0');
          el_ind_6_B2_B3[0].style.setProperty('--width_2', '300');
          el_ind_6_B2_B3[0].style.animation = "change_width 2.5s forwards"
          el_ind_6_B2_B3[0].style.animationDelay = "3.5s";
            resolve(start_animation(el_ind_6_B2_B3[0]));
        });
    }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_6_A3[0].style.animation = "blink 2s forwards"
        el_ind_6_A3[0].style.animationDelay = "5.5s";
          resolve(start_animation(el_ind_6_A3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_6_delta3[0].style.animation = "blink 2s forwards"
        el_ind_6_delta3[0].style.animationDelay = "7.5s";
          resolve(start_animation(el_ind_6_delta3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_6_delta1[0].style.animation = "blink 2s forwards"
        el_ind_6_delta1[0].style.animationDelay = "7.5s";
          resolve(start_animation(el_ind_6_delta1[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_6_B3[0].style.animation = "blink 2s forwards"
        el_ind_6_B3[0].style.animationDelay = "9.5s";
          resolve(start_animation(el_ind_6_B3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_6_hatch_A2_A3[0].style.animation = "blink 2s forwards"
        el_ind_6_hatch_A2_A3[0].style.animationDelay = "11.5s";
          resolve(start_animation(el_ind_6_hatch_A2_A3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_6_hatch_B2_B3[0].style.animation = "blink 2s forwards"
        el_ind_6_hatch_B2_B3[0].style.animationDelay = "13.5s";
          resolve(start_animation(el_ind_6_hatch_B2_B3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_6_hatch_B2_B3[1].style.animation = "blink 2s forwards"
        el_ind_6_hatch_B2_B3[1].style.animationDelay = "13.5s";
          resolve(start_animation(el_ind_6_hatch_B2_B3[1]));
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
  done = "animation_5 is done";
}

function animation_6() {
  if (done = "animation_5 is done") {
      el_ind_7_line_A2_A1[0].style.setProperty('--height_1', '0');
      el_ind_7_line_A2_A1[0].style.setProperty('--height_2', '380');
      el_ind_7_line_A2_A1[0].style.animation = "change_height 1.5s forwards"
      el_ind_7_line_A2_A1[0].style.animationDelay = "0.5s";
      return start_animation(el_ind_7_line_A2_A1[0]).then(() => {
        if (!animationPaused) {
            return new Promise((resolve) => {
              el_ind_7_line_B2_B1[0].style.setProperty('--height_1', '0');
              el_ind_7_line_B2_B1[0].style.setProperty('--height_2', '380');
              el_ind_7_line_B2_B1[0].style.animation = "change_height 1.5s forwards"
              el_ind_7_line_B2_B1[0].style.animationDelay = "2s";
                resolve(start_animation(el_ind_7_line_B2_B1[0]));
            });
        }
    }).then(() => {
      if (!animationPaused) {
          return new Promise((resolve) => {
            el_ind_7_A2_A1[0].style.animation = "blink 2s forwards"
            el_ind_7_A2_A1[0].style.animationDelay = "3.5s";
              resolve(start_animation(el_ind_7_A2_A1[0]));
          });
      }
  }).then(() => {
    if (!animationPaused) {
        return new Promise((resolve) => {
          el_ind_7_A1[0].style.animation = "blink 2s forwards"
          el_ind_7_A1[0].style.animationDelay = "3.5s";
            resolve(start_animation(el_ind_7_A1[0]));
        });
    }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_7_B1[0].style.animation = "blink 2s forwards"
        el_ind_7_B1[0].style.animationDelay = "5.5s";
          resolve(start_animation(el_ind_7_B1[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_7_B2_B1[0].style.animation = "blink 2s forwards"
        el_ind_7_B2_B1[0].style.animationDelay = "5.5s";
          resolve(start_animation( el_ind_7_B2_B1[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_7_B2_B1[1].style.animation = "blink 2s forwards"
        el_ind_7_B2_B1[1].style.animationDelay = "5.5s";
          resolve(start_animation( el_ind_7_B2_B1[1]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_7_x[0].style.animation = "blink 2s forwards"
        el_ind_7_x[0].style.animationDelay = "5.5s";
          resolve(start_animation(el_ind_7_x[0]));
      });
  }
}).then(() => {
  if(!animationPaused) {
    return new Promise((resolve) => {
        play.style.animation = "change_display_1 0.1s forwards"
        play.style.animationDelay = "7.3s";
        resolve(start_animation(play));
      });
    }
  }).then(() => {
    if(!animationPaused) {
      return new Promise((resolve) => {
        start.style.animation = "change_display 0.1s forwards"
        start.style.animationDelay = "7.3s";
        resolve(start_animation(start));
    });
  }
})
}
  done = "animation_6 is done";
}


function animation_7() {
  if (done = "animation_6 is done") {
    el_ind_8_l2[0].style.animation = "blink 3s forwards"
    el_ind_8_l2[0].style.animationDelay = "0.5s";
      return start_animation(el_ind_8_l2[0]).then(() => {
        if (!animationPaused) {
            return new Promise((resolve) => {
              el_ind_8_line_4[0].style.animation = "blink 2s forwards"
              el_ind_8_line_4[0].style.animationDelay = "1s";
                resolve(start_animation(el_ind_8_line_4[0]));
            });
        }
    }).then(() => {
      if (!animationPaused) {
          return new Promise((resolve) => {
            el_ind_8_line_1[0].style.animation = "blink 2s forwards"
            el_ind_8_line_1[0].style.animationDelay = "1s";
              resolve(start_animation(el_ind_8_line_1[0]));
          });
      }
  }).then(() => {
    if (!animationPaused) {
        return new Promise((resolve) => {
          el_ind_8_line_5[0].style.animation = "blink 1s forwards"
          el_ind_8_line_5[0].style.animationDelay = "2s";
            resolve(start_animation(el_ind_8_line_5[0]));
        });
    }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_2[0].style.animation = "blink 1s forwards"
        el_ind_8_line_2[0].style.animationDelay = "2s";
          resolve(start_animation( el_ind_8_line_2[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_6[0].style.animation = "change_opasity 0.5s forwards"
        el_ind_8_line_6[0].style.animationDelay = "3s";
          resolve(start_animation(el_ind_8_line_6[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_3[0].style.animation = "change_opasity 0.5s forwards"
        el_ind_8_line_3[0].style.animationDelay = "3s";
          resolve(start_animation(el_ind_8_line_3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_l2_l1[0].style.setProperty('--height_1', '0');
        el_ind_8_line_l2_l1[0].style.setProperty('--height_2', '380');
        el_ind_8_line_l2_l1[0].style.animation = "change_height 1.5s forwards"
        el_ind_8_line_l2_l1[0].style.animationDelay = "3.5s";
          resolve(start_animation( el_ind_8_line_l2_l1[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_l2_l3[0].style.setProperty('--width_1', '0');
        el_ind_8_line_l2_l3[0].style.setProperty('--width_2', '380');
        el_ind_8_line_l2_l3[0].style.animation = "change_width 1.5s forwards"
        el_ind_8_line_l2_l3[0].style.animationDelay = "5.5s";
          resolve(start_animation(el_ind_8_line_l2_l3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_1[1].style.setProperty('--width_1', '0');
        el_ind_8_line_1[1].style.setProperty('--width_2', '573');
        el_ind_8_line_1[1].style.animation = "change_width 1.5s forwards"
        el_ind_8_line_1[1].style.animationDelay = "10s";
          resolve(start_animation( el_ind_8_line_1[1]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_4[1].style.setProperty('--height_1', '0');
        el_ind_8_line_4[1].style.setProperty('--height_2', '380');
        el_ind_8_line_4[1].style.animation = "change_height 1.5s forwards"
        el_ind_8_line_4[1].style.animationDelay = "10s";
          resolve(start_animation(el_ind_8_line_4[1]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_2[1].style.setProperty('--width_1', '0');
        el_ind_8_line_2[1].style.setProperty('--width_2', '573');
        el_ind_8_line_2[1].style.animation = "change_width 1.5s forwards"
        el_ind_8_line_2[1].style.animationDelay = "10s";
          resolve(start_animation(el_ind_8_line_2[1]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_5[1].style.setProperty('--height_1', '0');
        el_ind_8_line_5[1].style.setProperty('--height_2', '380');
        el_ind_8_line_5[1].style.animation = "change_height 1.5s forwards"
        el_ind_8_line_5[1].style.animationDelay = "10s";
          resolve(start_animation(el_ind_8_line_5[1]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_line_3[1].style.setProperty('--width_1', '0');
        el_ind_8_line_3[1].style.setProperty('--width_2', '573');
        el_ind_8_line_3[1].style.animation = "change_width 1.5s forwards"
        el_ind_8_line_3[1].style.animationDelay = "10s";
          resolve(start_animation(el_ind_8_line_3[1]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_point_l3[0].style.animation = "blink 1s forwards"
        el_ind_8_point_l3[0].style.animationDelay = "7s";
          resolve(start_animation(el_ind_8_point_l3[0]));
      });
  }
}).then(() => {
  if (!animationPaused) {
      return new Promise((resolve) => {
        el_ind_8_point_l1[0].style.animation = "blink 1s forwards"
        el_ind_8_point_l1[0].style.animationDelay = "8s";
          resolve(start_animation(el_ind_8_point_l1[0]));
      });
  }
}).then(() => {
  if(!animationPaused) {
    return new Promise((resolve) => {
        play.style.animation = "change_display_1 0.1s forwards"
        play.style.animationDelay = "11.5s";
        resolve(start_animation(play));
      });
    }
  }).then(() => {
    if(!animationPaused) {
      return new Promise((resolve) => {
        start.style.animation = "change_display 0.1s forwards"
        start.style.animationDelay = "11.5s";
        resolve(start_animation(start));
    });
  }
})
}
  done = "animation_7 is done";
}




function animation_8() {
  if (done = "animation_7 is done") {
    red_line[0].style.setProperty('--width_1', '0');
    red_line[0].style.setProperty('--width_2', '280');
    red_line[0].style.animation = "change_width 1.5s forwards"
    red_line[0].style.animationDelay = "0.5s";
      return start_animation(red_line[0]).then(() => {
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
  done = "animation_8 is done";
}
