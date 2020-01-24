package com.pixlfox.scriptablemc

import com.pixlfox.scriptablemc.core.ScriptablePluginContext
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.pixlfox.scriptablemc.smartinvs.SmartInventoryInterface
import com.pixlfox.scriptablemc.smartinvs.SmartInventoryProvider
import com.thoughtworks.paranamer.BytecodeReadingParanamer
import com.thoughtworks.paranamer.Paranamer
import fr.minuskube.inv.SmartInventory
import java.io.File
import java.lang.reflect.Constructor
import java.lang.reflect.Method
import java.lang.reflect.Modifier
import java.lang.reflect.Parameter

@Suppress("MemberVisibilityCanBePrivate", "UnstableApiUsage", "unused")
class TypescriptLibraryExporter {
    private var exportPath: String = "./lib/ts"
    private val classList = mutableListOf<Class<*>>()
    private var allowedPackagesRegex: Regex = Regex("(org\\.bukkit|com\\.pixlfox|io\\.github\\.jorelali\\.commandapi|fr\\.minuskube\\.inv|com\\.google)(.*)?")
    private val paranamer: Paranamer = BytecodeReadingParanamer()

    fun allowPackages(regex: String): TypescriptLibraryExporter {
        this.allowedPackagesRegex = Regex(regex)
        return this
    }

    fun exportPath(exportPath: String): TypescriptLibraryExporter {
        this.exportPath = exportPath
        return this
    }

    fun clean(skipThisDir: Boolean = true): TypescriptLibraryExporter {
        deleteDirectory(File(exportPath), skipThisDir)
        return this
    }

    fun addHelperClasses(): TypescriptLibraryExporter {
        addClasses(
            ScriptablePluginContext::class.java,
            ScriptablePluginEngine::class.java,
            fr.minuskube.inv.SmartInventory::class.java,
            com.pixlfox.scriptablemc.File::class.java,
            SmartInventoryProvider::class.java,
            SmartInventoryInterface::class.java,
            SmartInventory::class.java,
            com.google.common.io.ByteStreams::class.java
        )
        return this
    }

