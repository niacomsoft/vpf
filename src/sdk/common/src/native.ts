// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

import referenceEqualsImpl from 'fast-deep-equal';

/**
 * @description 用于对比 {@link objA} 与 {@link objB} 是否相等。
 * @author Wang Yucai
 *
 * @param {*} objA 未知类型的对象实例或值。
 * @param {*} [objB=null] 未知类型的对象实例或值。
 * @returns {boolean}
 * @see https://github.com/epoberezkin/fast-deep-equal
 */
Object.referenceEquals = function (objA: any, objB: any = null): boolean {
	const objA_isNull: boolean = typeof objA === "undefined" || objA === null || objA == null;
	const objB_isNull: boolean = typeof objB === "undefined" || objB === null || objB == null;
	if (objA_isNull && objB_isNull) {
		console.debug(`[DEBUG]: 参数 “objA” 和 “objB” 都为 undefined 或 null，因此返回 “true”。详情参见：%o`, {
			sourceContext: { method: "referenceEquals", parameters: { objA, objB }, codebase: "native.ts" },
			runtimeContext: {},
		});
		return true;
	}

	return referenceEqualsImpl(objA, objB);
};
