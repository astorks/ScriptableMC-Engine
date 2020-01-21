declare var Java: any;
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface Metadatable {
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export class Metadatable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.Metadatable');
	}
}

