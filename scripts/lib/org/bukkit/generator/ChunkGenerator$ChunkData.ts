declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'

export interface ChunkGenerator$ChunkData {
	getType(arg0: number, arg1: number, arg2: number): Material;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Material): void;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: BlockData): void;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: MaterialData): void;
	getMaxHeight(): number;
	getData(arg0: number, arg1: number, arg2: number): number;
	getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: BlockData): void;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: Material): void;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: MaterialData): void;
	getTypeAndData(arg0: number, arg1: number, arg2: number): MaterialData;
}

export class ChunkGenerator$ChunkData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator$ChunkData');
	}
}

