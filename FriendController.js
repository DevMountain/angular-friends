var app = angular.module('AngularFriends');
app.controller('FriendController', function($scope, $http){

  $scope.totalFriends = 0;
  $scope.friendFilter = {};
  $scope.orderReverse = "false";
  $scope.orderAttribute = 'name';


  ///////BLACK DIAMOND///////

  // STEP 3: Uncomment the below

  // $scope.searchAttrOptions = [
  //   { label: 'Name', value: 'name' },
  //   { label: '#Friends', value: 'friend_count' },
  //   { label: 'City', value: 'current_location.city' },
  //   { label: '#Friends', value: 'current_location.state' },
  //   { label: 'Country', value: 'current_location.country' }
  // ];


  $scope.friends = [
    {
      "name": "Naishi Zhang",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/174266_842841_1023237973_q.jpg",
      "current_location": {
        "city": "New York",
        "state": "New York",
        "country": "United States",
        "zip": "",
        "latitude": "40.7167",
        "longitude": "-74",
        "id": "108424279189115",
        "name": "New York, New York"
      },
      "status": null,
      "friend_count": null,
      "$$hashKey": "004"
    },
    {
      "name": "Preston McNeil",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg",
      "current_location": {
        "city": "Houston",
        "state": "Texas",
        "country": "United States",
        "zip": "",
        "latitude": "29.7629",
        "longitude": "-95.3832",
        "id": "115963528414384",
        "name": "Houston, Texas"
      },
      "status": null,
      "friend_count": 628,
      "$$hashKey": "005"
    },
    {
      "name": "Jeffrey Wu",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1076568_3415115_37205502_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1636,
      "$$hashKey": "006"
    },
    {
      "name": "Tyler Slater",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/276200_6023643_1692701653_q.jpg",
      "current_location": null,
      "status": {
        "message": "Thank you SO much for all the love and warm wishes today - 26 has some pretty incredible shoes to follow. So Much Love <3",
        "time": "1381036888",
        "status_id": "10102056502404551",
        "comment_count": "0"
      },
      "friend_count": 1288,
      "$$hashKey": "007"
    },
    {
      "name": "Ryan Rasmussen",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg",
      "current_location": {
        "city": "New York",
        "state": "New York",
        "country": "United States",
        "zip": "",
        "latitude": "40.7167",
        "longitude": "-74",
        "id": "108424279189115",
        "name": "New York, New York"
      },
      "status": null,
      "friend_count": 994,
      "$$hashKey": "008"
    },
    {
      "name": "Terri Ruff",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg",
      "current_location": {
        "city": "Sandy",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.5724",
        "longitude": "-111.86",
        "id": "105496622817769",
        "name": "Sandy, Utah"
      },
      "status": {
        "message": "Cannot wait for Hawaii! Excited to b away from work! I'm getting tired of all the drama!! Big news coming soon!!!",
        "time": "1381115766",
        "status_id": "10101839870247153",
        "comment_count": "0"
      },
      "friend_count": 268,
      "$$hashKey": "009"
    },
    {
      "name": "Lindsey Mayer",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 870,
      "$$hashKey": "00A"
    },
    {
      "name": "Brittney Greer",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1076709_10029066_1256668098_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 856,
      "$$hashKey": "00B"
    },
    {
      "name": "Jon Garcia",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/275936_10032456_514648534_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 636,
      "$$hashKey": "00C"
    },
    {
      "name": "Ken Obray",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1118482_10034518_1823844689_q.jpg",
      "current_location": {
        "city": "Mesa",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.415",
        "longitude": "-111.831",
        "id": "104069826296214",
        "name": "Mesa, Arizona"
      },
      "status": null,
      "friend_count": 676,
      "$$hashKey": "00D"
    },
    {
      "name": "Melynda Stock",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/370169_10036042_497757649_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1109,
      "$$hashKey": "00E"
    },
    {
      "name": "Ridhi Patel",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1116511_10037131_1542100919_q.jpg",
      "current_location": {
        "city": "Gilbert",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.35",
        "longitude": "-111.789",
        "id": "109449362414385",
        "name": "Gilbert, Arizona"
      },
      "status": null,
      "friend_count": 809,
      "$$hashKey": "00F"
    },
    {
      "name": "Shauna Searle Crittenden",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/274178_10042711_1761026673_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 669,
      "$$hashKey": "00G"
    },
    {
      "name": "Scott Owen",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1119172_10043120_1424174264_q.jpg",
      "current_location": {
        "city": "Gilbert",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.35",
        "longitude": "-111.789",
        "id": "109449362414385",
        "name": "Gilbert, Arizona"
      },
      "status": null,
      "friend_count": 803,
      "$$hashKey": "00H"
    },
    {
      "name": "Peter John Renslow",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1085700_10051596_890338133_q.jpg",
      "current_location": {
        "city": "West Lafayette",
        "state": "Indiana",
        "country": "United States",
        "zip": "",
        "latitude": "40.4419",
        "longitude": "-86.9124",
        "id": "112305682116972",
        "name": "West Lafayette, Indiana"
      },
      "status": {
        "message": "The movie Gravity: decent. The orbital mechanics in the movie Gravity: not so much.",
        "time": "1380945498",
        "status_id": "10102928220609321",
        "comment_count": "0"
      },
      "friend_count": 549,
      "$$hashKey": "00I"
    },
    {
      "name": "Chelsea Hatsumi",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1116400_10052063_60966606_q.jpg",
      "current_location": {
        "city": "Gilbert",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.35",
        "longitude": "-111.789",
        "id": "109449362414385",
        "name": "Gilbert, Arizona"
        },
      "status": {
        "message": "Birthday Dinner with the Twins!",
        "time": "1381199662",
        "status_id": "10102939519326601",
        "comment_count": "0"
      },
      "friend_count": 261,
      "$$hashKey": "00J"
    },
    {
      "name": "Craig Carroll",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/371702_10052664_1664842436_q.jpg",
      "current_location": {
        "city": "Tempe",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4294",
        "longitude": "-111.943",
        "id": "112887355389124",
        "name": "Tempe, Arizona"
      },
      "status": null,
      "friend_count": 249,
      "$$hashKey": "00K"
    },
    {
      "name": "Luke McInnis",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/624089_10052705_525706184_q.jpg",
      "current_location": {
        "city": "New York",
        "state": "New York",
        "country": "United States",
        "zip": "",
        "latitude": "40.7167",
        "longitude": "-74",
        "id": "108424279189115",
        "name": "New York, New York"
      },
      "status": null,
      "friend_count": 305,
      "$$hashKey": "00L"
    },
    {
      "name": "Kristin Kelly",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1115774_10053237_1899410393_q.jpg",
      "current_location": {
        "city": "Tulsa",
        "state": "Oklahoma",
        "country": "United States",
        "zip": "",
        "latitude": "36.1313",
        "longitude": "-95.9373",
        "id": "109436565740998",
        "name": "Tulsa, Oklahoma"
      },
      "status": {
        "message": "Been deep cleaning my place for the last 48 hours, it can only mean one thing - my moms coming to visit!!",
        "time": "1381243038",
        "status_id": "10102940961406661",
        "comment_count": "0"
      },
      "friend_count": 455,
      "$$hashKey": "00M"
    },
    {
      "name": "Jesse Morrison",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/623709_10053698_1875866361_q.jpg",
      "current_location": null,
      "status": {
        "message": "I'm pretty excited at the prospect of having the option for cold water out of the faucet. Not just turning it all the way to the right and getting \"less hot\" water",
        "time": "1380735264",
        "status_id": "10102919605598871",
        "comment_count": "0"
      },
      "friend_count": 393,
      "$$hashKey": "00N"
    },
    {
      "name": "Michelle Key",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/372639_10054231_314184666_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 928,
      "$$hashKey": "00O"
    },
    {
      "name": "Diana Lilly Mortensen",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/49452_10054427_795068813_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 638,
      "$$hashKey": "00P"
    },
    {
      "name": "Caitlin Yount",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1117749_10054603_442549192_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 415,
      "$$hashKey": "00Q"
    },
    {
      "name": "Thien Quoc Pham-Tran",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1117188_10054849_557573757_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 2631,
      "$$hashKey": "00R"
    },
    {
      "name": "Heikki Toivola",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/187404_10054874_760719176_q.jpg",
      "current_location": {
        "city": "Boston",
        "state": "Massachusetts",
        "country": "United States",
        "zip": "",
        "latitude": "42.3578",
        "longitude": "-71.0617",
        "id": "106003956105810",
        "name": "Boston, Massachusetts"
      },
      "status": {
        "message": "Feels good to be back in Arizona",
        "time": "1381165872",
        "status_id": "10102937707148221",
        "comment_count": "0"
      },
      "friend_count": 1016,
      "$$hashKey": "00S"
    },
    {
      "name": "Shane Murphy",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/203317_10054966_409869579_q.jpg",
      "current_location": {
        "city": "Phoenix",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4483",
        "longitude": "-112.074",
        "id": "105540216147364",
        "name": "Phoenix, Arizona"
      },
      "status": null,
      "friend_count": 377,
      "$$hashKey": "00T"
    },
    {
      "name": "Amber Collins",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/211898_10055355_1461773508_q.jpg",
      "current_location": {
        "city": "Gilbert",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.35",
        "longitude": "-111.789",
        "id": "109449362414385",
        "name": "Gilbert, Arizona"
      },
      "status": null,
      "friend_count": 192,
      "$$hashKey": "00U"
    },
    {
      "name": "Rob Jensen",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/368962_10055717_1412703029_q.jpg",
      "current_location": {
        "city": "Clarksville",
        "state": "Tennessee",
        "country": "United States",
        "zip": "",
        "latitude": "36.5297",
        "longitude": "-87.3592",
        "id": "108534305837795",
        "name": "Clarksville, Tennessee"
      },
      "status": null,
      "friend_count": 184,
      "$$hashKey": "00V"
    },
    {
      "name": "Jeremy Tam",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/203195_10056580_1503800461_q.jpg",
      "current_location": {
        "city": "Tempe",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4294",
        "longitude": "-111.943",
        "id": "112887355389124",
        "name": "Tempe, Arizona"
      },
      "status": null,
      "friend_count": 601,
      "$$hashKey": "00W"
    },
    {
      "name": "Kiara Williams",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1118501_10056586_115764842_q.jpg",
      "current_location": {
        "city": "Tempe",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4294",
        "longitude": "-111.943",
        "id": "112887355389124",
        "name": "Tempe, Arizona"
      },
      "status": {
        "message": "What's important in life? What's important in love?",
        "time": "1381196088",
        "status_id": "10102939317251561",
        "comment_count": "0"
      },
      "friend_count": 526,
      "$$hashKey": "00X"
    },
    {
      "name": "Diana McNeely",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/368626_10057866_1247354717_q.jpg",
      "current_location": {
        "city": "Tempe",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4294",
        "longitude": "-111.943",
        "id": "112887355389124",
        "name": "Tempe, Arizona"
      },
      "status": null,
      "friend_count": 261,
      "$$hashKey": "00Y"
    },
    {
      "name": "Steven Needham",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/174156_10119787_1826399146_q.jpg",
      "current_location": {
        "city": "Gilbert",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.35",
        "longitude": "-111.789",
        "id": "109449362414385",
        "name": "Gilbert, Arizona"
      },
      "status": null,
      "friend_count": 387,
      "$$hashKey": "00Z"
    },
    {
      "name": "Lindsey Ishikiwi",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1117656_10123294_227608525_q.jpg",
      "current_location": {
        "city": "Phoenix",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4483",
        "longitude": "-112.074",
        "id": "105540216147364",
        "name": "Phoenix, Arizona"
      },
      "status": {
        "message": "I love yoga...hiking not as much. At least it was with good company Mike James",
        "time": "1381254490",
        "status_id": "10102250529407922",
        "comment_count": "0"
      },
      "friend_count": 614,
      "$$hashKey": "010"
    },
    {
      "name": "Abe Itty",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/161103_10123983_1859311604_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1427,
      "$$hashKey": "011"
    },
    {
      "name": "Alysha Martella",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/572941_10133321_1547143231_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1174,
      "$$hashKey": "012"
    },
    {
      "name": "Ken Peng",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/49592_10133832_1627020292_q.jpg",
      "current_location": {
        "city": "Tucson",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "32.2217",
        "longitude": "-110.926",
        "id": "109570449061083",
        "name": "Tucson, Arizona"
      },
      "status": null,
      "friend_count": 376,
      "$$hashKey": "013"
    },
    {
      "name": "Ariel Michal Cooper",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1076928_10134964_1765888376_q.jpg",
      "current_location": {
        "city": "Pullman",
        "state": "Washington",
        "country": "United States",
        "zip": "",
        "latitude": "46.7326",
        "longitude": "-117.172",
        "id": "105722109462353",
        "name": "Pullman, Washington"
      },
      "status": {
        "message": "Cleaning my apartment, and the cats are \"helping\" (meaning Loki is underfoot no matter where I go and Sedona has decided that my new bathmat is actually a bed for her).",
        "time": "1380929808",
        "status_id": "10102241893319712",
        "comment_count": "0"
      },
      "friend_count": 496,
      "$$hashKey": "014"
    },
    {
      "name": "Ashley Parks",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/274600_10134991_126424056_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 560,
      "$$hashKey": "015"
    },
    {
      "name": "Alexandra Rodriguez",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1085745_10135319_1312034024_q.jpg",
      "current_location": {
        "city": "Phoenix",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4483",
        "longitude": "-112.074",
        "id": "105540216147364",
        "name": "Phoenix, Arizona"
      },
      "status": {
        "message": "I wish my belongings would just jump into the boxes themselves. Moving is the worst.",
        "time": "1381195258",
        "status_id": "10102249042288122",
        "comment_count": "0"
      },
      "friend_count": 612,
      "$$hashKey": "016"
    },
    {
      "name": "Zaynah Chowdhury",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1076494_10135600_1337893454_q.jpg",
      "current_location": {
        "city": "Baltimore",
        "state": "Maryland",
        "country": "United States",
        "zip": "",
        "latitude": "39.2833",
        "longitude": "-76.6167",
        "id": "112438218775062",
        "name": "Baltimore, Maryland"
      },
      "status": null,
      "friend_count": null,
      "$$hashKey": "017"
    },
    {
      "name": "Jeffrey Bacigalupo",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/573665_10136184_450366059_q.jpg",
      "current_location": {
        "city": "Tucson",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "32.2217",
        "longitude": "-110.926",
        "id": "109570449061083",
        "name": "Tucson, Arizona"
      },
      "status": null,
      "friend_count": 678,
      "$$hashKey": "018"
    },
    {
      "name": "Heidi Kum",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1118630_10136809_2014251702_q.jpg",
      "current_location": null,
      "status": {
        "message": "East coast bound! Bai bai AZ! See you!",
        "time": "1380748266",
        "status_id": "10102236885864692",
        "comment_count": "0"
      },
      "friend_count": 205,
      "$$hashKey": "019"
    },
    {
      "name": "Ashley Grill",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/274600_10137084_1868352607_q.jpg",
      "current_location": {
        "city": "Wasilla",
        "state": "Alaska",
        "country": "United States",
        "zip": "",
        "latitude": "61.5817",
        "longitude": "-149.453",
        "id": "105575526141581",
        "name": "Wasilla, Alaska"
      },
      "status": {
        "message": "When you forget you have a migraine because the rest of your body is in agony...  Yay for PFD and a crazy night at work!",
        "time": "1380873890",
        "status_id": "10102240468789482",
        "comment_count": "0"
      },
      "friend_count": 345,
      "$$hashKey": "01A"
    },
    {
      "name": "Kristen Frederick-Cooke",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/49217_10137468_804893829_q.jpg",
      "current_location": {
        "city": "Queen Creek",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.2405",
        "longitude": "-111.643",
        "id": "111784395504917",
        "name": "Queen Creek, Arizona"
      },
      "status": {
        "message": "Oh just going to go lay in the beach, no big deal.",
        "time": "1381081080",
        "status_id": "10102245433819522",
        "comment_count": "0"
      },
      "friend_count": 268,
      "$$hashKey": "01B"
    },
    {
      "name": "Tamra Kasprzyk",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/623547_10137534_1270054831_q.jpg",
      "current_location": {
        "city": "Tucson",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "32.2217",
        "longitude": "-110.926",
        "id": "109570449061083",
        "name": "Tucson, Arizona"
      },
      "status": null,
      "friend_count": 932,
      "$$hashKey": "01C"
    },
    {
      "name": "John Dohyung Kwon",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif",
      "current_location": null,
      "status": null,
      "friend_count": 79,
      "$$hashKey": "01D"
    },
    {
      "name": "Liesl Burger",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/157211_10139116_1243165938_q.jpg",
      "current_location": {
        "city": "Gilbert",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.35",
        "longitude": "-111.789",
        "id": "109449362414385",
        "name": "Gilbert, Arizona"
      },
      "status": null,
      "friend_count": 412,
      "$$hashKey": "01E"
    },
    {
      "name": "Jenna Leigh Crawford",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/195560_10139349_1963255125_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 579,
      "$$hashKey": "01F"
    },
    {
      "name": "Jennifer Hubbard",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/371357_10139397_341390789_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 73,
      "$$hashKey": "01G"
    },
    {
      "name": "Stephanie Balliet",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1076696_10140157_1355928606_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 160,
      "$$hashKey": "01H"
    },
    {
      "name": "Drew Ignatowski",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1086568_10141103_706164711_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 783,
      "$$hashKey": "01I"
    },
    {
      "name": "Ekta Bajaj",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/369857_10515012_1641641242_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 815,
      "$$hashKey": "01J"
    },
    {
      "name": "Tyler Owens",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/369714_11610127_889424575_q.jpg",
      "current_location": {
        "city": "Pomona",
        "state": "California",
        "country": "United States",
        "zip": "",
        "latitude": "34.0608",
        "longitude": "-117.756",
        "id": "112639765414430",
        "name": "Pomona, California"
      },
      "status": null,
      "friend_count": 968,
      "$$hashKey": "01K"
    },
    {
      "name": "Lauren Skidmore",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/211527_17800019_875679369_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 536,
      "$$hashKey": "01L"
    },
    {
      "name": "Dan Sullivan",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/273289_17800762_306073823_q.jpg",
      "current_location": {
        "city": "Cambridge",
        "state": "Massachusetts",
        "country": "United States",
        "zip": "",
        "latitude": "42.3737",
        "longitude": "-71.1106",
        "id": "108056275889020",
        "name": "Cambridge, Massachusetts"
      },
      "status": null,
      "friend_count": 527,
      "$$hashKey": "01M"
    },
    {
      "name": "Christopher Koontz",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1119103_17801029_636045982_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 634,
      "$$hashKey": "01N"
    },
    {
      "name": "Cynthia Lew",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/370322_17801607_164727745_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 1090,
      "$$hashKey": "01O"
    },
    {
      "name": "Chad Bennett",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/372513_17802226_425948030_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1885,
      "$$hashKey": "01P"
    },
    {
      "name": "Kirk Hill",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/41374_17802872_794_q.jpg",
      "current_location": {
        "city": "Pearland",
        "state": "Texas",
        "country": "United States",
        "zip": "",
        "latitude": "29.5543",
        "longitude": "-95.296",
        "id": "109297442421359",
        "name": "Pearland, Texas"
      },
      "status": null,
      "friend_count": 185,
      "$$hashKey": "01Q"
    },
    {
      "name": "Joseph 'Moses' Craven",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/372074_17803104_1870588520_q.jpg",
      "current_location": {
        "city": "Ardmore",
        "state": "Oklahoma",
        "country": "United States",
        "zip": "",
        "latitude": "34.1812",
        "longitude": "-97.1294",
        "id": "107705532592043",
        "name": "Ardmore, Oklahoma"
      },
      "status": null,
      "friend_count": 708,
      "$$hashKey": "01R"
    },
    {
      "name": "Jonathan Brimhall",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/573443_17803154_1661109279_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": {
        "message": "Who wants a massage for $12.50 early tomorrow?  Text me at 801 427 6388.",
        "time": "1380948862",
        "status_id": "10101097271431229",
        "comment_count": "0"
      },
      "friend_count": 1971,
      "$$hashKey": "01S"
    },
    {
      "name": "Rachel Smith",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/368962_17805150_1247633617_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 322,
      "$$hashKey": "01T"
    },
    {
      "name": "Jeremy James",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/261035_17806007_1068091327_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 555,
      "$$hashKey": "01U"
    },
    {
      "name": "Melanie Hogg Barber",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/161600_17806124_1521574_q.jpg",
      "current_location": {
        "city": "Snoqualmie",
        "state": "Washington",
        "country": "United States",
        "zip": "",
        "latitude": "47.5329",
        "longitude": "-121.844",
        "id": "112518328764079",
        "name": "Snoqualmie, Washington"
      },
      "status": null,
      "friend_count": 1020,
      "$$hashKey": "01V"
    },
    {
      "name": "Heather Clouse",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/623637_17808188_847129617_q.jpg",
      "current_location": {
        "city": "Orem",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2988",
        "longitude": "-111.696",
        "id": "103787786326610",
        "name": "Orem, Utah"
      },
      "status": {
        "message": "Last night I had a dream that my mother-in-law Angie Clouse unexpectedly stopped by my house and gave me a cleaning to do list.  Apparently it is time to clean my bathroom.",
        "time": "1380826754",
        "status_id": "10101094816311309",
        "comment_count": "0"
      },
      "friend_count": 366,
      "$$hashKey": "01W"
    },
    {
      "name": "Matt Olson",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/187330_17808503_965029476_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 984,
      "$$hashKey": "01X"
    },
    {
      "name": "Jeff Schwarting",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/369193_17808584_1554107726_q.jpg",
      "current_location": {
          "city": "Provo",
          "state": "Utah",
          "country": "United States",
          "zip": "",
          "latitude": "40.2444",
          "longitude": "-111.661",
          "id": "106066949424984",
          "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 1318,
      "$$hashKey": "01Y"
    },
    {
      "name": "Eric Ringer",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/273770_17809149_284178055_q.jpg",
      "current_location": {
        "city": "San Francisco",
        "state": "California",
        "country": "United States",
        "zip": "",
        "latitude": "37.7793",
        "longitude": "-122.419",
        "id": "114952118516947",
        "name": "San Francisco, California"
      },
      "status": null,
      "friend_count": 870,
      "$$hashKey": "01Z"
    },
    {
      "name": "Katie Younger",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/276356_17809172_1691769781_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1745,
      "$$hashKey": "020"
    },
    {
      "name": "Jesse Moore",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/369992_17809492_77803291_q.jpg",
      "current_location": {
        "city": "Salt Lake City",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.75",
        "longitude": "-111.883",
        "id": "106057819434480",
        "name": "Salt Lake City, Utah"
      },
      "status": null,
      "friend_count": 991,
      "$$hashKey": "021"
    },
    {
      "name": "Jake Brandenburg",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1085875_17809507_2124757497_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 2012,
      "$$hashKey": "022"
    },
    {
      "name": "Scott Woodland",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1086424_17809662_272706518_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 1590,
      "$$hashKey": "023"
    },
    {
      "name": "Sarah McCormick",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1083106_17809770_2137663451_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 825,
      "$$hashKey": "024"
    },
    {
      "name": "Bryson Jones",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1117647_17810630_1978112669_q.jpg",
      "current_location": {
        "city": "Mesa",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.415",
        "longitude": "-111.831",
        "id": "104069826296214",
        "name": "Mesa, Arizona"
      },
      "status": null,
      "friend_count": 1268,
      "$$hashKey": "025"
    },
    {
      "name": "Zac Oleskey",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/370109_17810875_1465730253_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 423,
      "$$hashKey": "026"
    },
    {
      "name": "Joel Gardner",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/275556_17811336_577754819_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 518,
      "$$hashKey": "027"
    },
    {
      "name": "Cary Crall",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/371717_17813291_554362820_q.jpg",
      "current_location": {
        "city": "Cambridge",
        "state": "Massachusetts",
        "country": "United States",
        "zip": "",
        "latitude": "42.3737",
        "longitude": "-71.1106",
        "id": "108056275889020",
        "name": "Cambridge, Massachusetts"
      },
      "status": null,
      "friend_count": 1963,
      "$$hashKey": "028"
    },
    {
      "name": "Lance Winward",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/161188_17813334_4416158_q.jpg",
      "current_location": {
        "city": "American Fork",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.3842",
        "longitude": "-111.792",
        "id": "105675929465006",
        "name": "American Fork, Utah"
      },
      "status": null,
      "friend_count": 482,
      "$$hashKey": "029"
    },
    {
      "name": "Tierra Jones",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/173975_17813822_675974818_q.jpg",
      "current_location": {
        "city": "Mesa",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.415",
        "longitude": "-111.831",
        "id": "104069826296214",
        "name": "Mesa, Arizona"
      },
      "status": null,
      "friend_count": 990,
      "$$hashKey": "02A"
    },
    {
      "name": "JD Clark",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/276075_17814064_647271890_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": {
        "message": "Internet, why you so distracting?? Stahhp",
        "time": "1381246997",
        "status_id": "10101102301306319",
        "comment_count": "0"
      },
      "friend_count": 665,
      "$$hashKey": "02B"
    },
    {
      "name": "Spencer Mooso",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1076291_17814202_641324374_q.jpg",
      "current_location": {
        "city": "Lehi",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.4017",
        "longitude": "-111.859",
        "id": "105988932766243",
        "name": "Lehi, Utah"
      },
      "status": null,
      "friend_count": 579,
      "$$hashKey": "02C"
    },
    {
      "name": "Jordan Wight",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/371034_17814298_125482991_q.jpg",
      "current_location": {
        "city": "San Francisco",
        "state": "California",
        "country": "United States",
        "zip": "",
        "latitude": "37.7793",
        "longitude": "-122.419",
        "id": "114952118516947",
        "name": "San Francisco, California"
      },
      "status": null,
      "friend_count": 828,
      "$$hashKey": "02D"
    },
    {
      "name": "Corinne Kennard McCleve",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/623860_17814395_733221483_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 1026,
      "$$hashKey": "02E"
    },
    {
      "name": "Andrew Wiggins",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/186785_17814602_1643545710_q.jpg",
      "current_location": {
        "city": "Salt Lake City",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.75",
        "longitude": "-111.883",
        "id": "106057819434480",
        "name": "Salt Lake City, Utah"
      },
      "status": null,
      "friend_count": 658,
      "$$hashKey": "02F"
    },
    {
      "name": "Brittany Brown",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/276284_17814624_766798593_q.jpg",
      "current_location": null,
      "status": {
        "message": "Any of my wondeful friends know how to change a water pump on a ford explorer?? :) I will pay and provide delicious treats",
        "time": "1381104137",
        "status_id": "10101099840792209",
        "comment_count": "0"
      },
      "friend_count": 690,
      "$$hashKey": "02G"
    },
    {
      "name": "Nick Petersen",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/202884_17814683_300937051_q.jpg",
      "current_location": {
        "city": "Jupiter",
        "state": "Florida",
        "country": "United States",
        "zip": "",
        "latitude": "26.926",
        "longitude": "-80.105",
        "id": "109307099087536",
        "name": "Jupiter, Florida"
      },
      "status": {
        "message": "Very grateful for the wisdom shared during the conferences of the church #ldsgeneralconference",
        "time": "1381031808",
        "status_id": "10101098585343139",
        "comment_count": "0"
      },
      "friend_count": 707,
      "$$hashKey": "02H"
    },
    {
      "name": "Jeffrey Swindle",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/211601_17815112_1710482679_q.jpg",
      "current_location": {
        "city": "Ann Arbor",
        "state": "Michigan",
        "country": "United States",
        "zip": "",
        "latitude": "42.2745",
        "longitude": "-83.7393",
        "id": "105479049486624",
        "name": "Ann Arbor, Michigan"
      },
      "status": null,
      "friend_count": 1167,
      "$$hashKey": "02I"
    },
    {
      "name": "Rachel Dodge",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1115721_17815285_836073507_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1030,
      "$$hashKey": "02J"
    },
    {
      "name": "Jeffrey Schwicht",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/70352_17815829_1080602833_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 529,
      "$$hashKey": "02K"
    },
    {
      "name": "Brady Toone",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1076481_17815953_1169237219_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1610,
      "$$hashKey": "02L"
    },
    {
      "name": "Travis Epperson",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/187078_17816042_3304316_q.jpg",
      "current_location": {
        "city": "Phoenix",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.4483",
        "longitude": "-112.074",
        "id": "105540216147364",
        "name": "Phoenix, Arizona"
      },
      "status": null,
      "friend_count": null,
      "$$hashKey": "02M"
    },
    {
      "name": "Dave McClure",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/27416_17816719_71_q.jpg",
      "current_location": {
        "city": "Ann Arbor",
        "state": "Michigan",
        "country": "United States",
        "zip": "",
        "latitude": "42.2745",
        "longitude": "-83.7393",
        "id": "105479049486624",
        "name": "Ann Arbor, Michigan"
      },
      "status": null,
      "friend_count": 757,
      "$$hashKey": "02N"
    },
    {
      "name": "Braden Price",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1116428_17816878_1524556457_q.jpg",
      "current_location": {
        "city": "Glendale",
        "state": "Arizona",
        "country": "United States",
        "zip": "",
        "latitude": "33.5386",
        "longitude": "-112.186",
        "id": "104002769637127",
        "name": "Glendale, Arizona"
      },
      "status": null,
      "friend_count": 1034,
      "$$hashKey": "02O"
    },
    {
      "name": "Matt LeGare",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/195517_17816894_384186_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 350,
      "$$hashKey": "02P"
    },
    {
      "name": "Eric Newman",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/1116389_17817228_2101033085_q.jpg",
      "current_location": {
        "city": "Elk Ridge",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.0156",
        "longitude": "-111.682",
        "id": "107571982605958",
        "name": "Elk Ridge, Utah"
      },
      "status": null,
      "friend_count": 252,
      "$$hashKey": "02Q"
    },
    {
      "name": "Kiku Reidhead",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/186911_17817251_333817448_q.jpg",
      "current_location": {
        "city": "Portland",
        "state": "Oregon",
        "country": "United States",
        "zip": "",
        "latitude": "45.52",
        "longitude": "-122.682",
        "id": "112548152092705",
        "name": "Portland, Oregon"
      },
      "status": null,
      "friend_count": 1159,
      "$$hashKey": "02R"
    },
    {
      "name": "Mika Sawada Permenter",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/572551_17817871_925717657_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 1336,
      "$$hashKey": "02S"
    },
    {
      "name": "Kris Paries",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/211537_17818211_1480110961_q.jpg",
      "current_location": {
        "city": "Provo",
        "state": "Utah",
        "country": "United States",
        "zip": "",
        "latitude": "40.2444",
        "longitude": "-111.661",
        "id": "106066949424984",
        "name": "Provo, Utah"
      },
      "status": null,
      "friend_count": 1068,
      "$$hashKey": "02T"
    },
    {
      "name": "Karla Jensen Pratt",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/173707_17818839_4084230_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 855,
      "$$hashKey": "02U"
    },
    {
      "name": "Scott Weinert",
      "pic_square": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/370359_17819953_1819531589_q.jpg",
      "current_location": null,
      "status": null,
      "friend_count": 986,
      "$$hashKey": "02V"
    }
  ];

});
