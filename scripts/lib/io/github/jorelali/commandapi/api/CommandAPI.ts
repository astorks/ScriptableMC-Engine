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
	constructor() {
		return new CommandAPI.$javaClass();
	}
	public static new0(): CommandAPI {
		return new CommandAPI.$javaClass();
	}
	public static getInstance(): CommandAPI {
		return CommandAPI.$javaClass.getInstance();
	}
	public static fail(arg0: string): void {
		return CommandAPI.$javaClass.fail(arg0);
	}
}

