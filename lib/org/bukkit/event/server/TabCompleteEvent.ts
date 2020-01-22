declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface TabCompleteEvent extends Event, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancelled: boolean): void;
	getCompletions(): any;
	getSender(): CommandSender;
	setCompletions(completions: any): void;
	getBuffer(): string;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class TabCompleteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.TabCompleteEvent');
	}
	constructor(sender: CommandSender, buffer: string, completions: any);
	constructor(...args: any[]) {
		return new TabCompleteEvent.$javaClass(...args);
	}
}

