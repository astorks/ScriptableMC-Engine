declare var Java: any;

export interface World$Environment {
	getId(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class World$Environment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World$Environment');
	}

	public static get NORMAL(): World$Environment {
		return this.$javaClass.NORMAL;
	}
	public static get NETHER(): World$Environment {
		return this.$javaClass.NETHER;
	}
	public static get THE_END(): World$Environment {
		return this.$javaClass.THE_END;
	}
}

