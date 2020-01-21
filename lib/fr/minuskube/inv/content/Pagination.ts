declare var Java: any;
import {ClickableItem} from '../../../../fr/minuskube/inv/ClickableItem.js'
import {SlotIterator} from '../../../../fr/minuskube/inv/content/SlotIterator.js'

export interface Pagination {
	last(): Pagination;
	next(): Pagination;
	first(): Pagination;
	previous(): Pagination;
	page(arg0: number): Pagination;
	getPage(): number;
	isLast(): boolean;
	isFirst(): boolean;
	setItemsPerPage(arg0: number): Pagination;
	getPageItems(): Array<ClickableItem>;
	addToIterator(arg0: SlotIterator): Pagination;
	setItems(arg0: Array<ClickableItem>): Pagination;
}

export class Pagination {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.Pagination');
	}
}

