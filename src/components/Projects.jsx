import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import Fanmode from '../assets/Fanmode.jpg';
import MarketSpark from '../assets/MarketSpark.jpg';
import Vinayak from '../assets/Vinayak.jpg';
import { TheDialog } from './business/TheDialog';
import StudentsAcademicPerformanceTracker_WebClient from '../assets/StudentsAcademicPerformanceTracker_WebClient.jpg';
import StudentsAcademicPerformanceTracker_mobileClient from '../assets/StudentsAcademicPerformanceTracker_mobileClient.png';
import ProductFinder from '../assets/ProductFinder.jpg';

const Pojects = () => {
  const styles = useStyles()
  const [open, setOpen] = React.useState(false);
  const [selectedObject, setSelectedObject] = useState()
  const projects = [{name:'Fanmode', skills:['HTML', 'CSS', 'Bootstrap'], image:Fanmode, text:'Fanmode enables remote fans watching games from their homes or mobile phones to actively participate in the games from their locations. Players can experience comprehensive fan support from worldwide audiences in real-time during the game. The services have progressed to enable fans to express support beyond the game and outside the realm of sports, providing new digital tools that bring fans closer to their interests.', link:'https://www.fanmode.com/', whatIDid:['Designed a visually appealing and user-friendly layout using HTML and CSS.','Implemented a responsive navigation bar with Bootstrap for intuitive access.','Applied responsive design principles and media queries for optimal viewing on all devices.','Utilized CSS Grid and Flexbox to create flexible and efficient layouts.',"Fine-tuned the website's responsiveness with media queries.",'Developed multiple interconnected pages for comprehensive site navigation.','Integrated carousels to highlight key content and images.']},
  {name:'MarketSpark', skills:['HTML', 'CSS', 'Javascrip', 'Typescript', 'React.js', 'Material UI', 'Regex', 'Formik', 'Schema', 'Debugger', 'Git & GitHub', 'Jira'], image:MarketSpark, text:'MarketSpark leads in offering analog replacement solutions by substituting static and expensive copper telephone lines (POTS) with a managed wireless solution prepared for 5G integration in the enterprise. The MarketSpark Command Center, a cloud-enabled platform, offers comprehensive visibility and absolute control over all wireless services, delivering actionable insights.', link:'https://www.marketspark.com/', whatIDid:['Enhanced productivity by 30% by leveraging the Formik library for advanced form handling capabilities', 'Ensured data integrity through validation techniques involving schema librariy and regex.','Designed intuitive and user-friendly UI components using Material UI.','Adapted forms based on user inputs to improve usability.','Improved productivity by 30% through streamlined API integration using React Query','Utilized GitHub for version control and collaborative development.','Employed Jira for effective project management and task tracking.']},
  {name:'Vinayak', skills:['HTML', 'CSS', 'Javascrip', 'Typescript', 'React.js', 'Material UI', 'Regex', 'Debugger'], image:Vinayak, text:"Vinayak is scaffold service provider company, The site supervisor gives an order, and the manager approves it. After the manager's approval, the storeman processes the order based on stock availability, arranging the driver and vehicle. Once the supervisor receives the material, they perform construction work with it. After completing the construction work, they return the material to the warehouse, where the stock is validated and tracked by the storeman.", link:'https://www.vinayak.com.sg/', whatIDid:['Integrated APIs for seamless system component communication.','Developed dynamic data lists and forms for efficient data management.','Utilized validation methods to ensure data accuracy, resulting in a 50% decrease in unnecessary form submissions.','Created user-friendly web application interfaces to enhance user experience.','Implemented table data sorting for improved data analysis and management.','Managed UI flow to optimize user interaction and task completion.','Developed a reusable component with the goal of boosting productivity by 40%','Proficient in CRUD operations for effective data management and manipulation']},
  {name:'Students Academic Performance Tracker(Web Client)', skills:['HTML', 'CSS', 'Javascrip', 'Typescript', 'React.js', 'Material UI', 'Regex', 'Debugger'], image:StudentsAcademicPerformanceTracker_WebClient, text:"The Students Academic Performance Tracker (Web Client) is an online tool for monitoring students' academic progress. It provides real-time access to grades, attendance, and assignments. User-friendly interfaces and visual aids like charts make data easy to understand. The tool supports personalized learning by highlighting trends and areas for improvement. It enhances communication among teachers, students, and parents, promoting better academic outcomes.",whatIDid:['Designed the UI, ensuring a modern and responsive layout.', 'Implemented navigation with React Router for seamless user experience.', 'Created reusable components to streamline development and maintain consistency.', 'Integrated APIs for dynamic data interaction and functionality.','Handled multiple user roles with conditional UI rendering.','Managed dynamic forms and dynamic form validation', "Effectively managed nested components and state management using React's useContext hook, ensuring efficient data flow and component reusability."]},
  {name:'Students Academic Performance Tracker(Mobile Client)',  skills:['HTML', 'CSS', 'Javascrip', 'Typescript', 'React.js', 'Material UI', 'Regex', 'Debugger', 'React Capacitor'], image:StudentsAcademicPerformanceTracker_mobileClient, text:"The Students Academic Performance Tracker (Mobile Client) is a mobile app designed to monitor students' academic progress. It provides real-time access to grades, attendance, and assignments on-the-go. The app features user-friendly interfaces and visual aids like charts for easy data understanding. By highlighting trends and areas needing improvement, it supports personalized learning. This tool enhances communication between teachers, students, and parents, promoting better academic outcomes.", whatIDid:['Designed and developed a mobile application using HTML, CSS, JavaScript, TypeScript, and React.js in conjunction with Capacitor for native mobile app deployment.', 'Implemented responsive web designs and user interfaces, ensuring optimal performance and accessibility across devices.', 'Developed microservices architecture to enhance scalability and modularity of the application.', 'Created reusable components to standardize UI elements and improve code reusability.','Implemented UI conditional handling based on user roles to tailor the user experience and optimize workflow efficiency.','Ensured high performance and responsiveness on various mobile devices and platforms', 'Conducted comprehensive testing and debugging to deliver a reliable and functional mobile application for both Android and iOS platforms.']},
  {name:'Product Finder', skills:['HTML', 'CSS', 'Javascrip', 'Typescript', 'React.js', 'Material UI', 'Regex', 'Debugger'], image:ProductFinder, whatIDid:['Designed and implemented the user interface (UI) of the web application, focusing on usability and aesthetics.', 'Developed reusable components to enhance code reusability and maintainability across the application.', 'Programmed frontend functionalities to ensure seamless interaction and data flow.', 'Implemented validation mechanisms to ensure data integrity and improve user input accuracy.', 'Utilized Material-UI components, customizing them to fit the design and functionality requirements.', 'Designed multiple pages for the web application, ensuring consistency in layout and navigation.']}]

  const handleClose = () => {
    setOpen(false);
    // setSelectedValue(value);
  };
  return (
    <div id="Projects" className={styles.container}>
      <div>
        <Typography variant='h5'>Projects</Typography>
        <div>
          {projects.map((project) => {
            return <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={project?.image}
                  title="green iguana"
                />
                <CardContent className={styles.cardText}>
                  <Typography gutterBottom variant="h6" component="div">
                 {project?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {project?.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>{
                    setSelectedObject(project)
                    setOpen(true)}}>Learn More</Button>
                </CardActions>
              </Card>
            </div>
          })}
        </div>
      </div>
      <TheDialog
        selectedValue={selectedObject}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}

export default Pojects

const useStyles = makeStyles({
  container: {
    height:'auto',
    width: '100%',
    padding:'100px 20px 0px 20px',
    display: 'flex',
    justifyContent: "center",
    '& >div': {
      '& >h5': {
        fontWeight: '700',
        textAlign: 'center',
        marginBottom:'10px'
      },
      '& >div': {
        display: 'grid',
        maxWidth:'1200px',
        '@media (min-width: 1024px)': {
          gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
        },
        '@media (max-width: 1023px)': {
          gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
        },
        '@media (max-width: 600px)': {
          gridTemplateColumns: 'repeat(1, minmax(200px, 1fr))',
        },
        columnGap:'25px',
        rowGap:'25px',
        '& >div':{
          // minWidth:'200px',
          // maxWidth:'100%'
        }
      }
    }
  },
  cardText:{
    height:'150px',
    overflowY:'hidden'
  }
})