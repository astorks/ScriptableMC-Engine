declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerBucketEvent extends PlayerEvent, Cancellable {
	getBlock(): Block;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setItemStack(itemStack: ItemStack): void;
	getItemStack(): ItemStack;
	getBlockFace(): BlockFace;
	getBucket(): Material;
	getBlockClicked(): Block;
	getPlayer(): Player;
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerBucketEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBucketEvent');
	}
	constructor(who: Player, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
	constructor(who: Player, block: Block, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
	constructor(...args: any[]) {
		return new PlayerBucketEvent.$javaClass(...args);
	}
}

