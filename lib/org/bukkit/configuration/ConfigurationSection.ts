declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Color} from '../../../org/bukkit/Color.js'

export interface ConfigurationSection {
	get(path: string): any;
	get(path: string, def: any): any;
	getObject(path: string, clazz: any): any;
	getObject(path: string, clazz: any, def: any): any;
	getBoolean(path: string): boolean;
	getBoolean(path: string, def: boolean): boolean;
	getInt(path: string): number;
	getInt(path: string, def: number): number;
	getLong(path: string, def: number): number;
	getLong(path: string): number;
	getDouble(path: string, def: number): number;
	getDouble(path: string): number;
	getName(): string;
	contains(path: string): boolean;
	contains(path: string, ignoreDefault: boolean): boolean;
	getParent(): ConfigurationSection;
	set(path: string, value: any): void;
	getLocation(path: string, def: Location): Location;
	getLocation(path: string): Location;
	isSet(path: string): boolean;
	getRoot(): Configuration;
	getKeys(deep: boolean): any;
	getOfflinePlayer(path: string): OfflinePlayer;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getString(path: string): string;
	getString(path: string, def: string): string;
	getIntegerList(path: string): any;
	isDouble(path: string): boolean;
	isOfflinePlayer(path: string): boolean;
	isColor(path: string): boolean;
	isLong(path: string): boolean;
	getDoubleList(path: string): any;
	getDefaultSection(): ConfigurationSection;
	isItemStack(path: string): boolean;
	getCharacterList(path: string): any;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getItemStack(path: string): ItemStack;
	getMapList(path: string): any;
	addDefault(path: string, value: any): void;
	isBoolean(path: string): boolean;
	getLongList(path: string): any;
	isInt(path: string): boolean;
	getByteList(path: string): any;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getVector(path: string, def: Vector): Vector;
	getVector(path: string): Vector;
	isVector(path: string): boolean;
	createSection(path: string): ConfigurationSection;
	createSection(path: string, map: any): ConfigurationSection;
	getList(path: string): any;
	getList(path: string, def: any): any;
	getCurrentPath(): string;
	isLocation(path: string): boolean;
	getShortList(path: string): any;
	isList(path: string): boolean;
	isString(path: string): boolean;
	getStringList(path: string): any;
	getBooleanList(path: string): any;
	getFloatList(path: string): any;
	getColor(path: string): Color;
	getColor(path: string, def: Color): Color;
	getValues(deep: boolean): any;
	isConfigurationSection(path: string): boolean;
	getConfigurationSection(path: string): ConfigurationSection;
}

export class ConfigurationSection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationSection');
	}
}

