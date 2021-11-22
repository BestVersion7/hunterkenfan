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
    if (req.method === "GET") {
        try {
            const articles = await pool.query(
                "SELECT * FROM article ORDER BY article_date DESC;"
            );
            return res.json(articles.rows);
        } catch (error) {
            return res.status(500).send("internal");
        }
    }
    // else if (req.method ==='POST') {
    //     const {} = req.body
    //     try {
    //         const post = await pool.qu
    //     } catch(err) {
    //         return res.status(500).send('internal')
    //     }
    // }
};

export default handler;
