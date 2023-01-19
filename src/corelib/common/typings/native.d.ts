// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/// <reference types="@vpf/corelib-native" />

declare namespace sys {
	/**
	 * 为 ApplicationContext 类型提供的扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface ApplicationContext
	 * @typedef {ApplicationContext}
	 */
	interface ApplicationContext {
		/**
		 * 获取 {@link ServiceCollection} 类型的对象实例，用于表示内置服务集合。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {?ServiceCollection}
		 */
		readonly SERVICES?: ServiceCollection;
	}
}
