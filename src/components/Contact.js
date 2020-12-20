import React from 'react'

const Contact = () => {
   return (
      <div className="main-content">
         <div className="contact-content">
            <form>
               <input type="name" id="name" placeholder="Namn">
               </input>
               <input type="email" id="email" placeholder="Email">
               </input>
               <input type="text" id="subject" placeholder="Ämne">
               </input>
               <textarea type="text" id="body" placeholder="Skriv ett meddelande...">
               </textarea>
            </form>
         </div>
      </div>
   );
}

export default Contact;