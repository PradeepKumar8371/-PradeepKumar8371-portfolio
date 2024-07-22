import emailjs from "@emailjs/browser";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useRef, useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Contact = () => {
  const styles = useStyles()
  const form = useRef();
  const [done, setDone] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setDone(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmrh8qk",
        "template_cks8ojq",
        form.current,
        "YSQNeB2ULTEQs3OmY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };

  return (
    <div id='Contact' class={styles.container}>
      <Typography variant='h5'>Contact Me</Typography>
      <div class={styles.contentContainer}>
        <div>
          <div>
            <div>
              <div className={styles.icon}>
                <LocalPhoneIcon />
              </div>
              <div>
                <Typography variant='body' style={{ fontWeight: '800', fontSize: '18px' }}>Phone</Typography>
                <br />
                <Typography variant='body'>+91 9361196509</Typography>
              </div>
            </div>
            <div>
              <div className={styles.icon}>
                <EmailIcon />
              </div>
              <div>
                <Typography variant='body' style={{ fontWeight: '800', fontSize: '18px' }}>Mail</Typography>
                <br />
                <Typography variant='body'>s.pradeepkumar8371@gmail.com</Typography>
              </div>
            </div>
            <div>
              <div className={styles.icon}>
                <LinkedInIcon />
              </div>
              <div>
                <Typography variant='body' style={{ fontWeight: '800', fontSize: '18px' }}>Linkedin</Typography>
                <br />
                <div>
                  <a href='https://www.linkedin.com/in/pradeep-kumar-904192221/'>linkedin.com/in/pradeep-kumar-904192221</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className={styles.inputField} placeholder="Name" required />
            <input type="email" name="user_email" className={styles.inputField} placeholder="Email" required />
            {/* <h4>Type Your Message Here...</h4> */}
            <textarea name="message" placeholder="Type Your Message Here..."></textarea>
            <input type="submit" className={styles.submitButton} value="Send" />
          </form>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={done} autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Thanks for Contacting me
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;

const useStyles = makeStyles({
  container: {
    padding: '100px 20px 20px 20px',
    '&>h5': {
      fontWeight: '800',
      textAlign: 'center',
      // paddingBottom: '40px',
      height: '100%'
    }
  },
  inputField: {
    width: '100%',
    height: '40px',
    outline: 'none',
    border: 'none',
    fontSize: '15px',
    background: 'none',
    borderBottom: '2px solid #171717',
    '& >input::placeholder': {
      color: '#ddd'
    }
  },
  submitButton: {
    border: '1px solid #007bff',
    backgroundColor:'transparent',
    borderRadius: '10px',
    marginTop: '20px',
    fontWeight: 600,
    fontSize: '20px',
    color: '#007bff',
    width: '100px',
    padding: 0,
    marginBottom: '30px',
    transition: '0.3s',
    '&:hover': {
      backgroundColor:"#007bff",
      color:'white'
    },
  },
  contentContainer: {
    // padding:'100px 20px 0px 20px',
    // height: "auto",
    // width: '100%',\
    display: 'grid',
    gridTemplateColumns: '100%',
    '@media (min-width: 1024px)': {
      gridTemplateColumns: '50% 50%',
    },
    boxSizing: 'borderBox',
    '& >div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& >form': {
        marginTop: '40px',
        boxSizing: 'borderBox',
        maxWidth: '500px',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
      boxShadow: '21px 32px 41px 4px rgba(0,0,0,0.1)',
        borderRadius: '15px',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        flexWrap: 'wrap',
        padding: '25px 40px 0 40px !important',
        '& >h1': {
          color: '#171717',
          fontWeight: '500',
          marginTop: '20px',
          textAlign: 'center'
        },
        '& form input::placeholder': {
          color: '#ddd',
        },
        '& form #lastName, & form #mobile': {
          marginLeft: '20px',
        },
      },
      '& form h4': {
        color: '#171717',
        fontWeight: 300,
        marginTop: '20px',
      },
      '& form textarea': {
        background: 'none',
        border: 'none',
        borderBottom: '2px solid #171717',
        color: '#171717',
        fontWeight: 200,
        fontSize: '15px',
        padding: '10px',
        outline: 'none',
        width: '100%',
        minHeight: '80px',
        maxHeight: '80px',
        '&::-webkit-scrollbar': {
          width: '1em',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(194, 194, 194, 0.713)',
        },
      },
      '& >div': {
        '& >div': {
          margin: '50px 10px 0px 10px',
          display: 'flex'
        }
      }
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px'
  }
})
