declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface SignChangeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getLines(): Array<string>;
	getLine(arg0: number): string;
	setLine(arg0: number, arg1: string): void;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class SignChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.SignChangeEvent');
	}
	constructor(arg0: Block, arg1: Player, arg2: Array<string>) {
		return new SignChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: Player, arg2: Array<string>): SignChangeEvent {
		return new SignChangeEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return SignChangeEvent.$javaClass.getHandlerList();
	}
}

