declare var Java: any;

export interface File {
	isDirectory(): boolean;
	exists(): boolean;
	isFile(): boolean;
	createNewFile(): boolean;
	mkdir(): boolean;
	mkdirs(): boolean;
	parentFile(): File;
	writeText(text: string): void;
	readText(): string;
	readLines(): Array<string>;
}

export class File {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.File');
	}
	constructor(pathName: string);
	constructor(...args: any[]) {
		return new File.$javaClass(...args);
	}
}

