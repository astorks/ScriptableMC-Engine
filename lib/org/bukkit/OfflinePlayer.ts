declare var Java: any;
import {Player} from '../../org/bukkit/entity/Player.js'
import {Location} from '../../org/bukkit/Location.js'
import {ServerOperator} from '../../org/bukkit/permissions/ServerOperator.js'
import {AnimalTamer} from '../../org/bukkit/entity/AnimalTamer.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	getName(): string;
	getPlayer(): Player;
	getUniqueId(): string;
	hasPlayedBefore(): boolean;
	getFirstPlayed(): number;
	setWhitelisted(value: boolean): void;
	getLastPlayed(): number;
	isOnline(): boolean;
	isWhitelisted(): boolean;
	isBanned(): boolean;
	getBedSpawnLocation(): Location;
	isOp(): boolean;
	setOp(value: boolean): void;
	serialize(): any;
}

export class OfflinePlayer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.OfflinePlayer');
	}
}

