declare var Java: any;
import {BrewerInventory} from '../../../org/bukkit/inventory/BrewerInventory.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
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
import {Container} from '../../../org/bukkit/block/Container.js'

export interface BrewingStand extends Container {
	getInventory(): BrewerInventory;
	getInventory(): Inventory;
	getFuelLevel(): number;
	getSnapshotInventory(): BrewerInventory;
	getSnapshotInventory(): Inventory;
	getBrewingTime(): number;
	setBrewingTime(brewTime: number): void;
	setFuelLevel(level: number): void;
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
	isLocked(): boolean;
	setLock(key: string): void;
	getLock(): string;
	setCustomName(_name: string): void;
	getCustomName(): string;
}

export class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BrewingStand');
	}
}

