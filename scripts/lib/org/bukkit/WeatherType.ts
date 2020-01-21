declare var Java: any;

export interface WeatherType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class WeatherType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WeatherType');
	}

	public static get DOWNFALL(): WeatherType {
		return this.$javaClass.DOWNFALL;
	}
	public static get CLEAR(): WeatherType {
		return this.$javaClass.CLEAR;
	}
}

