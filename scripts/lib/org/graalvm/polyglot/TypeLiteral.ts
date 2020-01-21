declare var Java: any;

export interface TypeLiteral {
	getType(): any;
	getRawType(): any;
}

export class TypeLiteral {
	public static get $javaClass(): any {
		return Java.type('org.graalvm.polyglot.TypeLiteral');
	}
}

