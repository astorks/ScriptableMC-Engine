declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface MetadataValue {
	value(): any;
	asString(): string;
	invalidate(): void;
	asByte(): number;
	asShort(): number;
	asLong(): number;
	asBoolean(): boolean;
	getOwningPlugin(): Plugin;
	asFloat(): number;
	asInt(): number;
	asDouble(): number;
}

export class MetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValue');
	}
}

