declare var Java: any;

export interface BanList$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class BanList$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList$Type');
	}

	public static get NAME(): BanList$Type {
		return this.$javaClass.NAME;
	}
	public static get IP(): BanList$Type {
		return this.$javaClass.IP;
	}
}

