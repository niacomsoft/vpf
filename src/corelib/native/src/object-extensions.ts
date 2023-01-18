// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

import referenceEqualsImpl from 'fast-deep-equal';

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
Object.referenceEquals = (a: any, b: any): boolean => {
	/**
	 * 校验 {@link target} 是否为 undefined 类型值。
	 * @author Wang Yucai
	 *
	 * @param {*} target any 类型的对象实例或值。
	 * @returns {boolean}
	 */
	function isUndefined(target: any): boolean {
		return typeof target === "undefined";
	}

	/**
	 * 校验 {@link target} 是否等于 null 值。
	 * @author Wang Yucai
	 *
	 * @param {*} target
	 * @returns {boolean}
	 */
	function isNull(target: any): boolean {
		return target === null || target == null;
	}

	if (isUndefined(a) && isUndefined(b)) {
		console.debug(`[DEBUG]: 参数 “a” 和 “b” 都为 undefined 类型值，返回 true。详情参见：%o`, {
			sourceContext: { method: "referenceEquals", parameters: { a, b }, codebase: "object-extensions.ts" },
			runtimeContext: {},
		});

		return true;
	} else if (isNull(a) && isNull(b)) {
		console.debug(`[DEBUG]: 参数 “a” 和 “b” 都为 null 值，返回 true。详情参见：%o`, {
			sourceContext: { method: "referenceEquals", parameters: { a, b }, codebase: "object-extensions.ts" },
			runtimeContext: {},
		});

		return true;
	} else if (isNull(a) || isNull(b)) {
		console.debug(`[DEBUG]: 参数 “a” 和 “b” 其中之一为 null 值，返回 false。详情参见：%o`, {
			sourceContext: { method: "referenceEquals", parameters: { a, b }, codebase: "object-extensions.ts" },
			runtimeContext: {},
		});

		return false;
	} else {
		return referenceEqualsImpl(a, b);
	}
};
