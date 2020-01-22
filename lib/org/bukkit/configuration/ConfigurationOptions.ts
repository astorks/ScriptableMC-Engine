declare var Java: any;
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'

export interface ConfigurationOptions {
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(): string;
	configuration(): Configuration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): ConfigurationOptions;
}

export class ConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationOptions');
	}
}

