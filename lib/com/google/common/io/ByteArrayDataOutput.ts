declare var Java: any;

export interface ByteArrayDataOutput {
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	writeInt(arg0: number): void;
	toByteArray(): Array<number>;
	writeBytes(arg0: string): void;
	writeUTF(arg0: string): void;
	writeFloat(arg0: number): void;
	writeChar(arg0: number): void;
	writeBoolean(arg0: boolean): void;
	writeByte(arg0: number): void;
	writeShort(arg0: number): void;
	writeLong(arg0: number): void;
	writeDouble(arg0: number): void;
	writeChars(arg0: string): void;
}

export class ByteArrayDataOutput {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteArrayDataOutput');
	}
}

