declare var Java: any;

export interface CauldronLevelChangeEvent$ChangeReason {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class CauldronLevelChangeEvent$ChangeReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason');
	}

	public static get BUCKET_FILL(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BUCKET_FILL;
	}
	public static get BUCKET_EMPTY(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BUCKET_EMPTY;
	}
	public static get BOTTLE_FILL(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BOTTLE_FILL;
	}
	public static get BOTTLE_EMPTY(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BOTTLE_EMPTY;
	}
	public static get BANNER_WASH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BANNER_WASH;
	}
	public static get ARMOR_WASH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.ARMOR_WASH;
	}
	public static get EXTINGUISH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.EXTINGUISH;
	}
	public static get EVAPORATE(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.EVAPORATE;
	}
	public static get UNKNOWN(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.UNKNOWN;
	}
}

