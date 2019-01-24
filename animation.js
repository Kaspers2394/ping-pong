setup = () => {
   //get text right function call
   setText();

   const tl = new TimelineMax();
//setup for rocket
   tl.set(document.getElementById('rocket'), {
      x: () => {
         var x = rocket.getBoundingClientRect().width * 2;
         return '-' + x
      },
      opacity: 1,
      scale: 0.4,
   });
   //setup for 'game' text
   tl.set(document.getElementById('game'), {
      opacity: 1,
      x: vwToPx(38),
      y: vhToPx(-34),
      opacity: 1
   });
   //setup for the box
   tl.set(document.getElementById('boxet'), {
      opacity: 1,
      left: vwToPx(15),
      top: vhToPx(40),
      right: vwToPx(15),
      bottom: vhToPx(2),
      scale: 0,
      transformOrigin: "bottom center",
      opacity: 0
   });

   tl.set(document.getElementById('startBtn'), {
      scale: 0,
      opacity: 1,
   });

   tl.set('.sing', {
      opacity: 0.4
   });
   return tl;
}

rocketAnimation = () => {
   const tl = new TimelineMax({
      repeat: -1
   });
// data for flying out bubbles
   tweenXYOpacityData = [{
         id: 'bigLast',
         timeMin: 1.2,
         timeMax: 2,
         xMin: -100,
         xMax: -300,
         yMin: 25,
         yMax: -25,
         delay: 0,
         opacity: 0
      },
      {
         id: 'middleLast',
         timeMin: 1.2,
         timeMax: 2,
         xMin: -100,
         xMax: -400,
         yMin: 25,
         yMax: -25,
         delay: 0.8,
         opacity: 0
      },
      {
         id: 'middleLast2',
         timeMin: 1.2,
         timeMax: 2,
         xMin: -100,
         xMax: -400,
         yMin: 25,
         yMax: -25,
         delay: 1.4,
         opacity: 0
      },
      {
         id: 'smallLast',
         timeMin: 1.2,
         timeMax: 2,
         xMin: -100,
         xMax: -250,
         yMin: 25,
         yMax: -25,
         delay: 0.3,
         opacity: 0
      },
      {
         id: 'smallLast2',
         timeMin: 1.5,
         timeMax: 2,
         xMin: -100,
         xMax: -300,
         yMin: 25,
         yMax: -25,
         delay: 0.8,
         opacity: 0
      },
      {
         id: 'smallLast3',
         timeMin: 1.5,
         timeMax: 2,
         xMin: -100,
         xMax: -300,
         yMin: 25,
         yMax: -25,
         delay: 1.3,
         opacity: 0
      }
   ]
   // data for the moving | scaling bubbles
   tweenScaleOpacityData = [{
         id: 'topLeft',
         timeMin: 1.5,
         timeMax: 3,
         xMin: -10,
         xMax: 10,
         yMin: -10,
         yMax: 10,
         scaleMin: 0.97,
         scaleMax: 0.85,
         delay: 0,
         opacity: 0.6,
         origin: "right bottom"
      },
      {
         id: 'lowerLeft',
         timeMin: 1.5,
         timeMax: 3,
         xMin: -10,
         xMax: 10,
         yMin: -10,
         yMax: 10,
         scaleMin: 0.97,
         scaleMax: 0.85,
         delay: 0,
         opacity: 0.6,
         origin: "right top"
      },
      {
         id: 'lowerMiddle',
         timeMin: 1.5,
         timeMax: 3,
         xMin: -10,
         xMax: 10,
         yMin: -10,
         yMax: 10,
         scaleMin: 0.97,
         scaleMax: 0.9,
         delay: 0,
         opacity: 0.6,
         origin: "center top"
      },
      {
         id: 'topMiddle',
         timeMin: 1.5,
         timeMax: 3,
         xMin: -10,
         xMax: 10,
         yMin: -10,
         yMax: 10,
         scaleMin: 0.97,
         scaleMax: 0.85,
         delay: 0,
         opacity: 0.6,
         origin: "center bottom"
      },
      {
         id: 'topRight',
         timeMin: 1.5,
         timeMax: 4,
         xMin: -10,
         xMax: 10,
         yMin: -10,
         yMax: 10,
         scaleMin: 0.97,
         scaleMax: 0.85,
         delay: 0,
         opacity: 0.8,
         origin: "center bottom"
      },
      {
         id: 'lowerRight',
         timeMin: 1.5,
         timeMax: 4,
         xMin: -10,
         xMax: 10,
         yMin: -10,
         yMax: 10,
         scaleMin: 0.97,
         scaleMax: 0.85,
         delay: 0,
         opacity: 0.8,
         origin: "center center"
      },
      {
         id: 'middleMiddle',
         timeMin: 1.5,
         timeMax: 3,
         xMin: -5,
         xMax: 5,
         yMin: -5,
         yMax: 5,
         scaleMin: 0.97,
         scaleMax: 0.94,
         delay: 0,
         opacity: 0.8,
         origin: "center center"
      },
      {
         id: 'middleSmall',
         timeMin: 3,
         timeMax: 4,
         xMin: -50,
         xMax: -10,
         yMin: -5,
         yMax: 5,
         scaleMin: 0.97,
         scaleMax: 0.94,
         delay: 0,
         opacity: 0.8,
         origin: "center center"
      },
      {
         id: 'middleBig',
         timeMin: 1.5,
         timeMax: 4,
         xMin: -5,
         xMax: 5,
         yMin: -5,
         yMax: 5,
         scaleMin: 0.99,
         scaleMax: 0.97,
         delay: 0,
         opacity: 1,
         origin: "center center"
      },
   ]
   // for each call on flying out bubble' data
   tweenXYOpacityData.map(tween => {
      tl.call(tweenXYOpacity, [document.getElementById(tween.id), tween.timeMin, tween.timeMax, tween
         .xMin, tween.xMax, tween.yMin, tween.yMax, tween.delay, tween.opacity
      ]);
   });
   // ffor each call for the moving | scaling bubble' data
   tweenScaleOpacityData.map(tween => {
      tl.call(tweenScaleOpacity, [document.getElementById(tween.id), tween.timeMin, tween.timeMax,
         tween.xMin, tween.xMax, tween.yMin, tween.yMax, tween.scaleMin, tween.scaleMax, tween.delay,
         tween.opacity, tween.origin
      ]);
   });
   tl.to(document.getElementById('middleRight'), 0.3, {
      opacity: 0.7,
      yoyo: true,
      repeat: -1,
   });

   return tl;
}

