declare var Java: any;
import {ClickEvent$Action} from '../../../../../net/md_5/bungee/api/chat/ClickEvent$Action.js'

export interface ClickEvent {
	getValue(): string;
	getAction(): ClickEvent$Action;
}

export class ClickEvent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ClickEvent');
	}
	constructor(arg0: ClickEvent$Action, arg1: string) {
		return new ClickEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: ClickEvent$Action, arg1: string): ClickEvent {
		return new ClickEvent.$javaClass(arg0, arg1);
	}
}

