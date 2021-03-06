//import angular from 'angular';
//import angularMeteor from 'angular-meteor';

import { Accounts } from 'meteor/accounts-base';
import { Resources } from '../imports/api/resources.js';
import { Comments } from '../imports/api/comments.js';
import '../imports/api/images/images.js';



Accounts.onCreateUser(function(options,user) {

  user.userXP = 0;
  Meteor.users.update(user, {

  });

  return user;
})

Resources.allow({
  insert: function(userId, doc) {
    return true;
  }
})


Meteor.publish('userXP', function () {
  if(!this.userId) return null;

  return Meteor.users.find(this.userId, {fields: {'userXP': 1,}});
});

Meteor.publish('favoritedResources', function () {
  if(!this.userId) return null;

  return Meteor.users.find(this.userId, {fields: {'favoritedResources': 1,}});
});

Meteor.publish('favoriteObjects', function () {
/*  if(!this.userId) return null;
  var favorites = [];
  var fResources = Meteor.users.find(this.userId, {fields: {'favoritedResources': 1,}}),

  for(var i=0; i<fResources.length; i++) {
    var obj = Resources.find({_id: fResources[i]});
    console.log("resourceID " + fResources[i]);
    console.log(obj);
    favorites.push(obj);
  }

  console.log(favorites);
  return favorites;*/
});

Meteor.publish('resources', function () {
  //if(!this.userId) return null;  //move this... somewhere else
  return Resources.find({});
});

if(Comments.find().count() === 0) {
  console.log("comments db empty");
  var data1 = [
    {
      "ResourceID": ""
      ,"Resource_Title": "Minecraft"
      ,"Author": "Mollie Harms"
      ,"Title": "Amazing with the right direction"
      ,"Body": "test"
      ,"Created_On": "09/09/2016"
      ,"Comment_Rating": "5"
      ,"Prep_Time": "3"
      ,"Differentiated_Instruction": "5"
      ,"End_Comprehension": "4"
      ,"Applicability": "5"
    },
    {
      "ResourceID": ""
      ,"Resource_Title": "Minecraft"
      ,"Author": "Mollie Harms"
      ,"Title": "Amazing with the right direction"
      ,"Body": "test"
      ,"Created_On": "09/09/2016"
      ,"Comment_Rating": "5"
      ,"Prep_Time": "3"
      ,"Differentiated_Instruction": "5"
      ,"End_Comprehension": "4"
      ,"Applicability": "5"
    },
    {
      "ResourceID": ""
      ,"Resource_Title": "Minecraft"
      ,"Author": "Mollie Harms"
      ,"Title": "Amazing with the right direction"
      ,"Body": "test"
      ,"Created_On": "09/09/2016"
      ,"Comment_Rating": "5"
      ,"Prep_Time": "3"
      ,"Differentiated_Instruction": "5"
      ,"End_Comprehension": "4"
      ,"Applicability": "5"
    },
    {
      "ResourceID": ""
      ,"Resource_Title": "Minecraft"
      ,"Author": "Mollie Harms"
      ,"Title": "Amazing with the right direction"
      ,"Body": "test"
      ,"Created_On": "09/09/2016"
      ,"Comment_Rating": "5"
      ,"Prep_Time": "3"
      ,"Differentiated_Instruction": "5"
      ,"End_Comprehension": "4"
      ,"Applicability": "5"
    }
  ];

  for(var i=0; i<data1.length; i++) {
    Comments.insert(data1[i]);
  }
}