flyIn1 = () => {
   const tl = new TimelineMax();

   path1 = [
      //FLYIN 1
      {
         x: () => {
            var x = rocket.getBoundingClientRect().width;
            return '-' + x
         },
         y: vhToPx(30)
      },
      {
         x: vwToPx(40),
         y: vhToPx(0)
      },
      {
         x: vwToPx(0),
         y: vhToPx(-15)
      },
      {
         x: vwToPx(25),
         y: vhToPx(20)
      },
      {
         x: vwToPx(80),
         y: vhToPx(40)
      },
      {
         x: vwToPx(140),
         y: vhToPx(50)
      },
   ]
   // scaling rocket
   tl.to(rocket, 0.1, {
      scale: .4
   });

   tl.add(TweenMax.to(rocket, 4, {
      bezier: {
         curviness: 1,
         values: path1,
         autoRotate: true,
      },
      force3D: true,
      ease: Power0.easeNone,
      onComplete: () => {
         master.add("flyIn1Done")
      }
   }, ))
   return tl;
}

flyIn2 = () => {
   const tl = new TimelineMax();

   path2 = [
      //FLYIN 2
      {
         x: vwToPx(-60),
         y: vhToPx(-40)
      },
      {
         x: vwToPx(-40),
         y: vhToPx(50)
      },
   ]

   // scaling rocket
   tl.to(rocket, 0.1, {
      scale: .5
   });

   tl.add(TweenMax.to(rocket, 3, {
      bezier: {
         curviness: 1,
         values: path2,
         autoRotate: true,
      },
      force3D: true,
      ease: Power0.easeNone,
      onComplete: () => {
         master.add("flyIn2Done")
      }
   }, ));
   return tl;
}

flyIn3 = () => {
   const tl = new TimelineMax();

   path3 = [
      //FLYIN 3
      {
         x: vwToPx(-20),
         y: vhToPx(35)
      },
      {
         x: vwToPx(100),
         y: vhToPx(35)
      },
      {
         x: vwToPx(130),
         y: vhToPx(0)
      },
   ]

   //scaling rocket
   tl.to(rocket, 0.1, {
      scale: .7
   });

   tl.add(TweenMax.to(rocket, 3, {
      bezier: {
         curviness: 1,
         values: path3,
         autoRotate: true,
      },
      force3D: true,
      ease: Power0.easeNone,
      onComplete: () => {
         mater.add("flyIn3Done")
      }
   }, ));
   return tl;
}

