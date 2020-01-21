declare var Java: any;
import {Source} from '../../../org/graalvm/polyglot/Source.js'
import {ByteSequence} from '../../../org/graalvm/polyglot/io/ByteSequence.js'

export interface Source$Builder {
	name(newName: string): Source$Builder;
	encoding(encoding: any): Source$Builder;
	uri(newUri: any): Source$Builder;
	build(): Source;
	mimeType(mimeType: string): Source$Builder;
	interactive(interactive: boolean): Source$Builder;
	cached(cached: boolean): Source$Builder;
	buildLiteral(): Source;
	internal(internal: boolean): Source$Builder;
	content(code: string): Source$Builder;
	content(characters: any): Source$Builder;
	content(bytes: ByteSequence): Source$Builder;
}

export class Source$Builder {
	public static get $javaClass(): any {
		return Java.type('org.graalvm.polyglot.Source$Builder');
	}
}

