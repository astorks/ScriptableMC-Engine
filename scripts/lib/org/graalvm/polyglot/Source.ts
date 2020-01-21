declare var Java: any;
import {ByteSequence} from '../../../org/graalvm/polyglot/io/ByteSequence.js'
import {Source$Builder} from '../../../org/graalvm/polyglot/Source$Builder.js'

export interface Source {
	getLength(): number;
	getName(): string;
	getBytes(): ByteSequence;
	getPath(): string;
	getInputStream(): any;
	getLineNumber(offset: number): number;
	getLanguage(): string;
	getURL(): any;
	isInteractive(): boolean;
	isInternal(): boolean;
	getReader(): any;
	hasCharacters(): boolean;
	getMimeType(): string;
	getLineCount(): number;
	getLineLength(lineNumber: number): number;
	getColumnNumber(offset: number): number;
	getURI(): any;
	hasBytes(): boolean;
	getLineStartOffset(lineNumber: number): number;
	getCharacters(): any;
	getCharacters(lineNumber: number): any;
}

export class Source {
	public static get $javaClass(): any {
		return Java.type('org.graalvm.polyglot.Source');
	}
	public static create(language: string, source: any): Source {
		return Source.$javaClass.create(language, source);
	}
	public static newBuilder(language: string, bytes: ByteSequence, _name: string): Source$Builder {
		return Source.$javaClass.newBuilder(language, bytes, _name);
	}
	public static newBuilder0(language: string, characters: any, _name: string): Source$Builder {
		return Source.$javaClass.newBuilder(language, characters, _name);
	}
	public static newBuilder1(language: string, file: any): Source$Builder {
		return Source.$javaClass.newBuilder(language, file);
	}
	public static newBuilder2(language: string, url: any): Source$Builder {
		return Source.$javaClass.newBuilder(language, url);
	}
	public static newBuilder3(language: string, source: any, _name: string): Source$Builder {
		return Source.$javaClass.newBuilder(language, source, _name);
	}
	public static findLanguage(file: any): string {
		return Source.$javaClass.findLanguage(file);
	}
	public static findLanguage0(url: any): string {
		return Source.$javaClass.findLanguage(url);
	}
	public static findLanguage1(mimeType: string): string {
		return Source.$javaClass.findLanguage(mimeType);
	}
	public static findMimeType(file: any): string {
		return Source.$javaClass.findMimeType(file);
	}
	public static findMimeType0(url: any): string {
		return Source.$javaClass.findMimeType(url);
	}
}