flyIn4 = () => {
   const tl = new TimelineMax();
   path4 = [
      //FLYIN 4
      {
         x: vwToPx(60),
         y: vhToPx(-20)
      },
      {
         x: vwToPx(-30),
         y: vhToPx(-120)
      },
   ]

   tl.add(TweenMax.to(rocket, 3, {
      bezier: {
         curviness: 2,
         values: path4,
         autoRotate: true,
      },
      force3D: true,
      ease: Power0.easeNone,
      onComplete: () => {
         master.add("flyIn4Done")
      }
   }, ));
   return tl;
}

flyIn5 = () => {
   const tl = new TimelineMax();

   path5 = [
      //FLYIN 5
      {
         x: vwToPx(-80),
         y: vhToPx(0)
      },
      {
         x: vwToPx(-50),
         y: vhToPx(-15)
      },
      {
         x: vwToPx(25),
         y: vhToPx(-20)
      },
   ]

   //scaling rocket
   tl.to(rocket, 0.8, {
      scale: 1,
      transformOrigin: "center center",
   });

   tl.add(TweenMax.to(rocket, 3, {
      bezier: {
         curviness: 1,
         values: path5,
         autoRotate: true,
      },
      force3D: true,
      ease: Power0.easeNone,
      onComplete: () => {
         master.add("flyIn5Done")
      }
   }));
   return tl;
}



titleEnter1 = () => {
   const tl = new TimelineMax();

   path = [{
      x: vwToPx(85),
      y: vhToPx(-10)
   }, {
      x: vwToPx(30),
      y: vhToPx(55)
   }, {
      x: vwToPx(40),
      y: vhToPx(45)
   }]

   tl.staggerTo(".sing", 1, {
      bezier: {
         curviness: 1,
         curves: 2,
         autoRotate: true,
         values: path
      },
      ease: Power1.easeOut,
   }, 0.2);
   return tl;
}

titleEnter2 = () => {
   const tl = new TimelineMax();

   tl.staggerTo(".sing", 1, {
      delay: 0.5,
      transformOrigin: "50% 50% 100",
      rotationY: 180,
      rotationZ: 180,
      rotationX: -180,
      scale: 1,
      y: vhToPx(60),
      x: vwToPx(30)
   }, 0.2);

   return tl;
}

titleEnter3 = () => {
   const tl = new TimelineMax();

   tl.staggerTo(".sing", .4, {
      delay: 0.1,
      textShadow: "0 2px 25px rgba(255, 255, 255, 0.479)",
      opacity: 1
   }, 0.05);

   return tl;
}
boxEnter = () => {
   const tl = new TimelineMax();

   tl.to(document.getElementById('boxet'), 0.5, {
      scale: 1,
      opacity: 1
   });

   return tl;
}
gameEnter = () => {
   const tl = new TimelineMax();

   tl.to(document.getElementById('game'), 1.3, {
      delay: 0.7,
      y: vhToPx(75),
      ease: Bounce.easeOut
   });

   return tl;
}
buttonEnter = () => {
   const tl = new TimelineMax();

   tl.to(document.getElementById('startBtn'), 0.8, {
         scale: 1,
         ease: Elastic.easeOut.config(1, 0.3)
      })
      // .to(document.getElementById('config'), 0.8, {
      //    scale: 1,
      //    ease: Elastic.easeOut.config(1, 0.3)
      // }, "-=0.5");

   return tl;
}

// MASTER TIMELINE
const master = new TimelineMax({});
master.add(setup())
   .add(rocketAnimation(), 0)
   .add('flyIn')
   .add(flyIn1(), 2)
   .add('flyIn2')
   .add(flyIn2())
   .add(titleEnter1(), "flyIn2Done-=2")
   .add('flyIn3')
   .add(flyIn3())
   .add(titleEnter2(), "flyIn3Done-=2.5")
   .add('flyIn4')
   .add(flyIn4())
   .add(titleEnter3(), "flyIn4Done-=2.5")
   .add('flyIn5')
   .add(flyIn5())
   .add('boxEnter')
   .add(boxEnter(), "flyIn5Done-=2")
   .add('gameEnter')
   .add(gameEnter())
   .add('buttonEnter')
   .add(buttonEnter(), "+=0.3")