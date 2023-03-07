import React from "react";
import Museums from "./Museums.jsx";
import aa_history from "../assets/img/aa_history.jpg"
import asian_art from "../assets/img/asian_art.jpg"
import american_indian from "../assets/img/american_indian.jpg"
import hirshhorn from "../assets/img/hirshhorn.jpg"
import african_art from "../assets/img/african_art.jpg"
import renwick from "../assets/img/renwick.jpg"
import air_space from "../assets/img/air_space.jpg"
import natural_history from "../assets/img/natural_history.jpg"
import holocaust from "../assets/img/holocaust.jpg"
import american_art from "../assets/img/american_art.jpg"
import gallery_art from "../assets/img/gallery_art.jpg"
import women_arts from "../assets/img/women_arts.jpg"
import postal from "../assets/img/postal.jpg"
import american_history from "../assets/img/american_history.jpg"
import national_building from "../assets/img/national_building.jpg"
import spy_museum from "../assets/img/spy_museum.jpg"

const Template = () => {
    return (
        <div className="Template">
            <Museums title="National Museum of African American History and Culture" 
                img={aa_history}
                description="The National Museum of African American History and Culture is a Smithsonian Institution museum located on the National Mall in Washington, D.C., in the United States. It was established in December 2003 and opened its permanent home in September 2016 with a ceremony led by President Barack Obama."
                location="1400 Constitution Ave. NW, Washington, DC 20560"
                link={"https://nmaahc.si.edu/"} />
            <Museums title="National Museum of Asian Art" 
                img={asian_art}
                description="The Arthur M. Sackler Gallery is an art museum of the Smithsonian Institution in Washington, D.C., focusing on Asian art. The Sackler Gallery and the Freer Gallery of Art together form the National Museum of Asian Art in the United States."
                location="1050 Independence Ave SW, Washington, DC 20560"
                link={"http://asia.si.edu/"} />
            <Museums title="National Museum of the American Indian" 
                img={american_indian}
                description="The National Museum of the American Indian is a museum in the United States devoted to the culture of the indigenous peoples of the Americas. It is part of the Smithsonian Institution group of museums and research centers. The museum has three facilities."
                location="4th St SW, Washington, DC 20560"
                link={"https://americanindian.si.edu/"} />
            <Museums title="Hirshhorn Museum & Sculpture Garden"  
                img={hirshhorn}
                description="The Hirshhorn Museum and Sculpture Garden is an art museum beside the National Mall in Washington, D.C., United States. The museum was initially endowed during the 1960s with the permanent art collection of Joseph H. Hirshhorn. It was designed by architect Gordon Bunshaft and is part of the Smithsonian Institution."
                location="Independence Ave SW &, 7th St SW, Washington, DC 20560"
                link={"https://hirshhorn.si.edu/"} />
            <Museums title="National Museum of African Art"  
                img={african_art}
                description="The National Museum of African Art is the Smithsonian Institution's African art museum, located on the National Mall of the United States capital. Its collections include 9,000 works of traditional and contemporary African art from both Sub-Saharan and North Africa, 300,000 photographs, and 50,000 library volumes."
                location="950 Independence Ave SW, Washington, DC 20560"
                link={"http://africa.si.edu/"} />
            <Museums title="Renwick Gallery of the Smithsonian American Art Museum"  
                img={renwick}
                description="The Renwick Gallery is a branch of the Smithsonian American Art Museum located in Washington, D.C. that displays American craft and decorative arts from the 19th to 21st century."
                location="1661 Pennsylvania Avenue NW #1, Washington, DC 20006"
                link={"https://americanart.si.edu/visit/renwick"} />
            <Museums title="Smithsonian National Air and Space Museum"  
                img={air_space}
                description="The National Air and Space Museum of the Smithsonian Institution, also called the Air and Space Museum, is a museum in Washington, D.C., in the United States. Established in 1946 as the National Air Museum, its main building opened on the National Mall near L'Enfant Plaza in 1976."
                location="600 Independence Ave SW, Washington, DC 20560"
                link={"https://airandspace.si.edu/"} />
            <Museums title="National Museum of Natural History"  
                img={natural_history}
                description="The National Museum of Natural History is a natural history museum administered by the Smithsonian Institution, located on the National Mall in Washington, D.C., United States. It has free admission and is open 364 days a year."
                location="10th St. & Constitution Ave. NW, Washington, DC 20560"
                link={"https://naturalhistory.si.edu/"} />
            <Museums title="United States Holocaust Memorial Museum"  
                img={holocaust}
                description="The United States Holocaust Memorial Museum is the United States' official memorial to the Holocaust. Adjacent to the National Mall in Washington, D.C., the USHMM provides for the documentation, study, and interpretation of Holocaust history."
                location="100 Raoul Wallenberg Pl SW, Washington, DC 20024"
                link={"https://www.ushmm.org/"} />
            <Museums title="National Portrait Gallery"  
                img={american_art}
                description="The National Portrait Gallery is a historic art museum between 7th, 9th, F, and G Streets NW in Washington, D.C., in the United States. Founded in 1962 and opened to the public in 1968, it is part of the Smithsonian Institution. Its collections focus on images of famous Americans."
                location="8th St NW & G St NW, Washington, DC 20001"
                link={"https://npg.si.edu/"} />
            <Museums title="National Gallery of Art"  
                img={gallery_art}
                description="The National Gallery of Art, and its attached Sculpture Garden, is a national art museum in Washington, D.C., United States, located on the National Mall, between 3rd and 9th Streets, at Constitution Avenue NW."
                location="Constitution Ave. NW, Washington, DC 20565"
                link={"https://www.nga.gov/"} />
            <Museums title="National Museum of Women in the Arts"  
                img={women_arts}
                description="The National Museum of Women in the Arts, located in Washington, D.C., is 'the first museum in the world solely dedicated' to championing women through the arts. NMWA was incorporated in 1981 by Wallace and Wilhelmina Holladay."
                location="1250 New York Ave NW, Washington, DC 20005"
                link={"https://nmwa.org/"} />
            <Museums title="Smithsonian National Postal Museum"  
                img={postal}
                description="The National Postal Museum, located opposite Union Station in Washington, D.C., United States, covers large portions of the Postal history of the United States and other countries. It was established through joint agreement between the United States Postal Service and the Smithsonian Institution and opened in 1993."
                location="2 Massachusetts Ave NE, Washington, DC 20002"
                link={"https://postalmuseum.si.edu/"} />
            <Museums title="Smithsonian National Museum of American History" 
                img={american_history}
                description="The National Museum of American History: Kenneth E. Behring Center collects, preserves, and displays the heritage of the United States in the areas of social, political, cultural, scientific, and military history. Among the items on display is the original Star-Spangled Banner."
                location="1300 Constitution Ave. NW, Washington, DC 20560"
                link={"https://americanhistory.si.edu/"} />
            <Museums title="National Building Museum"  
                img={national_building}
                description="The National Building Museum is located at 401 F Street NW in Washington, D.C. It is a museum of 'architecture, design, engineering, construction, and urban planning'."
                location="401 F St NW, Washington, DC 20001"
                link={"https://www.nbm.org/"} />
            <Museums title="International Spy Museum"  
                img={spy_museum}
                description="The International Spy Museum is an independent non-profit museum which documents the tradecraft, history, and contemporary role of espionage. It holds the largest collection of international espionage artifacts on public display."
                location="700 L'Enfant Plaza SW, Washington, DC 20024"
                link={"https://www.spymuseum.org/"} />
        </div>
    )
}

export default Template