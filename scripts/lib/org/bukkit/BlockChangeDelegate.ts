declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'

export interface BlockChangeDelegate {
	isEmpty(arg0: number, arg1: number, arg2: number): boolean;
	getHeight(): number;
	getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
	setBlockData(arg0: number, arg1: number, arg2: number, arg3: BlockData): boolean;
}

export class BlockChangeDelegate {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BlockChangeDelegate');
	}
}

