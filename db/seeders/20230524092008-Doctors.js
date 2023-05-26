/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doctors', [{
      email: 'test@test.ru',
      fullName: 'Доктор не выбран',
      password: '123',
    },
    {
      email: 'mail@mail.ru',
      fullName: 'John Doe',
      password: '123',
    },
    {
      email: 'gmail@gmail.com',
      fullName: 'Natalya Smith',
      password: '123',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doctors', null, {});
  },
};
