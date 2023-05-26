/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Attacks', [{
      user_id: 1,
      attackInfo: JSON.stringify({
        outMind: 'Да',
        type: 'судорожный',
      }),
    },
    {
      user_id: 2,
      attackInfo: JSON.stringify({
        outMind: 'Нет',
        type: 'безсудорожный',
      }),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Attacks', null, {});
  },
};
