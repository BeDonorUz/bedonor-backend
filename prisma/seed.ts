import seedCenters from './seeds/seed-centers';
import seedCities from './seeds/seed-citites';

const main = async () => {
  await seedCities();
  await seedCenters();

  console.log('Success');
};

main();
