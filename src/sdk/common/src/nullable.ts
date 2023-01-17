// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/**
 * @description 提供了可为空的类型相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Nullable
 * @typedef {Nullable}
 * @template T
 * @implements {INullable<T>}
 * @see {@link INullable<T>}
 */
export class Nullable<T> implements INullable<T> {
	private readonly m_value: NullableType<T>;

	/**
	 * 用于初始化一个 {@link Nullable<T>} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {NullableType<T>} [value=null] 可能为空的 {@link T} 类型值。
	 */
	constructor(value: NullableType<T> = null) {
		this.m_value = value;
	}

	getType(): string {
		return "Nullable<T>";
	}

	get value(): NullableType<T> {
		return this.m_value;
	}

	get hasValue(): boolean {
		return !Object.referenceEquals(this.m_value);
	}

	safeGet(safeValue: NonNullable<T>): NonNullable<T>;
	safeGet(safeValue: Func<NonNullable<T>>): NonNullable<T>;
	safeGet(safeValue: any): NonNullable<T> {
		if (this.hasValue) return this.value as NonNullable<T>;
		else if (typeof safeValue === "function") {
			return safeValue();
		}
		return safeValue;
	}
}

/**
 * @description 提供了创建 {@link INullable<T>} 类型的对象实例相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class NullableFactory
 * @typedef {NullableFactory}
 * @see {@link INullable<T>}
 */
export class NullableFactory {
	/**
	 * 用于初始化一个 {@link NullableFactory} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @private
	 */
	private constructor() {}

	/**
	 * @description 创建一个实现了 {@link INullable<T>} 类型接口的对象实例。
	 * @author Wang Yucai
	 *
	 * @static
	 * @template T
	 * @param {NullableType<T>} [value=null] 可能为空的 {@link T} 类型值。
	 * @returns {INullable<T>}
	 * @see {@link Nullable<T>}
	 */
	static create<T>(value: NullableType<T> = null): INullable<T> {
		return new Nullable<T>(value);
	}
}