    fun addBukkitClasses(): TypescriptLibraryExporter {
        return this.addClasses(
            org.bukkit.Bukkit::class.java,
            org.bukkit.command.PluginCommand::class.java,
            org.bukkit.entity.Player::class.java,
            org.bukkit.Server::class.java,
            org.bukkit.event.Event::class.java,
            org.bukkit.configuration.ConfigurationSection::class.java,

            org.bukkit.event.block.BlockBreakEvent::class.java,
            org.bukkit.event.block.BlockBurnEvent::class.java,
            org.bukkit.event.block.BlockCanBuildEvent::class.java,
            org.bukkit.event.block.BlockCookEvent::class.java,
            org.bukkit.event.block.BlockDamageEvent::class.java,
            org.bukkit.event.block.BlockDispenseArmorEvent::class.java,
            org.bukkit.event.block.BlockDispenseEvent::class.java,
            org.bukkit.event.block.BlockExpEvent::class.java,
            org.bukkit.event.block.BlockExplodeEvent::class.java,
            org.bukkit.event.block.BlockFadeEvent::class.java,
            org.bukkit.event.block.BlockFertilizeEvent::class.java,
            org.bukkit.event.block.BlockFormEvent::class.java,
            org.bukkit.event.block.BlockFromToEvent::class.java,
            org.bukkit.event.block.BlockGrowEvent::class.java,
            org.bukkit.event.block.BlockIgniteEvent::class.java,
            org.bukkit.event.block.BlockMultiPlaceEvent::class.java,
            org.bukkit.event.block.BlockPhysicsEvent::class.java,
            org.bukkit.event.block.BlockPistonEvent::class.java,
            org.bukkit.event.block.BlockPistonExtendEvent::class.java,
            org.bukkit.event.block.BlockPistonRetractEvent::class.java,
            org.bukkit.event.block.BlockPlaceEvent::class.java,
            org.bukkit.event.block.BlockRedstoneEvent::class.java,
            org.bukkit.event.block.BlockShearEntityEvent::class.java,
            org.bukkit.event.block.BlockSpreadEvent::class.java,
            org.bukkit.event.block.CauldronLevelChangeEvent	 ::class.java,
            org.bukkit.event.block.EntityBlockFormEvent::class.java,
            org.bukkit.event.block.FluidLevelChangeEvent::class.java,
            org.bukkit.event.block.LeavesDecayEvent::class.java,
            org.bukkit.event.block.MoistureChangeEvent::class.java,
            org.bukkit.event.block.NotePlayEvent::class.java,
            org.bukkit.event.block.SignChangeEvent::class.java,
            org.bukkit.event.block.SpongeAbsorbEvent::class.java,

            org.bukkit.event.enchantment.EnchantItemEvent::class.java,
            org.bukkit.event.enchantment.PrepareItemEnchantEvent::class.java,

            org.bukkit.event.entity.AreaEffectCloudApplyEvent::class.java,
            org.bukkit.event.entity.BatToggleSleepEvent::class.java,
            org.bukkit.event.entity.CreatureSpawnEvent::class.java,
            org.bukkit.event.entity.CreeperPowerEvent::class.java,
            org.bukkit.event.entity.EnderDragonChangePhaseEvent::class.java,
            org.bukkit.event.entity.EntityAirChangeEvent::class.java,
            org.bukkit.event.entity.EntityBreakDoorEvent::class.java,
            org.bukkit.event.entity.EntityBreedEvent::class.java,
            org.bukkit.event.entity.EntityChangeBlockEvent::class.java,
            org.bukkit.event.entity.EntityCombustByBlockEvent::class.java,
            org.bukkit.event.entity.EntityCombustByEntityEvent::class.java,
            org.bukkit.event.entity.EntityCombustEvent::class.java,
            org.bukkit.event.entity.EntityDamageByBlockEvent::class.java,
            org.bukkit.event.entity.EntityDamageByEntityEvent::class.java,
            org.bukkit.event.entity.EntityDamageEvent::class.java,
            org.bukkit.event.entity.EntityDeathEvent::class.java,
            org.bukkit.event.entity.EntityDropItemEvent::class.java,
            org.bukkit.event.entity.EntityEvent::class.java,
            org.bukkit.event.entity.EntityExplodeEvent::class.java,
            org.bukkit.event.entity.EntityInteractEvent::class.java,
            org.bukkit.event.entity.EntityPickupItemEvent::class.java,
            org.bukkit.event.entity.EntityPortalEnterEvent::class.java,
            org.bukkit.event.entity.EntityPortalEvent::class.java,
            org.bukkit.event.entity.EntityPortalExitEvent::class.java,
            org.bukkit.event.entity.EntityPoseChangeEvent::class.java,
            org.bukkit.event.entity.EntityPotionEffectEvent::class.java,
            org.bukkit.event.entity.EntityRegainHealthEvent::class.java,
            org.bukkit.event.entity.EntityResurrectEvent::class.java,
            org.bukkit.event.entity.EntityShootBowEvent::class.java,
            org.bukkit.event.entity.EntitySpawnEvent::class.java,
            org.bukkit.event.entity.EntityTameEvent::class.java,
            org.bukkit.event.entity.EntityTargetEvent::class.java,
            org.bukkit.event.entity.EntityTargetLivingEntityEvent::class.java,
            org.bukkit.event.entity.EntityTeleportEvent::class.java,
            org.bukkit.event.entity.EntityToggleGlideEvent::class.java,
            org.bukkit.event.entity.EntityToggleSwimEvent::class.java,
            org.bukkit.event.entity.EntityTransformEvent::class.java,
            org.bukkit.event.entity.EntityUnleashEvent::class.java,
            org.bukkit.event.entity.ExpBottleEvent::class.java,
            org.bukkit.event.entity.ExplosionPrimeEvent::class.java,
            org.bukkit.event.entity.FireworkExplodeEvent::class.java,
            org.bukkit.event.entity.FoodLevelChangeEvent::class.java,
            org.bukkit.event.entity.HorseJumpEvent::class.java,
            org.bukkit.event.entity.ItemDespawnEvent::class.java,
            org.bukkit.event.entity.ItemMergeEvent::class.java,
            org.bukkit.event.entity.ItemSpawnEvent::class.java,
            org.bukkit.event.entity.LingeringPotionSplashEvent::class.java,
            org.bukkit.event.entity.PigZapEvent::class.java,
            org.bukkit.event.entity.PigZombieAngerEvent::class.java,
            org.bukkit.event.entity.PlayerDeathEvent::class.java,
            org.bukkit.event.entity.PlayerLeashEntityEvent::class.java,
            org.bukkit.event.entity.PotionSplashEvent::class.java,
            org.bukkit.event.entity.ProjectileHitEvent::class.java,
            org.bukkit.event.entity.ProjectileLaunchEvent::class.java,
            org.bukkit.event.entity.SheepDyeWoolEvent::class.java,
            org.bukkit.event.entity.SheepRegrowWoolEvent::class.java,
            org.bukkit.event.entity.SlimeSplitEvent::class.java,
            org.bukkit.event.entity.VillagerAcquireTradeEvent::class.java,
            org.bukkit.event.entity.VillagerCareerChangeEvent::class.java,
            org.bukkit.event.entity.VillagerReplenishTradeEvent::class.java,

            org.bukkit.event.hanging.HangingBreakByEntityEvent::class.java,
            org.bukkit.event.hanging.HangingBreakEvent::class.java,
            org.bukkit.event.hanging.HangingEvent::class.java,
            org.bukkit.event.hanging.HangingPlaceEvent::class.java,

            org.bukkit.event.inventory.BrewEvent::class.java,
            org.bukkit.event.inventory.BrewingStandFuelEvent::class.java,
            org.bukkit.event.inventory.CraftItemEvent::class.java,
            org.bukkit.event.inventory.FurnaceBurnEvent::class.java,
            org.bukkit.event.inventory.FurnaceExtractEvent::class.java,
            org.bukkit.event.inventory.FurnaceSmeltEvent::class.java,
            org.bukkit.event.inventory.InventoryClickEvent::class.java,
            org.bukkit.event.inventory.InventoryCloseEvent::class.java,
            org.bukkit.event.inventory.InventoryCreativeEvent::class.java,
            org.bukkit.event.inventory.InventoryDragEvent::class.java,
            org.bukkit.event.inventory.InventoryEvent::class.java,
            org.bukkit.event.inventory.InventoryInteractEvent::class.java,
            org.bukkit.event.inventory.InventoryMoveItemEvent::class.java,
            org.bukkit.event.inventory.InventoryOpenEvent::class.java,
            org.bukkit.event.inventory.InventoryPickupItemEvent::class.java,
            org.bukkit.event.inventory.PrepareAnvilEvent::class.java,
            org.bukkit.event.inventory.PrepareItemCraftEvent::class.java,
            org.bukkit.event.inventory.TradeSelectEvent::class.java,

            org.bukkit.event.player.AsyncPlayerChatEvent::class.java,
            org.bukkit.event.player.AsyncPlayerPreLoginEvent::class.java,
            org.bukkit.event.player.PlayerAdvancementDoneEvent::class.java,
            org.bukkit.event.player.PlayerAnimationEvent::class.java,
            org.bukkit.event.player.PlayerArmorStandManipulateEvent::class.java,
            org.bukkit.event.player.PlayerBedEnterEvent::class.java,
            org.bukkit.event.player.PlayerBedLeaveEvent::class.java,
            org.bukkit.event.player.PlayerBucketEmptyEvent::class.java,
            org.bukkit.event.player.PlayerBucketEvent::class.java,
            org.bukkit.event.player.PlayerBucketFillEvent::class.java,
            org.bukkit.event.player.PlayerChangedMainHandEvent::class.java,
            org.bukkit.event.player.PlayerChangedWorldEvent::class.java,
            org.bukkit.event.player.PlayerChannelEvent::class.java,
            org.bukkit.event.player.PlayerCommandPreprocessEvent::class.java,
            org.bukkit.event.player.PlayerCommandSendEvent::class.java,
            org.bukkit.event.player.PlayerDropItemEvent::class.java,
            org.bukkit.event.player.PlayerEditBookEvent::class.java,
            org.bukkit.event.player.PlayerEggThrowEvent::class.java,
            org.bukkit.event.player.PlayerEvent::class.java,
            org.bukkit.event.player.PlayerExpChangeEvent::class.java,
            org.bukkit.event.player.PlayerFishEvent::class.java,
            org.bukkit.event.player.PlayerGameModeChangeEvent::class.java,
            org.bukkit.event.player.PlayerInteractAtEntityEvent::class.java,
            org.bukkit.event.player.PlayerInteractEntityEvent::class.java,
            org.bukkit.event.player.PlayerInteractEvent::class.java,
            org.bukkit.event.player.PlayerItemBreakEvent::class.java,
            org.bukkit.event.player.PlayerItemConsumeEvent::class.java,
            org.bukkit.event.player.PlayerItemDamageEvent::class.java,
            org.bukkit.event.player.PlayerItemHeldEvent::class.java,
            org.bukkit.event.player.PlayerItemMendEvent::class.java,
            org.bukkit.event.player.PlayerJoinEvent::class.java,
            org.bukkit.event.player.PlayerKickEvent::class.java,
            org.bukkit.event.player.PlayerLevelChangeEvent::class.java,
            org.bukkit.event.player.PlayerLocaleChangeEvent::class.java,
            org.bukkit.event.player.PlayerLoginEvent::class.java,
            org.bukkit.event.player.PlayerMoveEvent::class.java,
            org.bukkit.event.player.PlayerPickupArrowEvent::class.java,
            org.bukkit.event.player.PlayerPortalEvent::class.java,
            org.bukkit.event.player.PlayerQuitEvent::class.java,
            org.bukkit.event.player.PlayerRecipeDiscoverEvent::class.java,
            org.bukkit.event.player.PlayerRegisterChannelEvent::class.java,
            org.bukkit.event.player.PlayerResourcePackStatusEvent::class.java,
            org.bukkit.event.player.PlayerRespawnEvent::class.java,
            org.bukkit.event.player.PlayerRiptideEvent::class.java,
            org.bukkit.event.player.PlayerShearEntityEvent::class.java,
            org.bukkit.event.player.PlayerStatisticIncrementEvent::class.java,
            org.bukkit.event.player.PlayerSwapHandItemsEvent::class.java,
            org.bukkit.event.player.PlayerTakeLecternBookEvent::class.java,
            org.bukkit.event.player.PlayerTeleportEvent::class.java,
            org.bukkit.event.player.PlayerToggleFlightEvent::class.java,
            org.bukkit.event.player.PlayerToggleSneakEvent::class.java,
            org.bukkit.event.player.PlayerToggleSprintEvent::class.java,
            org.bukkit.event.player.PlayerUnleashEntityEvent::class.java,
            org.bukkit.event.player.PlayerUnregisterChannelEvent::class.java,
            org.bukkit.event.player.PlayerVelocityEvent::class.java,

            org.bukkit.event.server.BroadcastMessageEvent::class.java,
            org.bukkit.event.server.MapInitializeEvent::class.java,
            org.bukkit.event.server.PluginDisableEvent::class.java,
            org.bukkit.event.server.PluginEnableEvent::class.java,
            org.bukkit.event.server.PluginEvent::class.java,
            org.bukkit.event.server.RemoteServerCommandEvent::class.java,
            org.bukkit.event.server.ServerCommandEvent::class.java,
            org.bukkit.event.server.ServerEvent::class.java,
            org.bukkit.event.server.ServerListPingEvent::class.java,
            org.bukkit.event.server.ServerLoadEvent::class.java,
            org.bukkit.event.server.ServiceEvent::class.java,
            org.bukkit.event.server.ServiceRegisterEvent::class.java,
            org.bukkit.event.server.ServiceUnregisterEvent::class.java,
            org.bukkit.event.server.TabCompleteEvent::class.java,

            org.bukkit.event.vehicle.VehicleBlockCollisionEvent::class.java,
            org.bukkit.event.vehicle.VehicleCollisionEvent::class.java,
            org.bukkit.event.vehicle.VehicleCreateEvent::class.java,
            org.bukkit.event.vehicle.VehicleDamageEvent::class.java,
            org.bukkit.event.vehicle.VehicleDestroyEvent::class.java,
            org.bukkit.event.vehicle.VehicleEnterEvent::class.java,
            org.bukkit.event.vehicle.VehicleEntityCollisionEvent::class.java,
            org.bukkit.event.vehicle.VehicleEvent::class.java,
            org.bukkit.event.vehicle.VehicleExitEvent::class.java,
            org.bukkit.event.vehicle.VehicleMoveEvent::class.java,
            org.bukkit.event.vehicle.VehicleUpdateEvent::class.java,

            org.bukkit.event.weather.LightningStrikeEvent::class.java,
            org.bukkit.event.weather.ThunderChangeEvent::class.java,
            org.bukkit.event.weather.WeatherChangeEvent::class.java,
            org.bukkit.event.weather.WeatherEvent::class.java,

            org.bukkit.event.world.ChunkEvent::class.java,
            org.bukkit.event.world.ChunkLoadEvent::class.java,
            org.bukkit.event.world.ChunkPopulateEvent::class.java,
            org.bukkit.event.world.ChunkUnloadEvent::class.java,
            org.bukkit.event.world.PortalCreateEvent::class.java,
            org.bukkit.event.world.SpawnChangeEvent::class.java,
            org.bukkit.event.world.StructureGrowEvent::class.java,
            org.bukkit.event.world.WorldEvent::class.java,
            org.bukkit.event.world.WorldInitEvent::class.java,
            org.bukkit.event.world.WorldLoadEvent::class.java,
            org.bukkit.event.world.WorldSaveEvent::class.java,
            org.bukkit.event.world.WorldUnloadEvent::class.java
        )
    }

