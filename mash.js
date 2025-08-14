function mash () {
    return "You will live in a " + getHome() + " and travel to " + getTravelCount() + " countries, and have a pet " + getPet() + ". You will have attended " + futureCollege() + " and gotten a degree in Computer Science. You will be working as a " + futureJob () + " and retire after 25 years."
}

function randNumGenerator (int) {
    return Math.floor(Math.random () * int);
}

function getHome ()  {
     let homeType = ["Mansion", "Castle", "Shack", "House"]
    if (process.argv[2] != undefined) {
        homeType.push (process.argv [2]);
    }
    let type = homeType [randNumGenerator (homeType.length)];
    return (type);
}
function getTravelCount () {
   return randNumGenerator (100);
}

function getPet () {
    let randomPets = ["Dragon", "Cat", "Dog", "Monkey", "Walrus"];
    let pet; 
    let coinFlip = randNumGenerator (2);
    if (coinFlip == 1 ) {
        pet = randomPets [randNumGenerator (randomPets.length)];
    } 
    else if (coinFlip == 0) {
        if (process.argv [3] != undefined) {
            pet = process.argv [3];
        }
        else {
            pet = randomPets [randNumGenerator (randomPets.length)];
        }
    }      

    return pet;
}
function futureCollege () {
    let collegeOptions = ["Stanford", "University of Michigan", "University of Virginia", "Cornell", "Northern Virginia Community College"]
    let choice = collegeOptions [randNumGenerator(collegeOptions.length)]
    return choice
}
function futureJob() {
    let jobOptions = ["Software Engineer", "Bioinformatics Scientist", "Data Analyst", "Janitor"]
    let job = jobOptions [randNumGenerator(jobOptions.length)]
    return job
} 
let result = mash (); 
console.log (result);
