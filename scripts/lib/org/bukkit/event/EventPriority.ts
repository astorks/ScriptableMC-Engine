declare var Java: any;

export interface EventPriority {
	getSlot(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EventPriority {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.EventPriority');
	}

	public static get LOWEST(): EventPriority {
		return this.$javaClass.LOWEST;
	}
	public static get LOW(): EventPriority {
		return this.$javaClass.LOW;
	}
	public static get NORMAL(): EventPriority {
		return this.$javaClass.NORMAL;
	}
	public static get HIGH(): EventPriority {
		return this.$javaClass.HIGH;
	}
	public static get HIGHEST(): EventPriority {
		return this.$javaClass.HIGHEST;
	}
	public static get MONITOR(): EventPriority {
		return this.$javaClass.MONITOR;
	}
}

