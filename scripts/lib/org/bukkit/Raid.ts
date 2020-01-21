declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'
import {Raid$RaidStatus} from '../../org/bukkit/Raid$RaidStatus.js'

export interface Raid {
	getLocation(): Location;
	getActiveTicks(): number;
	getStatus(): Raid$RaidStatus;
	getTotalWaves(): number;
	getBadOmenLevel(): number;
	getHeroes(): any;
	getRaiders(): any;
	setBadOmenLevel(arg0: number): void;
	getTotalGroups(): number;
	getTotalHealth(): number;
	isStarted(): boolean;
	getSpawnedGroups(): number;
}

export class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
}

