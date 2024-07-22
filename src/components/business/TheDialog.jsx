import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export function TheDialog(props) {
  const { selectedValue, onClose, open } = props;
  const styles = useStyles()

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog style={{ margin: '0 !important' }} onClose={handleClose} open={open}>
      <DialogTitle id="alert-dialog-title" >
        {selectedValue?.name}
      </DialogTitle>
      <DialogContent className={styles.container}>
        <div style={{ marginBottom: '12px' }}>
          {selectedValue?.skills?.map((skill) =>
            <Chip label={skill} style={{ margin: '10px 10px 0 0' }} />
          )}
        </div>
        <Typography>{selectedValue?.text}</Typography>
        <div style={{ marginTop: '20px' }}>
          <Typography variant='h6'>What I Did</Typography>
          <ul>
            {selectedValue?.whatIDid?.map(point =>
              <li>{point}</li>)}
          </ul>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {selectedValue?.link &&
            <Button onClick={() => window.open(selectedValue?.link)} autoFocus>
              View
            </Button>
          }
        </DialogActions>
      </DialogContent>
    </Dialog >
  );
}

const useStyles = makeStyles({
  container: {
    width: 'auto',
  }
})

