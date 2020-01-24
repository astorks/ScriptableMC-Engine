# ScriptableMC-Engine

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/astorks/ScriptableMC-Engine?label=ScriptableMC&style=for-the-badge)](https://github.com/astorks/ScriptableMC-Engine/releases/latest)


Run JavaScript/TypeScript plugins for Bukkit/Spigot/Paper Minecraft 1.15 using the GraalVM java runtime.

**This plugin requires running your minecraft server with the GraalVM runtime, this plugin will NOT work with the default java 8 runtime.**

## Installing The Plugin
- Install [GraalVM-CE](https://github.com/graalvm/graalvm-ce-builds/releases/latest).
- Update your minecraft server start script to use the new GraalVM java runtime. `GRAALVM_INSTALL_PATH/bin/java`
**This is required as you can NOT launch your minecraft server with the default JRE8 or the plugin will fail to load**
- [Download the latest ScriptableMC plugin](https://github.com/astorks/ScriptableMC-Engine/releases/latest) and place it in your plugins folder.
- Take a look at [ScriptableMC-TypeScript](https://github.com/astorks/ScriptableMC-TypeScript) for a full typescript plugin example.
- > A drop-in replacement docker image for pterodactly/core:java8 is avaliable as pixlfox/pterodactyl-core:graalvm on docker hub