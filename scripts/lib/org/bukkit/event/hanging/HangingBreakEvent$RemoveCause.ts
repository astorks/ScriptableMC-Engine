declare var Java: any;

export interface HangingBreakEvent$RemoveCause {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class HangingBreakEvent$RemoveCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakEvent$RemoveCause');
	}

	public static get ENTITY(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.ENTITY;
	}
	public static get EXPLOSION(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.EXPLOSION;
	}
	public static get OBSTRUCTION(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.OBSTRUCTION;
	}
	public static get PHYSICS(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.PHYSICS;
	}
	public static get DEFAULT(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.DEFAULT;
	}
}

