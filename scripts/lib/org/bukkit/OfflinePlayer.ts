declare var Java: any;
import {Player} from '../../org/bukkit/entity/Player.js'
import {Location} from '../../org/bukkit/Location.js'
import {ServerOperator} from '../../org/bukkit/permissions/ServerOperator.js'
import {AnimalTamer} from '../../org/bukkit/entity/AnimalTamer.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	getName(): string;
	getPlayer(): Player;
	getBedSpawnLocation(): Location;
	isBanned(): boolean;
	setWhitelisted(arg0: boolean): void;
	getLastPlayed(): number;
	hasPlayedBefore(): boolean;
	getUniqueId(): string;
	isWhitelisted(): boolean;
	getFirstPlayed(): number;
	isOnline(): boolean;
	setOp(arg0: boolean): void;
	isOp(): boolean;
	serialize(): any;
}

export class OfflinePlayer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.OfflinePlayer');
	}
}

