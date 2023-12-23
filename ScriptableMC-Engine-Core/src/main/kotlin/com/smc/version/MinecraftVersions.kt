/*
 * This file is part of helper, licensed under the MIT License.
 *
 *  Copyright (c) lucko (Luck) <luck@lucko.me>
 *  Copyright (c) contributors
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * Converted to Kotlin by: AStorks <ashton@pixlfox.com>
 */

package com.smc.version

import com.smc.version.Version.Companion.parse
import org.bukkit.Bukkit
import java.util.regex.Pattern

@Suppress("unused")
class MinecraftVersions private constructor(){
    companion object {
        /**
         * Version 1.20
         */
        @JvmField
        val v1_20 = parse("1.20")

        /**
         * Version 1.19.3 - the update the broke a ton of plugins...
         */
        @JvmField
        val v1_19_3 = parse("1.19.3")

        /**
         * Version 1.19
         */
        @JvmField
        val v1_19 = parse("1.19")

        /**
         * Version 1.18
         */
        @JvmField
        val v1_18 = parse("1.18")

        /**
         * Version 1.17 - caves and cliffs update
         */
        @JvmField
        val v1_17 = parse("1.17")

        /**
         * Version 1.16 - nether update
         */
        @JvmField
        val v1_16 = parse("1.16")

        /**
         * Version 1.15 - buzzy bees update
         */
        @JvmField
        val v1_15 = parse("1.15")

        /**
         * Version 1.14 - village and pillage update
         */
        @JvmField
        val v1_14 = parse("1.14")

        /**
         * Version 1.13 - update aquatic.
         */
        @JvmField
        val v1_13 = parse("1.13")

        /**
         * Version 1.12 - the world of color update.
         */
        @JvmField
        val v1_12 = parse("1.12")

        /**
         * Version 1.11 - the exploration update.
         */
        @JvmField
        val v1_11 = parse("1.11")

        /**
         * Version 1.10 - the frostburn update.
         */
        @JvmField
        val v1_10 = parse("1.10")

        /**
         * Version 1.9 - the combat update.
         */
        @JvmField
        val v1_9 = parse("1.9")

        /**
         * Version 1.8 - the "bountiful" update.
         */
        @JvmField
        val v1_8 = parse("1.8")

        /**
         * Version 1.7.8 - the update that changed the skin format (and distribution - R.I.P. player disguise)
         */
        @JvmField
        val v1_7_8 = parse("1.7.8")

        /**
         * Version 1.7.2 - the update that changed the world.
         */
        @JvmField
        val v1_7_2 = parse("1.7.2")

        /**
         * Version 1.6.1 - the horse update.
         */
        @JvmField
        val v1_6_1 = parse("1.6.1")

        /**
         * Version 1.5.0 - the redstone update.
         */
        @JvmField
        val v1_5_0 = parse("1.5.0")

        /**
         * Version 1.4.2 - the scary update (Wither Boss).
         */
        @JvmField
        val v1_4_2 = parse("1.4.2")

        /**
         * Regular expression used to parse version strings.
         */
        private val VERSION_PATTERN =
            Pattern.compile(".*\\(.*MC.\\s*([a-zA-z0-9\\-\\.]+)\\s*\\)")

        /**
         * The version of the runtime
         */
        @JvmField
        val RUNTIME_VERSION = parseServerVersion(Bukkit.getVersion())

        private fun parseServerVersion(serverVersion: String): Version {
            val version = VERSION_PATTERN.matcher(serverVersion)
            return if (version.matches() && version.group(1) != null) {
                parse(version.group(1))
            } else {
                throw IllegalStateException("Cannot parse version String '$serverVersion'")
            }
        }
    }
}