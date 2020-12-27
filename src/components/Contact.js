import React from 'react'

const Contact = () => {
   return (
      <div className="main-content">
         <div className="contact-content">
            <div className="form-container">

               <h1>Kontakta mig</h1>
               <form>
                  <input type="name" id="name" placeholder="Namn">
                  </input>
                  <input type="email" id="email" placeholder="Email">
                  </input>
                  <input type="text" id="subject" placeholder="Ämne">
                  </input>
                  <textarea type="text" id="body" placeholder="Skriv ett meddelande...">
                  </textarea>
                  <button type="submit" id="submit">Skicka</button>
               </form>
            </div>
            <div className="contact-info-container">
               <h1>Mina uppgifter</h1>
               <p>Viktor Stener</p>
               <p>0762-63 89 12</p>
               <p>viktorstener@gmail.com</p>
               <p>Markurellgatan 31</p>
               <p>422 52 Hisings Backa</p>
            </div>
         </div>
      </div>
   );
}

export default Contact;