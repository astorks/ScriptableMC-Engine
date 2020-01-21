declare var Java: any;
import {Warning} from '../../org/bukkit/Warning.js'

export interface Warning$WarningState {
	printFor(warning: Warning): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Warning$WarningState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning$WarningState');
	}

	public static get ON(): Warning$WarningState {
		return this.$javaClass.ON;
	}
	public static get OFF(): Warning$WarningState {
		return this.$javaClass.OFF;
	}
	public static get DEFAULT(): Warning$WarningState {
		return this.$javaClass.DEFAULT;
	}
}

