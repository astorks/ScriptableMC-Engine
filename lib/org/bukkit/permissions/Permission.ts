declare var Java: any;
import {PermissionDefault} from '../../../org/bukkit/permissions/PermissionDefault.js'

export interface Permission {
	getName(): string;
	getDefault(): PermissionDefault;
	setDefault(value: PermissionDefault): void;
	getDescription(): string;
	setDescription(value: string): void;
	getPermissibles(): any;
	getChildren(): any;
	addParent(perm: Permission, value: boolean): void;
	addParent(_name: string, value: boolean): Permission;
	recalculatePermissibles(): void;
}

export class Permission {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permission');
	}
	constructor(_name: string, description: string, defaultValue: PermissionDefault);
	constructor(_name: string, children: any);
	constructor(_name: string, description: string, defaultValue: PermissionDefault, children: any);
	constructor(_name: string, defaultValue: PermissionDefault, children: any);
	constructor(_name: string, description: string, children: any);
	constructor(_name: string);
	constructor(_name: string, description: string);
	constructor(_name: string, defaultValue: PermissionDefault);
	constructor(...args: any[]) {
		return new Permission.$javaClass(...args);
	}
	public static get DEFAULT_PERMISSION(): PermissionDefault {
		return Permission.$javaClass.DEFAULT_PERMISSION;
	}
}

