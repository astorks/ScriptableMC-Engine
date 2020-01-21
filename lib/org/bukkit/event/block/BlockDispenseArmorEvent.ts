declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockDispenseEvent} from '../../../../org/bukkit/event/block/BlockDispenseEvent.js'

export interface BlockDispenseArmorEvent extends BlockDispenseEvent {
	getTargetEntity(): LivingEntity;
	getHandlers(): HandlerList;
	getVelocity(): Vector;
	setVelocity(vel: Vector): void;
	setItem(item: ItemStack): void;
	getItem(): ItemStack;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockDispenseArmorEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDispenseArmorEvent');
	}
	constructor(block: Block, dispensed: ItemStack, target: LivingEntity);
	constructor(...args: any[]) {
		return new BlockDispenseArmorEvent.$javaClass(...args);
	}
}

