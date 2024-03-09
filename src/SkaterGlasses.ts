import { Container, Sprite } from "pixi.js";

export class SkaterGlasses extends Container{
    
    constructor(){
       
        super();
        
        const skater: Sprite = Sprite.from("Skater");
	
        const glasses: Sprite = Sprite.from("Glasses");

        glasses.scale.set(0.10,0.10)
        glasses.position.set(220,120)

        this.addChild(skater);
        this.addChild(glasses);
    }

}