declare var Java: any;
import {ConfigurationOptions} from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import {ConfigurationSection} from '../../../org/bukkit/configuration/ConfigurationSection.js'
import {Location} from '../../../org/bukkit/Location.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Color} from '../../../org/bukkit/Color.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'

export interface Configuration extends ConfigurationSection {
	options(): ConfigurationOptions;
	addDefaults(arg0: Configuration): void;
	addDefaults(arg0: any): void;
	setDefaults(arg0: Configuration): void;
	getDefaults(): Configuration;
	addDefault(arg0: string, arg1: any): void;
	get(arg0: string): any;
	get(arg0: string, arg1: any): any;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: string, arg1: any, arg2: any): any;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: string, arg1: boolean): boolean;
	getInt(arg0: string): number;
	getInt(arg0: string, arg1: number): number;
	getLong(arg0: string): number;
	getLong(arg0: string, arg1: number): number;
	getDouble(arg0: string): number;
	getDouble(arg0: string, arg1: number): number;
	getName(): string;
	contains(arg0: string, arg1: boolean): boolean;
	contains(arg0: string): boolean;
	getParent(): ConfigurationSection;
	set(arg0: string, arg1: any): void;
	getLocation(arg0: string): Location;
	getLocation(arg0: string, arg1: Location): Location;
	isSet(arg0: string): boolean;
	getRoot(): Configuration;
	getKeys(arg0: boolean): any;
	getString(arg0: string): string;
	getString(arg0: string, arg1: string): string;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getOfflinePlayer(arg0: string, arg1: OfflinePlayer): OfflinePlayer;
	getColor(arg0: string): Color;
	getColor(arg0: string, arg1: Color): Color;
	getValues(arg0: boolean): any;
	isConfigurationSection(arg0: string): boolean;
	getConfigurationSection(arg0: string): ConfigurationSection;
	isItemStack(arg0: string): boolean;
	isLocation(arg0: string): boolean;
	getDefaultSection(): ConfigurationSection;
	isVector(arg0: string): boolean;
	isColor(arg0: string): boolean;
	isOfflinePlayer(arg0: string): boolean;
	getItemStack(arg0: string): ItemStack;
	getItemStack(arg0: string, arg1: ItemStack): ItemStack;
	getCurrentPath(): string;
	createSection(arg0: string): ConfigurationSection;
	createSection(arg0: string, arg1: any): ConfigurationSection;
	isInt(arg0: string): boolean;
	isBoolean(arg0: string): boolean;
	isDouble(arg0: string): boolean;
	isList(arg0: string): boolean;
	getStringList(arg0: string): any;
	getByteList(arg0: string): any;
	getMapList(arg0: string): any;
	getIntegerList(arg0: string): any;
	getLongList(arg0: string): any;
	getDoubleList(arg0: string): any;
	isString(arg0: string): boolean;
	getCharacterList(arg0: string): any;
	isLong(arg0: string): boolean;
	getList(arg0: string): any;
	getList(arg0: string, arg1: any): any;
	getBooleanList(arg0: string): any;
	getFloatList(arg0: string): any;
	getShortList(arg0: string): any;
	getSerializable(arg0: string, arg1: any, arg2: ConfigurationSerializable): ConfigurationSerializable;
	getSerializable(arg0: string, arg1: any): ConfigurationSerializable;
	getVector(arg0: string, arg1: Vector): Vector;
	getVector(arg0: string): Vector;
}

export class Configuration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.Configuration');
	}
}

