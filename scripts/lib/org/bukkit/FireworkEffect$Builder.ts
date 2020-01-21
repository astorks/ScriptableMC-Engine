declare var Java: any;
import {FireworkEffect} from '../../org/bukkit/FireworkEffect.js'
import {FireworkEffect$Type} from '../../org/bukkit/FireworkEffect$Type.js'
import {Color} from '../../org/bukkit/Color.js'

export interface FireworkEffect$Builder {
	build(): FireworkEffect;
	with(arg0: FireworkEffect$Type): FireworkEffect$Builder;
	flicker(arg0: boolean): FireworkEffect$Builder;
	trail(arg0: boolean): FireworkEffect$Builder;
	withFade(arg0: any): FireworkEffect$Builder;
	withFade(arg0: Color): FireworkEffect$Builder;
	withFade(arg0: Array<Color>): FireworkEffect$Builder;
	withFlicker(): FireworkEffect$Builder;
	withTrail(): FireworkEffect$Builder;
	withColor(arg0: Color): FireworkEffect$Builder;
	withColor(arg0: any): FireworkEffect$Builder;
	withColor(arg0: Array<Color>): FireworkEffect$Builder;
}

export class FireworkEffect$Builder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect$Builder');
	}
}

