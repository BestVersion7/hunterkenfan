import Head from "next/head";

export default function Meta({ title, description, keywords }) {
    return (
        <Head>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-461PS4JFHW"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-461PS4JFHW', { page_path: window.location.pathname });
            `,
                }}
            />
            <title>{title}</title>
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
