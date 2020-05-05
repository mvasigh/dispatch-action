const { createMessagePayload } = require('../src/lib');

const jsonStrings = [
  '[{"_id":"5eb15fbbda01aba494bb1e30","index":0,"guid":"7e1330a2-83a5-4dea-86c7-9e3809320b7e","isActive":true,"balance":"$1,124.55","picture":"http://placehold.it/32x32","registered":"2017-11-27T07:39:37 +06:00","latitude":-72.274364,"longitude":-85.541149,"tags":["et","quis","sit","excepteur","nisi","nostrud","id"],"friends":[{"id":0,"name":"Mitchell Edwards"},{"id":1,"name":"Lottie Gonzalez"},{"id":2,"name":"Hickman Raymond"}],"greeting":"Hello, undefined! You have 8 unread messages.","favoriteFruit":"banana"},{"_id":"5eb15fbbaa98ee7fdcc10d4b","index":1,"guid":"d188607f-6180-40dd-bdd0-748ea5e5a418","isActive":true,"balance":"$3,446.47","picture":"http://placehold.it/32x32","registered":"2019-05-19T09:46:36 +05:00","latitude":10.077328,"longitude":132.491106,"tags":["laborum","minim","Lorem","excepteur","cillum","adipisicing","voluptate"],"friends":[{"id":0,"name":"Ana Buck"},{"id":1,"name":"Rose Washington"},{"id":2,"name":"Mcmahon Brown"}],"greeting":"Hello, undefined! You have 5 unread messages.","favoriteFruit":"banana"},{"_id":"5eb15fbbd0d8c05aad772398","index":2,"guid":"0aa96ebd-9858-4d9f-83f1-7a91217dcfe1","isActive":false,"balance":"$3,238.81","picture":"http://placehold.it/32x32","registered":"2018-12-28T08:33:13 +06:00","latitude":5.616093,"longitude":50.170824,"tags":["ad","dolore","ea","magna","quis","deserunt","ullamco"],"friends":[{"id":0,"name":"Gail Conner"},{"id":1,"name":"Latasha Barnett"},{"id":2,"name":"Anastasia Hoffman"}],"greeting":"Hello, undefined! You have 2 unread messages.","favoriteFruit":"apple"},{"_id":"5eb15fbb3f845fadc82bf849","index":3,"guid":"fac40dbe-6450-441d-aaac-af1245cf8e82","isActive":true,"balance":"$3,842.76","picture":"http://placehold.it/32x32","registered":"2017-09-06T01:26:14 +05:00","latitude":28.627878,"longitude":-105.189242,"tags":["mollit","ea","labore","et","adipisicing","aliquip","esse"],"friends":[{"id":0,"name":"Ginger Franco"},{"id":1,"name":"Carlson Pittman"},{"id":2,"name":"Hillary Ramsey"}],"greeting":"Hello, undefined! You have 3 unread messages.","favoriteFruit":"apple"}]',
  '{"_id":"5eb15fd2c72da6c7ded270c8","index":0,"guid":"7d91fc0c-c34b-486e-ba5a-0594726fa879","isActive":true,"balance":"$3,744.04","picture":"http://placehold.it/32x32","registered":"2018-08-11T02:21:11 +05:00","latitude":36.603289,"longitude":-85.213253,"tags":["elit","ex","irure","enim","reprehenderit","ex","commodo"],"friends":[{"id":0,"name":"Bernadine Vincent"},{"id":1,"name":"Church Madden"},{"id":2,"name":"Haney Hebert"}],"greeting":"Hello, undefined! You have 6 unread messages.","favoriteFruit":"apple"}',
  `[
    {
      "_id": "5eb160747da5e6c8365a9410",
      "index": 0,
      "guid": "b0cd9d12-9ef2-496c-9fb8-22216e3c5fdb",
      "isActive": false,
      "balance": "$1,460.29",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": {
        "first": "Serena",
        "last": "Mcknight"
      },
      "company": "ZAGGLE",
      "email": "serena.mcknight@zaggle.me",
      "phone": "+1 (810) 550-3970",
      "address": "491 Powell Street, Wikieup, Rhode Island, 7273",
      "about": "Eiusmod enim consectetur nostrud est nisi eiusmod labore ipsum fugiat commodo et laborum. Aliquip aliqua nostrud sunt enim minim cillum eu deserunt voluptate nulla qui fugiat. Irure ipsum veniam aute nisi dolore Lorem consequat consectetur sit laboris. Duis cupidatat do enim exercitation sunt id excepteur. Irure mollit enim non tempor id eiusmod quis cupidatat. Excepteur eu magna elit cillum id magna sunt nulla non laborum. Dolore non nulla elit non occaecat tempor velit nostrud pariatur voluptate.",
      "registered": "Tuesday, May 2, 2017 4:02 AM",
      "latitude": "7.073608",
      "longitude": "174.074939",
      "tags": [
        "esse",
        "proident",
        "tempor",
        "adipisicing",
        "excepteur"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Floyd Cannon"
        },
        {
          "id": 1,
          "name": "Pam Hull"
        },
        {
          "id": 2,
          "name": "Georgia Mclean"
        }
      ],
      "greeting": "Hello, Serena! You have 9 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5eb160746e55fdd1f57c2d67",
      "index": 1,
      "guid": "bdb612f1-ba5d-45dd-9464-146ac8ffef8b",
      "isActive": false,
      "balance": "$3,279.28",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "brown",
      "name": {
        "first": "Delia",
        "last": "Atkinson"
      },
      "company": "XTH",
      "email": "delia.atkinson@xth.biz",
      "phone": "+1 (809) 405-3306",
      "address": "566 Prince Street, Genoa, Northern Mariana Islands, 642",
      "about": "Veniam aliqua consequat occaecat reprehenderit minim deserunt ex ex Lorem. Duis Lorem nisi et minim sit eiusmod veniam sit duis. Reprehenderit incididunt exercitation esse culpa veniam sit dolore nostrud commodo esse sit. Voluptate fugiat esse do ex. Elit esse non quis ipsum ipsum pariatur aliqua anim nostrud.",
      "registered": "Wednesday, October 1, 2014 6:27 PM",
      "latitude": "57.956219",
      "longitude": "-125.538008",
      "tags": [
        "esse",
        "culpa",
        "enim",
        "quis",
        "anim"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Rachel Madden"
        },
        {
          "id": 1,
          "name": "April Allen"
        },
        {
          "id": 2,
          "name": "Mcintosh Robbins"
        }
      ],
      "greeting": "Hello, Delia! You have 10 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5eb160740b7aaf2391d8743b",
      "index": 2,
      "guid": "88eb5ad7-bea4-4b8d-8f2d-f5aef36e1176",
      "isActive": true,
      "balance": "$3,750.96",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "green",
      "name": {
        "first": "Carole",
        "last": "Mcclain"
      },
      "company": "SLUMBERIA",
      "email": "carole.mcclain@slumberia.us",
      "phone": "+1 (974) 474-2906",
      "address": "339 Micieli Place, Volta, Virginia, 6399",
      "about": "Tempor consectetur reprehenderit sint do laborum culpa et pariatur. Duis ex est et enim excepteur mollit sit sit pariatur eu. Esse consectetur proident ullamco sit adipisicing deserunt aliqua irure aute incididunt. Elit non irure occaecat sint nulla incididunt in magna cupidatat velit fugiat officia. Amet et exercitation excepteur exercitation. Sunt ea cillum nostrud anim et consequat irure dolore consectetur elit aute aliqua consectetur.",
      "registered": "Monday, April 24, 2017 1:09 AM",
      "latitude": "51.299922",
      "longitude": "29.831471",
      "tags": [
        "cupidatat",
        "incididunt",
        "eu",
        "quis",
        "aliqua"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Betty Finley"
        },
        {
          "id": 1,
          "name": "Roy Harmon"
        },
        {
          "id": 2,
          "name": "Lakeisha Stone"
        }
      ],
      "greeting": "Hello, Carole! You have 5 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5eb16074f55f546172cb1f79",
      "index": 3,
      "guid": "37168ab8-4ae2-4ab1-a92f-f7610ab5a256",
      "isActive": true,
      "balance": "$1,951.69",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "brown",
      "name": {
        "first": "Celina",
        "last": "Pratt"
      },
      "company": "FISHLAND",
      "email": "celina.pratt@fishland.io",
      "phone": "+1 (979) 479-3248",
      "address": "145 Provost Street, Oasis, South Carolina, 1653",
      "about": "Deserunt occaecat incididunt in voluptate veniam nostrud enim. Ut elit commodo velit ipsum labore minim laborum aliqua reprehenderit velit nisi. Qui elit commodo labore dolore adipisicing do duis eiusmod. Eiusmod culpa esse consequat aliqua tempor dolor.",
      "registered": "Friday, August 24, 2018 1:24 PM",
      "latitude": "85.181069",
      "longitude": "-25.826425",
      "tags": [
        "dolore",
        "culpa",
        "ipsum",
        "ad",
        "anim"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lancaster Macias"
        },
        {
          "id": 1,
          "name": "Crane Whitney"
        },
        {
          "id": 2,
          "name": "Burton Fulton"
        }
      ],
      "greeting": "Hello, Celina! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5eb1607403b57fe1f70a1d47",
      "index": 4,
      "guid": "2691569a-82cb-4f9f-8546-e2eae64f7fcc",
      "isActive": false,
      "balance": "$2,760.76",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "blue",
      "name": {
        "first": "West",
        "last": "Barry"
      },
      "company": "LUNCHPOD",
      "email": "west.barry@lunchpod.net",
      "phone": "+1 (907) 578-2408",
      "address": "454 Putnam Avenue, Taft, Oregon, 8070",
      "about": "Anim elit in do minim non sit occaecat cillum quis dolore sunt. Nostrud aliqua excepteur excepteur dolor consequat ea dolore ea reprehenderit fugiat. Incididunt officia ullamco cupidatat laborum Lorem Lorem consectetur velit culpa consequat sit reprehenderit deserunt aliquip. Duis nisi reprehenderit aliquip officia deserunt velit elit proident qui anim non occaecat dolore ipsum. Ipsum exercitation dolor sint fugiat enim ad labore. Sint adipisicing nostrud ex adipisicing anim dolor. Aliqua velit minim minim adipisicing et ex amet.",
      "registered": "Sunday, July 5, 2015 4:01 PM",
      "latitude": "-45.083515",
      "longitude": "12.111289",
      "tags": [
        "deserunt",
        "consectetur",
        "exercitation",
        "excepteur",
        "culpa"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Tanisha Wilson"
        },
        {
          "id": 1,
          "name": "Dotson Bradford"
        },
        {
          "id": 2,
          "name": "Jacklyn Holman"
        }
      ],
      "greeting": "Hello, West! You have 10 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5eb16074f5c8eebd6861a13a",
      "index": 5,
      "guid": "031dd66d-646d-4995-95a0-a54e54b8d3ce",
      "isActive": false,
      "balance": "$2,375.33",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "blue",
      "name": {
        "first": "Vickie",
        "last": "Gregory"
      },
      "company": "ESCENTA",
      "email": "vickie.gregory@escenta.name",
      "phone": "+1 (822) 502-2539",
      "address": "233 Thatford Avenue, Bridgetown, Kentucky, 6556",
      "about": "Commodo reprehenderit non sunt aute aute. Tempor sint velit pariatur mollit. Mollit sint amet excepteur laboris eu incididunt in veniam ex non. Et eiusmod ipsum commodo voluptate eiusmod est deserunt adipisicing adipisicing qui sint aliqua irure. Do occaecat commodo officia fugiat quis ex amet tempor Lorem occaecat excepteur culpa mollit.",
      "registered": "Saturday, February 10, 2018 3:32 PM",
      "latitude": "-66.517388",
      "longitude": "62.571658",
      "tags": [
        "proident",
        "adipisicing",
        "voluptate",
        "ullamco",
        "consectetur"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sanford Gamble"
        },
        {
          "id": 1,
          "name": "Hoffman Robertson"
        },
        {
          "id": 2,
          "name": "Duke Dillard"
        }
      ],
      "greeting": "Hello, Vickie! You have 9 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5eb160743852123c2bccccb2",
      "index": 6,
      "guid": "b9f3fccc-3ae4-46cd-8e9b-afaea32d904a",
      "isActive": false,
      "balance": "$2,801.10",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "blue",
      "name": {
        "first": "Vasquez",
        "last": "Spears"
      },
      "company": "NEBULEAN",
      "email": "vasquez.spears@nebulean.info",
      "phone": "+1 (987) 569-2912",
      "address": "330 Monitor Street, Callaghan, Arkansas, 6529",
      "about": "Commodo ipsum do tempor sit non veniam incididunt quis nostrud et tempor nisi qui incididunt. Sint Lorem reprehenderit eiusmod non irure anim ea ullamco duis officia. Culpa ut elit nostrud anim dolor enim sit. Consectetur reprehenderit in exercitation veniam adipisicing et mollit labore magna. Exercitation est do mollit ullamco cupidatat non sint reprehenderit amet excepteur velit est cillum non.",
      "registered": "Sunday, May 17, 2015 8:34 PM",
      "latitude": "-77.307855",
      "longitude": "-62.388034",
      "tags": [
        "exercitation",
        "nisi",
        "excepteur",
        "consectetur",
        "reprehenderit"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Ernestine Herring"
        },
        {
          "id": 1,
          "name": "Hayes Wise"
        },
        {
          "id": 2,
          "name": "Fannie Cook"
        }
      ],
      "greeting": "Hello, Vasquez! You have 8 unread messages.",
      "favoriteFruit": "banana"
    }
  ]`
];

describe('lib.createMessagePayload', () => {
  const base = { foo: 'bar' };

  it('returns the base object if there is no message', () => {
    let payload = createMessagePayload(null, base);
    expect(payload).toStrictEqual(expect.objectContaining(base));
    expect(Object.keys(payload)).not.toContain('message');
    payload = createMessagePayload('', base);
    expect(payload).toStrictEqual(expect.objectContaining(base));
    expect(Object.keys(payload)).not.toContain('message');
  });

  it('should ignore an invalid json string', () => {
    let payload = createMessagePayload('abcdahs{]}[as', base);
    expect(payload).toStrictEqual(expect.objectContaining(base));
    expect(Object.keys(payload)).not.toContain('message');
  });

  it('should hydrate payload with "message" object if valid JSON string given', () => {
    for (let jsonString of jsonStrings) {
      let payload = createMessagePayload(jsonString, base);
      expect(payload).toStrictEqual(
        expect.objectContaining({ ...base, message: JSON.parse(jsonString) })
      );
    }
  });
});