    fun addClasses(vararg _classes: Class<*>): TypescriptLibraryExporter {
        for (_class in _classes) {
            addClass(_class)
        }

        return this
    }

    fun addClass(_class: Class<*>): TypescriptLibraryExporter {
        if (_class.isArray) {

        }
        else {
            if (!classList.contains(_class) && _class.name.matches(allowedPackagesRegex)) {
                classList.add(_class)
            } else {
                return this
            }

            for (_method in _class.methods) {
                val returnType = fixClass(_method.returnType)
                if (returnType.name.matches(allowedPackagesRegex)) {
                    addClass(returnType)
                }

                for (_parameter in _method.parameters) {
                    val type = fixClass(_parameter.type)
                    if (type.name.matches(allowedPackagesRegex)) {
                        addClass(type)
                    }
                }
            }

            for (_field in _class.fields) {
                val fieldType = fixClass(_field.type)
                if (!fieldType.name.endsWith("\$Companion") && fieldType.name.matches(allowedPackagesRegex)) {
                    addClass(fieldType)
                }
            }

            for (_constructor in _class.constructors) {
                for (_parameter in _constructor.parameters) {
                    val type = fixClass(_parameter.type)
                    if (type.name.matches(allowedPackagesRegex)) {
                        addClass(type)
                    }
                }
            }


            for (_interface in _class.interfaces) {
                if (!classList.contains(_interface)) {
                    if (_interface.name.matches(allowedPackagesRegex)) {
                        addClass(_interface)
                    }
                }
            }

            if (_class.superclass != null && _class.superclass.name.matches(allowedPackagesRegex)) {
                if(!classList.contains(_class.superclass)) {
                    addClass(_class.superclass)
                }
            }
        }

        return this
    }

