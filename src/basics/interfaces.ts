// Создание базового интерфейса вот тут
import { IUser } from "./interfaces/IUser";

// Когда необходимо создавать объекту много однотипных полей, можно использовать следующий синтаксис для интерфейса
interface Styles {
    [key: string]: string;
}

const styles: Styles = {
    borderStyle: "1px solid black",
    margin: "20px",
    padding: "10px"
}

// Наследование интерфейса
export interface IUserWithEmail extends IUser {
    email: string;
}

// Создание объекта на основе интерфейса
const user1: IUser = {
    _id: 0,
    name: "Alex",
    surname: "Ilchenko",
    createdAt: "13.09.2024"
};

const user1WithEmail: IUserWithEmail = {...user1, email: "sasha_ilchenko_130905@mail.ru"};

const user2 = <IUser>{
    _id: 0,
    name: "Alex",
    surname: "Ilchenko",
    createdAt: "13.09.2024"
};

const user3 = {
    _id: 0,
    name: "Alex",
    surname: "Ilchenko",
    createdAt: "13.09.2024"
} as IUser;

// Пример полиморфизма и использование интерфейса в качестве типа параметра
function sayHello(user: IUser): void {
    console.log(`Hello from ${user.name}`);
}

sayHello(user1);
sayHello(user1WithEmail);