declare var Java: any;
import {Multiset} from '../../../../com/google/common/collect/Multiset.js'

export interface Multimap {
	remove(arg0: any, arg1: any): boolean;
	get(arg0: any): any;
	put(arg0: any, arg1: any): boolean;
	values(): any;
	clear(): void;
	isEmpty(): boolean;
	size(): number;
	putAll(arg0: Multimap): boolean;
	putAll(arg0: any, arg1: any): boolean;
	forEach(arg0: any): void;
	containsKey(arg0: any): boolean;
	keys(): Multiset;
	containsValue(arg0: any): boolean;
	keySet(): any;
	entries(): any;
	removeAll(arg0: any): any;
	containsEntry(arg0: any, arg1: any): boolean;
	replaceValues(arg0: any, arg1: any): any;
	asMap(): any;
}

export class Multimap {
	public static get $javaClass(): any {
		return Java.type('com.google.common.collect.Multimap');
	}
}

