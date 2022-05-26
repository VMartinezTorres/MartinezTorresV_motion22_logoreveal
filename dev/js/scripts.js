import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//register all plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const mainTL = gsap.timeline();

mainTL.from("#Vector", {duration: 3, drawSVG: 0}, "field")
      .from("#Vector_2", {duration: 3, drawSVG: 0},"field")
      .from("#Vector_3", {duration: 3, drawSVG: 0},"field")
      .from("#Vector_4", {duration: 3, drawSVG: 0},"field")
      .from("#Vector_5", {duration: 3, drawSVG: 0},"field")
      .from("#Vector_6", {duration: 3, drawSVG: 0},"field")
      .from("#Vector_7", {duration: 3, drawSVG: 0},"field")
      .from("#Vector_8", {duration: 3, drawSVG: 0},"field")
      .from("#Vector_9", {duration: 3, drawSVG: 0},"field")
      .fromTo("#Vector_10", {drawSVG: "100% 100%"}, {duration: 3, drawSVG: "100% 0%"},"field");

const secTL = gsap.timeline();  



secTL.from("#gold_1", {duration: 2, x: -20, y: -10}, "gold")
     .from("#gold_2", {duration: 2, y: -40}, "gold")  //goalie
     .from("#gold_3", {duration: 2, x: -20, y: -10}, "gold")
     .from("#gold_4", {duration: 2, x: -20, y: -10}, "gold")
     .from("#gold_5", {duration: 2, x: -20, y: -10}, "gold")
     .from("#gold_6", {duration: 2, x: -20, y: -10}, "gold")

      
     .from("#blue_1", {duration: 2, x: -20, y: -10}, "blue")
     .from("#blue_2", {duration: 2, y: -40}, "blue") //goalie
     .from("#blue_3", {duration: 2, x: -20, y: -10}, "blue")
     .from("#blue_4", {duration: 2, x: -20, y: -10}, "blue")
     .from("#blue_5", {duration: 2, x: -20, y: -10}, "blue")
     .from("#blue_6", {duration: 2, x: -20, y: -10}, "blue")
     
     .to("#gold_1", {duration: 4, motionPath:{path:"#gold_path_1", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#gold_3", {duration: 4, motionPath:{path:"#gold_path_3", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#gold_4", {duration: 4, motionPath:{path:"#gold_path_4", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#gold_5", {duration: 4, motionPath:{path:"#gold_path_5", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
      .to("#gold_6", {duration: 4, motionPath:{path:"#gold_path_6", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")

     .to("#blue_1", {duration: 4, motionPath:{path:"#blue_path_1", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#blue_3", {duration: 4, motionPath:{path:"#blue_path_3", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#blue_4", {duration: 4, motionPath:{path:"#blue_path_4", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#blue_5", {duration: 4, motionPath:{path:"#blue_path_5", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#blue_6", {duration: 4, motionPath:{path:"#blue_path_6", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     
     .to("#blue_2", {duration: 4, motionPath:{path:"#goalie_2", align: "self", alignOrigin:[0.5, 0.5], start: 1, end: 0}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")
     .to("#gold_2", {duration: 4, motionPath:{path:"#goalie_1", align: "self", alignOrigin:[0.5, 0.5], start: 0, end: 1}, yoyo: true, ease: "power1.inOut", repeat: -1}, "gp")

     .set("#Vector_5", {stroke:"#C3922E"}, "gp")

      .to("#Vector_5", {stroke:"#ffffff", duration: 0.25, repeat: -1, repeatDelay: 3.75, yoyo: true}, "gp+=4")
      .to("#Vector_10", {stroke:"#29ABE2", duration: 0.25, repeat: -1, repeatDelay: 3.75, yoyo: true}, "gp+=4")
     ;

     












      // function dropIn(){
//     let tl = gsap.timeline();
//     //WITHOUT CLASSES
//     // tl.from("#ball-1", {duration:0.5, y:"-=200", alpha:0, ease: "bounce.out"})
//     // .from("#ball-2", {duration:0.5, y:"-=200", alpha:0, ease: "bounce.out"}, "-=50%")
//     // .from("#ball-3", {duration:0.5, y:"-=200", alpha:0, ease: "bounce.out"}, "-=50%");

//     tl.from(".ball", {duration:0.5, y:"-=200", stagger:0.25, alpha:0, ease:"bounce.out"},"start")
//     //drawSVG DEMO
//     // .from("#line-1", {drawSVG:0},"line")
//     // .fromTo("#line-2", {drawSVG:"90% 100%"},{duration:2, drawSVG:"0% 10%"},"line")
//     .from("#outline", {duration:1, drawSVG:"0%"},"start")

//     ;

//     return tl;

    
// }

// function ballHop(){
//     let tl = gsap.timeline({repeat:2});

//     //MotionPathHelper example
//     // .to("#ball-1", {duration:1, scale:0.5, motionPath:{
//     //     path:"M432.355,360.355 C432.355,316.725 496.1,350.842 504.85,308.073 511.178,277.049 553.607,290.037 570.177,307.963 581.177,319.867 590.355,342.903 590.355,360.355 ",
//     //     align:"self",
//     //     alignOrigin:[0.5, 0.5]
//     // }, ease:"power4.out"})

//     tl.to("#ball-1", {duration:0.5, scale:0.5, motionPath:{
//         path:"#path-1",
//         align:"#path-1",
//         alignOrigin:[0.5, 0.5]
//     }, ease:"power4.out"})
//     tl.to("#ball-2", {duration:0.5, scale:0.5, motionPath:{
//         path:"#path-2",
//         align:"#path-2",
//         alignOrigin:[0.5, 0.5]
//     }, ease:"power4.out"},"-=75%")
//     tl.to("#ball-3", {duration:0.5, scale:0.5, motionPath:{
//         path:"#path-3",
//         align:"#path-3",
//         alignOrigin:[0.5, 0.5]
//     }, ease:"power4.out"},"-=75%")
//     .to("#ball-1", {duration:0.25, x:"-=158"})
//     .to("#ball-2", {duration:0.25, x:"-=158"}, "-=50%")
//     .to("#ball-3", {duration:0.25, x:"-=158"}, "-=50%")



//     ;

//     return tl;

    
// }



// //ballOne();




// mainTL.add(dropIn())
// .add(ballHop())
// ;

//MotionPathHelper.create("#ball-1");
//GSDevTools.create();