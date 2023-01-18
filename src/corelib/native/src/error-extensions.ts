// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

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
Error.create = function <TException extends Error>(
	createError: CreateRuntimeErrorDelegation<TException>,
	message?: string,
	...args: Array<any>
): TException {
	return createError(message, args);
};

/**
 * 抛出异常。
 * @author Wang Yucai
 */
Error.prototype.throw = function (): void {
	throw this;
};
