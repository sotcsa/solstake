import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, IconButton, Grid, Dialog, DialogTitle, DialogActions, DialogContent, makeStyles, Theme, createStyles, Snackbar, SvgIcon } from '@material-ui/core';
import { ReactComponent as SolstakeLogoMainSvg } from '../assets/logo-white.svg';
import { GitHub } from '@material-ui/icons';
// import { GitHub, Twitter, YouTube } from '@material-ui/icons';
// import { ReactComponent as Discord } from '../assets/discord-brands.svg';
import { Alert } from '@material-ui/lab';
import { Color } from '@material-ui/lab/Alert';

const styles = {
    smallIcon: {
    fontSize: "1.4em",
    color: "#0C2533"
  },
  mediumIcon: {
    fontSize: "1.5em",
    color: "#0C2533"
  },
  largeIcon: {
    fontSize: "1.7em",
    color: "#0C2533"
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
  }),
);

interface Message {
  open: boolean;
  content: string;
  severity: Color;
};

export function Landing() {
    const [message, setMessage] = useState<Message>({open: false, content: '', severity: 'success'});
    const [open, setOpen] = useState(false);
    const [openVideo, setOpenVideo] = useState(false);
  
    function handleClose() {
      setOpen(false);
    }

    function handleCloseVideo() {
      setOpenVideo(false);
    }

    function handleCloseSnackbar() {
      setMessage({open: false, content: '', severity: 'success'});
    }

    const classes = useStyles();
  
    return (
      <div id="landing">
        <div className={classes.root}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            style={{minHeight: '100vh', textAlign: 'center', overflow: 'hidden'}}
          >
            <Grid item xs={10}>
              <div className="flex justify-center text-center p-0">
                <div className="w-10/12 sm:1/4 md:w-3/4 lg:w-2/3 xl:w-1/3 pt-5 md:pt-0">
                  <SolstakeLogoMainSvg />
                </div>
              </div>
              <Typography style={{visibility: 'hidden'}}>
                  Hack for non working svg scaling SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
              </Typography>

              <div className="font-display uppercase text-4half sm:text-5xl md:text-6xl text-solblue-dark dark:text-solblue font-bold leading-tight">
                <p className="inline px-2 md:block md:px-0">Stake your SOL</p>
                <p className="inline px-2 md:block md:px-0">manage accounts</p>
                <p className="inline px-2 md:block md:px-0">earn rewards</p>
              </div>

              <div className="uppercase text-solblue-dark dark:text-gray-300 text-2xl sm:text-3xl pt-3 md:font-light dark:font-normal">
                Staking Solana made easy
              </div>

              <Box m={4} />

                <div className="flex justify-center text-center pb-24">
                  <Link to="/app">
                    <div className="solBtnAcid font-bold">
                      <span className="text-md sm:text-xl p-2">Use Solstake</span>
                    </div>
                  </Link>
                </div>
    

              <div className="flex justify-center text-center pb-5">
                <div className="w-4/6 text-lg text-solblue-darker dark:text-gray-300">We’re just getting started around here. In the meantime stay updated on product releases, new features and more.</div>
              </div>
  
              <div>
                <IconButton
                  href="https://github.com/sotcsa/solstake"
                  rel="noopener noreferrer" target="_blank"
                >
                  <GitHub style={styles.smallIcon} />
                </IconButton>
                {/* <IconButton
                  onClick={() => setOpenVideo(true)}
                >
                  <YouTube style={styles.largeIcon} />
                </IconButton> */}
                {/* <IconButton
                  href="https://discord.gg/r5fZHdfu"
                  rel="noopener noreferrer" target="_blank"
                >
                  <SvgIcon style={styles.smallIcon}>
                    <Discord />
                  </SvgIcon>
                </IconButton> */}
                {/* <IconButton
                  href="https://twitter.com/solstakeio"
                  rel="noopener noreferrer" target="_blank"
                >
                  <Twitter style={styles.mediumIcon} />
                </IconButton> */}
              </div>
            </Grid>
          </Grid>
        </div>
        <Dialog
          title="Email sent!"
          fullWidth={true}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Email sent!</DialogTitle>
          <DialogContent>
            <Box m={1}>
              <Typography>
                Thank you for registering, we will get back to you when solstake is production ready
              </Typography>
            </Box>
          </DialogContent>
  
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openVideo}
          fullWidth
          maxWidth="md"
          onClose={handleCloseVideo}
        >
          <div className="videoWrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JUDG6j5ktW4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Dialog>
        {/* <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> */}
        <Snackbar open={message.open} autoHideDuration={10000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleClose} severity={message.severity}>
            {message.content}
          </Alert>
        </Snackbar>
      </div>
    );
  }