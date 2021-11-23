import { Pool } from "pg";
// const {Pool} = pg.native

import dotenv from "dotenv";
dotenv.config();

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

export const fetchArticles = async () => {
    try {
        const articles = await pool.query(
            "SELECT * FROM article ORDER BY article_date DESC;"
        );
        return articles.rows;
    } catch (err) {
        return {
            notFound: true,
        };
    }
};

// export const fetchPopularArticles = async () => {
//     try {
//         const articles = await pool.query(
//             "SELECT article_url FROM article LIMIT 10;"
//         );
//         return articles.rows;
//     } catch (err) {
//         return {
//             notFound: true,
//         };
//     }
// };

export const fetchArticleByUrl = async (url) => {
    try {
        const article = await pool.query(
            "SELECT * FROM article WHERE article_url = $1;",
            [url]
        );
        if (url.rowCount == 0) {
            return {
                notFound: true,
            };
        } else {
            return article.rows[0];
        }
    } catch (err) {
        return {
            notFound: true,
        };
    }
};
