declare var Java: any;

export interface PortalCreateEvent$CreateReason {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PortalCreateEvent$CreateReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent$CreateReason');
	}

	public static get FIRE(): PortalCreateEvent$CreateReason {
		return this.$javaClass.FIRE;
	}
	public static get NETHER_PAIR(): PortalCreateEvent$CreateReason {
		return this.$javaClass.NETHER_PAIR;
	}
	public static get END_PLATFORM(): PortalCreateEvent$CreateReason {
		return this.$javaClass.END_PLATFORM;
	}
}

