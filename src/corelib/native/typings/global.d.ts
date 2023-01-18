// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

export {};

declare global {
	/**
	 * VPF 应用程序上下文全局变量。
	 * @author Wang Yucai
	 *
	 * @type {NonNullable<ApplicationContext>}
	 * @see {@link NonNullable<T>}
	 * @see {@link ApplicationContext}
	 */
	var vpf_applicationCtx: NonNullable<ApplicationContext>;

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

	/**
	 * 为 String 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface StringConstructor
	 * @typedef {StringConstructor}
	 */
	interface StringConstructor {
		/**
		 * 获取空字符串。
		 * @author Wang Yucai
		 *
		 * @returns {string}
		 * @see {@link ApplicationDefaults}
		 * @see {@link ApplicationDefaults.DEFAULT_EMPTY_STRING}
		 */
		empty(): string;

		/**
		 * 当字符串 {@link s} 为 undefined、null 或 {@link String.empty} 时返回 true，否则返回 false。
		 * @author Wang Yucai
		 *
		 * @param {string} s 需要校验的字符串。
		 * @returns {boolean}
		 * @see {@link Object.referenceEquals}
		 * @see {@link String.empty}
		 */
		isNullOrEmpty(s: string): boolean;

		/**
		 * 当字符串 {@link s} 为 undefined、null、{@link String.empty} 或空格符时返回 true,否则返回 false。
		 * @author Wang Yucai
		 *
		 * @param {string} s 需要校验的字符串。
		 * @returns {boolean}
		 * @see {@link String.isNullOrEmpty}
		 */
		isNullOrWhiteSpace(s: string): boolean;
	}

	/**
	 * 为 Error 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface ErrorConstructor
	 * @typedef {ErrorConstructor}
	 */
	interface ErrorConstructor {
		/**
		 * 创建一个 {@link TException} 类型的异常。
		 * @author Wang Yucai
		 *
		 * @template TException 派生自 Error 的类型。
		 * @param {CreateRuntimeErrorDelegation} createError 创建异常信息的方法。
		 * @param {?string} [message] 异常描述信息。
		 * @param {...Array<any>} args 创建运行时异常的参数数组。
		 * @returns {TException}
		 * @see {@link CreateRuntimeErrorDelegation}
		 */
		create<TException extends Error>(
			createError: CreateRuntimeErrorDelegation,
			message?: string,
			...args: Array<any>
		): TException;
	}

	/**
	 * 为 Error 类型提供的扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface Error
	 * @typedef {Error}
	 */
	interface Error {
		/**
		 * 抛出异常。
		 * @author Wang Yucai
		 */
		throw(): void;
	}

	/**
	 * 为 Number 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface NumberConstructor
	 * @typedef {NumberConstructor}
	 */
	interface NumberConstructor {
		/**
		 * 尝试将字符串 {@link s} 转换为 Number 类型值。
		 * @author Wang Yucai
		 *
		 * @param {string} s 数字字符串。
		 * @returns {Promise<number>}
		 */
		tryParse(s: string): Promise<number>;

		/**
		 * 将字符串 {@link s} 转换为 Number 类型值。
		 * @author Wang Yucai
		 *
		 * @param {string} s 数字字符串。
		 * @param {ParseNumericStringSuccessCallback} successCallback 转换成功后的回调方法。
		 * @param {?ParseNumericStringFailureCallback} [failureCallback] 转换失败后的回调方法。
		 */
		parse(
			s: string,
			successCallback: ParseNumericStringSuccessCallback,
			failureCallback?: ParseNumericStringFailureCallback
		): void;
	}

	/**
	 * 为 Number 类型提供的扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface Number
	 * @typedef {Number}
	 */
	interface Number {
		/**
		 * 将数字转换为货币字符串。
		 * @author Wang Yucai
		 *
		 * @param {string} currencySymbol 货币符号。
		 * @returns {string}
		 */
		toCurrency(currencySymbol: string): string;
	}
}
