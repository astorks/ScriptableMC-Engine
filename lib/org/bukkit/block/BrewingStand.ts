declare var Java: any;
import {BrewerInventory} from '../../../org/bukkit/inventory/BrewerInventory.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Container} from '../../../org/bukkit/block/Container.js'

export interface BrewingStand extends Container {
	getInventory(): BrewerInventory;
	getInventory(): Inventory;
	getFuelLevel(): number;
	getSnapshotInventory(): BrewerInventory;
	getSnapshotInventory(): Inventory;
	setBrewingTime(brewTime: number): void;
	getBrewingTime(): number;
	setFuelLevel(level: number): void;
	getPersistentDataContainer(): PersistentDataContainer;
	update(force: boolean, applyPhysics: boolean): boolean;
	update(): boolean;
	update(force: boolean): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): Material;
	getWorld(): World;
	getY(): number;
	getChunk(): Chunk;
	getZ(): number;
	getX(): number;
	getData(): MaterialData;
	setType(type: Material): void;
	setData(data: MaterialData): void;
	getBlock(): Block;
	getBlock(): Block;
	isPlaced(): boolean;
	setRawData(data: number): void;
	getRawData(): number;
	getLightLevel(): number;
	setBlockData(data: BlockData): void;
	getBlockData(): BlockData;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	isLocked(): boolean;
	setLock(key: string): void;
	getLock(): string;
	getCustomName(): string;
	setCustomName(_name: string): void;
}

export class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BrewingStand');
	}
}

