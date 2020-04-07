const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//QUESTION FUNCTIONS
const question1 = () => {
  rl.question('What\'s your name? Nicknames are also acceptable :) ', (ans1) => {
    callback(ans1);
    question2(ans1);
  });
}
const question2 = (ans1) => {
  rl.question('What\'s an activity you like doing? ', (ans2) => {
    callback(ans2);
    question3(ans1, ans2);
  });
}
const question3 = (ans1, ans2) => {
  rl.question('What do you listen to while doing that? ', (ans3) => {
    callback(ans3);
    question4(ans1, ans2, ans3);
  });
}
const question4 = (ans1, ans2, ans3) => {
  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (ans4) => {
    callback(ans4);
    question5(ans1, ans2, ans3, ans4);
  });
}
const question5 = (ans1, ans2, ans3, ans4) => {
  rl.question('What\'s your favourite thing to eat for that meal? ', (ans5) => {
    callback(ans5);
    question6(ans1, ans2, ans3, ans4, ans5);
  });
}
const question6 = (ans1, ans2, ans3, ans4, ans5) => {
  rl.question('Which sport is your absolute favourite? ', (ans6) => {
    callback(ans6);
    question7(ans1, ans2, ans3, ans4, ans5, ans6);
  });
}
const question7 = (ans1, ans2, ans3, ans4, ans5, ans6) => {
  rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (ans7) => {
    callback(ans7);
    output(ans1, ans2, ans3, ans3, ans4, ans5, ans6, ans7);
    rl.close();
  });
}


//ANSWER FUNCTIONS
const callback = (val) => {
  console.log("Your Answer: ", val)
  return val;
}

const output = (ans1, ans2, ans3, ans4, ans5, ans6, ans7) => {
  process.stdout.write(`\nYour Profile: \n${ans1} loves listening to ${ans2} while ${ans3}, \ndevouring ${ans5} for ${ans4}, \nprefers ${ans6} over any other sport, \nand is amazing at ${ans7}.`)
  console.log("\n")
};

question1();

