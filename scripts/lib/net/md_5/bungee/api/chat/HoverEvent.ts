declare var Java: any;
import {BaseComponent} from '../../../../../net/md_5/bungee/api/chat/BaseComponent.js'
import {HoverEvent$Action} from '../../../../../net/md_5/bungee/api/chat/HoverEvent$Action.js'

export interface HoverEvent {
	getValue(): Array<BaseComponent>;
	getAction(): HoverEvent$Action;
}

export class HoverEvent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.HoverEvent');
	}
	constructor(arg0: HoverEvent$Action, arg1: Array<BaseComponent>) {
		return new HoverEvent.$javaClass(arg0, arg1);
	}
	public static new0(arg0: HoverEvent$Action, arg1: Array<BaseComponent>): HoverEvent {
		return new HoverEvent.$javaClass(arg0, arg1);
	}
}

