export const webProjects = [
    {
        title: "Travel Blog",
        url_link: "https://speedruntravel.com",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1654139992/3105%20portfolio%20screenshots/speedtravel.png",
        description:
            "The goal of this website is to write about my travel adventures to cities I stayed in. It is a custom built cms with an admin page that I can use to edit articles/photos. I use cloudinary for image optimization and storage and uploading of images. This is a highly SEO optimized website with Analytics, meta tags, sitemap, Adsense, etc. The repo is private due to not wanting the code to be leaked out in public.",
        technologiesUsed:
            "Nextjs, Prisma, Cloudinary, Postgres, SCSS, OAuth 2.0, Google Analytics, Adsense, Git",
        gitHubLink: "Private Repo",
    },

    {
        title: "Drink Recipe Blog (Updated)",
        url_link: "https://winestore.vercel.app/",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1561066077/3105%20portfolio%20screenshots/3105_wine_screenshot.png",
        description:
            "This was rewritten in April 2022. I migrated to Next.js and incorporated authentication using google, github and email. In the previous version (https://goldenwine.herokuapp.com/), the authentication was written by myself but this Auth2.0 is better in terms of security and people don't like to create new accounts. It is deployed to Vercel no cold starts from Heroku.",
        technologiesUsed:
            "Nextjs, Postgres, Cloudinary, Prisma, Auth 2.0, SCSS, Git",
        gitHubLink: "https://github.com/BestVersion7/winestore",
    },
    // {
    //     title: "Drink Recipe Blog (Outdated)",
    //     url_link: "https://goldenwine.herokuapp.com/",
    //     url_image:
    //         "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561066077/3105%20portfolio%20screenshots/3105_wine_screenshot.png",
    //     description:
    //         "This is a full stack website deployed on Heroku. The goal of this website is to find recipes for alcoholic beverages and post reviews on the recipe. Reviews can only be posted once users sign in or create a new account. I have also incorporated Cloudinary CDN to submit profile images and transformations. All the data is stored on MongoDB Atlas.",
    //     technologiesUsed:
    //         "React, MongoDB, ExpressJs, Heroku, Google Analytics, Git",
    //     gitHubLink: "https://github.com/BestVersion7/heroku-site",
    // },
    {
        title: "My Website",
        url_link: "https://hunterkf.com/blog",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1654140524/3105%20portfolio%20screenshots/mysite.png",
        description:
            "This my personal website. It is a full stack site rewritten in 2022 to use Next.js (previously React) server side rendering for better SEO.",
        // "This is a full stack website deployed on Heroku. The goal of this website is for me to write and share articles with you. I have created my own API: REST for user authentication, and SOCKET.io for live comments. I also have a master/admin page running on web sockets for me to publish, update, delete articles real time. All the data is stored on PostgreSQL.",
        technologiesUsed:
            "Next.js, SCSS, Google Analytics, Git",
        gitHubLink: "https://github.com/BestVersion7/hunterkenfan",
    },
];
