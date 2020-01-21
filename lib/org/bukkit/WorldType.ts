declare var Java: any;

export interface WorldType {
	getName(): string;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class WorldType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldType');
	}

	public static get NORMAL(): WorldType {
		return this.$javaClass.NORMAL;
	}
	public static get FLAT(): WorldType {
		return this.$javaClass.FLAT;
	}
	public static get VERSION_1_1(): WorldType {
		return this.$javaClass.VERSION_1_1;
	}
	public static get LARGE_BIOMES(): WorldType {
		return this.$javaClass.LARGE_BIOMES;
	}
	public static get AMPLIFIED(): WorldType {
		return this.$javaClass.AMPLIFIED;
	}
	public static get CUSTOMIZED(): WorldType {
		return this.$javaClass.CUSTOMIZED;
	}
	public static get BUFFET(): WorldType {
		return this.$javaClass.BUFFET;
	}
}

