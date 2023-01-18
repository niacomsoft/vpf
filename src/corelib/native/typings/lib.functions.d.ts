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
}
