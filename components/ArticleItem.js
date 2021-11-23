// import Image from "next/image";
import Link from "next/link";

const ArticleItem = ({
    article_id,
    article_image,
    article_url,
    article_title,
    article_image_alt,
}) => {
    return (
        <article className="container-article-home">
            <Link href={`/blog/${article_url}`}>
                <a>
                    <figure style={{ maxWidth: "50em" }}>
                        <img
                            src={article_image}
                            title={article_image_alt}
                            alt={article_image_alt}
                            width="3em"
                            height="2em"
                            // layout="responsive"
                        />

                        <figcaption>{article_title}</figcaption>
                    </figure>
                </a>
            </Link>
        </article>
    );
};

export default ArticleItem;
