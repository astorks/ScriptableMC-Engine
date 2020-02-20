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

## Installing The JavaScript Engine Plugin
##### If your server is running on a Standard JDK
- Download the latest [`ScriptableMC-Engine-JS-Bundled.jar`](https://github.com/astorks/ScriptableMC-Engine/releases/latest/download/ScriptableMC-Engine-JS-Bundled.jar) and place it in your plugins folder.
##### If your server is running on a GraalVM JDK
- Download the latest [`ScriptableMC-Engine-JS.jar`](https://github.com/astorks/ScriptableMC-Engine/releases/latest/download/ScriptableMC-Engine-JS.jar) and place it in your plugins folder.

Take a look at [ScriptableMC-TypeScript](https://github.com/astorks/ScriptableMC-TypeScript) for a full typescript plugin example.
You can take the typescript example and compile it, then directly modify the javascript if you don't want to use typescript.

## Commands and Permissions
##### ScritableMC Base Command
| Command       | Alias         | Description                                           | Permission               |
| ------------- | ------------- |-----------------------------------------------------| ------------------------ |
| `/scriptablemc menu`   | `/smc m`       | Opens an inventory menu that allows you to control the script engines. | `scriptablemc.menu` |
| `/scriptablemc info`   | `/smc i`       | Prints plugin version and all loaded script engine versions if available. | `scriptablemc.info` |
| `/scriptablemc reload`   | `/smc rl`       | Fully reloads all script engines and all script files. | `scriptablemc.reload` |
| `/scriptablemc version`   | `/smc v`       | Check the github releases for any updates. | `scriptablemc.version` |

##### ScritableMC JavaScript Engine Commands
| Command       | Alias         | Description                                           | Permission               |
| ------------- | ------------- |-----------------------------------------------------| ------------------------ |
| `/scriptablemc javascript reload`   | `/smc rl /jsrl`       | Fully reloads the javascript engine and all script files. | `scriptablemc.js.reload` |
| `/scriptablemc javascript execute <source>`   | `/smc js ex <source>`       | Executes javascript source and prints the return value. | `scriptablemc.js.execute` |
| `/scriptablemc javascript execute stash`   | `/smc js ex stash`       | Executes javascript source stored in your stash. | `scriptablemc.js.execute` |
| `/scriptablemc javascript file <filePath>`   | `/smc js f <filePath>`       | Executes javascript file from the scripts folder. | `scriptablemc.js.execute.file` |
| `/scriptablemc javascript stash`   | `/smc js st`       | Prints all stored javascript lines in your stash. | `scriptablemc.js.execute` |
| `/scriptablemc javascript stash <source>`   | `/smc js st <source>`       | Adds a line to your javascript stash. | `scriptablemc.js.execute` |
| `/scriptablemc javascript stash clear`   | `/smc js st clear`       | Clears your javascript stash. | `scriptablemc.js.execute` |

##### ScritableMC Python Engine Commands
| Command       | Alias         | Description                                           | Permission               |
| ------------- | ------------- |-----------------------------------------------------| ------------------------ |
| `/scriptablemc python reload`   | `/smc rl /pyrl`       | Fully reloads the python script engine and all script files. | `scriptablemc.python.reload` |
| `/scriptablemc python execute <source>`   | `/smc py ex <source> /pyex`       | Executes python source and prints the return value. | `scriptablemc.python.execute` |
| `/scriptablemc python execute stash`   | `/smc py ex stash`       | Executes python source stored in your stash. | `scriptablemc.python.execute` |
| `/scriptablemc python file <filePath>`   | `/smc py f <filePath>`       | Executes python file from the scripts folder. | `scriptablemc.python.execute.file` |
| `/scriptablemc python stash`   | `/smc py st`       | Prints all stored python lines in your stash. | `scriptablemc.python.execute` |
| `/scriptablemc python stash <source>`   | `/smc py st <source>`       | Adds a line to your python stash. | `scriptablemc.python.execute` |
| `/scriptablemc python stash clear`   | `/smc py st clear`       | Clears your python stash. | `scriptablemc.python.execute` |

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
https://github.com/apache/commons-io - FileUtils helper library<br />
https://github.com/graalvm/graaljs - JavaScript engine
