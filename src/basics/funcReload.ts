// Суть перегрузки в TS заключается в возможности написания скольких угодно сигнатур, но реализация должна быть одна и удовлетворять всем сигнатурам
function add(): string;
function add(a: number): number;
function add(a: number, b: number): number;

// Если в какой-то сигнатуре нет параметра, а в какой-то есть, надо пометить его, что он может быть undefined
// Если возвращаемые типы разные у сигнатур, тоже надо прорабатывать
function add(a?: number, b?: number): number | string {
    if (typeof a === "number" && !b) {
        return a;
    } else if(a && b) {
        return a+b;
    }

    return ""
}