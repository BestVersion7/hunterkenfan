import Head from "next/head";
import Script from "next/script";

export default function Meta({ title, description, keywords }) {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-461PS4JFHW"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-461PS4JFHW', { page_path: window.location.pathname });
                `}
            </Script>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
        </>
    );
}

Meta.defaultProps = {
    title: "Website",
    description: "Collection of arts, coding, blogging.",
    keywords: "coding, learning to code, html, css, nextjs, react, api",
};
