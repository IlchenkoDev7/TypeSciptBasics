export interface IUser {
    readonly _id: number;
    name: string;
    surname: string | undefined;
    optional?: string; // Такой формат записи равен: optional: string | undefined;
    createdAt: string;
}

export interface IUserWithInfo extends IUser {
    getUserInfo(): string;
}

// класс имеплементирует интерфейс IUser в модуле User при инициализации класса User