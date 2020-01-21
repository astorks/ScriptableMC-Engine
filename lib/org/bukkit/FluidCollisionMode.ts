declare var Java: any;

export interface FluidCollisionMode {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class FluidCollisionMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FluidCollisionMode');
	}

	public static get NEVER(): FluidCollisionMode {
		return this.$javaClass.NEVER;
	}
	public static get SOURCE_ONLY(): FluidCollisionMode {
		return this.$javaClass.SOURCE_ONLY;
	}
	public static get ALWAYS(): FluidCollisionMode {
		return this.$javaClass.ALWAYS;
	}
}

