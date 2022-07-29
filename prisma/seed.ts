import seedCities from './seeds/seed-citites';
import seedBotLocales from './seeds/seed-bot-locales';

const main = async () => {
  await seedCities();
  await seedBotLocales();

  console.log('Success');
};

main();
