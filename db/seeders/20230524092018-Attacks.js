/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Attacks', [{
      user_id: 1,
      attackInfo: JSON.stringify({
        date: '15.05.2023',
        type: 'судорожный',
      }),
    },
    {
      user_id: 2,
      attackInfo: JSON.stringify({
        date: '20.04.2023',
        type: 'безсудорожный',
      }),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Attacks', null, {});
  },
};
