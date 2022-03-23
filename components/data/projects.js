export const webProjects = [
    {
        title: "Ecommerce Store",
        url_link: "https://awsamplifynext.vercel.app/store",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/v1647988717/3105%20portfolio%20screenshots/food.png",
        description:
            "The goal of this website is to create a food ordering website. Customers can come and add products to cart, update, remove items, and make payment using credit card. I used the stripe API for the CC processing. The website is deployed to Vercel but had originially planned to be hosted on AWS Amplify. The costs were too high",
        technologiesUsed: "Nextjs, Prisma, Postgres, Stripe, Vercel, SCSS, Git",
        gitHubLink:
            "https://github.com/BestVersion7/awsamplifynext/tree/createprismapg",
    },
    {
        title: "My Website",
        url_link: "https://hunterkf.com/blog",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/v1647988549/3105%20portfolio%20screenshots/blog.png",
        description:
            "This my personal website. It is a full stack site rewritten in 2021 to use Next.js (previously React) server side rendering for better SEO. The blog pages have articles I've written back in college. I also have a master/admin page, hidden, for me to publish, update, delete articles. All the data is stored on PostgreSQL.",
        // "This is a full stack website deployed on Heroku. The goal of this website is for me to write and share articles with you. I have created my own API: REST for user authentication, and SOCKET.io for live comments. I also have a master/admin page running on web sockets for me to publish, update, delete articles real time. All the data is stored on PostgreSQL.",
        technologiesUsed: "Next.js, Vercel, SCSS, Postgres, Git",
        gitHubLink: "https://github.com/BestVersion7/hunterkenfan",
    },
    {
        title: "Drink Recipe Blog",
        url_link: "https://goldenwine.herokuapp.com/",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561066077/3105%20portfolio%20screenshots/3105_wine_screenshot.png",
        description:
            "This is a full stack website deployed on Heroku. The goal of this website is to find recipes for alcoholic beverages and post reviews on the recipe. Reviews can only be posted once users sign in or create a new account. I have also incorporated Cloudinary CDN to submit profile images and transformations. All the data is stored on MongoDB Atlas.",
        technologiesUsed:
            "React, MongoDB, ExpressJs, Heroku, Google Analytics, Git",
        gitHubLink: "https://github.com/BestVersion7/heroku-site",
    },
];
