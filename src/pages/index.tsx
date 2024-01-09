import SectionHome from "@/sections/Home/view/SectionHome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SectionHome />
    </>
  );
}

// import React from 'react';
// import { Helmet } from 'react-helmet';

// const HomePage = () => {
//   return (
//     <div>
//       <Helmet>
//         {/* Primary Page Title */}
//         <title>Your Website Title | Catchy Tagline</title>

//         {/* Meta Description */}
//         <meta
//           name="description"
//           content="Brief and engaging description of your website content."
//         />

//         {/* Canonical URL (if applicable) */}
//         <link rel="canonical" href="https://www.yourwebsite.com/" />

//         {/* OpenGraph meta tags for social media */}
//         <meta property="og:title" content="Your Website Title" />
//         <meta property="og:description" content="Brief and engaging description." />
//         <meta property="og:url" content="https://www.yourwebsite.com/" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="URL to an engaging image" />

//         {/* Twitter Card meta tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Your Website Title" />
//         <meta name="twitter:description" content="Brief and engaging description." />
//         <meta name="twitter:url" content="https://www.yourwebsite.com/" />
//         <meta name="twitter:image" content="URL to an engaging image" />
//       </Helmet>

//       {/* Main Content */}
//       <h1>Welcome to Your Website</h1>
//       <p>Engaging and relevant content goes here...</p>
//     </div>
//   );
// };

// export default HomePage;
