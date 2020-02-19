import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

type ClothsType = {
  id: number;
  title: string;
  detail: string;
  date: string;
  clothsImg: any;
};

const useStyles = makeStyles({
  item: {
    padding: 30
  },
  paper: {
    width: 400,
    height: 300
  },
  clothsImgBox: {
    height: 200,
    width: "100%"
  },
  clothsImg: {
    height: 200,
    width: 400
  },
  header: {
    padding: 10,
    display: "flex"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1
  },
  date: {
    fontSize: 15,
    fontWeight: 200,
    color: "#D8D8D8"
  },
  detail: {
    fontSize: 15,
    padding: 10
  }
});

const ClothsItem: FC<ClothsType> = ({ id, title, detail, date, clothsImg }) => {
  const classes = useStyles();
  return (
    <div className="cloths-item">
      <Box className={classes.item}>
        <Paper square={false} elevation={2} className={classes.paper}>
          <Box className={classes.clothsImgBox}>
            <img alt="cloths" src={clothsImg} className={classes.clothsImg} />
          </Box>
          <Box className={classes.header}>
            <Box className={classes.title}>{title}</Box>
            <Box className={classes.date}> {date} </Box>
          </Box>
          <Box className={classes.detail}>{detail}</Box>
        </Paper>
      </Box>
    </div>
  );
};

export default ClothsItem;