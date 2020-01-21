declare var Java: any;
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'

export interface ConfigurationOptions {
	pathSeparator(arg0: string): ConfigurationOptions;
	pathSeparator(): string;
	configuration(): Configuration;
	copyDefaults(): boolean;
	copyDefaults(arg0: boolean): ConfigurationOptions;
}

export class ConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationOptions');
	}
}

