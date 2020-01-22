declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface MetadataValue {
	value(): any;
	asString(): string;
	asFloat(): number;
	asDouble(): number;
	asInt(): number;
	asByte(): number;
	asShort(): number;
	asBoolean(): boolean;
	asLong(): number;
	invalidate(): void;
	getOwningPlugin(): Plugin;
}

export class MetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValue');
	}
}

