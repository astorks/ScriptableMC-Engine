declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface SignChangeEvent extends BlockEvent, Cancellable {
	getPlayer(): Player;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getLines(): Array<string>;
	setLine(index: number, line: string): void;
	getLine(index: number): string;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class SignChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.SignChangeEvent');
	}
	constructor(theBlock: Block, thePlayer: Player, theLines: Array<string>);
	constructor(...args: any[]) {
		return new SignChangeEvent.$javaClass(...args);
	}
}

