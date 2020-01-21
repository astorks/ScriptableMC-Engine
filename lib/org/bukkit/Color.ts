declare var Java: any;
import {DyeColor} from '../../org/bukkit/DyeColor.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Color extends ConfigurationSerializable {
	serialize(): any;
	getRed(): number;
	getBlue(): number;
	setGreen(green: number): Color;
	setRed(red: number): Color;
	setBlue(blue: number): Color;
	asRGB(): number;
	asBGR(): number;
	getGreen(): number;
	mixDyes(colors: Array<DyeColor>): Color;
	mixColors(colors: Array<Color>): Color;
}

export class Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Color');
	}
	public static get WHITE(): Color {
		return Color.$javaClass.WHITE;
	}
	public static get SILVER(): Color {
		return Color.$javaClass.SILVER;
	}
	public static get GRAY(): Color {
		return Color.$javaClass.GRAY;
	}
	public static get BLACK(): Color {
		return Color.$javaClass.BLACK;
	}
	public static get RED(): Color {
		return Color.$javaClass.RED;
	}
	public static get MAROON(): Color {
		return Color.$javaClass.MAROON;
	}
	public static get YELLOW(): Color {
		return Color.$javaClass.YELLOW;
	}
	public static get OLIVE(): Color {
		return Color.$javaClass.OLIVE;
	}
	public static get LIME(): Color {
		return Color.$javaClass.LIME;
	}
	public static get GREEN(): Color {
		return Color.$javaClass.GREEN;
	}
	public static get AQUA(): Color {
		return Color.$javaClass.AQUA;
	}
	public static get TEAL(): Color {
		return Color.$javaClass.TEAL;
	}
	public static get BLUE(): Color {
		return Color.$javaClass.BLUE;
	}
	public static get NAVY(): Color {
		return Color.$javaClass.NAVY;
	}
	public static get FUCHSIA(): Color {
		return Color.$javaClass.FUCHSIA;
	}
	public static get PURPLE(): Color {
		return Color.$javaClass.PURPLE;
	}
	public static get ORANGE(): Color {
		return Color.$javaClass.ORANGE;
	}
}

