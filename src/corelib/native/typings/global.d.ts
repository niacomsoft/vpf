// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

export {};

declare global {
	/**
	 * VPF 应用程序上下文全局变量。
	 * @author Wang Yucai
	 *
	 * @type {NonNullable<sys.ApplicationContext>}
	 * @see {@link NonNullable<T>}
	 * @see {@link sys.ApplicationContext}
	 */
	var vpf_applicationCtx: NonNullable<sys.ApplicationContext>;
}
