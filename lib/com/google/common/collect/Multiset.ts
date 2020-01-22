declare var Java: any;

export interface Multiset {
	add(arg0: any, arg1: number): number;
	add(arg0: any): boolean;
	remove(arg0: any): boolean;
	remove(arg0: any, arg1: number): number;
	count(arg0: any): number;
	contains(arg0: any): boolean;
	size(): number;
	iterator(): any;
	spliterator(): any;
	entrySet(): any;
	forEach(arg0: any): void;
	containsAll(arg0: any): boolean;
	retainAll(arg0: any): boolean;
	removeAll(arg0: any): boolean;
	forEachEntry(arg0: any): void;
	elementSet(): any;
	setCount(arg0: any, arg1: number): number;
	setCount(arg0: any, arg1: number, arg2: number): boolean;
	clear(): void;
	isEmpty(): boolean;
	toArray(arg0: any): Array<any>;
	toArray(): Array<any>;
	toArray(arg0: Array<any>): Array<any>;
	addAll(arg0: any): boolean;
	stream(): any;
	removeIf(arg0: any): boolean;
	parallelStream(): any;
}

export class Multiset {
	public static get $javaClass(): any {
		return Java.type('com.google.common.collect.Multiset');
	}
}

