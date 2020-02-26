import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  clothImg: string;
  price: string;
  category: number;
};

type categoryInfo = {
  categoryNum: number;
  categoryName: string;
};

const categoryList: categoryInfo[] = [
  {
    categoryNum: 1,
    categoryName: "outer"
  },
  {
    categoryNum: 2,
    categoryName: "top"
  },
  {
    categoryNum: 3,
    categoryName: "bottom"
  }
];

const useStyles = makeStyles({
  clothItem: {
    textDecoration: "none"
  },
  item: {
    padding: 20
  },
  paper: {
    width: 300,
    height: 330
  },
  clothsImgBox: {
    height: 200,
    width: "100%",
    textAlign: "center"
  },
  clothsImg: {
    height: 200
  },
  body: {
    padding: 10
  },
  bodyHeader: {
    padding: 10,
    display: "flex"
  },
  infoBox: {
    display: "flex"
  },
  brand: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1
  },
  category: {
    fontSize: 15,
    fontWeight: 500,
    color: "#A4A4A4"
  },
  title: {
    fontSize: 13,
    padding: 10
  },
  price: {
    fontSize: 13,
    padding: 10,
    flex: 1
  }
});

const ClothsItem = ({
  id,
  brand,
  title,
  clothImg,
  price,
  category
}: ClothsType) => {
  const classes = useStyles();
  return (
    <div className="cloths-item">
      <Link to={`/square-front/detail/${id}`} className={classes.clothItem}>
        <Box className={classes.item}>
          <Paper square={false} elevation={2} className={classes.paper}>
            <Box>
              <Box className={classes.clothsImgBox}>
                <img
                  alt="cloths"
                  src={clothImg}
                  className={classes.clothsImg}
                />
              </Box>
            </Box>
            <Box className={classes.body}>
              <Box className={classes.bodyHeader}>
                <Box className={classes.brand}>{brand}</Box>
                {categoryList.map(
                  ({ categoryNum, categoryName }: categoryInfo) => (
                    <Box className={classes.category} key={categoryNum}>
                      {categoryNum === category ? categoryName : ""}
                    </Box>
                  )
                )}
              </Box>
              <Box className={classes.title}>{title}</Box>
              <Box className={classes.infoBox}>
                <Box className={classes.price}>{price} 원</Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Link>
    </div>
  );
};

export default ClothsItem;
