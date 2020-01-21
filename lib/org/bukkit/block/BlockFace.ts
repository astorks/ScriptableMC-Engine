declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'

export interface BlockFace {
	getDirection(): Vector;
	getModY(): number;
	getModZ(): number;
	getModX(): number;
	getOppositeFace(): BlockFace;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class BlockFace {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BlockFace');
	}

	public static get NORTH(): BlockFace {
		return this.$javaClass.NORTH;
	}
	public static get EAST(): BlockFace {
		return this.$javaClass.EAST;
	}
	public static get SOUTH(): BlockFace {
		return this.$javaClass.SOUTH;
	}
	public static get WEST(): BlockFace {
		return this.$javaClass.WEST;
	}
	public static get UP(): BlockFace {
		return this.$javaClass.UP;
	}
	public static get DOWN(): BlockFace {
		return this.$javaClass.DOWN;
	}
	public static get NORTH_EAST(): BlockFace {
		return this.$javaClass.NORTH_EAST;
	}
	public static get NORTH_WEST(): BlockFace {
		return this.$javaClass.NORTH_WEST;
	}
	public static get SOUTH_EAST(): BlockFace {
		return this.$javaClass.SOUTH_EAST;
	}
	public static get SOUTH_WEST(): BlockFace {
		return this.$javaClass.SOUTH_WEST;
	}
	public static get WEST_NORTH_WEST(): BlockFace {
		return this.$javaClass.WEST_NORTH_WEST;
	}
	public static get NORTH_NORTH_WEST(): BlockFace {
		return this.$javaClass.NORTH_NORTH_WEST;
	}
	public static get NORTH_NORTH_EAST(): BlockFace {
		return this.$javaClass.NORTH_NORTH_EAST;
	}
	public static get EAST_NORTH_EAST(): BlockFace {
		return this.$javaClass.EAST_NORTH_EAST;
	}
	public static get EAST_SOUTH_EAST(): BlockFace {
		return this.$javaClass.EAST_SOUTH_EAST;
	}
	public static get SOUTH_SOUTH_EAST(): BlockFace {
		return this.$javaClass.SOUTH_SOUTH_EAST;
	}
	public static get SOUTH_SOUTH_WEST(): BlockFace {
		return this.$javaClass.SOUTH_SOUTH_WEST;
	}
	public static get WEST_SOUTH_WEST(): BlockFace {
		return this.$javaClass.WEST_SOUTH_WEST;
	}
	public static get SELF(): BlockFace {
		return this.$javaClass.SELF;
	}
}

