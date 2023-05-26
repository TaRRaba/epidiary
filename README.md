## Технологии:

- ### Front-End:

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- ### Back-End

  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

- ### Dev
  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

---

## Кратко:

- Это дневник для людей страдающих от эпилептических приступов, которое поможет проводить более точный анализ анамнеза, а также будет применяться в актуальных исследованиях для менеджмента данных пациентов.

- С помощью этого приложения врачи будут отслеживать динамику приступов и контролировать регулярность приёма препаратов.

---

## Обзор:

**_При первом запуске вас встретит авторизация, если нет аккаунта - зарегистрируйтесь!_**

![alt text](readme-assets/1.png)
**Рисунок 1. Страница авторизации**

**_После авторизации введите информацию о себе, можно добавить доп. данные для большей информации о вас_**

![alt text](readme-assets/3.png)
**Рисунок 2. Добавление информации пациента**

**_При добавлении доп. данных появится форма для заполнения_**

![alt text](readme-assets/4.png)
**Рисунок 2.1. Доп. данные пациента (вверхня часть)**

![alt text](readme-assets/5.png)
**Рисунок 2.2. Доп. данные пациента (нижняя часть)**

**\_После сохранения информации о себе, вы окажитесь на странице на которой можно вызвать кнопку **"приступ"**, и описать свой приступ подробнее чтобы врач более точно смог ознакомиться с ним\_**

![alt text](readme-assets/6.png)
**Рисунок 3. Кнопка добавить приступ**

![alt text](readme-assets/7.png)
**Рисунок 3.1. Добавление обязательной информации о приступе**

![alt text](readme-assets/8.png)
**Рисунок 3.2. Добавление обязательной информации о приступе**

**\_При нажатии кнопки **"Добавить больше информации"** появится форма для доп. информации\_**

![alt text](readme-assets/9.png)
**Рисунок 3.3. Добавление доп. информации о приступе**

**_После добавления приступа его можно будет просмотреть в своем эпидневнике_**

![alt text](readme-assets/12.png)
**Рисунок 4. Эпидневник**

![alt text](readme-assets/13.png)
**Рисунок 4.1. Добавление обязательной информации о приступе**

---

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
