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
	setVelocity(arg0: Vector): void;
	getVelocity(): Vector;
	getItem(): ItemStack;
	setItem(arg0: ItemStack): void;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockDispenseArmorEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDispenseArmorEvent');
	}
	constructor(arg0: Block, arg1: ItemStack, arg2: LivingEntity) {
		return new BlockDispenseArmorEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: ItemStack, arg2: LivingEntity): BlockDispenseArmorEvent {
		return new BlockDispenseArmorEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return BlockDispenseArmorEvent.$javaClass.getHandlerList();
	}
}

