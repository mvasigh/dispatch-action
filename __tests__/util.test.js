const util = require('../src/util');

const testJSON = [
  `[
    {
      "_id": "5e721cbc685c4d50c9aa7374",
      "index": 0,
      "guid": "3a400525-4ec2-481f-a035-8884de455447",
      "isActive": true,
      "balance": "$2,899.20",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "brown",
      "name": "Fern Baldwin",
      "gender": "female",
      "company": "KYAGURU",
      "email": "fernbaldwin@kyaguru.com",
      "phone": "+1 (812) 465-2968",
      "address": "760 Bragg Street, Onton, Hawaii, 6244",
      "about": "Qui excepteur eiusmod laboris velit mollit elit dolor elit sunt id aliqua laborum minim. Fugiat velit ut aliquip mollit incididunt eu consectetur quis dolore eu do aliqua eu. Veniam aliqua deserunt qui eu aute consectetur dolor cupidatat do cupidatat. Consectetur et nulla ipsum Lorem pariatur consequat excepteur consectetur tempor consectetur Lorem qui.\r\n",
      "registered": "2014-07-23T11:22:39 +05:00",
      "latitude": 76.685454,
      "longitude": 137.826967,
      "tags": [
        "elit",
        "id",
        "esse",
        "adipisicing",
        "ad",
        "velit",
        "laboris"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Roberson Good"
        },
        {
          "id": 1,
          "name": "Powers Head"
        },
        {
          "id": 2,
          "name": "Sanchez Vega"
        }
      ],
      "greeting": "Hello, Fern Baldwin! You have 1 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5e721cbc3f2de5c8527c1cbb",
      "index": 1,
      "guid": "22d985fa-7cd1-49a1-9500-601175d7d855",
      "isActive": true,
      "balance": "$2,321.52",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "green",
      "name": "Dominique Delacruz",
      "gender": "female",
      "company": "ZYTREK",
      "email": "dominiquedelacruz@zytrek.com",
      "phone": "+1 (816) 561-2345",
      "address": "843 Greene Avenue, Talpa, New Mexico, 844",
      "about": "Consectetur esse excepteur ea voluptate. Duis cupidatat magna ex quis veniam est quis tempor do in. Aute aute minim duis pariatur reprehenderit consequat nostrud fugiat incididunt sit anim occaecat ullamco adipisicing. Minim irure duis incididunt nulla ex qui reprehenderit ut sit veniam sint sunt. Eiusmod nulla ea amet deserunt culpa culpa elit culpa sunt. Aute irure duis commodo consectetur Lorem.\r\n",
      "registered": "2015-08-20T06:41:45 +05:00",
      "latitude": -77.050386,
      "longitude": 67.319669,
      "tags": [
        "eu",
        "exercitation",
        "amet",
        "sint",
        "nisi",
        "exercitation",
        "eiusmod"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Daniel Gilmore"
        },
        {
          "id": 1,
          "name": "Donaldson Madden"
        },
        {
          "id": 2,
          "name": "Marianne Saunders"
        }
      ],
      "greeting": "Hello, Dominique Delacruz! You have 5 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5e721cbcb40b27142742f580",
      "index": 2,
      "guid": "79b8ec18-cbb4-4b6c-8ca2-653c33790000",
      "isActive": false,
      "balance": "$1,435.67",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "brown",
      "name": "Marietta Davenport",
      "gender": "female",
      "company": "KOFFEE",
      "email": "mariettadavenport@koffee.com",
      "phone": "+1 (887) 582-3707",
      "address": "339 Gunther Place, Chloride, Michigan, 1622",
      "about": "Anim do ad ea fugiat. Qui occaecat veniam cillum sunt est pariatur officia. Deserunt aliqua cillum enim ex sunt nostrud proident. Duis cupidatat in eiusmod nostrud occaecat enim nulla nostrud sunt. Ad laborum cillum nulla deserunt. Voluptate consectetur reprehenderit tempor duis excepteur occaecat ut aliqua anim duis elit.\r\n",
      "registered": "2017-05-10T04:18:24 +05:00",
      "latitude": 16.131948,
      "longitude": -120.871274,
      "tags": [
        "Lorem",
        "consequat",
        "quis",
        "sit",
        "ad",
        "aute",
        "ad"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Jones Bruce"
        },
        {
          "id": 1,
          "name": "Holcomb Abbott"
        },
        {
          "id": 2,
          "name": "Whitfield Cline"
        }
      ],
      "greeting": "Hello, Marietta Davenport! You have 7 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5e721cbc6f424b792642da34",
      "index": 3,
      "guid": "af326674-ed92-4d6b-99d8-db4835cb4fc8",
      "isActive": true,
      "balance": "$1,467.61",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": "Hobbs Reyes",
      "gender": "male",
      "company": "ZILODYNE",
      "email": "hobbsreyes@zilodyne.com",
      "phone": "+1 (810) 571-2159",
      "address": "191 Will Place, Bentley, Arizona, 8728",
      "about": "Nulla proident enim cupidatat excepteur. Officia fugiat qui duis duis proident commodo ipsum voluptate tempor. Non laborum officia sit eiusmod cupidatat elit. Nostrud labore nisi deserunt ipsum. Velit commodo enim laborum et non culpa nulla et. Esse incididunt ipsum ut fugiat veniam commodo. Enim irure deserunt amet id.\r\n",
      "registered": "2016-07-01T11:48:46 +05:00",
      "latitude": 85.918105,
      "longitude": -2.269154,
      "tags": [
        "fugiat",
        "minim",
        "ut",
        "qui",
        "do",
        "id",
        "fugiat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Allen Haynes"
        },
        {
          "id": 1,
          "name": "Rivers Rivers"
        },
        {
          "id": 2,
          "name": "Lynn Robinson"
        }
      ],
      "greeting": "Hello, Hobbs Reyes! You have 3 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5e721cbc5f53e81f8b843f46",
      "index": 4,
      "guid": "abf5247f-68cc-48ac-90a1-ce9f3b8b52af",
      "isActive": true,
      "balance": "$1,591.76",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "blue",
      "name": "Chan Hyde",
      "gender": "male",
      "company": "VERTON",
      "email": "chanhyde@verton.com",
      "phone": "+1 (800) 484-3294",
      "address": "880 Royce Street, Bannock, North Carolina, 1094",
      "about": "Dolore excepteur ad culpa amet adipisicing. Consectetur minim exercitation excepteur ullamco minim labore. Laboris ullamco consequat culpa amet mollit ut dolore tempor officia consequat in. Magna aute mollit pariatur ipsum officia velit laborum tempor ipsum sunt ut. Enim ullamco nisi eiusmod cupidatat adipisicing mollit incididunt nisi voluptate magna. Consectetur irure eiusmod anim ullamco elit ex labore fugiat nostrud sint.\r\n",
      "registered": "2017-05-01T09:42:03 +05:00",
      "latitude": -76.799257,
      "longitude": -87.406676,
      "tags": [
        "eu",
        "aliqua",
        "aliqua",
        "Lorem",
        "sunt",
        "ipsum",
        "enim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sparks Wiggins"
        },
        {
          "id": 1,
          "name": "Acevedo Browning"
        },
        {
          "id": 2,
          "name": "Tessa Castillo"
        }
      ],
      "greeting": "Hello, Chan Hyde! You have 1 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ]`,
  `{
    "foo": "bar",
    "multiline": "
      Testing a multiline JSON string
    ",
    "baz": 1234
  }`,
  `{
    "uyilZ9pB": [
      [
        -216754679.12672853,
        false,
        true,
        "In",
        -1553062391,
        "<v"
      ],
      "}xiK=",
      false,
      "^%uoP60",
      true,
      "]3NG"
    ],
    "K": false,
    "yVxL>^z&": "v;je_ql6,",
    "": "-a(]",
    "HOP*wM);j": -1525655900.7307467,
    "$H": true
  }`,
  `[
  [
    "oUM<Bz",
    [
      "",
      true,
      1777001001,
      -1658216176,
      false,
      -1938909051.0543814
    ],
    "/$:H",
    true,
    -358178661,
    true
    ],
    false,
    true,
    true,
    false,
    -817989275.56283
  ]`
];

test('minifyJSON', () => {
  for (let input of testJSON) {
    const minified = util.minifyJSON(input);
    expect(JSON.parse(minified)).toBeTruthy();
  }
});
