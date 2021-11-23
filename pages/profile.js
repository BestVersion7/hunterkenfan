import WorkExperienceItemList from "../components/WorkExperienceItemList";
import { Quote } from "../components/Quote";
// import Image from "next/image";
import suffolk from "../public/images/suffolk.png";
import Meta from "../components/Meta";

const ProfilePage = () => {
    return (
        <section className="section-profile">
            <Meta title="Profile" />

            <div id="section-profile-id">
                <br />
                <br />
                <br />
                <h1>Profile</h1>
                <hr />
                <h2>My Story</h2>
                <article className="section-profile-about">
                    <img
                        height="4em"
                        width="4em"
                        // layout="responsive"
                        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1603662887/1104%20profile/me.png"
                        alt="hunter"
                    />
                    <p>
                        I am self-taught web developer with a background in
                        finance. In the past 3 years, I have worked in accounts
                        receivables and accounts payable in startups and large
                        companies. Besides work, I like to build websites from
                        scratch using javascript. Scroll down to see my
                        projects! :)
                    </p>
                </article>

                <article className="section-profile-about">
                    <Image
                        height="4em"
                        width="4em"
                        layout="responsive"
                        src={suffolk}
                        alt="suffolk"
                    />
                    <p>
                        I graduated Suffolk University in May 2019 located in
                        Boston, Massachusetts, USA. During my time here, I got
                        to meet diverse and interesting people. Through class
                        and my own studies, I got hands on experience building
                        mobile apps, consulting, database design, and more!
                    </p>
                </article>
            </div>
            <section>
                <h2>Work Experience</h2>
                <Quote
                    quote="Protons give an atom its identity, electrons its personality."
                    author="Bill Bryson"
                />
                <WorkExperienceItemList />
            </section>
        </section>
    );
};

export default ProfilePage;