    private fun buildClassList(_class: Class<*>): Array<Class<*>> {
        val classList = mutableListOf<Class<*>>()

        for (_method in _class.methods) {
            val returnType = fixClass(_method.returnType)
            if (!classList.contains(returnType)) {
                classList.add(returnType)
            }

            for (_parameter in _method.parameters) {
                val type = fixClass(_parameter.type)
                if (!classList.contains(type)) {
                    classList.add(type)
                }
            }
        }

        for (_constructor in _class.constructors) {
            for (_parameter in _constructor.parameters) {
                val type = fixClass(_parameter.type)
                if (!classList.contains(type) && type.name.matches(allowedPackagesRegex)) {
                    classList.add(type)
                }
            }
        }

        for (_interface in _class.interfaces) {
            if (!classList.contains(_interface)) {
                if (_interface.name.matches(allowedPackagesRegex)) {
                    classList.add(_interface)
                }
            }
        }

        if (_class.superclass != null && _class.superclass.name.matches(allowedPackagesRegex)) {
            if (!classList.contains(_class.superclass)) {
                classList.add(_class.superclass)
            }
        }

        return classList.toTypedArray()
    }

    private fun buildClassList(_classes: Array<out Class<*>>): Array<Class<*>> {
        val classList = mutableListOf<Class<*>>()

        for(_class in _classes) {
            for (_method in _class.methods) {
                val returnType = fixClass(_method.returnType)
                if (!classList.contains(returnType)) {
                    classList.add(returnType)
                }

                for (_parameter in _method.parameters) {
                    val type = fixClass(_parameter.type)
                    if (!classList.contains(type)) {
                        classList.add(type)
                    }
                }
            }

            for (_constructor in _class.constructors) {
                for (_parameter in _constructor.parameters) {
                    val type = fixClass(_parameter.type)
                    if (!classList.contains(type) && type.name.matches(allowedPackagesRegex)) {
                        classList.add(type)
                    }
                }
            }

            for (_interface in _class.interfaces) {
                if (!classList.contains(_interface)) {
                    if (_interface.name.matches(allowedPackagesRegex)) {
                        classList.add(_interface)
                    }
                }
            }

            if (_class.superclass != null && _class.superclass.name.matches(allowedPackagesRegex)) {
                if (!classList.contains(_class.superclass)) {
                    classList.add(_class.superclass)
                }
            }
        }

        return classList.toTypedArray()
    }

