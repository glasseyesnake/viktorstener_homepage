import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

const Home = () => {
   const [newsData, setNews] = useState(null)
   const query = `*[_type == "news"]{
      title,
      publishedAt,
      body
   }`

   useEffect(() => {
      sanityClient
         .fetch(query)
         .then(data => setNews(data))
         .catch(console.error)
   }, [])
   // async () => {
   //    try {
   //       const data = await sanityClient.fetch(query)
   //       setNews(data)
   //    } catch (e) {
   //       console.log(e);
   //    }
   // }

   return (
      <main>
         <div className="hero">
            <section>
               <h1 className="main-title">Viktor Stener</h1>
               <h2 className="main-subtitle">pianist</h2>
            </section>
         </div>
         <div className="main-content">
            <div className="news">
               {newsData && newsData.map((news, index) => (
                  <div className="single-news">
                     <h1 className="news-title">{news.title}</h1>
                     <h2 className="news-date">{new Date(news.publishedAt).toLocaleDateString('en-GB')}</h2>
                     <p className="news-body">{news.body}</p>
                  </div>
               ))}
            </div>
         </div>
      </main>

   );
};

export default Home;
