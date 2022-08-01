import seedCenters from './seeds/seed-centers';
import cities from './seeds/seed-citites';

const main = async () => {
  await Promise.all(cities);
  await seedCenters();

  console.log('Success');
};

main();
