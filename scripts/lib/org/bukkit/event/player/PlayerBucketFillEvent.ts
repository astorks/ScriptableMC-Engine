declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerBucketEvent} from '../../../../org/bukkit/event/player/PlayerBucketEvent.js'

export interface PlayerBucketFillEvent extends PlayerBucketEvent {
	getHandlers(): HandlerList;
	getBlock(): Block;
	setItemStack(arg0: ItemStack): void;
	getItemStack(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getBucket(): Material;
	getBlockClicked(): Block;
	getBlockFace(): BlockFace;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerBucketFillEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBucketFillEvent');
	}
	constructor(arg0: Player, arg1: Block, arg2: Block, arg3: BlockFace, arg4: Material, arg5: ItemStack) {
		return new PlayerBucketFillEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: Player, arg1: Block, arg2: Block, arg3: BlockFace, arg4: Material, arg5: ItemStack): PlayerBucketFillEvent {
		return new PlayerBucketFillEvent.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new1(arg0: Player, arg1: Block, arg2: BlockFace, arg3: Material, arg4: ItemStack): PlayerBucketFillEvent {
		return new PlayerBucketFillEvent.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static getHandlerList(): HandlerList {
		return PlayerBucketFillEvent.$javaClass.getHandlerList();
	}
}

