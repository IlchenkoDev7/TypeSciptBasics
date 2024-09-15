// Пример параметризованного класса
// Технология позволяет не привязываться к определённому типу данных для работы
// Можно использовать множество параметров типа для использования в свойствах и методах классов
class UserWithType<T> {
    // Можно задавать свойствам
    info: T;

    constructor(info: T) {
        this.info = info;
    }

    // Можно задать в качестве возвращаемого значения каких-либо методов
    getInfo(): T {
        return this.info;
    }

    // В методах можно определять собственные параметры типов независимо от параметров класса
    getSomething<F>(info: F): F {
        return info;
    }
}

// Параметризованный метод
function getUserInfo<T>(info: T): T {
    return info;
}

// Параметризация массива
const numberArr: Array<number> = [1, 3, 4];

// Параметризация map 
const map: Map<object, Date> = new Map<object, Date>()