import { ArticleItem } from "../../components/ArticleItem";
import { fetchArticles } from "../../utils/apiCalls";
import Meta from "../../components/Meta";
import ArticleItemList from "../../components/ArticleItemList";

const BlogPage = ({ article }) => {
    // console.log(article);
    return (
        <div className="route-home">
            <Meta
                title="Blog"
                description="Welcome to my blog where I write opinionated articles on philosophy, passion projects and people."
                keywords="philosophy, passion projects and people"
            />
            <h2>At Home Blogs</h2>
            <p>
                Welcome to my blog where I write opinionated articles on
                philosophy, passion projects and people.
            </p>
            <p>
                <b>About the Author: Hunter Fan</b> is a high achiever with a
                background in finance. In his free time, he loves to learn and
                read self-help books on topics in technology, business and
                dating. My goal is to share my experiences with you.
            </p>
            <p>Privacy Policy: This site uses cookies for Google Analytics.</p>
            <h3>Blog Articles</h3>
            <ArticleItemList article={article} />
        </div>
    );
};

export async function getStaticProps() {
    const data1 = await fetchArticles();
    const data = JSON.parse(JSON.stringify(data1));
    return {
        props: {
            article: data,
        },
    };
}

export default BlogPage;
