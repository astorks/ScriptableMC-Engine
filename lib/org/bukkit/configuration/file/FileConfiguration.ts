declare var Java: any;
import {FileConfigurationOptions} from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {ConfigurationSection} from '../../../../org/bukkit/configuration/ConfigurationSection.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {OfflinePlayer} from '../../../../org/bukkit/OfflinePlayer.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Color} from '../../../../org/bukkit/Color.js'
import {ConfigurationSerializable} from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
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
	setDefaults(defaults: Configuration): void;
	addDefaults(defaults: any): void;
	addDefaults(defaults: Configuration): void;
	getDefaults(): Configuration;
	addDefault(path: string, value: any): void;
	get(path: string): any;
	get(path: string, def: any): any;
	getObject(path: string, clazz: any): any;
	getObject(path: string, clazz: any, def: any): any;
	getBoolean(path: string, def: boolean): boolean;
	getBoolean(path: string): boolean;
	getInt(path: string, def: number): number;
	getInt(path: string): number;
	getLong(path: string, def: number): number;
	getLong(path: string): number;
	getDouble(path: string): number;
	getDouble(path: string, def: number): number;
	getName(): string;
	contains(path: string, ignoreDefault: boolean): boolean;
	contains(path: string): boolean;
	set(path: string, value: any): void;
	getLocation(path: string): Location;
	getLocation(path: string, def: Location): Location;
	isSet(path: string): boolean;
	getRoot(): Configuration;
	getKeys(deep: boolean): any;
	getString(path: string): string;
	getString(path: string, def: string): string;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getOfflinePlayer(path: string): OfflinePlayer;
	isString(path: string): boolean;
	isBoolean(path: string): boolean;
	getItemStack(path: string): ItemStack;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getCurrentPath(): string;
	getValues(deep: boolean): any;
	isInt(path: string): boolean;
	isDouble(path: string): boolean;
	createSection(path: string, map: any): ConfigurationSection;
	createSection(path: string): ConfigurationSection;
	isLong(path: string): boolean;
	getList(path: string): any;
	getList(path: string, def: any): any;
	getColor(path: string): Color;
	getColor(path: string, def: Color): Color;
	getConfigurationSection(path: string): ConfigurationSection;
	isConfigurationSection(path: string): boolean;
	getDoubleList(path: string): any;
	getCharacterList(path: string): any;
	getDefaultSection(): ConfigurationSection;
	isList(path: string): boolean;
	getShortList(path: string): any;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
	isVector(path: string): boolean;
	isOfflinePlayer(path: string): boolean;
	getLongList(path: string): any;
	getStringList(path: string): any;
	getFloatList(path: string): any;
	getBooleanList(path: string): any;
	getIntegerList(path: string): any;
	getByteList(path: string): any;
	isColor(path: string): boolean;
	isLocation(path: string): boolean;
	getVector(path: string, def: Vector): Vector;
	getVector(path: string): Vector;
	getMapList(path: string): any;
	isItemStack(path: string): boolean;
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

