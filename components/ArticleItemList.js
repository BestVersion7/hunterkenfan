import ArticleItem from "./ArticleItem";

const ArticleItemList = ({ article }) => {
    return (
        <main className="container-article">
            {article.map((item) => (
                <ArticleItem
                    key={item.article_id}
                    article_id={item.article_id}
                    article_image={item.article_image}
                    article_title={item.article_title}
                    article_image_alt={item.article_image_alt}
                    article_url={item.article_url}
                />
            ))}
        </main>
    );
};

export default ArticleItemList;
