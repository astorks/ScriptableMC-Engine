declare var Java: any;

export interface BanEntry {
	save(): void;
	getTarget(): string;
	getSource(): string;
	getExpiration(): any;
	setCreated(created: any): void;
	getCreated(): any;
	setReason(reason: string): void;
	setSource(source: string): void;
	setExpiration(expiration: any): void;
	getReason(): string;
}

export class BanEntry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanEntry');
	}
}

