import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Paper,
  Box,
  CardMedia,
  img
} from "@mui/material";
import React, { useState } from "react";
import "./Work.css";
import MyImage from "../../assets/greattodo.jpg";

export const Work = () => {
  const [boxes, setBoxes] = useState([
    {
      id:1,
      title: "Card 1",
      content: "This is the content of card 1.",
      hrefImg:require("../../assets/greattodo.jpg"),
      hrefLink:"https://robqocharyan123.github.io/greatodo/"
    },
    {
      id:2,
      title: "Card 2",
      content: "This is the content of card 2.",
      hrefImg:require("../../assets/online-shop.png"),
      hrefLink:"https://tovaradar.ru/"
    },
    {
      id:3,
      title: "Card 3",
      content: "This is the content of card 3.",
      hrefImg:require("../../assets/todo.png"),
      hrefLink:"https://robqocharyan123.github.io/todo/"
    },
    {
      id:4,
      title: "Card 4",
      content: "This is the content of card 4.",
      hrefImg:require("../../assets/pinnacle.png"),
      hrefLink:"https://robqocharyan123.github.io/lunafox/"
    },
    {
      id:5,
      title: "Card 5",
      content: "This is the content of card 5.",
      hrefImg:require("../../assets/mogo.png"),
      hrefLink:"https://robqocharyan123.github.io/"
    },
    {
      id:5,
      title: "Card 6",
      content: "This is the content of card 6.",
      hrefImg:require("../../assets/food.jpg"),
      hrefLink:"https://robqocharyan.github.io/"
    }
  ]);
  return (
    <div className="work">
      <div className="work_section">
        <div className="work_name">
          <h1>PORTFOLIO</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Container>
          <Grid
            container
            spacing={3}
            gap={10}
            sx={{
              paddingTop: 10,
            }}
          >
            {boxes.map((box, index) => (
              <Grid item xs={12} md={3} key={index}>
                
                <Paper elevation={3}>
                
                  <Box >
                    
                  <img
                      
                      width={'90%'}
                      height={'80%'}
                      src={box.hrefImg}
                      alt="Image"
                    />
                    <Button
                      variant="contained"
                      href={box.hrefLink}
                      target="_blank"
                      cursor="pointer"
                      sx={{marginLeft:'50%'}}
                    >
                      Link
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};