    fun exportLibraries() {
        var count = 0

        for (_class in classList) {
            if(_class.name.matches(allowedPackagesRegex) && !_class.name.endsWith("\$Spigot")) {
                count++

                val file = File("$exportPath/${getPackageName(_class.name).replace('.', '/')}/${stripPackageName(_class.name)}.ts")
                if(!file.exists()) {
                    file.parentFile.mkdirs()
                    file.createNewFile()
                    file.writeText(generateTypescriptSource(_class))
                    println("Exported ${stripPackageName(_class.name)} -> ${file.path}.")
                }
            }
        }

        println("Successfully generated $count class libraries.")
    }

//    fun exportLibrariesBeta() {
//        for (_classGroup in classList.groupBy { e: Class<*> -> e.packageName }) {
//
//            val file = File("$exportPath/${_classGroup.key}.ts")
//            if(!file.exists()) {
//                file.parentFile.mkdirs()
//                file.createNewFile()
//                file.writeText(generateTypescriptSourceBeta(_classGroup.value.toTypedArray()))
//                println("Exported ${_classGroup.value.size} classes to ${file.path}.")
//            }
//        }
//
//        println("Successfully exported class libraries.")
//    }

    @Suppress("UNCHECKED_CAST")
    private fun generateTypescriptSource(_class: Class<*>): String {
        var source = "declare var Java: any;\n"
        source += generateTypescriptImports(_class)
        source += generateTypescriptInterface(_class)

        source += if(_class.isEnum) generateTypescriptEnum(_class as Class<Enum<*>>) else generateTypescriptClass(_class)

        return source
    }


//    @Suppress("UNCHECKED_CAST")
//    private fun generateTypescriptSourceBeta(_classes: Array<Class<*>>): String {
//        var source = "declare var Java: any;\n"
//        source += generateTypescriptImports(_classes)
//
//        for (_class in _classes) {
//            source += generateTypescriptInterface(_class)
//            source += if(_class.isEnum) generateTypescriptEnum(_class as Class<Enum<*>>) else generateTypescriptClass(_class)
//        }
//
//        return source
//    }


