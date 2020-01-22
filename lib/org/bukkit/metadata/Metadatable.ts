declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'

export interface Metadatable {
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
}

export class Metadatable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.Metadatable');
	}
}

