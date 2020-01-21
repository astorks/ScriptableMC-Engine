declare var Java: any;
import {Source} from '../../../org/graalvm/polyglot/Source.js'

export interface SourceSection {
	getSource(): Source;
	hasLines(): boolean;
	getEndColumn(): number;
	getStartColumn(): number;
	getCharIndex(): number;
	getCharEndIndex(): number;
	hasColumns(): boolean;
	getEndLine(): number;
	hasCharIndex(): boolean;
	getStartLine(): number;
	getCode(): any;
	getCharLength(): number;
	isAvailable(): boolean;
	getCharacters(): any;
}

export class SourceSection {
	public static get $javaClass(): any {
		return Java.type('org.graalvm.polyglot.SourceSection');
	}
}

