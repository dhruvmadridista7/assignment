function allOccurrences(outcomes, numOccurrences) {
    const cumulativeProb = [];
    let totalProb = 0;
  
    for (const outcome of outcomes) {
      const [key, probability] = Object.entries(outcome)[0];
      totalProb += probability;
      cumulativeProb.push({ key, cumulative: totalProb });
    //   console.log(cumulativeProb);
    }
  
    const results = {};
    for (let i = 0; i < numOccurrences; i++) {
      const randomVal = Math.random() * 100;
      let chosenResult = null;
      
      for (const { key, cumulative } of cumulativeProb) {
        // console.log(randomVal,"  ",cumulative);
        if (randomVal <= cumulative) {
          chosenResult = key;
          break;
        }
      }
    //   console.log(chosenResult);
      if (chosenResult) {
        results[chosenResult] = (results[chosenResult] || 0) + 1;
        // console.log(results[chosenResult]);
      }

    //   console.log("End of ooceration=================");
    }
  
    return results;
}
  
const input = [
    { 1: 35 },
    { 2: 65 }
];

// const input =  [ {1: 10}, {2: 30}, {3: 15}, {4: 15}, {5: 30}, {6: 0} ]


const numOccurrences = 1000;
const retult = allOccurrences(input, numOccurrences);

console.log(`Results after ${numOccurrences} occurrences:`);
for (const [outcome, count] of Object.entries(retult)) {
    console.log(`${outcome}: ${count} times`);
}