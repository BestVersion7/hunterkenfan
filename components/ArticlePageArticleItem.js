import convertDate from "../utils/convertDate";
// import Image from "next/image";
const ArticlePageArticlearticle = ({ article }) => {
    // console.log(article);
    return (
        <article className="container-article-article">
            <h3>{article.article_title}</h3>
            <p className="container-article-article-author">
                Hunter Fan {convertDate(article.article_date)}
            </p>
            <figure style={{ maxWidth: "50em" }}>
                <img
                    src={article.article_image}
                    title={article.article_image_alt}
                    alt={article.article_image_alt}
                    width="3em"
                    height="2em"
                    // layout="responsive"
                />
            </figure>
            <div
                dangerouslySetInnerHTML={{ __html: article.article_post }}
            />
        </article>
    );
};

export default ArticlePageArticlearticle;
