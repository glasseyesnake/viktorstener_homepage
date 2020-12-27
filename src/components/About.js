import React from 'react'
import img from '../viktor_2.jpg'

const About = () => {
   return (
      <div className="main-content">
         <div className="about-content">
            <div className="img-container">
               <img src={img} alt="jag" />
            </div>
            <div className="about-text">
               <p>
                  Jag är en pianist bosatt i Göteborg, verksam som solist, kammarmusiker, ackompanjatör och barpianist. Jag uppträder regelbundet på konserter hos bl a konsertföreningar och kyrkor runt om i landet, men syns också på musikaler, shower, events, restauranger, hotell, bröllop och begravningar.
            </p>
               <p>
                  Jag är utbildad på Kungl. Musikhögskolan i Stockholm, Högskolan för Scen och Musik i Göteborg och Barratt Dues musikkinstitutt i Oslo. Som 18-åring debuterade jag med orkester i min hemstad Vänersborg, och har sedan dess utvecklats till en solist och kammarmusiker på högsta nivå. Efter studier i Stockholm för professor Staffan Scheja tog jag 2010 min kandidatexamen, och har åren därpå studerat för den legendariska tjeckiska pianisten Jiri Hlinka i Oslo.
            </p>
               <p>
                  Efter att ha utsetts till “Ung Pianosolist 2012” medverkade jag som solist på invigningskonserten av Göteborgs pianofestival, där jag tillsammans med Gothenburg Wind Orchestra framförde Edvard Griegs pianokonsert. Samma år blev jag finalist i Vera Lotar-Shevchenko International Piano Competition i Ekaterinburg, Ryssland. Som en av sex pianister i finalen framförde jag två pianokonserter med Ural Philharmonic Orchestra, en av Rysslands ledande orkestrar.
            </p>
               <p>
                  2012 och 2013 blev jag vinnare av sökningarna till Kungl. Musikaliska Akademins nationella stipendier, som riktar sig till unga pianister i Sverige. 2013 ledde detta även till att jag kvalificerade mig till semifinalen av “Solistpriset”, Sveriges största tävling för unga klassiska musiker.
            </p>
            </div>
         </div>
      </div>

   );
}

export default About;