// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

declare namespace sys {
	/**
	 * VPF 应用程序默认值。
	 * @author Wang Yucai
	 *
	 * @typedef {ApplicationDefaults}
	 */
	type ApplicationDefaults = {
		/**
		 * 获取一个字符串，用于表示默认的空字符。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {string}
		 */
		readonly DEFAULT_EMPTY_STRING: string;

		/**
		 * 设置或获取一个字符串，用于表示默认的文化区域名称。
		 * @author Wang Yucai
		 *
		 * @type {?string}
		 */
		DEFAULT_CULTURE_NAME?: string;

		/**
		 * 设置或获取一个字符串，用于表示默认的日期格式化字符串。
		 * @author Wang Yucai
		 *
		 * @type {?string}
		 */
		DEFAULT_DATE_FORMATSTRING?: string;
	};

	/**
	 * VPF 应用程序上下文。
	 * @author Wang Yucai
	 *
	 * @typedef {ApplicationContext}
	 */
	type ApplicationContext = {
		/**
		 * 获取 {@link sys.ApplicationDefaults} 类型的对象实例，用于表示应用程序默认值。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {?ApplicationDefaults}
		 * @see {@link sys.ApplicationDefaults}
		 */
		readonly DEFAULT?: ApplicationDefaults;
	};

	/**
	 * 可为空的类型。
	 * @author Wang Yucai
	 *
	 * @typedef {NullableType}
	 * @template T
	 */
	type NullableType<T> = T | undefined | null;
}
