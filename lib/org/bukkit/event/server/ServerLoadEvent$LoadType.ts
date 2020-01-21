declare var Java: any;

export interface ServerLoadEvent$LoadType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class ServerLoadEvent$LoadType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerLoadEvent$LoadType');
	}

	public static get STARTUP(): ServerLoadEvent$LoadType {
		return this.$javaClass.STARTUP;
	}
	public static get RELOAD(): ServerLoadEvent$LoadType {
		return this.$javaClass.RELOAD;
	}
}

