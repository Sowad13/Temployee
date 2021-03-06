import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GET, GET_AUTH } from "../../api";
import { Typography } from "@material-ui/core";
import UserAppBar from "../UserNavbar";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    //backgroundColor: '#6c63ff',
    backgroundColor: "#ffffff",
    width: 400,
    height: 300,
    alignItems: "center",

    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 6, 6),
  },
  bt: {
    margin: 20,
    color: "#6C63FF",
  },
}));

const Empty = () => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET_AUTH(`empty/auth`);
        console.log(data);
        if (data == "nothing") setOpen(true);
        else if (data == "freelancer") window.location.href = "/company-info";
        else if (data == "company") window.location.href = "/find-talent";
      } catch (e) {
        console.log(e);
      }
    };
    exe();
  }, []);

  const classes = useStyles();

  return (
    <section>
      <UserAppBar />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        //onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              color="secondary"
            >
              Please Select if you are Freelancer or a company
            </Typography>
            <br />
            <br />
            <Button
              variant="outlined"
              className={classes.bt}
              color="inherit"
              onClick={() => {
                setOpen(false);
                window.window.location.href = "/personal_info";
              }}
            >
              Freelancer
            </Button>
            <Button
              variant="outlined"
              className={classes.bt}
              color="inherit"
              onClick={() => {
                setOpen(false);
                window.window.location.href = "/input-company";
              }}
            >
              Company
            </Button>
          </div>
        </Fade>
      </Modal>
    </section>
    // <Modal
    //   aria-labelledby="transition-modal-title"
    //   aria-describedby="transition-modal-description"
    //   className={classModal.modal}
    //   open={open}
    //   closeAfterTransition
    //   BackdropComponent={Backdrop}
    //   BackdropProps={{
    //     timeout: 500,
    //   }}
    // >
    //   <Fade in={open}>
    //     <div className={classModal.paper}>
    //       <h2 id="transition-modal-title">
    //         Please Select if you are Freelancer or a company
    //       </h2>
    //       <Button
    //         color="inherit"
    //         onClick={() => {
    //           setOpen(false);
    //           window.window.location.href = "/personal_info";
    //         }}
    //       >
    //         Freelancer
    //       </Button>
    //       <Button
    //         color="inherit"
    //         onClick={() => {
    //           setOpen(false);
    //           window.window.location.href = "/user-profile";
    //         }}
    //       >
    //         Company
    //       </Button>
    //     </div>
    //   </Fade>
    // </Modal>
  );
};
export default Empty;