if(Resources.find().count() === 0) {
  console.log("mongo db empty");
  var data = [
  {
     "Type":"Video Game"
    ,"Title":"Concussion Game"
    ,"Location":"https://www.superbetter.com/"
    ,"Platform":"iOS, Android"
    ,"Recommended_Ages":"All Ages"
    ,"Summary":""
    ,"Description":"SuperBetter increases resilience - the ability to stay strong, motivated and optimistic even in the face of difficult obstacles. Playing SuperBetter makes you more capable of getting through any tough situation—and more likely to achieve the goals that matter most to you. Proven results in just 10 minutes a day."
    ,"Subjects":""
    ,"Image":"temp-resources/minecraft_5.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
  },
  {
     "Type":"Videos"
    ,"Title":"The Great Courses"
    ,"Location":"http://www.thegreatcourses.com/"
    ,"Platform":"Website"
    ,"Recommended_Ages":"Adult"
    ,"Summary":""
    ,"Description":""
    ,"Subjects":""
    ,"Image":"temp-resources/minecraft_5.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
  },
  {
     "Type":"Video Game"
    ,"Title":"Gambit Labs"
    ,"Location":"http://gambit.mit.edu/index.php"
    ,"Platform":"PC"
    ,"Recommended_Ages":"All Ages"
    ,"Summary":"There are tons here, need to be broken out individually"
    ,"Description":""
    ,"Subjects":""
    ,"Image":"temp-resources/minecraft_5.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Minecraft"
    ,"Location":"http://education.minecraft.net/"
    ,"Platform":"PC"
    ,"Recommended_Ages":"All Ages"
    ,"Summary":"Minecraft encourages millions of players to create, explore, and discover. We want to bring that passion into the classroom. Join us as we create a Minecraft built for learning"
    ,"Description":""
    ,"Subjects":""
    ,"Image":"temp-resources/minecraft_5.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"ScribbleNauts"
    ,"Location":""
    ,"Platform":"3DS, Wii U, PC"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":""
    ,"Description":"5th Cell takes a step forward towards creating a balance between education and Video Gameplay with Scribblenauts. The puzzle game makes an attempt to expand your vocabulary by encouraging you to use different words to solve things, but it also has a cutesy, gamer-y element of using those words in a video game manner. We haven’t seen something like that since the typing games of old like Mavis Beacon, who blend game activities with letter-typing reflex."
    ,"Subjects":"English, Art"
    ,"Image":"temp-resources/scribblenauts-unlimited-wii-u-screenshot-2.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Oregon Trail"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 3-6"
    ,"Summary":"A PC game where students travel and experience the difficulties of travelling the Oregon Trail"
    ,"Description":"The Oregon Trail is a computer game originally developed by Don Rawitsch, Bill Heinemann, and Paul Dillenberger in 1971 and produced by the Minnesota Educational Computing Consortium (MECC) in 1974. The original game was designed to teach school children about the realities of 19th century pioneer life on the Oregon Trail. The player assumes the role of a wagon leader guiding his or her party of settlers from Independence, Missouri, to Oregon's Willamette Valley on the Oregon Trail via a covered wagon in 1848. The game is the first entry in the Oregon Trail series of games, and has since been released in many editions by various developers and publishers who have acquired rights to it, as well as inspiring a number of spinoffs (such as The Yukon Trail and The Amazon Trail) and the parody The Organ Trail."
    ,"Subjects":"History, Geography"
    ,"Image":"temp-resources/oregontrail2.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Zoo Tycoon"
    ,"Location":""
    ,"Platform":"PC, XBox360, XBox One"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A series of games where you manage a zoo"
    ,"Description":"Zoo Tycoon is a series of business simulation video games. The games focus around building and running successful zoo scenarios. The series was initially developed by Blue Fang Games and published by Microsoft Studios who later in 2001-2008 went on to create two stand-alone video games and seven expansion packs for PC and Macintosh platforms. With their contract with Microsoft ending in 2009, Blue Fang announced their official forums would close to incoming posts in June of 2008.[1] In 2013, Microsoft Studios released a new Zoo Tycoon game, developed by Frontier Developments exclusively for Xbox One and Xbox 360 in 2013. https://en.wikipedia.org/wiki/Zoo_Tycoon_(series)"
    ,"Subjects":"Math, Economics"
    ,"Image":"temp-resources/zoo-tycoon-5.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Professor_Layton"
    ,"Location":"https://en.wikipedia.org/wiki/Professor_Layton"
    ,"Platform":"Nintendo DS"
    ,"Recommended_Ages":"All Ages"
    ,"Summary":"A series of turn based strategy games."
    ,"Description":"Civilization is the game that lets you match wits with history’s greatest leaders. You start at the dawn of recorded history – 4,000 B.C., and the founding of the first cities – then nurture your society toward the Space Age. In the beginning, you’ll labor to simply survive while building your settlements, discovering new technologies and fending off barbarians. As your empire prospers, you’ll face competing civilizations guided by history’s most legendary figures: Alexander the Great, Napoleon, Genghis Khan, Julius Caesar and more. You’ll test your capacity for expansion and domination and your ability to outwit and outmaneuver those cunning and brilliant leaders."
    ,"Subjects":"Reading, Critical Thinking"
    ,"Image":"temp-resources/civilization-v.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Civilization Series"
    ,"Location":"http://www.civilization.com/en/home/"
    ,"Platform":"All"
    ,"Recommended_Ages":"Grades 5+"
    ,"Summary":"A series of turn based strategy games."
    ,"Description":"Civilization is the game that lets you match wits with history’s greatest leaders. You start at the dawn of recorded history – 4,000 B.C., and the founding of the first cities – then nurture your society toward the Space Age. In the beginning, you’ll labor to simply survive while building your settlements, discovering new technologies and fending off barbarians. As your empire prospers, you’ll face competing civilizations guided by history’s most legendary figures: Alexander the Great, Napoleon, Genghis Khan, Julius Caesar and more. You’ll test your capacity for expansion and domination and your ability to outwit and outmaneuver those cunning and brilliant leaders."
    ,"Subjects":"Reading, Critical Thinking"
    ,"Image":"temp-resources/civilization-v.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Braid"
    ,"Location":"http://store.steampowered.com/app/26800/"
    ,"Platform":"PC, XBox360"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A man named Tom must solve various puzzles involving time manipulation to save his princess."
    ,"Description":"Braid is a puzzle-platformer, drawn in a painterly style, where you can manipulate the flow of time in strange and unusual ways. From a house in the city, journey to a series of worlds and solve puzzles to rescue an abducted princess. http://store.steampowered.com/app/26800/"
    ,"Subjects":"Critical Thinking"
    ,"Image":"temp-resources/Braid-screen01.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"The Witness"
    ,"Location":"http://store.steampowered.com/app/210970/"
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 6+"
    ,"Summary":"You wake up on an island with no idea who you are, how you got there, and a ton of puzzles to solve."
    ,"Description":"The Witness is a single-player game in an open world with dozens of locations to explore and over 500 puzzles. This game respects you as an intelligent player and it treats your time as precious. There's no filler; each of those puzzles brings its own new idea into the mix. So, this is a game full of ideas. http://store.steampowered.com/app/210970/"
    ,"Subjects":"Critical Thinking"
    ,"Image":"temp-resources/witness.png"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Brain Age"
    ,"Location":""
    ,"Platform":"DS, 3DS"
    ,"Recommended_Ages":"Grades 4+"
    ,"Summary":"A series of minigames to challenge your brain."
    ,"Description":"Activities include quickly solving simple math problems & counting people going in and out of a house simultaneously\nDraw pictures on the Touch Screen, or read classic literature out loud\nPlay Sudoku, the popular number puzzle game"
    ,"Subjects":"Math, English, Brain Training"
    ,"Image":"temp-resources/brainrev1.JPG"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Application"
    ,"Title":"Garage Band"
    ,"Location":"http://www.apple.com/mac/garageband/"
    ,"Platform":"OS X"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A tool for creating and editing music. It includes music lessons."
    ,"Description":"GarageBand is a whole music creation studio right inside your Mac — with a complete sound library that includes software instruments, presets for guitar and voice, and virtual session drummers. An intuitive interface makes it easy to learn, play, record, create, and share your hits worldwide. It’s never been easier to make music like a pro."
    ,"Subjects":"Music"
    ,"Image":"temp-resources/Rocksmith-7.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Rocksmith"
    ,"Location":"http://rocksmith.ubi.com/rocksmith/en-us/home/"
    ,"Platform":"PC, Xbox 360, PS3"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A game that teaches you how to play guitar."
    ,"Description":"Plug any electric guitar or bass into your PC, Mac, Xbox One, Xbox 360, PlayStation® 4 system or PlayStation® 3 system, and join over 3 million people who have learned to play guitar with award-winning Rocksmith method. Learn to play guitar in 60 days. Get started, now!"
    ,"Subjects":"Music"
    ,"Image":"temp-resources/Rocksmith-7.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Depression Quest"
    ,"Location":"http://www.depressionquest.com/"
    ,"Platform":"PC, OS X, Linux"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A game that simulates living with Depression."
    ,"Description":"Depression Quest is an interactive fiction game where you play as someone living with depression. You are given a series of everyday life events and have to attempt to manage your illness, relationships, job, and possible treatment. This game aims to show other sufferers of depression that they are not alone in their feelings, and to illustrate to people who may not understand the illness the depths of what it can do to people. \n"
    ,"Subjects":"Mental Health"
    ,"Image":"temp-resources/depressionquest.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Typing of The Dead"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A series of games where you defeat zombies by typing words and sentences."
    ,"Description":"The Typing of the Dead is a modification of Sega's 1998 light gun arcade game The House of the Dead 2 in which the gun is replaced by a computer keyboard. The player takes the role of a secret agent in a zombie-infested Venice and must quickly type letters, words and phrases in order to kill fast-advancing enemies.\nDespite falling under the criteria of \"edutainment\", the game was lauded by mainstream game critics for its humor, difficulty and originality. The PC version of The Typing of the Dead sold 120,000 units in 2003 https://en.wikipedia.org/wiki/The_Typing_of_the_Dead"
    ,"Subjects":"English, Typing"
    ,"Image":"temp-resources/zombietyping.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Reader Rabbit series"
    ,"Location":""
    ,"Platform":"PC, Wii"
    ,"Recommended_Ages":"Grades 1-3"
    ,"Summary":"A series of games that teaches math and reading skills through minigames"
    ,"Description":"The first game in the series taught language arts, featuring a variety of simple games designed to teach schoolchildren basic reading and spelling skills. Originally, the title character's name was changed to reflect a change in subject, as with Math Rabbit, but it has apparently since been decided to retain the character's original name regardless of the subject area covered by a particular game."
    ,"Subjects":"Math, Reading"
    ,"Image":"temp-resources/noclue.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Math Blaster series"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 1-6"
    ,"Summary":"A series of games where you help an alien save the planet by solving math problems."
    ,"Description":"The Blaster Learning System is an educational video game series originally created by Davidson, but is now owned by Knowledge Adventure. Titles in the series have been produced for various computer systems, video game consoles, and as stand-alone handheld units. Originally, the series simply taught mathematics, but eventually expanded to other subjects, such as language arts (reading) and science. Due to the popularity of the original Math Blaster series, Davidson introduced Reading Blaster in 1994, which also went on to become successful. A Science Blaster was introduced 1996, but did not reach the same popularity as its predecessors. https://en.wikipedia.org/wiki/Blaster_Learning_System"
    ,"Subjects":"Math"
    ,"Image":"temp-resources/math-blaster-episode1-04.png"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Operation Neptune"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A game where you explore the ocean and make progress by solving challenging math problems."
    ,"Description":"A team of astronauts and scientists have begun a secret research project on a distant planet. The research team's results were sent back to Earth on the \"Galaxy space capsule\", which malfunctioned, crashed into the ocean, and broke into many pieces. The capsule included several data canisters, each of which contains small snippets of the scientists' story, which is revealed to the player as the game progresses and data canisters are found. The capsule also contained some toxic chemicals, which have begun to leak out and threaten the health of the world's sea life. A recovery mission, codenamed Operation Neptune, is sent to recover the pieces of the capsule. https://en.wikipedia.org/wiki/Operation_Neptune_(video_game)"
    ,"Subjects":"Math"
    ,"Image":"temp-resources/operationneptune2.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Mario's Early Years"
    ,"Location":""
    ,"Platform":"PC, SNES"
    ,"Recommended_Ages":"Preschool-Grade 1"
    ,"Summary":"Characters from the Super Mario series teach children basic math and reading."
    ,"Description":""
    ,"Subjects":"Math, Reading"
    ,"Image":"temp-resources/carmensandiego.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Myst"
    ,"Location":""
    ,"Platform":"All"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A series of games where the story unfolds via solving puzzles"
    ,"Description":"Myst is a graphic adventure puzzle video game designed and directed by the brothers Robyn and Rand Miller. It was developed by Cyan, Inc., published by Brøderbund, and initially released on the Macintosh platform on September 24, 1993. https://en.wikipedia.org/wiki/Myst"
    ,"Subjects":"Critical Thinking"
    ,"Image":"temp-resources/myst-34.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Carmen Sandiego"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A series of games where you solve extraordinary thefts using geography and history skills."
    ,"Description":""
    ,"Subjects":"History, Geography"
    ,"Image":"temp-resources/carmensandiego.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Clue Finders"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 3-6"
    ,"Summary":"A series of games where a group of kids solve various mysteries using problem solving skills."
    ,"Description":"The ClueFinders is a series of Edutainment Games from The Learning Company in which the eponymous Kid Heroes have Scooby-Doo type exploits."
    ,"Subjects":"Math, Reading, Critical Thinking"
    ,"Image":"temp-resources/sesame_street_abc_nes_gameplay_screenshot_5.png"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Sesame Street ABC/123"
    ,"Location":""
    ,"Platform":"PC, NES"
    ,"Recommended_Ages":"Preschool-Grade 1"
    ,"Summary":"The characters from Sesame street teach young children basic reading, math, and problem solving through a series of minigames."
    ,"Description":"Sesame Street: ABC/123 is an Edutainment game, developed by Rare Ltd. and published by Hi-Tech, which was released in 1991. http://www.amazon.com/Sesame-Street-ABC-Nintendo-Entertainment-System/dp/B003ACHV70"
    ,"Subjects":"Math, Reading, Critical Thinking"
    ,"Image":"temp-resources/sesame_street_abc_nes_gameplay_screenshot_5.png"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Donald's Alphabet Chase"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Preschool-Grade 1"
    ,"Summary":"A game where you help Donald Duck find the letters of the alphabet scattered throughout his home."
    ,"Description":"The letters of the alphabet got out of Donald Duck's toybox and are scattered throughout his home. You must use your reading and problem solving skills to get them back."
    ,"Subjects":"English"
    ,"Image":"temp-resources/74770-DonaldsAlphabetChase.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"3D Dinosaur Adventure"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 3+"
    ,"Summary":"A series of minigames where you encounter and learn about dinosaurs"
    ,"Description":""
    ,"Subjects":"History, Science"
    ,"Image":"temp-resources/dinosaur3d.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Plague Inc."
    ,"Location":"http://www.ndemiccreations.com/en/22-plague-inc"
    ,"Platform":"PC, iOS, Android"
    ,"Recommended_Ages":"Grades 6+"
    ,"Summary":"A Risk style strategy game where you attempt to wipe out humanity with a deadly disease."
    ,"Description":"Can you infect the world? Plague Inc. is a unique mix of high strategy and terrifyingly realistic simulation with over 700 million games played!\nYour pathogen has just infected 'Patient Zero'. Now you must bring about the end of human history by evolving a deadly, global Plague whilst adapting against everything humanity can do to defend itself.\n\nBrilliantly executed with innovative gameplay and built from the ground up for the iPhone, iPad, Android & Windows Phone, Plague Inc. evolves the strategy genre and pushes mobile gaming (and you) to new levels. It’s You vs. the world - only the strongest can survive!"
    ,"Subjects":"Critical Thinking, Science, Geography"
    ,"Image":"temp-resources/mothergoose.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Mixed-Up Mother Goose"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Preschool-Grade 3"
    ,"Summary":"A game where you go around as a small child fixing nursery rhymes."
    ,"Description":"The storyline of the game is very simple, as is common in games for children. One night, while preparing for bed, a child (which is the player's avatar) is sent into the dreamlike world of Mother Goose, who desperately needs his or her help. All the nursery rhymes in the land have gotten mixed up, with none of the inhabitants possessing the items necessary for their rhyme to exist. And so, the child will find themselves helping Humpty Dumpty find a ladder to scramble onto a wall, bringing the little lamb back to Mary and seeking out a pail for Jack and Jill, among others. https://en.wikipedia.org/wiki/Mixed-Up_Mother_Goose"
    ,"Subjects":"English"
    ,"Image":"temp-resources/mothergoose.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Sim City"
    ,"Location":"http://www.ea.com/sim-city"
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 4+"
    ,"Summary":"A series of simulation games where you build and manage a city."
    ,"Description":"In SimCity, the player is given the task of founding and developing a city, while maintaining the happiness of the citizens and keeping a stable budget. https://en.wikipedia.org/wiki/SimCity"
    ,"Subjects":"Economics, Politics"
    ,"Image":"temp-resources/SimCity2000_screen2WebEmbed.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Super Seekers Series"
    ,"Location":""
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 1+"
    ,"Summary":"A series of puzzle adventure games that challenge your reading and math skills."
    ,"Description":"A series of side scrolling, adventure puzzle games by the Learning Company. The Master of Mischief makes, well, mischief in each game and the Super Seeker must foil his scheme via solving math and reading puzzles."
    ,"Subjects":"Math, English"
    ,"Image":"temp-resources/wordrescue6.gif"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Word Rescue"
    ,"Location":"http://store.steampowered.com/app/358340/"
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 1-3"
    ,"Summary":"A game where you find letters to spell out words with the help of a book worm."
    ,"Description":"This is an engrossing educational game with vivid EGA/VGA graphics and support for Adlib and Sound Blaster. Using the Duke Nukem graphical system, Word Rescue has state-of-the-art dual-screen scrolling graphics similar to what's seen on the Super Nintendo and Sega Genesis home gaming systems. Even \"grown-ups\" will like Word Rescue! \n\nPlay as either a girl or a boy. Visit amazing locations on your word-finding adventure, as you hunt for missing words. Dark caves, rocky cliffs, deserts, happy towns, haunted houses, funny factories and creepy dungeons are just some of the places you'll explore."
    ,"Subjects":"English"
    ,"Image":"temp-resources/wordrescue6.gif"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  },
  {
     "Type":"Video Game"
    ,"Title":"Dungeon Keeper"
    ,"Location":"https://www.gog.com/game/dungeon_keeper"
    ,"Platform":"PC"
    ,"Recommended_Ages":"Grades 6+"
    ,"Summary":"A series of games where you build dungeons to corrupt cities"
    ,"Description":"Dungeon Keeper is a strategy video game developed by Bullfrog Productions and released by Electronic Arts in July 1997 for DOS. In Dungeon Keeper, the player builds and manage a dungeon while protecting it from invading 'hero' characters intent on stealing the player's accumulated treasures and killing various monsters. https://en.wikipedia.org/wiki/Dungeon_Keeper"
    ,"Subjects":"Critical Thinking"
    ,"Image":"temp-resources/dungeonkeeper.jpg"
    ,"CC_Tags":["CCSS.MATH.PRACTICE.MP1", "CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1","CCSS.MATH.PRACTICE.MP1"]
    ,"Connections": ["Rich G.", "Mollie H.", "Leah W.", "Kevin F.", "Elsida K.", "Renis S.", "Phil W.", "Jess K."]
  }];

 for(var i=0; i<data.length; i++) {
    Resources.insert(data[i]);
  }

}
