import { AnimatedSprite, Container, Texture } from "pixi.js";
import { SkaterGlasses } from "./SkaterGlasses";

export class Scene extends Container{
    
    constructor(){
        super()
        const skaterWithGlasses: SkaterGlasses = new SkaterGlasses();

	   this.addChild(skaterWithGlasses)

       const catAnimated: AnimatedSprite = new AnimatedSprite(
        [
            Texture.from("GatoRun1"),
            Texture.from("GatoRun2"),
            Texture.from("GatoRun3"),
            Texture.from("GatoRun4"),
            Texture.from("GatoRun5"),
            Texture.from("GatoRun6")
        ], 
        true
       );
       catAnimated.play();
       catAnimated.animationSpeed = 0.2;
       this.addChild(catAnimated);

    }
}