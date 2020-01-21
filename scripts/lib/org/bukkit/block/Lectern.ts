declare var Java: any;
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {TileState} from '../../../org/bukkit/block/TileState.js'
import {BlockInventoryHolder} from '../../../org/bukkit/inventory/BlockInventoryHolder.js'

export interface Lectern extends TileState, BlockInventoryHolder {
	getInventory(): Inventory;
	getSnapshotInventory(): Inventory;
	getPage(): number;
	setPage(arg0: number): void;
	getPersistentDataContainer(): PersistentDataContainer;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
	update(): boolean;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getType(): Material;
	getWorld(): World;
	getBlock(): Block;
	getBlock(): Block;
	getChunk(): Chunk;
	getY(): number;
	getX(): number;
	getZ(): number;
	setType(arg0: Material): void;
	getData(): MaterialData;
	setData(arg0: MaterialData): void;
	getBlockData(): BlockData;
	setBlockData(arg0: BlockData): void;
	getLightLevel(): number;
	isPlaced(): boolean;
	getRawData(): number;
	setRawData(arg0: number): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export class Lectern {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Lectern');
	}
}

