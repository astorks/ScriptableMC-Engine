declare var Java: any;
import {WorldType} from '../../org/bukkit/WorldType.js'
import {World} from '../../org/bukkit/World.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'

export interface WorldCreator {
	name(): string;
	type(): WorldType;
	type(type: WorldType): WorldCreator;
	copy(creator: WorldCreator): WorldCreator;
	copy(world: World): WorldCreator;
	generator(): ChunkGenerator;
	generator(generator: ChunkGenerator): WorldCreator;
	generator(generator: string): WorldCreator;
	generator(generator: string, output: CommandSender): WorldCreator;
	environment(env: World$Environment): WorldCreator;
	environment(): World$Environment;
	seed(): number;
	seed(seed: number): WorldCreator;
	createWorld(): World;
	generatorSettings(generatorSettings: string): WorldCreator;
	generatorSettings(): string;
	generateStructures(generate: boolean): WorldCreator;
	generateStructures(): boolean;
	hardcore(): boolean;
	hardcore(hardcore: boolean): WorldCreator;
}

export class WorldCreator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldCreator');
	}
	constructor(_name: string);
	constructor(...args: any[]) {
		return new WorldCreator.$javaClass(...args);
	}
	public static _name(_name: string): WorldCreator;
	public static _name(...args: any[]): any {
		return WorldCreator.$javaClass.name(...args);
	}
}