    private fun generateTypescriptImports(_class: Class<*>): String {
        var tsImportsSource = ""

        val classList = buildClassList(_class)
        for(requiredClass in classList) {
            val packageName = getPackageName(requiredClass.name)

            if(!stripPackageName(_class.name).equals(stripPackageName(requiredClass.name), true)) {
                if (packageName.matches(allowedPackagesRegex) && !requiredClass.name.endsWith("\$Spigot")) {
                    val upDirCount = getPackageName(_class.name).split('.').count()

                    tsImportsSource += "import {${stripPackageName(requiredClass.name)}} from '${"../".repeat(upDirCount)}${getPackageName(requiredClass.name).replace('.', '/')}/${stripPackageName(requiredClass.name)}.js'\n"
                }
            }
        }

        return tsImportsSource + "\n"
    }

//    private fun generateTypescriptImports(_classes: Array<Class<*>>): String {
//        var tsImportsSource = ""
//
//        val importedPackages = mutableListOf<String>()
//        val classList = buildClassList(_classes)
//
//        for(requiredClass in classList.groupBy { e: Class<*> -> e.packageName }) {
//            val skipImport = _classes.any { _class: Class<*> ->  _class.packageName.equals(requiredClass.key, true)}
//            if(!skipImport) {
//                if (requiredClass.key.matches(allowedPackagesRegex) && !importedPackages.contains(requiredClass.key)) {
//                    tsImportsSource += "import {${requiredClass.value.joinToString(", ") { e: Class<*> -> stripPackageName(e.name) }}} from './${requiredClass.key}.js'\n"
//                    importedPackages.add(requiredClass.key)
//                }
//            }
//        }
//
//        return tsImportsSource + "\n"
//    }

