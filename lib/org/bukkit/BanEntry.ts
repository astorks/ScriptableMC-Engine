declare var Java: any;

export interface BanEntry {
	save(): void;
	getTarget(): string;
	getSource(): string;
	setCreated(created: any): void;
	getExpiration(): any;
	setExpiration(expiration: any): void;
	setSource(source: string): void;
	getReason(): string;
	getCreated(): any;
	setReason(reason: string): void;
}

export class BanEntry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanEntry');
	}
}

