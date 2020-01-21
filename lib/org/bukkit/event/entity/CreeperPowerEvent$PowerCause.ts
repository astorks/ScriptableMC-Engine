declare var Java: any;

export interface CreeperPowerEvent$PowerCause {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class CreeperPowerEvent$PowerCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreeperPowerEvent$PowerCause');
	}

	public static get LIGHTNING(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.LIGHTNING;
	}
	public static get SET_ON(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.SET_ON;
	}
	public static get SET_OFF(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.SET_OFF;
	}
}

