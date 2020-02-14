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

import java.util.*
import kotlin.Comparator

@Suppress("unused", "MemberVisibilityCanBePrivate")
class Version private constructor(val major: Int, val minor: Int, val build: Int): Comparable<Version> {

    @Suppress("unused", "MemberVisibilityCanBePrivate")
    companion object {
        @JvmStatic
        val COMPARATOR: Comparator<Version> = Comparator.nullsFirst(
            Comparator
                .comparingInt { obj: Version -> obj.major }
                .thenComparingInt { obj: Version -> obj.minor }
                .thenComparingInt { obj: Version -> obj.build }
        )

        /**
         * Creates a new [Version] with the given properties.
         *
         * @param major the major component
         * @param minor the minor component
         * @param build the build component
         * @return a version instance
         */
        @JvmStatic
        fun of(major: Int, minor: Int, build: Int): Version {
            return Version(major, minor, build)
        }

        /**
         * Parses a [Version] from a version string, in the format
         * `major.minor.build`
         *
         * @param version the version in text form.
         * @throws IllegalArgumentException if unable to parse
         */
        @JvmStatic
        @Throws(IllegalArgumentException::class)
        fun parse(version: String): Version {
            val versionComponents = parseVersion(version)
            val major = versionComponents[0]
            val minor = versionComponents[1]
            val build = versionComponents[2]
            return Version(major, minor, build)
        }

        @JvmStatic
        private fun parseVersion(version: String): IntArray {
            val elements = if(version.startsWith("v", true)) version.substring(1).split(".").toTypedArray() else version.split(".").toTypedArray()
            val numbers = IntArray(3)
            // Make sure it's even a valid version
            check(elements.isNotEmpty()) { "Corrupt version: $version" }
            // The String 1 or 1.2 is interpreted as 1.0.0 and 1.2.0 respectively.
            for (i in 0 until Math.min(numbers.size, elements.size)) {
                numbers[i] = elements[i].trim { it <= ' ' }.toInt()
            }
            return numbers
        }
    }

    /**
     * Gets the version String (major.minor.build) only.
     *
     * @return a normal version string.
     */
    fun getVersion(): String {
        return "$major.$minor.$build"
    }

    override fun compareTo(other: Version): Int {
        return COMPARATOR.compare(this, other)
    }

    /**
     * Gets if this version was released after another version.
     *
     * @param other the other version
     * @return if this version was released after another version
     */
    fun isAfter(other: Version): Boolean {
        return compareTo(other) > 0
    }

    /**
     * Gets if this version was released after another version, or is equal to it.
     *
     * @param other the other version
     * @return if this version was released after another version, or is equal to it.
     */
    fun isAfterOrEq(other: Version): Boolean {
        return compareTo(other) >= 0
    }

    /**
     * Gets if this version was released before another version.
     *
     * @param other the other version
     * @return if this version was released before another version
     */
    fun isBefore(other: Version): Boolean {
        return compareTo(other) < 0
    }

    /**
     * Gets if this version was released before another version, or is equal to it.
     *
     * @param other the other version
     * @return if this version was released before another version, or is equal to it.
     */
    fun isBeforeOrEq(other: Version): Boolean {
        return compareTo(other) <= 0
    }

    /**
     * Gets if this version was released in the period between two other versions, or is equal
     * to either of them.
     *
     * @param o1 the first other version
     * @param o2 the second other version
     * @return if this version was released between the others
     */
    fun isBetween(o1: Version, o2: Version): Boolean {
        return isAfterOrEq(o1) && isBeforeOrEq(o2) || isBeforeOrEq(o1) && isAfterOrEq(o2)
    }

    override fun equals(other: Any?): Boolean {
        if (other == null) return false
        if (other === this) return true
        if (other !is Version) return false
        return major == other.major && minor == other.minor && build == other.build
    }

    override fun hashCode(): Int {
        return Objects.hash(major, minor, build)
    }

    override fun toString(): String { // Convert to a String that we can parse back again
        return String.format("v%s", getVersion())
    }
}