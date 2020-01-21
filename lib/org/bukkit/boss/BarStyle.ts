declare var Java: any;

export interface BarStyle {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class BarStyle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarStyle');
	}

	public static get SOLID(): BarStyle {
		return this.$javaClass.SOLID;
	}
	public static get SEGMENTED_6(): BarStyle {
		return this.$javaClass.SEGMENTED_6;
	}
	public static get SEGMENTED_10(): BarStyle {
		return this.$javaClass.SEGMENTED_10;
	}
	public static get SEGMENTED_12(): BarStyle {
		return this.$javaClass.SEGMENTED_12;
	}
	public static get SEGMENTED_20(): BarStyle {
		return this.$javaClass.SEGMENTED_20;
	}
}

