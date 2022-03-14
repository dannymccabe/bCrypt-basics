const bcrypt = require('bcrypt');

// each salt is different : even with the same code 10 times
bcrypt.genSalt().then(salt => {
    console.log(salt);
})

bcrypt.genSalt().then(salt => {
    bcrypt.hash("password", salt).then(hash =>{ // first argument is whatever we get from the user input initially. The second hash is the one just created by bcrypt
        console.log(hash);
    })
})

// compare takes the actual password entered by the user. The hash is what was stored in the database for the user. The result will be a booklean of true or false to see if they match. The hash made initially is always the same so it can be compared. The salt is what makes it different. 
bcrypt.genSalt().then(salt => {
    bcrypt.hash("password", salt).then(hash => {
        console.log(salt);
        console.log(hash);
        bcrypt.compare("password", hash).then(result =>
            console.log(result));
    })
})

//genSalt takes rounds. Best practices are genSalt(12); Very secure. 