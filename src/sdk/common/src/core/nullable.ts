// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/**
 * 提供了可为空类型相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Nullable
 * @typedef {Nullable}
 * @template T
 * @implements {sys.INullable<T>}
 */
export class Nullable<T> implements sys.INullable<T> {
	private m_value: T | undefined | null;

	/**
	 * 用于初始化一个 Nullable<T> 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {(T | undefined | null)} [value=null] T 类型的值。
	 */
	constructor(value: T | undefined | null = null) {
		this.value = value;
	}

	/**
	 * 设置 T 类型的对象实例或值，用于表示原始值。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @type {T}
	 */
	protected set value(value: T | undefined | null) {
		this.m_value = value;
	}

	get value(): T | null | undefined {
		return this.m_value;
	}
	get hasValue(): boolean {
		return Object.isNull(this.value);
	}
	safeValue(target: T): T {
		return this.hasValue ? (this.value as T) : target;
	}
}


/**
 * 创建一个可为空的类型。
 * @author Wang Yucai
 *
 * @export
 * @template T
 * @param {(T | undefined | null)} [value=null] 原始值。
 * @returns {sys.INullable<T>}
 * @see {@link Nullable<T>}
 */
export function createNullable<T>(value: T | undefined | null = null): sys.INullable<T> {
	return new Nullable<T>(value);
}
