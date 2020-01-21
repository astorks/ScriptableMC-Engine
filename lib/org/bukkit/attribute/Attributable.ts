declare var Java: any;
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'

export interface Attributable {
	getAttribute(attribute: Attribute): AttributeInstance;
}

export class Attributable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.Attributable');
	}
}

