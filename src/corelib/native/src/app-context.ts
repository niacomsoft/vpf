// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

var vpf_applicationCtx: NonNullable<sys.ApplicationContext>;

/**
 * 初始化应用程序上下文信息。
 * @author Wang Yucai
 */
function initializeAppContext(): void {
	/**
	 * 获取 VPF 应用程序默认值。
	 * @author Wang Yucai
	 *
	 * @returns {NonNullable<sys.ApplicationDefaults>}
	 * @see {@link NonNullable<T>}
	 * @see {@link sys.ApplicationDefaults}
	 */
	function getApplicationDefaults(): NonNullable<sys.ApplicationDefaults> {
		return {
			DEFAULT_EMPTY_STRING: "",
			DEFAULT_CULTURE_NAME: "zh-CN",
			DEFAULT_DATE_FORMATSTRING: "YYYY-MM-DD",
		};
	}

	/**
	 * 获取 VPF 应用程序上下文。
	 * @author Wang Yucai
	 *
	 * @returns {NonNullable<sys.ApplicationContext>}
	 * @see {@link NonNullable<T>}
	 * @see {@link sys.ApplicationContext}
	 * @see {@link getApplicationDefaults}
	 */
	function getApplicationContext(): NonNullable<sys.ApplicationContext> {
		return {
			DEFAULT: getApplicationDefaults(),
		};
	}

	console.group("VPF: app-context.ts");

	console.debug(`[DEBUG]: 尝试初始化 VPF 应用程序上下文。详情参见：%o`, {
		sourceContext: { method: "initializeAppContext", parameters: {}, codebase: "app-context.ts" },
		runtimeContext: {},
	});

	if (window) {
		console.debug(`[DEBUG]: 初始化全局对象 “window” 的上下文。详情参见：%o`, {
			sourceContext: { method: "initializeAppContext", parameters: {}, codebase: "app-context.ts" },
			runtimeContext: {},
		});
		window.vpf_applicationCtx = getApplicationContext();
	} else {
		vpf_applicationCtx = getApplicationContext();
	}

	console.debug(`[DEBUG]: VPF 应用程序上下文初始化完成。详情参见：%o`, {
		sourceContext: { method: "initializeAppContext", parameters: {}, codebase: "app-context.ts" },
		runtimeContext: {},
	});

	console.groupEnd();
}

initializeAppContext();
