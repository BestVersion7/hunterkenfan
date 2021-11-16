import Head from "next/head";

export default function Meta({ title, description, keywords }) {
    return (
        <Head>
            <title>{`Hunter's ${title}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
    );
}

Meta.defaultProps = {
    title: "Website",
    description: "Collection of arts, coding, blogging.",
    keywords: "coding, learning to code, html, css, nextjs, react, api",
};
