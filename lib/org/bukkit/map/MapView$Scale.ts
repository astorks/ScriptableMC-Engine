declare var Java: any;

export interface MapView$Scale {
	getValue(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class MapView$Scale {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView$Scale');
	}

	public static get CLOSEST(): MapView$Scale {
		return this.$javaClass.CLOSEST;
	}
	public static get CLOSE(): MapView$Scale {
		return this.$javaClass.CLOSE;
	}
	public static get NORMAL(): MapView$Scale {
		return this.$javaClass.NORMAL;
	}
	public static get FAR(): MapView$Scale {
		return this.$javaClass.FAR;
	}
	public static get FARTHEST(): MapView$Scale {
		return this.$javaClass.FARTHEST;
	}
}

