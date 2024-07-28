/* mySeedScript.js */

// require the necessary libraries
const {faker} = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
    // Connection URL
    const uri = 'mongodb+srv://sherryberry:SherryBerries2017@cluster0.tsahthf.mongodb.net/';

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

         const collection = client.db("test").collection("jewelries");

        // // The drop() command destroys all data from a collection.
        // // Make sure you run it against proper database and collection.
         collection.drop();

        // // make a bunch of time series data
         const jewelryInsert = [];
        // / const img = []

     for (let i = 0; i < 1000; i++) {
       
            const name = faker.lorem.word();
            const size = faker.helpers.arrayElement(['1.2mm','1.6mm','1mm']);
            const catergory = faker.helpers.arrayElement(['Tragus','Helix','Ear-Ring','Nipple-Ring','Nose-Ring','Belly-Ring','Tongue-Ring']);
            const img = faker.image.urlLoremFlickr({ category: 'abstract' });
            const price = faker.finance.amount({ min: 5, max: 10, dec: 2});
            const color = faker.helpers.arrayElement(['#FF0000','#04ff00','#002AFF','#A600FF','#FF00C8']);
            const bodyPart = faker.helpers.arrayElement(['nose','lip','tongue','belly-button','ear']);
            const featured = faker.datatype.boolean();
            // for(let i = 0; i <=5 ; i++){
            //     let image = faker.image.urlLoremFlickr({ category: 'abstract' });

            //     img.push(image)
            // }
            console.log(size)
            const jewelry = {
                 name,
                 size ,
                catergory ,
                img,
                price  ,              
                color,
                bodyPart,
                featured 
            }
        //     for (let j = 0; j < randomIntFromInterval(1, 6); j++) {
        //         let newEvent = {
        //             timestamp_event: faker.date.past(),
        //             weight: randomIntFromInterval(14,16),
        //         }
        //         newDay.events.push(newEvent);
        //     }
            jewelryInsert.push(jewelry);
        }
         collection.insertMany(jewelryInsert);

       
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();