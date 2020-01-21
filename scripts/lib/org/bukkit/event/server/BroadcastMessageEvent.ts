declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface BroadcastMessageEvent extends ServerEvent, Cancellable {
	getMessage(): string;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	setMessage(arg0: string): void;
	getRecipients(): any;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BroadcastMessageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.BroadcastMessageEvent');
	}
	constructor(arg0: boolean, arg1: string, arg2: any) {
		return new BroadcastMessageEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: boolean, arg1: string, arg2: any): BroadcastMessageEvent {
		return new BroadcastMessageEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: string, arg1: any): BroadcastMessageEvent {
		return new BroadcastMessageEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return BroadcastMessageEvent.$javaClass.getHandlerList();
	}
}

