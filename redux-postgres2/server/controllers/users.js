const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectionString,
    ssl: false
});
pool.connect();
require("../init_db")(pool);



module.exports = {
    getUsersMail: function (req, response) {

        pool.query(
            "SELECT email FROM users",
            function (err, result) {
                console.log(err)
                console.log(result.rows)
                response.status(200).json(result.rows)
            }
        )
    }
}