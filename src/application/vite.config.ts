// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { PluginOption, UserConfigExport, defineConfig, loadEnv } from "vite";

/**
 * @description 定义了构建 VPF 应用程序的方法委托。
 * @author Wang Yucai
 *
 * @interface VPFApplicationBootConfigurator
 * @typedef {VPFApplicationBootConfigurator}
 */
interface VPFApplicationBootConfigurator {
	/**
	 * @description 定义了构建 VPF 应用程序的方法委托。
	 * @author Wang Yucai
	 *
	 * @param {?{ mode: any }} [options] 命令行参数。
	 * @returns {UserConfigExport}
	 */
	(options?: { mode: any }): UserConfigExport;
}

const bootConfigurator: VPFApplicationBootConfigurator = ({ mode }): UserConfigExport => {
	// VPF 应用程序配置选项信息。
	const vpfApplicationPackageOptions: any = require("./package.json");
	// VPF 应用程序版本号字符串。
	const vpfApplicationVersionStr: string = vpfApplicationPackageOptions.version;
	// VPF 应用程序公共基础路径。
	const vpfApplicationBaseUrl: string = "./";
	// VPF 应用程序应用插件。
	const vpfApplicationPlugins: Array<PluginOption> = [vue()];
	// VPF 应用程序允许的环境变量前缀。
	const vpfEnvironmentVariablePrefixes: Array<string> = ["NODE_", "VITE_", "VPF_"];
	// VPF 应用程序环境变量配置文件路径。
	const vpfEnvironmentVariableDirectory: string = resolve(__dirname, "settings");
	// VPF 应用程序环境变量集合。
	const vpfEnvironmentVariables: Record<string, string> = loadEnv(
		mode,
		vpfEnvironmentVariableDirectory,
		vpfEnvironmentVariablePrefixes
	);

	console.table({
		"VPF APPLICATION ENVIRONMENT SETTING": "VPF APPLICATION ENVIRONMENT VALUE",
		"VPF APPLICATION VERSION": vpfApplicationVersionStr,
		"VPF APPLICATION MODE": mode,
		"VPF APPLICATION BASE URL": vpfApplicationBaseUrl,
		"VPF APPLICATION PLUGINS": "@vitejs/plugin-vue",
		"VPF APPLICATION ENVIRONMENT VARIABLES DIRECTORY": vpfEnvironmentVariableDirectory,
		"VPF APPLICATION ENVIRONMENT VARIABLES PREFIXES": vpfEnvironmentVariablePrefixes.join(","),
	});

	return defineConfig({
		plugins: vpfApplicationPlugins,
		base: vpfApplicationBaseUrl,
	});
};

export default bootConfigurator;