    private fun generateTypescriptInterface(_class: Class<*>): String {
        var tsInterfaceSource = "export interface ${stripPackageName(_class.name)}"

        val interfaceNames = getInterfaceNames(_class)

        if(interfaceNames.any()) {
            tsInterfaceSource += " extends ${interfaceNames.joinToString(", ")}"
        }

        tsInterfaceSource += " {\n"

        val blacklistRegex = Regex("(spigot|wait|equals|toString|hashCode|getClass|notify|notifyAll|(.*?)\\\$(.*?))")
        for (_method in _class.methods) {
            if(!Modifier.isStatic(_method.modifiers) && Modifier.isPublic(_method.modifiers) && !_method.name.matches(blacklistRegex)) {
                tsInterfaceSource += if (_method.parameterCount == 0) {
                    "\t${_method.name}(): ${javaClassToTypescript(_method.returnType)};\n"
                } else {
                    "\t${_method.name}(${getParameters(_method).joinToString(", ")}): ${javaClassToTypescript(_method.returnType)};\n"
                }
            }
        }

        tsInterfaceSource += "}\n\n"

        return tsInterfaceSource
    }

    private fun generateTypescriptClass(_class: Class<*>): String {
        val className = stripPackageName(_class.name)
        var tsClassSource = "export class $className {\n"

        tsClassSource += "\tpublic static get \$javaClass(): any {\n"
        tsClassSource += "\t\treturn Java.type('${_class.name}');\n"
        tsClassSource += "\t}\n"

        for ((index, constructor) in _class.constructors.withIndex()) {
            tsClassSource += "\tconstructor(${getParameters(constructor).joinToString(", ")});\n"
            if(index == _class.constructors.size - 1) {
                tsClassSource += "\tconstructor(...args: any[]) {\n"
                tsClassSource += "\t\treturn new $className.\$javaClass(...args);\n"
                tsClassSource += "\t}\n"
            }
        }

        val countMap = mutableMapOf<String, Int>()
        val blacklistRegex = Regex("(spigot|wait|equals|toString|hashCode|getClass|notify|notifyAll|Companion)")
        for (_field in _class.fields) {
            var jsFieldName: String = _field.name

            if(!countMap.containsKey(_field.name)) {
                countMap[_field.name] = 0
            }
            else {
                jsFieldName = "$jsFieldName${countMap[_field.name]}"
                countMap[_field.name] = (countMap[_field.name]!! + 1)
            }

            if(Modifier.isStatic(_field.modifiers) && Modifier.isPublic(_field.modifiers) && Modifier.isFinal(_field.modifiers) && !_field.name.matches(blacklistRegex)) {
                tsClassSource += "\tpublic static get ${safeName(jsFieldName)}(): ${javaClassToTypescript(_field.type)} {\n"
                tsClassSource += "\t\treturn $className.\$javaClass.${_field.name};\n"
                tsClassSource += "\t}\n"
            }
        }

        for (_methodGroups in _class.methods.takeWhile { e -> Modifier.isStatic(e.modifiers) && Modifier.isPublic(e.modifiers) }.groupBy { e -> e.name }) {

            val jsMethodName: String = _methodGroups.key

            for ((index, _method) in _methodGroups.value.withIndex()) {
                if(!countMap.containsKey(_method.name)) {
                    countMap[_method.name] = 0
                }
                else {
                    //jsMethodName = "$jsMethodName${countMap[_method.name]}"
                    countMap[_method.name] = (countMap[_method.name]!! + 1)
                }

                if(Modifier.isStatic(_method.modifiers) && Modifier.isPublic(_method.modifiers) && !_method.name.matches(blacklistRegex)) {
                    tsClassSource += "\tpublic static ${safeName(jsMethodName)}(${getParameters(_method).joinToString(", ")}): ${javaClassToTypescript(_method.returnType)};\n"
                    if(index == _methodGroups.value.size - 1) {
                        tsClassSource += "\tpublic static ${safeName(jsMethodName)}(...args: any[]): any {\n"
                        tsClassSource += "\t\treturn $className.\$javaClass.${_method.name}(...args);\n"
                        tsClassSource += "\t}\n"
                    }
                }
            }
        }

        tsClassSource += "}\n\n"

        return tsClassSource
    }

    private fun generateTypescriptEnum(_class: Class<Enum<*>>): String {
        val enumName = stripPackageName(_class.name)
        var tsEnumSource = "export class $enumName {\n"

        tsEnumSource += "\tpublic static get \$javaClass(): any {\n"
        tsEnumSource += "\t\treturn Java.type('${_class.name}');\n"
        tsEnumSource += "\t}\n\n"

        for (enumConstant in _class.enumConstants) {
            tsEnumSource += "\tpublic static get ${enumConstant.name}(): $enumName {\n"
            tsEnumSource += "\t\treturn this.\$javaClass.${enumConstant.name};\n"
            tsEnumSource += "\t}\n"
        }

        tsEnumSource += "}\n\n"

        return tsEnumSource
    }

