declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ExperienceOrb} from '../../../../org/bukkit/entity/ExperienceOrb.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
	getItem(): ItemStack;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancelled: boolean): void;
	getExperienceOrb(): ExperienceOrb;
	getRepairAmount(): number;
	setRepairAmount(amount: number): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerItemMendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemMendEvent');
	}
	constructor(who: Player, item: ItemStack, experienceOrb: ExperienceOrb, repairAmount: number);
	constructor(...args: any[]) {
		return new PlayerItemMendEvent.$javaClass(...args);
	}
}

