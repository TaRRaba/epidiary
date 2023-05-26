## Технологии:

### Front-End - React (SSR), Tailwind

### Back-End - Node.js, Express, PostgreSQL

## Кратко:

Это дневник для людей страдающих от эпилептических приступов, которое поможет проводить более точный анализ анамнеза, а также будет применяться в актуальных исследованиях для менеджмента данных пациентов.

С помощью этого приложения врачи будут отслеживать динамику приступов и контролировать регулярность приёма препаратов.

## Обзор:

![alt text](readme-assets/)
**Рисунок 1. Главная страница**

![alt text](readme-assets)
**Рисунок 2. Информация о товаре**

![alt text](readme-assets/)
**Рисунок 3. Корзина**

![alt text](readme-assets/)
**Рисунок 4. Оплата**

![alt text](readme-assets/)
**Рисунок 5. Заказы**

![alt text](readme-assets/)
**Рисунок 6. Аналитика**

## Запуск \*

**Вам понадобится СУБД PostgreSQL**

1. В папке проекта выполните:

```bash
npm i
```

2. Затем создайте базу данных с помощью терминала:

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

3. В корне проекта создайте файл .env и заполните его по примеру из файла .env-example

```js
// .env-example

DATABASE = "postgres://user:pass@example.com:5432/dbname"; // измените user, pass, url и dbname
PORT = 3000; // любой порт
COOKIE = qwerty123; // любое значение
```

3. В корне проекта апустите приложение:

```bash
npm start
```

### Powered by:

#### [TaRRaba](https://github.com/TaRRaba), [NPetrovna](https://github.com/NPetrovna), [Aleksshipkov](https://github.com/Aleksshipkov), [RustPo](https://github.com/RustPo)
