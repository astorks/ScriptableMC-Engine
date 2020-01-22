declare var Java: any;
import {PermissionDefault} from '../../../org/bukkit/permissions/PermissionDefault.js'
import {PluginLoadOrder} from '../../../org/bukkit/plugin/PluginLoadOrder.js'

export interface PluginDescriptionFile {
	getName(): string;
	getPermissions(): any;
	save(writer: any): void;
	getVersion(): string;
	getPrefix(): string;
	getDescription(): string;
	getFullName(): string;
	getPermissionDefault(): PermissionDefault;
	getAwareness(): any;
	getSoftDepend(): any;
	getLoad(): PluginLoadOrder;
	getMain(): string;
	getAuthors(): any;
	getWebsite(): string;
	getLoadBefore(): any;
	getDepend(): any;
	getCommands(): any;
	getClassLoaderOf(): string;
	getAPIVersion(): string;
	getRawName(): string;
}

export class PluginDescriptionFile {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginDescriptionFile');
	}
	constructor(reader: any);
	constructor(stream: any);
	constructor(pluginName: string, pluginVersion: string, mainClass: string);
	constructor(...args: any[]) {
		return new PluginDescriptionFile.$javaClass(...args);
	}
}

