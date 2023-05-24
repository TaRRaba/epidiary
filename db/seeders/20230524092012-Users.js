/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: 'mail@mail.ru',
      password: '123',
      userInfo: JSON.stringify({
        fullName: 'Vasya Pupkin',
        birthDate: '16.01.2000',
        gender: 'male',
      }),
    },
    {
      email: 'gmail@gmail.com',
      password: '123',
      userInfo: JSON.stringify({
        fullName: 'Ivan Ivanov',
        birthDate: '01.01.2015',
        gender: 'male',
      }),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
