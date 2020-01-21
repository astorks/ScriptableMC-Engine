declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {ServerCommandEvent} from '../../../../org/bukkit/event/server/ServerCommandEvent.js'

export interface RemoteServerCommandEvent extends ServerCommandEvent {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getCommand(): string;
	setCommand(message: string): void;
	getSender(): CommandSender;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class RemoteServerCommandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.RemoteServerCommandEvent');
	}
	constructor(sender: CommandSender, command: string);
	constructor(...args: any[]) {
		return new RemoteServerCommandEvent.$javaClass(...args);
	}
}

