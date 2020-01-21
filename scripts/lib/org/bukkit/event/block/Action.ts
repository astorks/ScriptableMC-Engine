declare var Java: any;

export interface Action {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Action {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.Action');
	}

	public static get LEFT_CLICK_BLOCK(): Action {
		return this.$javaClass.LEFT_CLICK_BLOCK;
	}
	public static get RIGHT_CLICK_BLOCK(): Action {
		return this.$javaClass.RIGHT_CLICK_BLOCK;
	}
	public static get LEFT_CLICK_AIR(): Action {
		return this.$javaClass.LEFT_CLICK_AIR;
	}
	public static get RIGHT_CLICK_AIR(): Action {
		return this.$javaClass.RIGHT_CLICK_AIR;
	}
	public static get PHYSICAL(): Action {
		return this.$javaClass.PHYSICAL;
	}
}

