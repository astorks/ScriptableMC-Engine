declare var Java: any;
import {FireworkEffect} from '../../org/bukkit/FireworkEffect.js'
import {FireworkEffect$Type} from '../../org/bukkit/FireworkEffect$Type.js'
import {Color} from '../../org/bukkit/Color.js'

export interface FireworkEffect$Builder {
	build(): FireworkEffect;
	with(type: FireworkEffect$Type): FireworkEffect$Builder;
	flicker(flicker: boolean): FireworkEffect$Builder;
	withColor(colors: any): FireworkEffect$Builder;
	withColor(colors: Array<Color>): FireworkEffect$Builder;
	withColor(color: Color): FireworkEffect$Builder;
	withFade(colors: any): FireworkEffect$Builder;
	withFade(colors: Array<Color>): FireworkEffect$Builder;
	withFade(color: Color): FireworkEffect$Builder;
	trail(trail: boolean): FireworkEffect$Builder;
	withTrail(): FireworkEffect$Builder;
	withFlicker(): FireworkEffect$Builder;
}

export class FireworkEffect$Builder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect$Builder');
	}
}

