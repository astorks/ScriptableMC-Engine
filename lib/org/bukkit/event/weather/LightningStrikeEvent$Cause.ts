declare var Java: any;

export interface LightningStrikeEvent$Cause {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class LightningStrikeEvent$Cause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.LightningStrikeEvent$Cause');
	}

	public static get COMMAND(): LightningStrikeEvent$Cause {
		return this.$javaClass.COMMAND;
	}
	public static get TRIDENT(): LightningStrikeEvent$Cause {
		return this.$javaClass.TRIDENT;
	}
	public static get TRAP(): LightningStrikeEvent$Cause {
		return this.$javaClass.TRAP;
	}
	public static get WEATHER(): LightningStrikeEvent$Cause {
		return this.$javaClass.WEATHER;
	}
	public static get UNKNOWN(): LightningStrikeEvent$Cause {
		return this.$javaClass.UNKNOWN;
	}
}

