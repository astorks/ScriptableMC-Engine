declare var Java: any;

export interface Difficulty {
	getValue(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Difficulty {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Difficulty');
	}

	public static get PEACEFUL(): Difficulty {
		return this.$javaClass.PEACEFUL;
	}
	public static get EASY(): Difficulty {
		return this.$javaClass.EASY;
	}
	public static get NORMAL(): Difficulty {
		return this.$javaClass.NORMAL;
	}
	public static get HARD(): Difficulty {
		return this.$javaClass.HARD;
	}
}

