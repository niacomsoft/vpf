// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

declare namespace sys {
	/**
	 * 创建运行时异常的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface CreateRuntimeErrorDelegation
	 * @typedef {CreateRuntimeErrorDelegation}
	 * @template TException 派生自 Error 的类型。
	 */
	interface CreateRuntimeErrorDelegation<TException extends Error> {
		/**
		 * 创建运行时异常的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {?string} [message] 异常信息。
		 * @param {...Array<any>} args 创建运行时异常的参数数组。
		 * @returns {TException}
		 */
		(message?: string, ...args: Array<any>): TException;
	}

	/**
	 * 数字字符串转换成功回调方法委托。
	 * @author Wang Yucai
	 *
	 * @interface ParseNumericStringSuccessCallback
	 * @typedef {ParseNumericStringSuccessCallback}
	 */
	interface ParseNumericStringSuccessCallback {
		/**
		 * 数字字符串转换成功回调方法委托。
		 * @author Wang Yucai
		 *
		 * @param {number} value Number 类型值。
		 */
		(value: number): void;
	}

	/**
	 * 数字字符串转换失败回调方法委托。
	 * @author Wang Yucai
	 *
	 * @interface ParseNumericStringFailureCallback
	 * @typedef {ParseNumericStringFailureCallback}
	 */
	interface ParseNumericStringFailureCallback {
		
		/**
		 * 数字字符串转换失败回调方法委托。
		 * @author Wang Yucai
		 *
		 * @param {string} s 原始字符串。
		 */
		(s: string): void;
	}
}
