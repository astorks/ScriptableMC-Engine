declare var Java: any;
import {Color} from '../../org/bukkit/Color.js'

export interface DyeColor {
	getColor(): Color;
	getWoolData(): number;
	getFireworkColor(): Color;
	getDyeData(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class DyeColor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.DyeColor');
	}

	public static get WHITE(): DyeColor {
		return this.$javaClass.WHITE;
	}
	public static get ORANGE(): DyeColor {
		return this.$javaClass.ORANGE;
	}
	public static get MAGENTA(): DyeColor {
		return this.$javaClass.MAGENTA;
	}
	public static get LIGHT_BLUE(): DyeColor {
		return this.$javaClass.LIGHT_BLUE;
	}
	public static get YELLOW(): DyeColor {
		return this.$javaClass.YELLOW;
	}
	public static get LIME(): DyeColor {
		return this.$javaClass.LIME;
	}
	public static get PINK(): DyeColor {
		return this.$javaClass.PINK;
	}
	public static get GRAY(): DyeColor {
		return this.$javaClass.GRAY;
	}
	public static get LIGHT_GRAY(): DyeColor {
		return this.$javaClass.LIGHT_GRAY;
	}
	public static get CYAN(): DyeColor {
		return this.$javaClass.CYAN;
	}
	public static get PURPLE(): DyeColor {
		return this.$javaClass.PURPLE;
	}
	public static get BLUE(): DyeColor {
		return this.$javaClass.BLUE;
	}
	public static get BROWN(): DyeColor {
		return this.$javaClass.BROWN;
	}
	public static get GREEN(): DyeColor {
		return this.$javaClass.GREEN;
	}
	public static get RED(): DyeColor {
		return this.$javaClass.RED;
	}
	public static get BLACK(): DyeColor {
		return this.$javaClass.BLACK;
	}
}

