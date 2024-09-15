import { IUserWithInfo } from "basics/interfaces/IUser";
import { IUserWithEmail } from "basics/interfaces";

// Абстрактный класс
// Можно создавать базовый функционал класса в нём, задавать методы abstract, которые необходимо реализовать в потомках. Нельзя создавать экземпляры абстрактного класса
abstract class UserModel {
    // можно полноценно задавать свойства с модификаторами

    // Можно задавать конструктор несмотря на то, что создать экземпляр абстрактного класса нельзя. Будет конструктор для потомков

    // все abstract методы надо реализовывать в рамках их сигнатуры в потомках
    abstract getUserInfo(): string

    // Можно создавать уже готовые к использованию в потомках методы
    get(): string {
        return 'user';
    }
}

// Могут имплементировать интерфейсы
export default class User implements IUserWithInfo {
    // Модификаторы доступа

    // По умолчанию (если не указать идентификатор) поле будет public
    _id: number;

    // public - поле доступно и для чтения и изменения извне (даже не обязательно внутри класса)
    public name: string;

    // readonly - поле только для чтения. Если оно public, то прочиттать можно откуда угодно
    public readonly surname: string | undefined;
    public createdAt: string;

    // protected - это поле будет у всех наследников, там его можно и читать и редактировать (если только не readonly). Прочитать у экземпляра где-то извне нельзя, только в инициализации методов и свойств текущего класса и его наследников
    protected cardNumber: string;

    // private - поле доступно исключительно в текущем классе для чтения и редактирования. Наследники не имеют доступа к полю. Извне также обратиться к нему нельзя. Можно только создавать методы в текущем классе, которые будут как-то взаимодействовать с ним и управлять этим полем через эти методы
    private cvv: string;

    // Статическое поле
    // Относится ко всему классу, а не к каждому отдельному экземпляру
    private static allUsers: number = 0;

    // Реализация конструктора
    constructor(name: string, createdAt: string, cardNumber: string, surname: string | undefined = undefined) {
        User.allUsers++;
        this._id = User.allUsers;

        this.name = name;
        this.surname = surname;
        this.cardNumber = cardNumber;
        this.createdAt = createdAt;
        this.cvv = `${Math.random()}${Math.random()}${Math.random()}`;
    }

    // Статический метод
    // Может работать исключительно со статическими полями класса
    public static getUsersCount(): number {
        return User.allUsers;
    }

    public getUserInfo(): string {
        return `This is ${this.name}${this.surname ? ` ${this.surname}` : ''}. Account was created at ${this.createdAt}. ${this.getConfidentData()}`;
    }

    private getConfidentData(): string {
        return `Номер карты: ${this.cardNumber}. CVV: ${this.cvv}`;
    }

    public getId(): number {
        return this._id;
    }
}

// Пример наследования класса и присоединение ещё одного интерфейса к наследнику
class UserWithEmail extends User implements IUserWithEmail {
    email: string;

    // Изменённый конструктор
    constructor(name: string, createdAt: string, email: string, cardNumber: string, surname: string | undefined = undefined) {
        // Родительский конструктор
        super(name, createdAt, cardNumber, surname)

        // Добавочный функционал в конструкторе наследника
        this.email = email;
    }

    // Переопределение метода
    // Обязательно необходима идентичная родителю сигнатура для возможность полиморфизма
    public getUserInfo(): string {
        return `This is ${this.name}${this.surname ? ` ${this.surname}` : ''}. Email: ${this.email}. Account was created at ${this.createdAt}`;
    }
}