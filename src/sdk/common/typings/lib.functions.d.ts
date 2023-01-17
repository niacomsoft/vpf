// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI.

/**
 * @description 无返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Action
 * @typedef {Action}
 */
declare interface Action {
	/**
	 * @description 无返回值的方法委托。
	 * @author Wang Yucai
	 */
	(): void;
}

/**
 * @description {@link TResult} 类型返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Func
 * @typedef {Func}
 * @template TResult
 */
declare interface Func<TResult> {
	/**
	 * @description {@link TResult} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @returns {TResult}
	 */
	(): TResult;
}

/**
 * @description 无返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Action1
 * @typedef {Action1}
 * @template T
 */
declare interface Action1<T> {
	/**
	 * @description 无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @param {T} arg {@link T} 类型的参数值。
	 */
	(arg: T): void;
}

/**
 * @description {@link TResult} 类型返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Func1
 * @typedef {Func1}
 * @template T
 * @template TResult
 */
declare interface Func1<T, TResult> {
	/**
	 * @description {@link TResult} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @param {T} arg {@link T} 类型的参数值。
	 * @returns {TResult}
	 */
	(arg: T): TResult;
}

/**
 * @description 无返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Action2
 * @typedef {Action2}
 * @template T1
 * @template T2
 */
declare interface Action2<T1, T2> {
	/**
	 * @description 无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @param {T1} arg1 {@link T1} 类型的参数值。
	 * @param {T2} arg2 {@link T2} 类型的参数值。
	 */
	(arg1: T1, arg2: T2): void;
}

/**
 * @description {@link TResult} 类型返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Func2
 * @typedef {Func2}
 * @template T1
 * @template T2
 * @template TResult
 */
declare interface Func2<T1, T2, TResult> {
	/**
	 * @description {@link TResult} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @param {T1} arg1 {@link T1} 类型的参数值。
	 * @param {T2} arg2 {@link T2} 类型的参数值。
	 * @returns {TResult}
	 */
	(arg1: T1, arg2: T2): TResult;
}

/**
 * @description 无返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Action3
 * @typedef {Action3}
 * @template T1
 * @template T2
 * @template T3
 */
declare interface Action3<T1, T2, T3> {
	/**
	 * @description 无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @param {T1} arg1 {@link T1} 类型的参数值。
	 * @param {T2} arg2 {@link T2} 类型的参数值。
	 * @param {T3} arg3 {@link T3} 类型的参数值。
	 */
	(arg1: T1, arg2: T2, arg3: T3): void;
}

/**
 * @description {@link TResult} 类型返回值的方法委托。
 * @author Wang Yucai
 *
 * @interface Func3
 * @typedef {Func3}
 * @template T1
 * @template T2
 * @template T3
 * @template TResult
 */
declare interface Func3<T1, T2, T3, TResult> {
	/**
	 * @description {@link TResult} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @param {T1} arg1 {@link T1} 类型的参数值。
	 * @param {T2} arg2 {@link T2} 类型的参数值。
	 * @param {T3} arg3 {@link T3} 类型的参数值。
	 * @returns {TResult}
	 */
	(arg1: T1, arg2: T2, arg3: T3): TResult;
}
