// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/// <reference path="lib.types.d.ts" />

/**
 * @description 定义了可为空的数据类型接口。
 * @author Wang Yucai
 *
 * @interface INullable
 * @typedef {INullable}
 * @template T
 */
declare interface INullable<T> {
	/**
	 * @description 获取 {@link NullableType<T>} 类型的对象实例或值，用于表示原始值。
	 * @author Wang Yucai
	 *
	 * @readonly
	 * @type {NullableType<T>}
	 * @see {@link NullableType<T>}
	 */
	get value(): NullableType<T>;

	/**
	 * @description 获取一个 Boolean 类型值，用于表示 {@link value} 是否等于 undefined 或 null。
	 * @author Wang Yucai
	 *
	 * @readonly
	 * @type {boolean}
	 */
	get hasValue(): boolean;

	/**
	 * @description 当 {@link value} 等于 undefined 或 null 时返回的安全值。
	 * @author Wang Yucai
	 *
	 * @param {NonNullable<T>} safeValue {@link T} 类型的安全值。
	 * @returns {NonNullable<T>}
	 */
	safeGet(safeValue: NonNullable<T>): NonNullable<T>;

	/**
	 * @description 当 {@link value} 等于 undefined 或 null 时返回的安全值。
	 * @author Wang Yucai
	 *
	 * @param {Func<NonNullable<T>>} safeValue 构建 {@link T} 类型安全值的方法。
	 * @returns {NonNullable<T>}
	 * @see {@link Func<T>}
	 */
	safeGet(safeValue: Func<NonNullable<T>>): NonNullable<T>;
}
