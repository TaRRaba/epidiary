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

*При первом запуске вас встретит авторизация, если нет аккаунта - зарегистрируйтесь!*

![alt text](readme-assets/1.png)
**Рисунок 1. Страница авторизации**

*После авторизации введите информацию о себе, можно добавить доп. данные для большей информации о вас*

![alt text](readme-assets/2.png)
**Рисунок 2. Добавление информации пациента**

*При добавлении доп. данных появится форма для заполнения*

![alt text](readme-assets/3.png)
**Рисунок 2.1. Доп. данные пациента (верхняя часть)**

![alt text](readme-assets/4.png)
**Рисунок 2.2. Доп. данные пациента (нижняя часть)**

*После сохранения информации о себе, вы окажитесь на странице на которой можно вызвать кнопку **"Добавить приступ"**, и описать свой приступ подробнее чтобы врач более точно смог ознакомиться с ним*

![alt text](readme-assets/5.png)
**Рисунок 3. Кнопка добавить приступ**

![alt text](readme-assets/6.png)
**Рисунок 3.1. Добавление обязательной информации о приступе**

*При нажатии кнопки **"Добавить больше информации"** появится форма для доп. информации*

![alt text](readme-assets/7.png)
**Рисунок 3.2. Добавление доп. информации о приступе**

![alt text](readme-assets/8.png)
**Рисунок 3.3. Добавление доп. информации о приступе**

*После добавления приступа его можно будет просмотреть в своем эпидневнике*

![alt text](readme-assets/9.png)
**Рисунок 4. Эпидневник**

![alt text](readme-assets/10.png)
**Рисунок 4.1. Эпидневник**

*Наверху вы сможете посмотреть своего врача, а также выбрать другого*

![alt text](readme-assets/11.png)
**Рисунок 5. Выбор врача**

*По нажатию кнопки **"Подробнее"** на приступе, откроется подробная информация о приступе*

![alt text](readme-assets/12.png)
**Рисунок 6. Информация о приступе**

*Информацию о приступе можно изменить*

![alt text](readme-assets/14.png)
**Рисунок 6.1. Информация о приступе**
---

### Вход в личный кабинет врача происходит по другой ссылке! 
    - (example.com)/doc/login - вход
    - (example.com)/doc/reg - регистрация

![alt text](readme-assets/1.png)
**Рисунок 7. Авторизация врача**

*В эпидневнике врача можно узнать всю информацию о его пациентах*

![alt text](readme-assets/17.png)
**Рисунок 8. Информация о пациентах**

*По нажатию кнопки подробнее можно увидеть подробную информацию о конкретном пациенте*

![alt text](readme-assets/18.png)
**Рисунок 9. Информация о пациенте**

![alt text](readme-assets/19.png)
**Рисунок 9.1. Информация о пациенте**

*У каждого приступа можно посмотреть подробную информацию о нем*

![alt text](readme-assets/20.png)
**Рисунок 10. Информация о приступе**

![alt text](readme-assets/21.png)
**Рисунок 10.1. Информация о приступе**

*В личном кабинете врача, можно изменить свои данные*

![alt text](readme-assets/22.png)
**Рисунок 11. Личный кабинет врача**

![alt text](readme-assets/23.png)
**Рисунок 11.1. Изменение данных**

* С полным функционалом приложения вы сможете ознакомиться непосредственно в нём )
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

3. В корне проекта запустите приложение:

```bash
npm start
```

### Powered by:

#### 
- [TaRRaba](https://github.com/TaRRaba)
- [NPetrovna](https://github.com/NPetrovna)
- [Aleksshipkov](https://github.com/Aleksshipkov)
- [RustPo](https://github.com/RustPo)
