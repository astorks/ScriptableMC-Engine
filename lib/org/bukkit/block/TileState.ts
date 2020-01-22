declare var Java: any;
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {BlockState} from '../../../org/bukkit/block/BlockState.js'
import {PersistentDataHolder} from '../../../org/bukkit/persistence/PersistentDataHolder.js'

export interface TileState extends BlockState, PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer;
	update(force: boolean): boolean;
	update(force: boolean, applyPhysics: boolean): boolean;
	update(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): Material;
	getWorld(): World;
	getData(): MaterialData;
	setType(type: Material): void;
	getBlock(): Block;
	setData(data: MaterialData): void;
	getRawData(): number;
	isPlaced(): boolean;
	setRawData(data: number): void;
	getChunk(): Chunk;
	getY(): number;
	getZ(): number;
	getX(): number;
	getLightLevel(): number;
	getBlockData(): BlockData;
	setBlockData(data: BlockData): void;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
}

export class TileState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.TileState');
	}
}

