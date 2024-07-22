import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const About = () => {
  const styles = useStyles()
  return (
    <div id="About" className={styles.container}>
      <div>
        <Typography variant='h5'>About</Typography>
        <Typography variant='body1'>I'm a passionate and dedicated Frontend Developer with over 2+ years of hands-on experience, specializing in React.js and boasting a strong proficiency in HTML, CSS, and JavaScript. I am eager to join an innovative team where I can leverage my skills to develop cutting-edge web applications and contribute to the growth of the organization while continuously expanding my technical expertise.
During my tenure as a Front End Developer at ZufiZ Technologies Private Limited from January 2022 to April 2024, I enhanced user experiences by developing responsive and visually appealing interfaces using Material UI and Bootstrap. My efforts in data optimization significantly improved application performance by 60%, through the restructuring and optimization of data handling processes. I successfully integrated RESTful APIs, ensuring smooth and efficient communication between the front-end and back-end systems.
I am committed to maintaining high standards of code quality, writing clean, maintainable, and well-structured code that adheres to best practices and industry standards. My proficiency in debugging and quality assurance, utilizing tools such as VS Code and Chrome debugger, helped reduce coding issues and avoid 80% of potential bugs.
Working in an Agile environment, I closely collaborated with cross-functional teams to deliver high-quality products. My goal is to continue contributing to innovative projects while honing my skills and expertise in web development.</Typography>
      </div>
    </div>
  )
}

export default About

const useStyles = makeStyles({
  container: {
    padding:'100px 20px 0px 20px',
    height: "auto",
    width: '100%',
    display:'flex',
    justifyContent:'center',
    '& >div':{
      maxWidth:'740px',
      textAlign:'center',
      '& >h5':{
        marginBottom:'20px',
        fontWeight:'700',
        textAlign:'center'
      }
    }
  }
})