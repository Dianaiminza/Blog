
import {Grid,Cell,ListItem}from 'react-mdl';
import Profile from '../image/profile.jpg';

export default function Blog () {
    
    
        return (
            <div className="contact-body">
           <Grid className="contact-grid">
           <Cell col={6}>
           <h2>Diana Iminza</h2>
           <img src={Profile}alt="me"style={{height:'250px'}}/>
           <p style={{width:'800',margin:'auto',paddingTop:'1cm'}}>I am an IT student passionate about front end development and networking. I also tutor students on various web development technologies and computer packages. Am passionate about new technology and bringing more females into the technology world.</p>
           </Cell>
           <Cell col={6}>

               <h2>Goals and Aspirations</h2>
               <hr/>
               <main>
        <ListItem>
         <h2>Goals</h2>
         <ul>
         <li>Provide computer solutions to the various problems businesses are facing today</li>
         <li>Manage the database of a large organization.</li>
         <li>Develop software that allows the reduction of time in the administrative areas of a company</li>
         <li>Optimize network security and ensure its proper functioning.</li>
         <li>Design of virtual platforms for all types of companies</li>
         </ul>
         <h2>Aspirations</h2>
         <ul>
           <li>Embrace diversity of thoughts</li>
           <li>Passionate</li>
           <li>Well motivated</li>
           <li>Deliver products that are user friendly</li>
           <li>Maintain high integrity</li>
         </ul>
        </ListItem>
        
      </main>
            </Cell>  
            </Grid>
            </div> 
        
        );
        
    }

