declare var Java: any;

export interface BlockIgniteEvent$IgniteCause {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class BlockIgniteEvent$IgniteCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockIgniteEvent$IgniteCause');
	}

	public static get LAVA(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.LAVA;
	}
	public static get FLINT_AND_STEEL(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.FLINT_AND_STEEL;
	}
	public static get SPREAD(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.SPREAD;
	}
	public static get LIGHTNING(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.LIGHTNING;
	}
	public static get FIREBALL(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.FIREBALL;
	}
	public static get ENDER_CRYSTAL(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.ENDER_CRYSTAL;
	}
	public static get EXPLOSION(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.EXPLOSION;
	}
	public static get ARROW(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.ARROW;
	}
}

