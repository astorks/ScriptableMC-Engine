declare var Java: any;
import {ByteProcessor} from '../../../../com/google/common/io/ByteProcessor.js'
import {ByteArrayDataOutput} from '../../../../com/google/common/io/ByteArrayDataOutput.js'
import {ByteArrayDataInput} from '../../../../com/google/common/io/ByteArrayDataInput.js'

export interface ByteStreams {
}

export class ByteStreams {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteStreams');
	}
	public static limit(arg0: any, arg1: number): any;
	public static limit(...args: any[]): any {
		return ByteStreams.$javaClass.limit(...args);
	}
	public static read(arg0: any, arg1: Array<number>, arg2: number, arg3: number): number;
	public static read(...args: any[]): any {
		return ByteStreams.$javaClass.read(...args);
	}
	public static toByteArray(arg0: any): Array<number>;
	public static toByteArray(...args: any[]): any {
		return ByteStreams.$javaClass.toByteArray(...args);
	}
	public static copy(arg0: any, arg1: any): number;
	public static copy(arg0: any, arg1: any): number;
	public static copy(...args: any[]): any {
		return ByteStreams.$javaClass.copy(...args);
	}
	public static readBytes(arg0: any, arg1: ByteProcessor): any;
	public static readBytes(...args: any[]): any {
		return ByteStreams.$javaClass.readBytes(...args);
	}
	public static nullOutputStream(): any;
	public static nullOutputStream(...args: any[]): any {
		return ByteStreams.$javaClass.nullOutputStream(...args);
	}
	public static readFully(arg0: any, arg1: Array<number>): void;
	public static readFully(arg0: any, arg1: Array<number>, arg2: number, arg3: number): void;
	public static readFully(...args: any[]): any {
		return ByteStreams.$javaClass.readFully(...args);
	}
	public static newDataOutput(arg0: any): ByteArrayDataOutput;
	public static newDataOutput(arg0: number): ByteArrayDataOutput;
	public static newDataOutput(): ByteArrayDataOutput;
	public static newDataOutput(...args: any[]): any {
		return ByteStreams.$javaClass.newDataOutput(...args);
	}
	public static skipFully(arg0: any, arg1: number): void;
	public static skipFully(...args: any[]): any {
		return ByteStreams.$javaClass.skipFully(...args);
	}
	public static newDataInput(arg0: Array<number>): ByteArrayDataInput;
	public static newDataInput(arg0: any): ByteArrayDataInput;
	public static newDataInput(arg0: Array<number>, arg1: number): ByteArrayDataInput;
	public static newDataInput(...args: any[]): any {
		return ByteStreams.$javaClass.newDataInput(...args);
	}
	public static exhaust(arg0: any): number;
	public static exhaust(...args: any[]): any {
		return ByteStreams.$javaClass.exhaust(...args);
	}
}

