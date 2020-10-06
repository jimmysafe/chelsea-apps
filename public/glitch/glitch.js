
  function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
  }

  async function glitch() {
    await zero();
    await first();
    await second();
    await third();
    await fourth();
    await fifth();
    await sixth()
  }

  changeVideoSrc()

  $(window).load( function() {
    $('body').css("overflow", "hidden")
    if (window.matchMedia('(max-width: 480px)').matches) {
      delay(3500)
        .then( _ => {
          glitchStart();
          return delay(1500); 
      }).then( _ => {
          $(".eclipse").css("display","none")
          return delay(50)
      }).then( _ => {
          glitch()
      })
    }else{
      delay(1500)
        .then( _ => {
          glitchStart();
          return delay(1500); 
      }).then( _ => {
          $(".eclipse").css("display","none")
          return delay(50)
      }).then( _ => {
          glitch()
      })
    }
  })


  let glitchStart = () => {
      $( ".glitch-img" ).mgGlitch({
          destroy : false, // set 'true' to stop the plugin
          glitch: true, // set 'false' to stop glitching
          scale: true, // set 'false' to stop scaling
          blend : true, // set 'false' to stop glitch blending
          blendModeType : 'mix-blend-mode', // select blend mode type
          glitch1TimeMin : 5, // set min time for glitch 1 elem
          glitch1TimeMax : 10, // set max time for glitch 1 elem
          glitch2TimeMin : 10, // set min time for glitch 2 elem
          glitch2TimeMax : 100, // set max time for glitch 2 elem
          zIndexStart : 8, // because of absolute position, set z-index base value
      });
  }
  let glitchDestroy = (index, destroy) => {
          $('body').css("overflow", "auto")
          $( ".glitch-img" ).mgGlitch({
          destroy, // set 'true' to stop the plugin
          zIndexStart : index, // because of absolute position, set z-index base value
      });
  };
  const selectorAnimation = () => {
    setTimeout(() => {
      $(".h1-writings span:nth-child(5)").addClass("focused")
    }, 350)
    setTimeout(() => {
        $(".h1-writings span:nth-child(4)").addClass("focused")
    }, 430)
    setTimeout(() => {
        $(".h1-writings span:nth-child(3)").addClass("focused")
    }, 500)
    setTimeout(() => {
        $(".h1-writings span:nth-child(2)").addClass("focused")
    }, 580)
    setTimeout(() => {
        $(".h1-writings span:nth-child(1)").addClass("focused")
    }, 630)
  }
  function changeVideoSrc(){
    if (window.matchMedia('(max-width: 480px)').matches) {
      $("#gifVideo").attr("src",`${window.location.href}glitch/hero_vid_mobile.mp4`)
    }else{
      $("#gifVideo").attr("src",`${window.location.href}glitch/hero_vid.mp4`)
    }
  }

  function zero(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          $("#lottie").css("display", "none"),
          $(".h1-writings").css("display", "flex"),
          setTimeout(() => {
            glitchDestroy(-1, true)
          }, 500)
        );
      }, 100);
    });
  }

  function first() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(glitchDestroy(-1, true));
        setTimeout(() => {
          glitchStart()
        }, 100);
        setTimeout(() => {
          selectorAnimation();
          glitchDestroy(-1, true);
        }, 1000)
      }, 1000);
    });
  }
  
  function second() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve($(".h1-writings").css("display", "none"));
        setTimeout( ()=>{
            $('#first-typewrite').typewrite({
              blinkSpeed: 0,
              showCursor: true,
              blinkingCursor: false,
              cursor: '.',
              actions: [
                  {delay: 200},
                  {speed: 22},
                  {type: 'That '},
                  {type: '<br>'},
                  {delay: 200},
                  {type: 'People '}
              ]
            });
        }, 200)
      }, 2000);
    });
  }
  
  function third() {
    function changeVideo(){
        if (window.matchMedia('(max-width: 480px)').matches) {
          $("#gifVideo").css("opacity", "1")
          $('#gifVideo').get(0).play()
        }else{
          $("#gifVideo").css("opacity", "1")
          $('#gifVideo').get(0).play()
        }
    }
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          changeVideo(),
          setTimeout(() => {
              $('#gifVideo').get(0).pause();
          }, 3500)
        );
      }, 1000);
    });
  }

  function fourth() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
            glitchStart(),
            $("#gifVideo").css({
              "opacity": "0",
              "display": "none"
            }),
        );
            setTimeout(()=>{
              $(".h1-writings-two").css("display", "none")
              $(".h1-writings-three").css("display", "flex")
            }, 500)
            setTimeout(() => {
                glitchDestroy(-1, true)
            },1000)
      }, 5000);
    });
  }

  function fifth() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                $(".parental-advisory").css("display","block"),
                $(".glitch-img").css("background-color", "var(--main-yellow)")
            );
            setTimeout(() => {
                glitchDestroy(-1, true)
            }, 1000)
            }, 800);
        });
  }

  function sixth(){
    return new Promise(resolve => {
        resolve(
            setTimeout(()=>{
                glitchStart();
                setTimeout(()=>{
                    $(".h1-writings-three").css("display", "none")
                    $(".parental-advisory").css("display","none")
                }, 1700)
                setTimeout(()=>{
                    $(".h1-writings-four").css("display", "flex")
                }, 1800)
                setTimeout(()=>{
                    glitchDestroy(-1, true)
                    $('#final-typewrite').typewrite({
                      blinkSpeed: 0,
                      showCursor: true,
                      blinkingCursor: false,
                      cursor: '.',
                      actions: [
                          {delay: 1300},
                          {speed: 12},
                          {type: 'So Users '},
                          {delay: 700},
                          {type: '<br>'},
                          {type: "Don't "},
                          {delay: 100},
                          {type: '<br>'},
                          {type: "Have "},
                          {delay: 200},
                          {type: "T"},
                          {delay: 100},
                          {type: "O"}
                      ]
                    });
                    const mobileBG = `${window.location.href}images/chelsea_apps_home_mobile.png`;
                    const desktopBG = `${window.location.href}images/chelsea_apps_home.jpg`;
                    if (window.matchMedia('(max-width: 480px)').matches) {
                      $(".glitch-img").css({
                        "background-color": "transparent",
                        "background-image": `url(${mobileBG})`,
                        "background-position": "center",
                        "backgorund-size": "cover"
                      });
                    }else{
                      $(".glitch-img").css({
                        "background-color": "transparent",
                        "background-image": `url(${desktopBG})`,
                        "background-position": "center",
                        "backgorund-size": "cover"
                      });
                    }
                    $(".bottom-bar").css("display", "block")  
                }, 2400)
                setTimeout(() => {
                  glitchStart();
                }, 7100)
                setTimeout(() => {
                  $("#sub-hero-appear").css({
                    "display": "flex",
                    "position": "absolute"
                  });
                  $(".blinkingCursor").css("display", "none");
                }, 7500)
                setTimeout(() => {
                  glitchDestroy(-1, true)
                  if (window.matchMedia('(max-width: 480px)').matches) {
                    $(".footer-video-placeholder").css("display","none")
                    $(".video-mobile").css("display","block")
                    $(".video-mobile video").attr("src",`${window.location.href}images/Footer_Mobile_2.0.mp4`)
                    setTimeout(()=> {
                      $(".video-mobile video").get(0).play()
                    }, 500)
                    $(".video-desktop").css("display","none")
                  }else{
                    $(".footer-video-placeholder").css("display","none")
                    $(".video-desktop").css("display","block")
                    $(".video-desktop video").attr("src",`${window.location.href}images/Footer_Web_2.0.mp4`)
                    $(".video-mobile").css("display","none")
                  }
                }, 7650)
            }, 2100)
        );
    })
  }
  

  
  

