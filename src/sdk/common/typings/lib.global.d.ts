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
		 * @see {@link __isUndefined__}
		 */
		isNull(obj: any): boolean;

		/**
		 * 用于校验 {@link obj1} 与 {@link obj2} 是否相等。
		 * @author Wang Yucai
		 *
		 * @param {*} obj1 需要校验的对象实例或值。
		 * @param {*} obj2 需要校验的对象实例或值。
		 * @returns {boolean}
		 * @see {@link __isUndefined__}
		 * @see {@link __isNull__}
		 */
		referenceEquals(obj1: any, obj2: any): boolean;
	}
}
