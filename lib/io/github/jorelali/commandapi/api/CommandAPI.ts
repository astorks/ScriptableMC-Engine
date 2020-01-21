declare var Java: any;
import {CommandPermission} from '../../../../../io/github/jorelali/commandapi/api/CommandPermission.js'
import {ResultingCommandExecutor} from '../../../../../io/github/jorelali/commandapi/api/ResultingCommandExecutor.js'
import {CommandExecutor} from '../../../../../io/github/jorelali/commandapi/api/CommandExecutor.js'

export interface CommandAPI {
	register(arg0: string, arg1: CommandPermission, arg2: any, arg3: ResultingCommandExecutor): void;
	register(arg0: string, arg1: Array<string>, arg2: any, arg3: ResultingCommandExecutor): void;
	register(arg0: string, arg1: any, arg2: ResultingCommandExecutor): void;
	register(arg0: string, arg1: CommandPermission, arg2: Array<string>, arg3: any, arg4: CommandExecutor): void;
	register(arg0: string, arg1: CommandPermission, arg2: Array<string>, arg3: any, arg4: ResultingCommandExecutor): void;
	register(arg0: string, arg1: CommandPermission, arg2: any, arg3: CommandExecutor): void;
	register(arg0: string, arg1: any, arg2: CommandExecutor): void;
	register(arg0: string, arg1: Array<string>, arg2: any, arg3: CommandExecutor): void;
	unregister(arg0: string): void;
	unregister(arg0: string, arg1: boolean): void;
}

export class CommandAPI {
	public static get $javaClass(): any {
		return Java.type('io.github.jorelali.commandapi.api.CommandAPI');
	}
	constructor();
	constructor(...args: any[]) {
		return new CommandAPI.$javaClass(...args);
	}
	public static getInstance(): CommandAPI;
	public static getInstance(...args: any[]): any {
		return CommandAPI.$javaClass.getInstance(...args);
	}
}

