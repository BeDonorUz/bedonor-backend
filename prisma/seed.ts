import seedCities from './seeds/seed-citites';

const main = async () => {
  await seedCities();

  console.log('Success');
};

main();
