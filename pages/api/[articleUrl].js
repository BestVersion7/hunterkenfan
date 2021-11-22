import { Pool } from "pg";
require("dotenv").config();

export const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

const handler = async (req, res) => {
    // console.log(req.query)
    try {
        const { articleUrl } = req.query;
        const article = await pool.query(
            "SELECT * FROM article WHERE article_url = $1;",
            [articleUrl]
        );
        if (article.rowCount == 0) {
            return res.status(400).json("no article");
        } else {
            return res.send(article.rows[0]);
        }
    } catch (err) {
        res.status(500).send("internal");
    }
};

export default handler;
