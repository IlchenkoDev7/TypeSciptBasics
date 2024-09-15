import User from "basics/classes/User";
import { IUser } from "./interfaces/IUser";

const userFromClass = new User("Alex", "13.09.2024", "455468755768234", "Ilchenko")

// Назначение типа параметрам и указание значения, которое функция должна вернуть
function saySomeName(name: string): void {
    console.log(name);
}

function getSomeName(name: string): string[] {
    return [name];
}

function createUserByObject(userObj: IUser): User {
    const { name, surname, createdAt } = userObj;
    return new User(name, createdAt, '455468755768234', surname);
}