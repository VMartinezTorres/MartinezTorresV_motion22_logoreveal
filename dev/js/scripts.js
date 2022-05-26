import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//register all plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const mainTL = gsap.timeline();

mainTL.from("#Vector", {duration: 3, drawSVG: 0}, "ol")
      .from("#Vector_2", {duration: 3, drawSVG: 0},"ol")
      .from("#Vector_3", {duration: 3, drawSVG: 0},"ol")
      .from("#Vector_4", {duration: 3, drawSVG: 0},"ol")

//const secTL = gsap.timeline();  



/* secTL.from("#gold_1", {duration: 2, x: -20, y: -10}, "gold")
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
     ; */ 
