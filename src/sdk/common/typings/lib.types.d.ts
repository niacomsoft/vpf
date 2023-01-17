// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.


/**
 * @description 定义了可为空的类型。
 * @author Wang Yucai
 *
 * @typedef {NullableType}
 * @template T
 */
declare type NullableType<T> = T | undefined | null;
