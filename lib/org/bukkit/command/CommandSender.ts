declare var Java: any;
import {Server} from '../../../org/bukkit/Server.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'

export interface CommandSender extends Permissible {
	getName(): string;
	getServer(): Server;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	isOp(): boolean;
	setOp(value: boolean): void;
}

export class CommandSender {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandSender');
	}
}

