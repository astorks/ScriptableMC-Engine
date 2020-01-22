declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'
import {Raid$RaidStatus} from '../../org/bukkit/Raid$RaidStatus.js'

export interface Raid {
	getLocation(): Location;
	getSpawnedGroups(): number;
	getTotalGroups(): number;
	isStarted(): boolean;
	getBadOmenLevel(): number;
	getStatus(): Raid$RaidStatus;
	getTotalWaves(): number;
	getTotalHealth(): number;
	getActiveTicks(): number;
	setBadOmenLevel(badOmenLevel: number): void;
	getHeroes(): any;
	getRaiders(): any;
}

export class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
}

