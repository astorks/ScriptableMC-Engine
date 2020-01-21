declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerCommandEvent extends ServerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getCommand(): string;
	getSender(): CommandSender;
	setCommand(arg0: string): void;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class ServerCommandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerCommandEvent');
	}
	constructor(arg0: CommandSender, arg1: string) {
		return new ServerCommandEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: CommandSender, arg1: string): ServerCommandEvent {
		return new ServerCommandEvent.$javaClass(arg0, arg1);
	}
	public static getHandlerList(): HandlerList {
		return ServerCommandEvent.$javaClass.getHandlerList();
	}
}

