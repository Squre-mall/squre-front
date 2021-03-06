import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";
import axios from "axios";
import form from "./img/carbon.png";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  description: string;
  clothImgUrl: string;
  pageUrl: string;
  price: string;
  category: string;
};

type ClothsResponse = {
  data: ClothsType[];
};

const useStyles = makeStyles({
  root: {
    width: 550,
    padding: 10
  },
  imgRoot: {
    width: "100%"
  },
  formImg: {
    width: "100%"
  },
  field: {
    width: 500,
    padding: 30
  },
  title: {
    padding: "0 15px"
  },
  textField: {
    padding: 20
  }
});

const TestPost = () => {
  const [open, setOpen] = useState(true);
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clothImgUrl, setClothImgUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const classes = useStyles();

  const fetchClothsPost = cloths => {
    axios.post("https://squaremall.pythonanywhere.com/cloth/", cloths);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitValue = () => {
    const cloths = {
      brand: brand,
      title: title,
      description: description,
      clothImgUrl: clothImgUrl,
      pageUrl: pageUrl,
      price: price,
      category: parseInt(category)
    };
    console.log(cloths);

    fetchClothsPost(cloths);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">POST</DialogTitle>
        <DialogContent className={classes.root}>
          <DialogContentText className={classes.title}>
            Sample
          </DialogContentText>
          <Box className={classes.imgRoot}>
            <img src={form} alt="json form" className={classes.formImg} />
          </Box>
          <Box className={classes.field}>
            <TextField
              id="standard-textarea"
              label="Brand"
              placeholder="Brand"
              multiline
              value={brand}
              onChange={e => setBrand(e.target.value)}
              className={classes.textField}
            />
            <TextField
              id="standard-textarea"
              label="Title"
              placeholder="title"
              multiline
              value={title}
              onChange={e => setTitle(e.target.value)}
              className={classes.textField}
            />
            <TextField
              id="standard-textarea"
              label="Description"
              placeholder="description"
              multiline
              value={description}
              onChange={e => setDescription(e.target.value)}
              className={classes.textField}
            />
            <TextField
              id="standard-textarea"
              label="ImgUrl"
              placeholder="Img url"
              multiline
              value={clothImgUrl}
              onChange={e => setClothImgUrl(e.target.value)}
              className={classes.textField}
            />
            <TextField
              id="standard-textarea"
              label="page url"
              placeholder="page url"
              multiline
              value={pageUrl}
              onChange={e => setPageUrl(e.target.value)}
              className={classes.textField}
            />
            <TextField
              id="standard-textarea"
              label="Price"
              placeholder="Price"
              multiline
              value={price}
              onChange={e => setPrice(e.target.value)}
              className={classes.textField}
            />
            <TextField
              id="standard-textarea"
              label="Category"
              multiline
              value={category}
              onChange={e => setCategory(e.target.value)}
              className={classes.textField}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitValue} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TestPost;
