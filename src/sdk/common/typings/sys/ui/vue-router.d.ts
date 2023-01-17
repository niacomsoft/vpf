// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

declare namespace sys.ui {
	/**
	 * 为 vue-router 元数据类型提供的扩展属性。
	 * @author Wang Yucai
	 *
	 * @interface VPFRouterMetadata
	 * @typedef {VPFRouterMetadata}
	 */
	interface VPFRouterMetadata {
		/**
		 * 获取一个 Boolean 类型值，用于表示是否允许匿名访问。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {?boolean}
		 */
		readonly allowAnonymous?: boolean;

		/**
		 * 获取一个字符串，用于表示子模块标题。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {?string}
		 */
		readonly title?: string;
	}
}
