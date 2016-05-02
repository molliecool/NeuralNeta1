//import angular from 'angular';
//import angularMeteor from 'angular-meteor';

import { Resources } from '../imports/api/resources.js';
import '../imports/api/images/images.js';
///import '../imports/startup/tempData.json'

if(Resources.find().count() === 0) {
  console.log("mongo db empty");
  var data = [
    {
  "name": "Operation Neptune",
  "shortDescription": "Operation Neptune is an educational computer game produced in 1991 by The Learning Company. The goal of the game is to guide a small submarine through a variety of undersea caverns, collecting pieces of a ruined space capsule. (wikipedia)",
  "fullDescription": "The back story of the game is as follows: A team of astronauts and scientists have begun a secret research project on a distant planet. The research team's results were sent back to Earth on the Galaxy space capsule, which malfunctioned, crashed into the ocean, and broke into many pieces. The capsule included several data canisters, each of which contains small snippets of the scientists' story, which is revealed to the player as the game progresses and data canisters are found. The capsule also contained some toxic chemicals, which have begun to leak out and threaten the health of the world's sea life. A recovery mission, codenamed Operation Neptune, is sent to recover the pieces of the capsule. The game is divided into five zones:[4] Dragon Reef, Fossil Trench, Limestone Ridge, Sea Forest, and Hammerhead. Each zone contains three levels, called sectors (although the hammerhead zone also has a final sector, where there are no maths problems, but one hit from a sea creature will send the player back to the start). At the end of each sector, the submarine approaches an undersea supply station. There are two completely unique sets of levels, Voyager and Expert, each with a different story that is recovered along the way. The player pilots the submarine, named the Neptune. Throughout the game, elementary school-level mathematics problems are posed, in the form of scientific situations that might concern a submarine pilot in real life. (For example, the sub's ballast may need adjusting, and this becomes an arithmetic problem.) In each sector the player will face three randomly placed math problems, as well as one problem to open that sector's data canister, and another to open the combination lock on the supply station.The box cover illustration rendered by Marc Ericksen envisions the Neptune submarine recovery vehicle hovering above the basin of Fossil Trench recovering glowing toxic data capsules. (wikipedia)",
  "type": "game",
  "subject": [
      { "_id": "0001", "sName": "Math" },
    ],
  "ages": "elementary",
  "image": "operationneptune.gif",
  "whereToFind": "",
},
  {
  "name": "Test",
  "shortDescription": "Test",
  "fullDescription": "Test",
  "type": "test",
  "subject": [
      { "_id": "0001", "sName": "Math" },
      { "_id": "0002", "sName": "History" },
      { "_id": "0003", "sName": "Science" },
      { "_id": "0004", "sName": "Health" },
    ],
  "ages": "test",
  "image": "happyorange.png",
  "whereToFind": "everywhere",
},
  {
  "name": "Oregon Trail",
  "shortDescription": "The Oregon Trail is a computer game originally developed in 1971. The player assumes the role of a wagon leader guiding his or her party of settlers from Independence, Missouri, to Oregon's Willamette Valley. (wikipedia)",
  "fullDescription": "Hunting An important aspect of the game was the ability to hunt. Using guns and bullets bought over the course of play, players select the hunt option,#8, and hunt wild animals to add to their food reserves. In the original version, there were no graphics and players were timed on how fast they could type BANG, WHAM, or POW, with misspelled words resulting in a failed hunt. In the first full-graphics version, players controlled a little man who could aim a rifle in one of eight directions and fire single shots at animals. In later versions, players hunted with a cross-hair controlled by the mouse. Bison were the slowest moving targets and yielded the most food, while rabbits and squirrels were fast and offered very small amounts of food. Deer (eastern section) and elk (western section) were in the middle in terms of speed, size, and food yield; bears were between bison and deer in all three properties. While the amount of wild game shot during a hunting excursion is limited by only the player's supply of bullets, the maximum amount of meat that can be carried back to the wagon is 100 pounds in early versions of the game. In later versions, as long as there were at least two living members of the wagon party, 200 pounds could be carried back to the wagon. In the later version, players could hunt in different environments. For example, hunting during winter would result in graphics showing grass covered in snow. In later versions, the over-hunting of animals would result in scarcity and reduce the amount of animals that appeared later in the game. Death  Throughout the course of the game, members of the player's party could fall ill and not rest, causing further harm to the victim. The party could die from various causes, such as measles, snakebite, dysentery, typhoid, cholera, and exhaustion. People could also die from drowning or accidental gunshot wounds. The player's oxen were also subject to illness and death. In the Oregon Trail 2/OT2 for PC and later releases, when a member of the player's party dies, the player has the option of conducting a brief funeral: If the player elects to do so (as the game's instructions and in-game advisers strongly recommend in all but the very harshest environments), the player may write a tombstone epitaph for the party member before continuing down the trail; if the player declines to hold a funeral, the party suffers a severe blow to morale. Scoring At the conclusion of the journey, a player's score is determined in two stages. In the first stage, the program awards a raw or unscaled number of points for each remaining family member (weighted by party health), each remaining possession (weighted by type), and remaining cash on hand (one point per dollar). In the second stage, the program multiplies this raw score by a degree of difficulty scalar corresponding to the party's initial level of resources (determined in-game by the profession of the party's leader); for example, in the Apple IIe game, a banker starting with $1600.00 receives no bonus, the final score of a carpenter starting with $800.00 is doubled, and the final score of a farmer starting with $400.00 is tripled. (wikipedia)",
  "type": "game",
  "subject": [
      { "_id": "0002", "sName": "History" },
    ],
  "ages": "elementary",
  "image": "oregontrail.jpg",
  "whereToFind": "where?",
  }
];

 for(var i=0; i<data.length; i++) {
    Resources.insert(data[i]);
  }

}
