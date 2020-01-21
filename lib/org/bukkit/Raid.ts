declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'
import {Raid$RaidStatus} from '../../org/bukkit/Raid$RaidStatus.js'

export interface Raid {
	getLocation(): Location;
	setBadOmenLevel(badOmenLevel: number): void;
	getStatus(): Raid$RaidStatus;
	getTotalGroups(): number;
	getActiveTicks(): number;
	isStarted(): boolean;
	getTotalWaves(): number;
	getBadOmenLevel(): number;
	getSpawnedGroups(): number;
	getTotalHealth(): number;
	getRaiders(): any;
	getHeroes(): any;
}

export class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
}

