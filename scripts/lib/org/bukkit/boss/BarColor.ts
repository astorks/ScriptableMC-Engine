declare var Java: any;

export interface BarColor {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class BarColor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarColor');
	}

	public static get PINK(): BarColor {
		return this.$javaClass.PINK;
	}
	public static get BLUE(): BarColor {
		return this.$javaClass.BLUE;
	}
	public static get RED(): BarColor {
		return this.$javaClass.RED;
	}
	public static get GREEN(): BarColor {
		return this.$javaClass.GREEN;
	}
	public static get YELLOW(): BarColor {
		return this.$javaClass.YELLOW;
	}
	public static get PURPLE(): BarColor {
		return this.$javaClass.PURPLE;
	}
	public static get WHITE(): BarColor {
		return this.$javaClass.WHITE;
	}
}

