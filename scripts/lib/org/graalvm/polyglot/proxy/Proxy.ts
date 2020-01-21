declare var Java: any;

export interface Proxy {
}

export class Proxy {
	public static get $javaClass(): any {
		return Java.type('org.graalvm.polyglot.proxy.Proxy');
	}
}

