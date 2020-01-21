declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface MetadataValue {
	value(): any;
	asString(): string;
	asDouble(): number;
	asLong(): number;
	asByte(): number;
	getOwningPlugin(): Plugin;
	asFloat(): number;
	asShort(): number;
	asBoolean(): boolean;
	invalidate(): void;
	asInt(): number;
}

export class MetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValue');
	}
}

