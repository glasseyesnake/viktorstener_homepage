import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

const Media = () => {
   const [imageData, setImage] = useState(null)
   const query = `*[_type == "media_image"]{
      title,
      mainImage{
         asset->{
            _id,
            url
         },
         alt
      }
   }`

   useEffect(() => {
      sanityClient
         .fetch(query)
         .then(data => setImage(data))
         .catch(console.error)
   }, [])

   return (
      <main className="main">

         <div className="media-content">
            <div className="media-images">
               {imageData && imageData.map(image => (
                  <div className="media-image">
                     <img src={image.mainImage.asset.url} alt={image.title} />
                  </div>
               ))}
            </div>
         </div>

      </main>
   );
}

export default Media;