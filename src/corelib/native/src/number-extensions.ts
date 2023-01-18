// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/**
 * 尝试将字符串 {@link s} 转换为 Number 类型值。
 * @author Wang Yucai
 *
 * @param {string} s 数字字符串。
 * @returns {Promise<number>}
 */
Number.tryParse = (s: string): Promise<number> => {
	/**
	 * 验证字符串 {@link s} 是否为数字字符串。
	 * @author Wang Yucai
	 *
	 * @param {string} s 需要验证的字符串。
	 * @returns {boolean}
	 */
	function isNumericString(s: string): boolean {
		if (String.isNullOrWhiteSpace(s)) {
			console.debug(`[DEBUG]: 参数 “s” 可能为 undefined、null、empty 或空格符。详情参见：%o`, {
				sourceContext: { method: "tryParse", parameters: { s }, codebase: "number-extensions.ts" },
				runtimeContext: {},
			});
			return false;
		} else if (/^[\-\+]?((0(\.\d+)?)|([1-9]\d*)(\.\d+)?)$/g.test(s)) {
			console.debug(`[DEBUG]: 参数 “s” 是一个数字字符串。详情参见：%o`, {
				sourceContext: { method: "tryParse", parameters: { s }, codebase: "number-extensions.ts" },
				runtimeContext: {},
			});

			return true;
		}
		console.warn(`[WARN]: 参数 “s” 不是一个有效的数字字符串。详情参见：%o`, {
			sourceContext: { method: "tryParse", parameters: { s }, codebase: "number-extensions.ts" },
			runtimeContext: {},
		});

		return false;
	}

	return new Promise((resolve, reject) => {
		if (isNumericString(s)) {
			if (s.indexOf(".") >= 0) resolve(parseFloat(s));
			else resolve(parseInt(s));
		} else reject(s);
	});
};

/**
 * 将字符串 {@link s} 转换为 Number 类型值。
 * @author Wang Yucai
 *
 * @param {string} s 数字字符串。
 * @param {sys.ParseNumericStringSuccessCallback} successCallback 转换成功后的回调方法。
 * @param {?sys.ParseNumericStringFailureCallback} [failureCallback] 转换失败后的回调方法。
 */
Number.parse = (
	s: string,
	successCallback: sys.ParseNumericStringSuccessCallback,
	failureCallback?: sys.ParseNumericStringFailureCallback
): void => {
	Number.tryParse(s)
		.then((value) => {
			successCallback(value);
		})
		.catch((value) => {
			if (!Object.referenceEquals(failureCallback, undefined)) {
				failureCallback(value as string);
			}
		});
};

/**
 * 将数字转换为货币字符串。
 * @author Wang Yucai
 *
 * @param {string} currencySymbol 货币符号。
 * @returns {string}
 */
Number.prototype.toCurrency = function (currencySymbol: string): string {
	if (String.isNullOrWhiteSpace(currencySymbol)) return this.toFixed(2);
	return `${currencySymbol} ${this.toFixed(2)}`;
};
