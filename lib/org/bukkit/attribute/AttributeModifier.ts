declare var Java: any;
import {EquipmentSlot} from '../../../org/bukkit/inventory/EquipmentSlot.js'
import {AttributeModifier$Operation} from '../../../org/bukkit/attribute/AttributeModifier$Operation.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface AttributeModifier extends ConfigurationSerializable {
	getName(): string;
	getSlot(): EquipmentSlot;
	getUniqueId(): string;
	serialize(): any;
	getAmount(): number;
	getOperation(): AttributeModifier$Operation;
}

export class AttributeModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeModifier');
	}
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(_name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(...args: any[]) {
		return new AttributeModifier.$javaClass(...args);
	}
}

