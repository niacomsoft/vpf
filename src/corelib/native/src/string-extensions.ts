// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/**
 * 获取空字符串。
 * @author Wang Yucai
 *
 * @returns {string}
 * @see {@link sys.ApplicationDefaults}
 * @see {@link sys.ApplicationDefaults.DEFAULT_EMPTY_STRING}
 */
String.empty = (): string => {
	if (window) return window.VpfApplicationContext.defaults.DEFAULT_EMPTY_STRING;
	return VpfApplicationContext.defaults.DEFAULT_EMPTY_STRING;
};

/**
 * 当字符串 {@link s} 为 undefined、null 或 {@link String.empty} 时返回 true，否则返回 false。
 * @author Wang Yucai
 *
 * @param {string} s 需要校验的字符串。
 * @returns {boolean}
 * @see {@link Object.referenceEquals}
 * @see {@link String.empty}
 */
String.isNullOrEmpty = (s: string): boolean => {
	return Object.referenceEquals(s, null) || Object.referenceEquals(s, undefined) || s === String.empty();
};

/**
 * 当字符串 {@link s} 为 undefined、null、{@link String.empty} 或空格符时返回 true,否则返回 false。
 * @author Wang Yucai
 *
 * @param {string} s 需要校验的字符串。
 * @returns {boolean}
 * @see {@link String.isNullOrEmpty}
 */
String.isNullOrWhiteSpace = (s: string): boolean => String.isNullOrEmpty(s?.trim());