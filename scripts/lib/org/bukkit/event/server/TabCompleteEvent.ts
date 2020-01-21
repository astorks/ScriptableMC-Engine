declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface TabCompleteEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getSender(): CommandSender;
	getCompletions(): any;
	getBuffer(): string;
	setCompletions(arg0: any): void;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class TabCompleteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.TabCompleteEvent');
	}
	constructor(arg0: CommandSender, arg1: string, arg2: any) {
		return new TabCompleteEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: CommandSender, arg1: string, arg2: any): TabCompleteEvent {
		return new TabCompleteEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return TabCompleteEvent.$javaClass.getHandlerList();
	}
}

