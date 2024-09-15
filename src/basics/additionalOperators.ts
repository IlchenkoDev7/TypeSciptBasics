import { IUser } from "./interfaces/IUser";
import User from "./classes/User";

// Поля интерфейса в качестве типа
// Полезно для безопасного переборов полей интерфейса
type userI = keyof IUser
type userC = keyof User
const name: userI = "name";
const surname: userC = "surname";

// Необходимый для тестов тип
type UserType = {
    _id: number;
    name: string;
    surname: string;
    createdAt: string;
}

// Создание типа, который хранит в себе только названия полей как и при обычном keyof только с исключением некоторых полей
// Для перебора полей удобно
type UserInfoType = Exclude<keyof UserType, '_id' | 'createdAt'>;
const usInfo: UserInfoType = "name";

// Создание типа на основе другого типа с учётом только выбранных свойств
type UserInfoType2 = Pick<UserType, 'name' | 'surname'>;
let usInfo1: UserInfoType2 = {
    name: "Alex",
    surname: "Ilchenko"
};