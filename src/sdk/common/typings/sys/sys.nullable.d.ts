// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

declare namespace sys {
	/**
	 * 定义了可为空的类型接口。
	 * @author Wang Yucai
	 *
	 * @interface INullable
	 * @typedef {INullable}
	 * @template T
	 */
	interface INullable<T> {
		/**
		 * 获取 T 类型的对象实例或值，用于表示原始值。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {(T | undefined | null)}
		 */
		get value(): T | undefined | null;

		/**
		 * 获取一个 Boolean 类型值，用于表示 {@link value} 是否不等于 undefined 类型值和 null 值。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {boolean}
		 * @see {@link Object.isNull}
		 */
		get hasValue(): boolean;

		/**
		 * 当 {@link value} 等于 undefined 类型值或 null 值时，返回的 {@link target}。
		 * @author Wang Yucai
		 *
		 * @param {T} target 当 {@link value} 等于 undefined 类型值或 null 值时返回的安全值。
		 * @returns {T}
		 * @see {@link hasValue}
		 */
		safeValue(target: T): T;
	}
}
