// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

export {};

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
		 * @description 用于对比 {@link objA} 与 {@link objB} 是否相等。
		 * @author Wang Yucai
		 *
		 * @param {*} objA 未知类型的对象实例或值。
		 * @param {*} [objB=null] 未知类型的对象实例或值。
		 * @returns {boolean}
		 * @see https://github.com/epoberezkin/fast-deep-equal
		 */
		referenceEquals(objA: any, objB: any = null): boolean;
	}
}
