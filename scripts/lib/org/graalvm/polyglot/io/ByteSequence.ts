declare var Java: any;

export interface ByteSequence {
	length(): number;
	bytes(): any;
	subSequence(startIndex: number, endIndex: number): ByteSequence;
	toByteArray(): Array<number>;
	byteAt(index: number): number;
}

export class ByteSequence {
	public static get $javaClass(): any {
		return Java.type('org.graalvm.polyglot.io.ByteSequence');
	}
	public static create(buffer: Array<number>): ByteSequence {
		return ByteSequence.$javaClass.create(buffer);
	}
}