    private fun getInterfaceNames(_class: Class<*>): Array<String> {
        val interfaceNames = mutableListOf<String>()

        if(_class.superclass != null && _class.superclass.name.matches(allowedPackagesRegex)) {
            interfaceNames.add(stripPackageName(_class.superclass.name))
        }

        for(_interface in _class.interfaces) {
            if(_interface.name.startsWith("org.bukkit")) {
                interfaceNames.add(stripPackageName(_interface.name))
            }
        }

        return interfaceNames.toTypedArray()
    }

    private fun getParameters(_parameters: Array<Parameter>): Array<String> {
        val parameterNames = mutableListOf<String>()

        for(_parameter in _parameters) {
            parameterNames.add("${safeName(_parameter.name)}: ${javaClassToTypescript(_parameter.type)}")
        }

        return parameterNames.toTypedArray()
    }

    private fun getParameters(_method: Method): Array<String> {
        val parameterNames = mutableListOf<String>()
        val paranames = paranamer.lookupParameterNames(_method, false)

        for((index, _parameter) in _method.parameters.withIndex()) {
            parameterNames.add("${safeName(paranames.getOrElse(index) { _parameter.name })}: ${javaClassToTypescript(_parameter.type)}")
        }

        return parameterNames.toTypedArray()
    }

    private fun getParameters(_constructor: Constructor<*>): Array<String> {
        val parameterNames = mutableListOf<String>()
        val paranames = paranamer.lookupParameterNames(_constructor, false)

        for((index, _parameter) in _constructor.parameters.withIndex()) {
            parameterNames.add("${safeName(paranames.getOrElse(index) { _parameter.name })}: ${javaClassToTypescript(_parameter.type)}")
        }

        return parameterNames.toTypedArray()
    }

    private fun getParameterNames(_parameters: Array<Parameter>): Array<String> {
        val parameterNames = mutableListOf<String>()

        for(_parameter in _parameters) {
            parameterNames.add(safeName(_parameter.name))
        }

        return parameterNames.toTypedArray()
    }

    private fun safeName(name: String): String {
        return when {
            name.equals("function", true) -> "_function"
            name.equals("yield", true) -> "_yield"
            name.equals("arguments", true) -> "_arguments"
            name.equals("name", true) -> "_name"
            name.equals("<set-?>", true) -> "value"
            else -> name
        }
    }

    private fun stripPackageName(name: String): String {
        return name.split('.').last().replace(";", "")
    }

    private fun getPackageName(name: String): String {
        val packages = name.split('.').toMutableList()

        if(packages.count() > 1) {
            packages.remove(packages.last())
        }

        return packages.joinToString(".")
    }

    private fun javaClassToTypescript(_class: Class<*>): String {
        val className = stripPackageName(_class.name)
        val packageName = getPackageName(_class.name)

        if(_class.isArray) {
            return "Array<${javaClassToTypescript(_class.componentType)}>"
        }

        return if (className.equals("byte", true) || className.equals("short", true) || className.equals("int", true) || className.equals("long", true)) "number"
        else if (className.equals("double", true) || className.equals("float", true)) "number"
        else if (className.equals("string", true) || className.equals("char", true) || className.equals("UUID", true)) "string"
        else if (className.equals("void", true)) "void"
        else if (className.equals("boolean", true)) "boolean"
        else if (className.equals("Value", true)) "any"
        else if (!packageName.matches(allowedPackagesRegex)) "any"
        else className
    }

    private fun fixClass(_class: Class<*>): Class<*> {
        if(_class.isArray) {
            return fixClass(_class.componentType)
        }

        return _class
    }

    private fun deleteDirectory(directoryToBeDeleted: File, skipThisDir: Boolean = false): Boolean {
        val allContents = directoryToBeDeleted.listFiles()
        if (allContents != null) {
            for (file in allContents) {
                deleteDirectory(file)
            }
        }

        return if(skipThisDir) {
            true
        }
        else {
            directoryToBeDeleted.delete()
        }
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            TypescriptLibraryExporter()
                .exportPath("./lib/ts")
                .allowPackages("(org\\.bukkit|com\\.pixlfox|io\\.github\\.jorelali\\.commandapi|fr\\.minuskube\\.inv|com\\.google)(.*)?")
                .addHelperClasses()
                .addBukkitClasses()
                .clean()
                .exportLibraries()
        }
    }
}