declare var Java: any;
import {DyeColor} from '../../org/bukkit/DyeColor.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Color extends ConfigurationSerializable {
	serialize(): any;
	asBGR(): number;
	setGreen(arg0: number): Color;
	mixDyes(arg0: Array<DyeColor>): Color;
	setRed(arg0: number): Color;
	getRed(): number;
	getGreen(): number;
	getBlue(): number;
	mixColors(arg0: Array<Color>): Color;
	setBlue(arg0: number): Color;
	asRGB(): number;
}

export class Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Color');
	}
	public static deserialize(arg0: any): Color {
		return Color.$javaClass.deserialize(arg0);
	}
	public static fromBGR(arg0: number): Color {
		return Color.$javaClass.fromBGR(arg0);
	}
	public static fromBGR0(arg0: number, arg1: number, arg2: number): Color {
		return Color.$javaClass.fromBGR(arg0, arg1, arg2);
	}
	public static fromRGB(arg0: number): Color {
		return Color.$javaClass.fromRGB(arg0);
	}
	public static fromRGB0(arg0: number, arg1: number, arg2: number): Color {
		return Color.$javaClass.fromRGB(arg0, arg1, arg2);
	}
}

