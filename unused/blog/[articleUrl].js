import { fetchArticleByUrl, fetchPopularArticles } from "../../utils/apiCalls";
import { useRouter } from "next/router";
import ArticlePageArticleItem from "../../components/ArticlePageArticleItem";
import Meta from "../../components/Meta";

const BlogTitlePage = ({ article }) => {
    // console.log(article);
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div className="route-home">
            <Meta
                title={article.article_title}
                description={article.article_title}
            />
            <ArticlePageArticleItem article={article} />
        </div>
    );
};

export async function getStaticProps({ params }) {
    const data1 = await fetchArticleByUrl(params.articleUrl);
    if (!data1) {
        return {
            notFound: true,
        };
    }
    const data = JSON.parse(JSON.stringify(data1));
    return {
        props: {
            article: data,
        },
        revalidate: 36000,
    };
}

export async function getStaticPaths() {
    const data = await fetchPopularArticles();
    const paths = data.map(({ article_url }) => ({
        params: { articleUrl: article_url },
    }));
    return {
        paths,
        fallback: true,
    };
}

export default BlogTitlePage;
