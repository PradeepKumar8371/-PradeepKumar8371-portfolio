import React from 'react';
import { makeStyles } from '@mui/styles';
import Html from '../assets/Html.png';  // Example image path
import Css from '../assets/Css.png';    // Example image path
import Js from '../assets/JavaScript.png';      // Example image path
import ReactLogo from '../assets/ReactJs.png';  // Example image path

const useStyles = makeStyles({
  root: {
    margin: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  orbitContainer: {
    position: 'relative',
    width: '600px',
    height: '600px',
  },
  orbit: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    border: '1px solid gray',
    transform: 'translate(-50%, -50%)',
  },
  orbit1: {
    width: '200px',
    height: '200px',
    animation: '$rotateClockwise 30s linear infinite',
  },
  orbit2: {
    width: '300px',
    height: '300px',
    animation: '$rotateAntiClockwise 30s linear infinite',
  },
  orbit3: {
    width: '400px',
    height: '400px',
    animation: '$rotateClockwise 30s linear infinite',
  },
  planet: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      transform: 'rotate(0deg)',  // Prevents image rotation
    },
  },
  planet1: { top: '0', left: '50%', transform: 'translate(-50%, 0)' },
  planet2: { top: '50%', left: '0', transform: 'translate(0, -50%)' },
  planet3: { top: '100%', left: '50%', transform: 'translate(-50%, -100%)' },
  planet4: { top: '50%', left: '100%', transform: 'translate(-100%, -50%)' },
  '@keyframes rotateClockwise': {
    from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
    to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
  },
  '@keyframes rotateAntiClockwise': {
    from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
    to: { transform: 'translate(-50%, -50%) rotate(-360deg)' },
  },
});

export const OrbitAnimation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.orbitContainer}>
        <div className={`${classes.orbit} ${classes.orbit1}`}>
          <div className={`${classes.planet} ${classes.planet1}`}>
            <img src={Html} alt="Html Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet2}`}>
            <img src={Css} alt="Css Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet3}`}>
            <img src={Js} alt="Js Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet4}`}>
            <img src={ReactLogo} alt="React Planet" />
          </div>
        </div>
        <div className={`${classes.orbit} ${classes.orbit2}`}>
          <div className={`${classes.planet} ${classes.planet1}`}>
            <img src={Html} alt="Html Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet2}`}>
            <img src={Css} alt="Css Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet3}`}>
            <img src={Js} alt="Js Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet4}`}>
            <img src={ReactLogo} alt="React Planet" />
          </div>
        </div>
        <div className={`${classes.orbit} ${classes.orbit3}`}>
          <div className={`${classes.planet} ${classes.planet1}`}>
            <img src={Html} alt="Html Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet2}`}>
            <img src={Css} alt="Css Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet3}`}>
            <img src={Js} alt="Js Planet" />
          </div>
          <div className={`${classes.planet} ${classes.planet4}`}>
            <img src={ReactLogo} alt="React Planet" />
          </div>
        </div>
      </div>
    </div>
  );
};
