declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {ServerCommandEvent} from '../../../../org/bukkit/event/server/ServerCommandEvent.js'

export interface RemoteServerCommandEvent extends ServerCommandEvent {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getCommand(): string;
	getSender(): CommandSender;
	setCommand(arg0: string): void;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class RemoteServerCommandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.RemoteServerCommandEvent');
	}
	constructor(arg0: CommandSender, arg1: string) {
		return new RemoteServerCommandEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: CommandSender, arg1: string): RemoteServerCommandEvent {
		return new RemoteServerCommandEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return RemoteServerCommandEvent.$javaClass.getHandlerList();
	}
}

