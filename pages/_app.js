import "../styles/globals.scss";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <div className="container-wrapper">
                    <Component {...pageProps} />
                </div>
            </Layout>
            <Footer />
        </>
    );
}

export default MyApp;
