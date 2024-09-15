import { IUser } from "./interfaces/IUser";

// Примитивы
const str: string = 'Hello, TypeScript';
const num: number = 11211;
const bool: boolean = true;
const empty: null = null;
const notDefined: undefined = undefined;

// Символ
const symbolId: symbol = Symbol('id');

// Простой объект
const user: object = {
    _id: 1,
    name: "Alex",
};

// Объект на основе интерфейса
const user1: IUser = {
    _id: 1,
    name: "Alex",
    surname: "Ilchenko",
    createdAt: "13.09.2024"
}

// Параметризованные (Generics) массивы
const numberArr: Array<number> = [1, 2, 3, 4];
const stringArr: string[] = ["Alex", "Hello"];

// tuple
// Можно задать ровно столько элементов и такого типа, как определили в установке типа
const tuple: [string, number, object] = ["Alex", 303403, {}];

// Переменная, работающая со множеством типов данных
// Плохой кейс работы с TS
let withoutType: any = '';
withoutType = 193;

// Через "|" можно перечислить все типы данных, значение которых можно присвоить переменной
let id: string | number = 0;
id = '0';