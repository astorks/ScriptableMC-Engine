declare var Java: any;
import {ConfigurationSection} from '../../../org/bukkit/configuration/ConfigurationSection.js'
import {ConfigurationOptions} from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfigurationOptions} from '../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'
import {Location} from '../../../org/bukkit/Location.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Color} from '../../../org/bukkit/Color.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {MemorySection} from '../../../org/bukkit/configuration/MemorySection.js'

export interface MemoryConfiguration extends MemorySection, Configuration {
	getParent(): ConfigurationSection;
	options(): ConfigurationOptions;
	options(): MemoryConfigurationOptions;
	addDefaults(arg0: any): void;
	addDefaults(arg0: Configuration): void;
	setDefaults(arg0: Configuration): void;
	getDefaults(): Configuration;
	addDefault(arg0: string, arg1: any): void;
	get(arg0: string, arg1: any): any;
	get(arg0: string): any;
	getObject(arg0: string, arg1: any, arg2: any): any;
	getObject(arg0: string, arg1: any): any;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: string, arg1: boolean): boolean;
	getInt(arg0: string): number;
	getInt(arg0: string, arg1: number): number;
	getLong(arg0: string, arg1: number): number;
	getLong(arg0: string): number;
	getDouble(arg0: string): number;
	getDouble(arg0: string, arg1: number): number;
	getName(): string;
	contains(arg0: string): boolean;
	contains(arg0: string, arg1: boolean): boolean;
	set(arg0: string, arg1: any): void;
	getLocation(arg0: string, arg1: Location): Location;
	getLocation(arg0: string): Location;
	isSet(arg0: string): boolean;
	getRoot(): Configuration;
	getKeys(arg0: boolean): any;
	getString(arg0: string): string;
	getString(arg0: string, arg1: string): string;
	getOfflinePlayer(arg0: string, arg1: OfflinePlayer): OfflinePlayer;
	getOfflinePlayer(arg0: string): OfflinePlayer;
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
	createSection(arg0: string, arg1: any): ConfigurationSection;
	createSection(arg0: string): ConfigurationSection;
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
	getList(arg0: string, arg1: any): any;
	getList(arg0: string): any;
	getBooleanList(arg0: string): any;
	getFloatList(arg0: string): any;
	getShortList(arg0: string): any;
	getSerializable(arg0: string, arg1: any, arg2: ConfigurationSerializable): ConfigurationSerializable;
	getSerializable(arg0: string, arg1: any): ConfigurationSerializable;
	getVector(arg0: string): Vector;
	getVector(arg0: string, arg1: Vector): Vector;
}

export class MemoryConfiguration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfiguration');
	}
	constructor() {
		return new MemoryConfiguration.$javaClass();
	}
	public static new0(): MemoryConfiguration {
		return new MemoryConfiguration.$javaClass();
	}
	public static new1(arg0: Configuration): MemoryConfiguration {
		return new MemoryConfiguration.$javaClass(arg0);
	}
	public static createPath(arg0: ConfigurationSection, arg1: string, arg2: ConfigurationSection): string {
		return MemoryConfiguration.$javaClass.createPath(arg0, arg1, arg2);
	}
	public static createPath0(arg0: ConfigurationSection, arg1: string): string {
		return MemoryConfiguration.$javaClass.createPath(arg0, arg1);
	}
}

