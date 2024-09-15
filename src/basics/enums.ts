// Перечисления
enum UserStatusesWithoutInitializers {
    DEFAULT,
    SUBSCRIBER,
    PREMIUM,
}

// Можно использовать как удобный набор констант
enum UserStatuses {
    DEFAULT = "DEFAULT",
    SUBSCRIBER = "SUBSCRIBER",
    PREMIUM = "PREMIUM",
}

// При использовании будет порядковый номер, по которому расположен в перечислении элемент
console.log(UserStatusesWithoutInitializers.DEFAULT)

// При вызове значения с инициализатором, вернётся именно то, что было после равно
console.log(UserStatuses.DEFAULT)