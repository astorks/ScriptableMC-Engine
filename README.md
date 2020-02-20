# ScriptableMC-Engine

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/astorks/ScriptableMC-Engine?label=ScriptableMC&style=for-the-badge)](https://github.com/astorks/ScriptableMC-Engine/releases/latest)
[![SpigotMC Resource](https://img.shields.io/badge/SpigotMC-Resource-yellow?style=for-the-badge)](https://www.spigotmc.org/resources/scriptablemc-engine.74690/)

Run JavaScript/TypeScript plugins for Minecraft 1.15 using the GraalJS script engine.<br />
Supported Minecraft Versions: Bukkit/Spigot/Paper 1.12, 1.13, 1.14, **1.15**<br />
Untested but should work: 1.8+

**This plugin is in a preview state, there may be breaking changes, missing features, and possibly a few bugs.**<br >
Feel free to create an issue if you find any missing features, bugs, or just have an idea for a great feature to add.

**This plugin requires running your minecraft server with OpenJDK, Standard JDK, or the GraalVM java runtime.**<br >
Most linux servers already use OpenJDK, however if you're running windows or want a fully supported java runtime that supports AOT javascript compilation you can install [GraalVM-CE](https://github.com/graalvm/graalvm-ce-builds/releases/latest).

GraalVM-CE is a free open source java runtime created by Oracle that is pre-packaged with the GraalJS Engine allowing all javascript engine features including AOT compilation of javascript.

## Installing The Plugin
- Ensure your server is running OpenJDK 8+ or GraalVM
- [Download the latest ScriptableMC plugin](https://github.com/astorks/ScriptableMC-Engine/releases/latest) and place it in your plugins folder.
- Take a look at [ScriptableMC-TypeScript](https://github.com/astorks/ScriptableMC-TypeScript) for a full typescript plugin example.
You can take the typescript example and compile it, then directly modify the javascript if you don't want to use typescript.

## Commands and Permissions
##### ScritableMC Base Command
| Command       | Alias         | Description                                           | Permission               |
| ------------- | ------------- |-----------------------------------------------------| ------------------------ |
| `/scriptablemc menu`   | `/smc m`       | Opens an inventory menu that allows you to control the scriptable engine. | `scriptablemc.menu` |
| `/scriptablemc info`   | `/smc i`       | Prints plugin version and GraalVM/GraalJS versions if available. | `scriptablemc.info` |
| `/scriptablemc reload`   | `/smc rl`       | Fully reloads all script engines. | `scriptablemc.reload` |
| `/scriptablemc version`   | `/smc v`       | Check the github releases for any updates. | `scriptablemc.version` |

##### ScritableMC JavaScript Sub Command
| Command       | Alias         | Description                                           | Permission               |
| ------------- | ------------- |-----------------------------------------------------| ------------------------ |
| `/scriptablemc reload`   | `/smc rl /jsrl`       | Fully reloads the script engine and all script files. | `scriptablemc.reload` |
| `/scriptablemc javascript execute <source>`   | `/smc js ex <source>`       | Executes javascript source and prints the return value. | `scriptablemc.js.execute` |
| `/scriptablemc javascript execute stash`   | `/smc js ex stash`       | Executes javascript source stored in your stash. | `scriptablemc.js.execute` |
| `/scriptablemc javascript file <filePath>`   | `/smc js f <filePath>`       | Executes javascript file from the scripts folder. | `scriptablemc.js.execute.file` |
| `/scriptablemc javascript stash`   | `/smc js st`       | Prints all stored javascript lines in your stash. | `scriptablemc.js.execute` |
| `/scriptablemc javascript stash <source>`   | `/smc js st <source>`       | Adds a line to your javascript stash. | `scriptablemc.js.execute` |
| `/scriptablemc javascript stash clear`   | `/smc js st clear`       | Clears your javascript stash. | `scriptablemc.js.execute` |

### `/smc javascript execute` Command Example
> `/jsex return 1 + 1` <br>
> ![2](https://i.imgur.com/1MkiDxW.png)

> `/jsex sender.sendMessage(lib.org.bukkit.ChatColor.GREEN + "Hello World!")` <br>
> ![Hello World!](https://i.imgur.com/1dzwpqy.png)


### Third Party Libraries
https://github.com/MinusKube/SmartInvs - Inventory helper library<br />
https://github.com/lucko/helper - MinecraftVersions helper library<br />
https://github.com/jkcclemens/khttp - HTTP helper library<br />
https://github.com/aikar/commands - Built-in commands and auto-completion<br />
https://github.com/graalvm/graaljs - JavaScript engine
