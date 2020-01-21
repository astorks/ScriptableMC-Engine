declare var Java: any;

export interface AbstractArrow$PickupStatus {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class AbstractArrow$PickupStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AbstractArrow$PickupStatus');
	}

	public static get DISALLOWED(): AbstractArrow$PickupStatus {
		return this.$javaClass.DISALLOWED;
	}
	public static get ALLOWED(): AbstractArrow$PickupStatus {
		return this.$javaClass.ALLOWED;
	}
	public static get CREATIVE_ONLY(): AbstractArrow$PickupStatus {
		return this.$javaClass.CREATIVE_ONLY;
	}
}

