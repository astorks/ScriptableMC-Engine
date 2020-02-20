package com.smc.utils

import khttp.DEFAULT_TIMEOUT
import khttp.responses.Response
import khttp.structures.authorization.Authorization
import khttp.structures.files.FileLike

@Suppress("unused", "MemberVisibilityCanBePrivate")
class Http private constructor() {
    companion object {
        @JvmOverloads @JvmStatic
        fun delete(url: String, headers: Map<String, String> = mapOf(), params: Map<String, String> = mapOf(), data: Any? = null, json: Any? = null, auth: Authorization? = null, cookies: Map<String, String>? = null, timeout: Double = DEFAULT_TIMEOUT, allowRedirects: Boolean? = null, stream: Boolean = false, files: List<FileLike> = listOf()): Response {
            return khttp.request("DELETE", url, headers, params, data, json, auth, cookies, timeout, allowRedirects, stream, files)
        }

        @JvmOverloads @JvmStatic
        fun get(url: String, headers: Map<String, String> = mapOf(), params: Map<String, String> = mapOf(), data: Any? = null, json: Any? = null, auth: Authorization? = null, cookies: Map<String, String>? = null, timeout: Double = DEFAULT_TIMEOUT, allowRedirects: Boolean? = null, stream: Boolean = false, files: List<FileLike> = listOf()): Response {
            return khttp.request("GET", url, headers, params, data, json, auth, cookies, timeout, allowRedirects, stream, files)
        }

        @JvmOverloads @JvmStatic
        fun head(url: String, headers: Map<String, String> = mapOf(), params: Map<String, String> = mapOf(), data: Any? = null, json: Any? = null, auth: Authorization? = null, cookies: Map<String, String>? = null, timeout: Double = DEFAULT_TIMEOUT, allowRedirects: Boolean? = null, stream: Boolean = false, files: List<FileLike> = listOf()): Response {
            return khttp.request("HEAD", url, headers, params, data, json, auth, cookies, timeout, allowRedirects, stream, files)
        }

        @JvmOverloads @JvmStatic
        fun options(url: String, headers: Map<String, String> = mapOf(), params: Map<String, String> = mapOf(), data: Any? = null, json: Any? = null, auth: Authorization? = null, cookies: Map<String, String>? = null, timeout: Double = DEFAULT_TIMEOUT, allowRedirects: Boolean? = null, stream: Boolean = false, files: List<FileLike> = listOf()): Response {
            return khttp.request("OPTIONS", url, headers, params, data, json, auth, cookies, timeout, allowRedirects, stream, files)
        }

        @JvmOverloads @JvmStatic
        fun patch(url: String, headers: Map<String, String> = mapOf(), params: Map<String, String> = mapOf(), data: Any? = null, json: Any? = null, auth: Authorization? = null, cookies: Map<String, String>? = null, timeout: Double = DEFAULT_TIMEOUT, allowRedirects: Boolean? = null, stream: Boolean = false, files: List<FileLike> = listOf()): Response {
            return khttp.request("PATCH", url, headers, params, data, json, auth, cookies, timeout, allowRedirects, stream, files)
        }

        @JvmOverloads @JvmStatic
        fun post(url: String, headers: Map<String, String> = mapOf(), params: Map<String, String> = mapOf(), data: Any? = null, json: Any? = null, auth: Authorization? = null, cookies: Map<String, String>? = null, timeout: Double = DEFAULT_TIMEOUT, allowRedirects: Boolean? = null, stream: Boolean = false, files: List<FileLike> = listOf()): Response {
            return khttp.request("POST", url, headers, params, data, json, auth, cookies, timeout, allowRedirects, stream, files)
        }

        @JvmOverloads @JvmStatic
        fun put(url: String, headers: Map<String, String> = mapOf(), params: Map<String, String> = mapOf(), data: Any? = null, json: Any? = null, auth: Authorization? = null, cookies: Map<String, String>? = null, timeout: Double = DEFAULT_TIMEOUT, allowRedirects: Boolean? = null, stream: Boolean = false, files: List<FileLike> = listOf()): Response {
            return khttp.request("PUT", url, headers, params, data, json, auth, cookies, timeout, allowRedirects, stream, files)
        }
    }
}