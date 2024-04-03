import chalk from "chalk";
import inquirer from "inquirer";
import chalkanimation from "chalk-animation";

const randomNumber = Math.random();

//Game Variables

let enemies: string[] = ["Zombie", "Skeleton", "Warrior", "Assesin"];
let maxEnemyHealth: number = 75;
let enemyAttackdamage: number = 25;

//player Variables
let health: number = 100;
let attackDamage: number = 25;
let numHealthPortion: number = 3;
let healthPortionHealAmount: number = 30;
let HealthPortionDropChance: number = 50;

let running: boolean = true;

console.log(
  "<------------------Welcome to the Dungeon------------------------>"
);
GAME:
while(running){

console.log('---------------------------------------------------------');

let enemyHealth = Math.round(Math.random() * maxEnemyHealth);
let enemy1 = Math.round(Math.random() * enemies.length);
let enemy2 = enemies[enemy1];
console.log(`${enemy2} appeared !`)

while (enemyHealth > 0) {
  console.log(`Your hp ${health}`)
  console.log(`Enemy health ${enemyHealth}`)
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "opts",
      message: "What would you like to do ?",
      choices: ["Attack", "Drink Healthy Portion", "Run"],
    },
  ]);

  if (answers.opts == "Attack") {
    let damageDealt = Math.round(Math.random() * attackDamage);
    let damageTaken = Math.round(Math.random() * enemyAttackdamage);

    enemyHealth -= damageDealt;
    health -= damageTaken;

    console.log(`=>you strike the ${enemy2} for ${damageDealt} damage . `);
    console.log(`=>you recieve ${damageTaken} in retaliation`);

    if (health <= 1) {
      console.log(
        `you have taken too much damage ! you are too weak to go on.`
      );
      break;
    } }
    
    else if (answers.opts == "Drink Healthy Portion") {
      if (numHealthPortion > 0) {
        health += healthPortionHealAmount;
        numHealthPortion--;
        console.log(
          `You drink a health portion healing yourself for ${healthPortionHealAmount} .
           You now have ${health} HP .
           You have ${numHealthPortion} Health portion left.`

        );
      }
    

      else{

        console.log("You have no health portion left . Defeat enemy to get one ! ");
        
      }
}
  
else if (answers.opts=="Run"){
  console.log(`You run away from the ${enemy2}`);
  continue GAME;

  
}

else{

  console.log('Invalid Command');
  
}}

if(health<1){


  console.log('You limp out of the dungeon,weak from battle');
  break; 



}
console.log('--------------------------------------------------------------------------------');
console.log(`${enemy2} was defeated !`);
console.log(`You have ${health} HP left.`);

if(Math.random()*100<HealthPortionDropChance){
numHealthPortion++;
console.log(`The ${enemy2} dropped a health portion `);
console.log(`You have ${numHealthPortion} health portion !`);





}

console.log('--------------------------------------------------------------------------------');

const answers2=await inquirer.prompt([{

type:"list",
name:"question",
message:"What would you like to do ?",
choices:["Continue fighting","Exit dungeon"]





}])

if(answers2.question=="Continue fighting"){


  console.log('You continue on your adventure');
  
}


else if (answers2.question=="Exit dungeon"){

console.log('You exit the dungeon ,successful from your adventure');
break;




}

console.log('#########################');
console.log('Thanks for playing!');
console.log('#########################');



}             