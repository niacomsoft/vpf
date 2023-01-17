// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/// <reference path="../../typings/index.d.ts" />

import formatStr from "string-template";

/**
 * 获取一个字符串，用于表示空字符串。
 *
 * @readonly
 */
String.empty = "";

/**
 * @description 验证字符串 {@link s} 是否为 undefined 类型值、null 值或 {@link String.empty}。
 * @author Wang Yucai
 *
 * @param {string} s 需要验证的字符串。
 * @returns {boolean}
 * @see {@link Object.isNull}
 */
function __isNullOrEmpty__(s: string): boolean {
	if (Object.isNull(s)) {
		console.debug(`[DEBUG]: 字符串参数 “s” 为 undefined 类型值或 null 值。详情参见：%o`, {
			sourceContext: { method: "isNullOrEmpty", parameters: { s }, codebase: "string-extensions.ts" },
			runtimeContext: { result: true },
		});
		return true;
	}

	return s === String.empty;
}

String.isNullOrEmpty = __isNullOrEmpty__;

/**
 * @description 验证字符串 {@link s} 是否为 undefined 类型值、null 值、{@link String.empty}或者空格符。
 * @author Wang Yucai
 *
 * @param {string} s 需要验证的字符串。
 * @returns {boolean}
 * @see {@link String.isNullOrEmpty}
 */
function __isNullOrWhiteSpace__(s: string): boolean {
	return __isNullOrEmpty__(s) || s.trim() === String.empty;
}

String.isNullOrWhiteSpace = __isNullOrWhiteSpace__;

/**
 * 格式化字符串。使用方法参考 .NET System.String.Format 方法。
 * @author Wang Yucai
 *
 * @param {string} formatter 格式化字符串模板。
 * @param {...Array<any>?} [args] 格式化参数数组。
 * @returns {string}
 * @see https://learn.microsoft.com/zh-cn/dotnet/api/system.string.format?view=net-7.0#system-string-format(system-string-system-object())
 * @see https://www.npmjs.com/package/@types/string-template
 * @see https://www.npmjs.com/package/string-template
 */
function __format__(formatter: string, ...args: Array<any>): string {
	if (String.isNullOrEmpty(formatter) || Object.isNull(args) || args.length) return String.empty;

	return formatStr(formatter, args);
}

String.format = __format__;
