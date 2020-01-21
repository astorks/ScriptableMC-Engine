declare var Java: any;
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface Metadatable {
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
}

export class Metadatable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.Metadatable');
	}
}

