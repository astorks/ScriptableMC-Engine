declare var Java: any;

export interface ServicePriority {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class ServicePriority {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicePriority');
	}

	public static get Lowest(): ServicePriority {
		return this.$javaClass.Lowest;
	}
	public static get Low(): ServicePriority {
		return this.$javaClass.Low;
	}
	public static get Normal(): ServicePriority {
		return this.$javaClass.Normal;
	}
	public static get High(): ServicePriority {
		return this.$javaClass.High;
	}
	public static get Highest(): ServicePriority {
		return this.$javaClass.Highest;
	}
}

