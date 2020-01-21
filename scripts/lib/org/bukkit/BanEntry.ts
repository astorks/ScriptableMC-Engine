declare var Java: any;

export interface BanEntry {
	save(): void;
	getTarget(): string;
	getSource(): string;
	getExpiration(): any;
	setCreated(arg0: any): void;
	getCreated(): any;
	setSource(arg0: string): void;
	getReason(): string;
	setExpiration(arg0: any): void;
	setReason(arg0: string): void;
}

export class BanEntry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanEntry');
	}
}

