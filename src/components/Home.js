import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"
import img from '../viktor_1.jpg'


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

   return (
      <main className="main-content">
         {/* <div className="hero"> */}
         {/* <section>
               <h1 className="main-title">Viktor Stener</h1>
               <h2 className="main-subtitle">pianist</h2>
            </section> */}
         <div className="home-content">
            <div className="home-left-container">
               <div className="home-about-container">
                  <p>
                  Jag är en pianist bosatt i Göteborg, verksam som solist, kammarmusiker, ackompanjatör och barpianist. Läs mer!
                  </p>

               </div>
               <div className="img-container">
                  <img src={img} alt="viktor" />

               </div>

            </div>
            <div className="news-container">
               <h1>Nyheter</h1>
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
         </div>
         {/* </div> */}
      </main>

   );
};

export default Home;
