declare var Java: any;
import {ClickableItem} from '../../../../fr/minuskube/inv/ClickableItem.js'
import {SlotPos} from '../../../../fr/minuskube/inv/content/SlotPos.js'

export interface SlotIterator {
	get(): any;
	next(): SlotIterator;
	set(arg0: ClickableItem): SlotIterator;
	started(): boolean;
	previous(): SlotIterator;
	column(): number;
	column(arg0: number): SlotIterator;
	blacklist(arg0: SlotPos): SlotIterator;
	blacklist(arg0: number, arg1: number): SlotIterator;
	doesAllowOverride(): boolean;
	ended(): boolean;
	allowOverride(arg0: boolean): SlotIterator;
	row(): number;
	row(arg0: number): SlotIterator;
}

export class SlotIterator {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator');
	}
}

