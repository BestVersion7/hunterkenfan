import Meta from "./Meta";
import Navigation from "./Navigation";
export default function Layout({ children }) {
    return (
        <>
            <Meta title="Website" />
            <Navigation />
            {children}
        </>
    );
}
