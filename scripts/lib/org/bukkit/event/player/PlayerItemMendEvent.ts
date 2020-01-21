declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {ExperienceOrb} from '../../../../org/bukkit/entity/ExperienceOrb.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getExperienceOrb(): ExperienceOrb;
	getRepairAmount(): number;
	setRepairAmount(arg0: number): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerItemMendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemMendEvent');
	}
	constructor(arg0: Player, arg1: ItemStack, arg2: ExperienceOrb, arg3: number) {
		return new PlayerItemMendEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new0(arg0: Player, arg1: ItemStack, arg2: ExperienceOrb, arg3: number): PlayerItemMendEvent {
		return new PlayerItemMendEvent.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static getHandlerList(): HandlerList {
		return PlayerItemMendEvent.$javaClass.getHandlerList();
	}
}

