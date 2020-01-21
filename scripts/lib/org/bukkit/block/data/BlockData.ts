declare var Java: any;
import {Material} from '../../../../org/bukkit/Material.js'

export interface BlockData {
	clone(): any;
	clone(): BlockData;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	getMaterial(): Material;
	getAsString(): string;
	getAsString(arg0: boolean): string;
}

export class BlockData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.BlockData');
	}
}

