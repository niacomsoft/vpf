// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/// <reference path="../../typings/index.d.ts" />

import equal from "fast-deep-equal";

/**
 * 用于校验 {@link obj} 是否为 undefined 类型值。
 * @author Wang Yucai
 *
 * @param {*} obj 需要校验的对象实例或值。
 * @returns {boolean}
 */
function __isUndefined__(obj: any): boolean {
	if (typeof obj === "undefined") {
		console.debug(`[DEBUG]: 参数 “obj” 为 undefined 类型值。详情参见：%o`, {
			sourceContext: { method: "isUndefined", parameters: { obj }, codebase: "object-extensions.ts" },
			runtimeContext: { result: true },
		});
		return true;
	}
	return false;
}

Object.isUndefined = __isUndefined__;

/**
 * 用于校验 {@link obj} 是否为 undefined 类型值或 null 值。
 * @author Wang Yucai
 *
 * @param {*} obj 需要校验的对象实例或值。
 * @returns {boolean}
 * @see {@link Object.isUndefined}
 */
function __isNull__(obj: any): boolean {
	if (__isUndefined__(obj) || obj === null || obj == null) {
		console.debug(`[DEBUG]: 参数 “obj” 为 undefined 类型值或 null 值。详情参见：%o`, {
			sourceContext: { method: "isNull", parameters: { obj }, codebase: "object-extensions.ts" },
			runtimeContext: { result: true },
		});

		return true;
	}
	return false;
}

Object.isNull = __isNull__;

/**
 * @description 用于校验 {@link obj1} 和 {@link obj2} 是否相等。
 * @author Wang Yucai
 *
 * @param {*} obj1 需要校验的对象实例或值。
 * @param {*} obj2 需要校验的对象实例或值。
 * @returns {boolean}
 * @see https://www.npmjs.com/package/fast-deep-equal
 * @see {@link Object.isNull}
 * @see {@link Object.isUndefined}
 */
function __referenceEquals__(obj1: any, obj2: any): boolean {
	if (__isNull__(obj1) && __isNull__(obj2)) {
		console.debug(`[DEBUG]: 参数 “obj1” 和 “obj2” 都为 undefined 类型值或 null 值，因此返回 true。详情参见：%o`, {
			sourceContext: { method: "referenceEquals", parameters: { obj1, obj2 }, codebase: "object-extensions.ts" },
			runtimeContext: {
				result: true,
			},
		});

		return true;
	} else if (__isNull__(obj1) || __isNull__(obj2)) {
		console.debug(`[DEBUG]: 参数 “obj1” 和 “obj2” 其中之一为 undefined 类型值或 null 值，因此返回 false。详情参见：%o`, {
			sourceContext: { method: "referenceEquals", parameters: { obj1, obj2 }, codebase: "object-extensions.ts" },
			runtimeContext: { result: true },
		});
		return false;
	}
	const result: boolean = equal(obj1, obj2);
	console.debug(`[DEBUG]: 参数 “obj1” 和 “obj2” ${result ? "" : "不"}相等。详情参见：%o`, {
		sourceContext: { method: "referenceEquals", parameters: { obj1, obj2 }, codebase: "object-extensions.ts" },
		runtimeContext: {
			result,
			packageDependencies: ["https://www.npmjs.com/package/fast-deep-equal"],
		},
	});
	return result;
}

Object.referenceEquals = __referenceEquals__;
