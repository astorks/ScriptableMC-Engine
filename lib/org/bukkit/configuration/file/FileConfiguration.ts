declare var Java: any;
import {FileConfigurationOptions} from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {ConfigurationSection} from '../../../../org/bukkit/configuration/ConfigurationSection.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {OfflinePlayer} from '../../../../org/bukkit/OfflinePlayer.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {ConfigurationSerializable} from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {Color} from '../../../../org/bukkit/Color.js'
import {MemoryConfiguration} from '../../../../org/bukkit/configuration/MemoryConfiguration.js'

export interface FileConfiguration extends MemoryConfiguration {
	load(reader: any): void;
	load(file: any): void;
	load(file: string): void;
	save(file: any): void;
	save(file: string): void;
	options(): FileConfigurationOptions;
	options(): ConfigurationOptions;
	options(): MemoryConfigurationOptions;
	loadFromString(contents: string): void;
	saveToString(): string;
	getParent(): ConfigurationSection;
	getDefaults(): Configuration;
	addDefaults(defaults: any): void;
	addDefaults(defaults: Configuration): void;
	addDefault(path: string, value: any): void;
	setDefaults(defaults: Configuration): void;
	get(path: string): any;
	get(path: string, def: any): any;
	getObject(path: string, clazz: any): any;
	getObject(path: string, clazz: any, def: any): any;
	getBoolean(path: string): boolean;
	getBoolean(path: string, def: boolean): boolean;
	getInt(path: string, def: number): number;
	getInt(path: string): number;
	getLong(path: string): number;
	getLong(path: string, def: number): number;
	getDouble(path: string): number;
	getDouble(path: string, def: number): number;
	getName(): string;
	contains(path: string): boolean;
	contains(path: string, ignoreDefault: boolean): boolean;
	set(path: string, value: any): void;
	getLocation(path: string, def: Location): Location;
	getLocation(path: string): Location;
	isSet(path: string): boolean;
	getRoot(): Configuration;
	getKeys(deep: boolean): any;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getOfflinePlayer(path: string): OfflinePlayer;
	getString(path: string, def: string): string;
	getString(path: string): string;
	getIntegerList(path: string): any;
	isDouble(path: string): boolean;
	isOfflinePlayer(path: string): boolean;
	isColor(path: string): boolean;
	isLong(path: string): boolean;
	getDoubleList(path: string): any;
	getDefaultSection(): ConfigurationSection;
	isItemStack(path: string): boolean;
	getCharacterList(path: string): any;
	getItemStack(path: string): ItemStack;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getMapList(path: string): any;
	isBoolean(path: string): boolean;
	getLongList(path: string): any;
	isInt(path: string): boolean;
	getByteList(path: string): any;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
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
	getColor(path: string, def: Color): Color;
	getColor(path: string): Color;
	getValues(deep: boolean): any;
	isConfigurationSection(path: string): boolean;
	getConfigurationSection(path: string): ConfigurationSection;
}

export class FileConfiguration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.FileConfiguration');
	}
	constructor();
	constructor(defaults: Configuration);
	constructor(...args: any[]) {
		return new FileConfiguration.$javaClass(...args);
	}
}

