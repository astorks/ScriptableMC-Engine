declare var Java: any;

export interface FireworkEffect$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class FireworkEffect$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect$Type');
	}

	public static get BALL(): FireworkEffect$Type {
		return this.$javaClass.BALL;
	}
	public static get BALL_LARGE(): FireworkEffect$Type {
		return this.$javaClass.BALL_LARGE;
	}
	public static get STAR(): FireworkEffect$Type {
		return this.$javaClass.STAR;
	}
	public static get BURST(): FireworkEffect$Type {
		return this.$javaClass.BURST;
	}
	public static get CREEPER(): FireworkEffect$Type {
		return this.$javaClass.CREEPER;
	}
}

