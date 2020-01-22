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
	setItems(arg0: Array<ClickableItem>): Pagination;
	isLast(): boolean;
	getPageItems(): Array<ClickableItem>;
	isFirst(): boolean;
	addToIterator(arg0: SlotIterator): Pagination;
	setItemsPerPage(arg0: number): Pagination;
}

export class Pagination {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.Pagination');
	}
}

