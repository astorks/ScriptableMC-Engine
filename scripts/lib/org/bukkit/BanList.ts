declare var Java: any;
import {BanEntry} from '../../org/bukkit/BanEntry.js'

export interface BanList {
	addBan(arg0: string, arg1: string, arg2: any, arg3: string): BanEntry;
	isBanned(arg0: string): boolean;
	pardon(arg0: string): void;
	getBanEntry(arg0: string): BanEntry;
	getBanEntries(): any;
}

export class BanList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList');
	}
}

