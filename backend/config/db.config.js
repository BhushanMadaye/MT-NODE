module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "bhukrimad04",
    DB: "mt-node",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};