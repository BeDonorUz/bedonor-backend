import { PrismaClient, Prisma, BotLanguagesEnum } from '@prisma/client';

// yandex.uz/maps data

const prisma = new PrismaClient();

const cities: Prisma.CityCreateInput[] = [
  {
    name: 'Tashkent',
    latitude: 41.311158,
    longitude: 69.279737,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Tashkent',
            text: 'Toshkent',
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Tashkent',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Tashkent',
            text: 'Tashkent',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Tashkent',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Tashkent',
            text: 'Ташкент',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Tashkent',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Samarkand',
    latitude: 39.654404,
    longitude: 66.975827,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Samarkand',
            text: 'Samarqand',
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Samarkand',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Samarkand',
            text: 'Samarkand',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Samarkand',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Samarkand',
            text: 'Самарканд',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Samarkand',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Namangan',
    latitude: 41.000085,
    longitude: 71.672579,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Namangan',
            text: 'Namangan',
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Namangan',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Namangan',
            text: 'Namangan',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Namangan',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Namangan',
            text: 'Наманган',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Namangan',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Andijan',
    latitude: 40.783388,
    longitude: 72.350663,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Andijan',
            text: 'Andijon',
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Andijan',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Andijan',
            text: 'Andijan',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Andijan',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Andijan',
            text: 'Андижан',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Andijan',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Nukus',
    latitude: 42.460341,
    longitude: 59.617996,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Nukus',
            text: 'Nukus',
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Nukus',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Nukus',
            text: 'Nukus',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Nukus',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Nukus',
            text: 'Нукус',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Nukus',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Fergana',
    latitude: 40.38942,
    longitude: 71.783009,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Fergana',
            text: "Farg'ona",
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Fergana',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Fergana',
            text: 'Fergana',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Fergana',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Fergana',
            text: 'Фергана',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Fergana',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Bukhara',
    latitude: 39.767966,
    longitude: 64.421728,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Bukhara',
            text: 'Buxoro',
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Bukhara',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Bukhara',
            text: 'Bukhara',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Bukhara',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Bukhara',
            text: 'Бухара',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Bukhara',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Karshi',
    latitude: 38.841612,
    longitude: 65.789988,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Karshi',
            text: 'Qarshi',
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Karshi',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Karshi',
            text: 'Karshi',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Karshi',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Karshi',
            text: 'Карши',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Karshi',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Kokand',
    latitude: 40.539123,
    longitude: 70.940434,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Kokand',
            text: "Qo'qon",
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Kokand',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Kokand',
            text: 'Kokand',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Kokand',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Kokand',
            text: 'Коканд',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Kokand',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Margilan',
    latitude: 40.469051,
    longitude: 71.720765,
    botLocales: {
      connectOrCreate: [
        {
          create: {
            name: 'city:Margilan',
            text: "Marg'ilon",
            language: BotLanguagesEnum.UZ,
          },
          where: {
            name_language: {
              name: 'city:Margilan',
              language: BotLanguagesEnum.UZ,
            },
          },
        },
        {
          create: {
            name: 'city:Margilan',
            text: 'Margilan',
            language: BotLanguagesEnum.EN,
          },
          where: {
            name_language: {
              name: 'city:Margilan',
              language: BotLanguagesEnum.EN,
            },
          },
        },
        {
          create: {
            name: 'city:Margilan',
            text: 'Маргилан',
            language: BotLanguagesEnum.RU,
          },
          where: {
            name_language: {
              name: 'city:Margilan',
              language: BotLanguagesEnum.RU,
            },
          },
        },
      ],
    },
  },
];

export default async () => {
  for (const city of cities) {
    await prisma.city.create({ data: city });
  }
};
