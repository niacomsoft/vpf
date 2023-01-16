// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { PluginOption, UserConfigExport, defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

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
	// VPF 应用程序公共基础路径。
	const vpfApplicationBaseUrl: string = "./";
	// VPF 应用程序应用插件。
	const vpfApplicationPlugins: Array<PluginOption> = [
		vue(),
		createHtmlPlugin({
			minify: true,
			pages: [
				{
					entry: "./src/apps/desktop/main.ts",
					filename: "index.html",
					template: "index.html",
					injectOptions: {
						data: {
							title: vpfEnvironmentVariables["VPF_BROWSER_TAB_TITLE"],
						},
					},
				},
			],
		}),
	];
	// VPF 应用程序开发阶段是否禁用清屏。
	const disableClearScreenInDevelopment: boolean = true;
	// VPF 应用程序开发阶段使用的默认浏览器。
	const defaultBrowserInDevelopment: "chrome" | "firefox" | "edge" = "chrome";
	// VPF 应用程序开发阶段使用的主机名称。
	const developmentHostName: string = "127.0.0.1";
	// VPF 应用程序开发阶段使用的端口号。
	const developmentPortNumber: number = parseInt(vpfEnvironmentVariables["VITE_DEVELOPMENT_PORT"] ?? "32767");
	// VPF 应用程序开发阶段当端口被占用时仍然启动。
	const allowDynamicAllocationPortNumber: boolean = false;
	// VPF 应用程序构建物根目录。
	const vpfApplicationBuiltAssetsRootDirectory: string = resolve(
		"..",
		"..",
		"build",
		mode,
		vpfApplicationPackageOptions.version
	);
	// VPF 应用程序构建后生成清单文件。
	const generateBuiltAssetsManifest: boolean = true;
	// VPF 应用程序构建前是否清空构建目录。
	const clearBuiltAssetsDirectoryBeforeNextBuild: boolean = true;

	process.env.BROWSER = defaultBrowserInDevelopment;

	console.table({
		"VPF APPLICATION ENVIRONMENT SETTING": "VPF APPLICATION ENVIRONMENT VALUE",
		"VPF APPLICATION VERSION": vpfApplicationVersionStr,
		"VPF APPLICATION MODE": mode,
		"VPF APPLICATION BASE URL": vpfApplicationBaseUrl,
		"VPF APPLICATION PLUGINS": "@vitejs/plugin-vue, vite-plugin-html",
		"VPF APPLICATION ENVIRONMENT VARIABLES DIRECTORY": vpfEnvironmentVariableDirectory,
		"VPF APPLICATION ENVIRONMENT VARIABLES PREFIXES": vpfEnvironmentVariablePrefixes.join(","),
		"VPF DEFAULT BROWSER IN DEVELOPMENT": defaultBrowserInDevelopment,
		"VPF DEVELOPMENT HOST NAME": developmentHostName,
		"VPF DEVELOPMENT PORT NUMBER": developmentPortNumber,
		"VPF USE STRIC DEVELOPMENT PORT NUMBER": !allowDynamicAllocationPortNumber,
		"VPF BUILD ASSETS ROOT DIRECTORY": vpfApplicationBuiltAssetsRootDirectory,
		"GENERATE MANIFEST FILE": generateBuiltAssetsManifest,
		"CLEAR BUILD ASSETS ROOT DIRECTORY": clearBuiltAssetsDirectoryBeforeNextBuild,
	});

	return defineConfig({
		plugins: vpfApplicationPlugins,
		base: vpfApplicationBaseUrl,
		envDir: vpfEnvironmentVariableDirectory,
		envPrefix: vpfEnvironmentVariablePrefixes,
		clearScreen: !disableClearScreenInDevelopment,
		define: {
			// 兼容模式。
			"process.env": { NODE_ENV: vpfEnvironmentVariables["VITE_NODE_ENV"] },
		},
		server: {
			host: developmentHostName,
			port: developmentPortNumber,
			open: true,
			strictPort: !allowDynamicAllocationPortNumber,
		},
		build: {
			outDir: vpfApplicationBuiltAssetsRootDirectory,
			manifest: generateBuiltAssetsManifest,
			emptyOutDir: clearBuiltAssetsDirectoryBeforeNextBuild,
			rollupOptions: {
				input: {
					main: resolve(__dirname, "index.html"),
				},
			},
		},
	});
};

export default bootConfigurator;
