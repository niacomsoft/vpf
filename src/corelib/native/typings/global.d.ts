// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

export {};

declare global {
	/**
	 * VPF 应用程序上下文全局变量。
	 * @author Wang Yucai
	 *
	 * @type {NonNullable<sys.ApplicationContext>}
	 * @see {@link NonNullable<T>}
	 * @see {@link sys.ApplicationContext}
	 */
	var vpf_applicationCtx: NonNullable<sys.ApplicationContext>;

	/**
	 * 为 Object 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface ObjectConstructor
	 * @typedef {ObjectConstructor}
	 */
	interface ObjectConstructor {
		/**
		 * 如果 {@link a} 与 {@link b} 相等则返回 true，否则返回 false。
		 * @author Wang Yucai
		 *
		 * @param {*} a any 类型的对象实例或值。
		 * @param {*} b any 类型的对象实例或值。
		 * @returns {boolean}
		 *
		 * @see https://www.npmjs.com/package/fast-deep-equal
		 */
		referenceEquals(a: any, b: any): boolean;
	}
}
