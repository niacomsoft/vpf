// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

export {};

/**
 * 全局对象扩展类型定义。
 *
 * @packageDocumentation
 */

declare global {
	/**
	 * @description 为 Object 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface ObjectConstructor
	 * @typedef {ObjectConstructor}
	 */
	interface ObjectConstructor {
		/**
		 * 用于校验 {@link obj} 是否为 undefined 类型值。
		 * @author Wang Yucai
		 *
		 * @param {*} obj 需要校验的对象实例或值。
		 * @returns {boolean}
		 */
		isUndefined(obj: any): boolean;

		/**
		 * 用于校验 {@link obj} 是否为 undefined 类型值或 null 值。
		 * @author Wang Yucai
		 *
		 * @param {*} obj 需要校验的对象实例或值。
		 * @returns {boolean}
		 * @see {@link Object.isUndefined}
		 */
		isNull(obj: any): boolean;

		/**
		 * 用于校验 {@link obj1} 与 {@link obj2} 是否相等。
		 * @author Wang Yucai
		 *
		 * @param {*} obj1 需要校验的对象实例或值。
		 * @param {*} obj2 需要校验的对象实例或值。
		 * @returns {boolean}
		 * @see {@link Object.isNull}
		 * @see https://www.npmjs.com/package/fast-deep-equal
		 */
		referenceEquals(obj1: any, obj2: any): boolean;
	}

	/**
	 * 为 String 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface StringConstructor
	 * @typedef {StringConstructor}
	 */
	interface StringConstructor {
		/**
		 * 获取一个字符串，用于表示空字符串。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {string}
		 */
		empty: string;

		/**
		 * @description 验证字符串 {@link s} 是否为 undefined 类型值、null 值或 {@link String.empty}。
		 * @author Wang Yucai
		 *
		 * @param {string} s 需要验证的字符串。
		 * @returns {boolean}
		 * @see {@link Object.isNull}
		 */
		isNullOrEmpty(s: string): boolean;

		/**
		 * @description 验证字符串 {@link s} 是否为 undefined 类型值、null 值、{@link String.empty}或者空格符。
		 * @author Wang Yucai
		 *
		 * @param {string} s 需要验证的字符串。
		 * @returns {boolean}
		 * @see {@link String.isNullOrEmpty}
		 */
		isNullOrWhiteSpace(s: string): boolean;

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
		format(formatter: string, ...args: Array<any>): string;
	}
}
