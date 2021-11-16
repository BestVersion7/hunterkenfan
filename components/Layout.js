import Meta from "./Meta";
import Navigation from "./Navigation";
export default function Layout({ children }) {
    return (
        <div>
            <Meta title="Website" />
            <Navigation />
            {children}
        </div>
    );
}
