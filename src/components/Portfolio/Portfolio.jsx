import React from "react";
import "./Portfolio.css";
import { Box, Card, CardContent, Typography, CardActions } from "@mui/material";
import Grabjob from "../../Assets/Grabjob.png";
import codespace from "../../Assets/codespace.png";
import password from "../../Assets/password.png";
import weather from "../../Assets/weather.png";
import blog from "../../Assets/my blog.png"
import tic from "../../Assets/tic tac to.png"
import study from "../../Assets/study.png"
import razor from "../../Assets/Razorpay.png"
import auction from "../../Assets/AuctionBharat.png"

const boxstyle = {
  height: "100%",
  color: "white",
  backgroundColor: "#2c2c6c",
};

function Portfolio() {
  return (
    <section id="portfolio" data-aos="fade-up" data-aos-duration="3000">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="portfolio_cards">
      <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the box
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={auction}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
               MERN-based real-time auction platform for creating, managing, and bidding on auctions.
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/Auction-Platform-AuctionBharat"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://auctionbharat.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the box
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={Grabjob}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                A simple Job Portal application created with the help of MERN STACK and Tailwind.
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/grabjob_jobportal"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://grabjob-jobportal.onrender.com/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={codespace}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                Codespace a Simple code Editor Where anyone can write code and see output result.
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/CodeSpace-io-ap"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://codespace-io-ap.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={password}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                Password Generator, a simple web application to generate random passwords. 
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/Password-Generator-Application"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://passward-generator-ap.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={weather}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                My weather, a weather application to see current weather report of any location.
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center"}}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/My-Weather-Application"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://my-weather-ap.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={blog}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                My Blogs ,a blog website made using React.js an Redux Toolkit.
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/my-blogs"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://my-blogs-ap.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        
        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={tic}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                Tic Tac Toe Game Application created with the help of HTML CSS & Javascript.
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/Tic-Tac-Toe-Game-Application"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://tic-tac-toe-ap01.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={razor}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                Razorpay UI clone made with the help of HTML & Tailwind CSS .
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/Razorpay-UI-clone"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://razorpay-ui-clonne.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        
        <Box
          width="350px"
          height="380px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={study}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                 StudySync-UI a edu-tech website UI made with the help of HTML &  CSS .
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/AyanPal06/StudySync-UI"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://studysync-edu.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>





      </div>
    </section>
  );
}

export default Portfolio;