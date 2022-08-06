const bcrypt = require('bcrypt');

async function runHash() {
    /**
     * Salt is used to increase the ambiguity for decoding passwords 
     * Higher the salt, higher will be the time to hash password and the difficulty to decode
     */

    const salt = await bcrypt.genSalt(10);
    console.log({ salt });

    const hashed = await bcrypt.hash(`1234`,  salt);
    console.log({ salt, hashed });

    const doesPasswordMatch = await bcrypt.compare(`12345`, hashed);
    console.log({ doesPasswordMatch })
}

runHash()