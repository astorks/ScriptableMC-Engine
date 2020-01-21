declare var Java: any;
import {Material} from '../../../../org/bukkit/Material.js'

export interface BlockData {
	clone(): any;
	clone(): BlockData;
	matches(data: BlockData): boolean;
	merge(data: BlockData): BlockData;
	getMaterial(): Material;
	getAsString(): string;
	getAsString(hideUnspecified: boolean): string;
}

export class BlockData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.BlockData');
	}
}

