declare var Java: any;
import {DyeColor} from '../../../org/bukkit/DyeColor.js'

export interface Colorable {
	setColor(color: DyeColor): void;
	getColor(): DyeColor;
}

export class Colorable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Colorable');
	}
}

