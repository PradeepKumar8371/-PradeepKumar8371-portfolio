import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Skills = () => {
  const styles = useStyles()
  return (
    <div id="Skills" className={styles.container}>
      <div>
      <Typography variant='h5'>Skills</Typography>
      </div>
    </div>
  )
}

export default Skills

const useStyles = makeStyles({
  container: {
    padding:'100px 20px 0px 20px',
    height: "auto",
    width: '100%',
    display:'flex',
    justifyContent:'center',
    '& >div':{
      '& >h5':{
        fontWeight:'700',
        textAlign:'center'
      }
    }
  }
})