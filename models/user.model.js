const { v4: uuidv4 } = require('uuid');

const users = [

    {
        id:uuidv4(),
        username: "Nafi",
        email: "nafi@yahoo.com"
    },
    {
        id:uuidv4(),
        username: "Kafi",
        email: "kafi@gmail.com"
    }
];

module.exports = users;
