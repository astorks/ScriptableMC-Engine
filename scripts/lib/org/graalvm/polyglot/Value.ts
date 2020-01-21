declare var Java: any;
import {TypeLiteral} from '../../../org/graalvm/polyglot/TypeLiteral.js'
import {Proxy} from '../../../org/graalvm/polyglot/proxy/Proxy.js'
import {SourceSection} from '../../../org/graalvm/polyglot/SourceSection.js'

export interface Value {
	newInstance(_arguments: Array<any>): any;
	execute(_arguments: Array<any>): any;
	isNull(): boolean;
	as(targetType: any): any;
	as(targetType: TypeLiteral): any;
	canExecute(): boolean;
	invokeMember(identifier: string, _arguments: Array<any>): any;
	getMember(identifier: string): any;
	putMember(identifier: string, value: any): void;
	asString(): string;
	isBoolean(): boolean;
	isString(): boolean;
	asByte(): number;
	asShort(): number;
	asLong(): number;
	asBoolean(): boolean;
	asFloat(): number;
	asInt(): number;
	asDouble(): number;
	fitsInShort(): boolean;
	removeMember(identifier: string): boolean;
	isNumber(): boolean;
	asHostObject(): any;
	getMemberKeys(): any;
	executeVoid(_arguments: Array<any>): void;
	getMetaObject(): any;
	removeArrayElement(index: number): boolean;
	fitsInFloat(): boolean;
	getArraySize(): number;
	hasMembers(): boolean;
	asProxyObject(): Proxy;
	fitsInLong(): boolean;
	asNativePointer(): number;
	setArrayElement(index: number, value: any): void;
	getSourceLocation(): SourceSection;
	isHostObject(): boolean;
	getArrayElement(index: number): any;
	fitsInInt(): boolean;
	fitsInByte(): boolean;
	isProxyObject(): boolean;
	canInvokeMember(identifier: string): boolean;
	hasMember(identifier: string): boolean;
	hasArrayElements(): boolean;
	canInstantiate(): boolean;
	fitsInDouble(): boolean;
	isNativePointer(): boolean;
}

export class Value {
	public static get $javaClass(): any {
		return Java.type('org.graalvm.polyglot.Value');
	}
	public static asValue(o: any): any {
		return Value.$javaClass.asValue(o);
	}
}

