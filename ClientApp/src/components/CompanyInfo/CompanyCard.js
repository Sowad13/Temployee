import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./companyinfo.css";

const CompanyCard = (props) => {
  const useStyles = makeStyles({
    root: {
      Width: 1000,
      borderRadius: 12,
    },
    media: {
      height: 200,
    },
  });

  const chipStyle = makeStyles((theme) =>
    createStyles({
      root: {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        "& > *": {
          margin: theme.spacing(0.5),
        },
      },
    })
  );

  const classes = useStyles();
  const chipClass = chipStyle();

  return (
    <div className="col-xl-4 col-md-6 col-sm-12 body_padding">
      <Card className={classes.root}>
        <CardActionArea onClick={props.oncardClick}>
          <CardMedia
            className={classes.media}
            image="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h6" component="h5">
              {props.name}
            </Typography>
            {props.status ? (
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.status}
              </Typography>
            ) : (
              ""
            )}

            <Typography variant="subtitle2">Duration:</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.months} months
            </Typography>

            <Typography variant="subtitle2">Price:</Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              $ {props.price}
            </Typography>
            <Typography variant="subtitle2">Expert Level:</Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.level}
            </Typography>
            <Typography variant="subtitle2">Description:</Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.des}
            </Typography>
            <div className={chipClass.root}>
              {props.tags
                ? props.tags.map((h, i) =>
                    i < 3 ? (
                      <Chip label={h} color="primary" size="medium" />
                    ) : (
                      ""
                    )
                  )
                : ""}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CompanyCard;
