// Task 1: Translate the story into code.
//Promise basics explained using my birthday
//This is showing the different parts of a Promise

const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject (new Error ("I am sad"));
            }
        }, 2000);
    });
};

onMyBirthday(true)
.then((result) => {
    console.log(`I have ${result} cakes`); //does not run
})
.catch((error) => {
    console.log(error); // in console: Error: I am sad
})
.finally(() => {
    console.log("Party"); //Shows in the console no matter what: Party
});