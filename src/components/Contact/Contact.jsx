import React from "react";
import "./contact.css";
import {
  Box,
  TextField,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRef } from "react";

import emailjs from "emailjs-com";
import { Code } from "@mui/icons-material";

const style = {
  backgroundColor: "#2c2c6c",
  color: "white",
  padding: ".625rem",
  marginBottom: "1.25rem",
  borderRadius: "1rem",
};

const textstyle = {
  input: {
    color: "white",
  },
};
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pzacg5i', 'template_g8fff3c', form.current, '0Y1j3BwjIEwdyE3D9')
    .then(
      () => {
        console.log('SUCCESS!');
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };

  const textInput = React.useRef(null);

  return (
    <section id="contact" data-aos="fade-up" data-aos-duration="1500">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="contact_container">
        <div className="contact">
          <Box width="18.75rem">
            <Card style={style}>
              <CardContent>
                <EmailIcon
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginBottom: ".625rem",
                  }}
                />
                <Typography variant="h6" align="center">
                  Email
                </Typography>
                <Typography variant="subtitle1" align="center">
                ayanpaljob@gmail.com
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open("mailto:ayanpaljob@gmail.com")
                  }
                  color="primary"
                  mt={1}
                >
                  Send a Message
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box width="18.75rem">
            <Card style={style}>
              <CardContent>
                < Code
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginBottom: ".625rem",
                  }}
                />
                <Typography variant="h6" align="center">
                  GFG Codeing Profile
                </Typography>
                <Typography variant="subtitle1" align="center">
                palayan
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://www.geeksforgeeks.org/user/palayan/")
                  }
                  color="primary"
                  mt={1.5}
                >
                  Visit Profile
                </Typography>
              </CardContent>
            </Card>
          </Box>


          <Box width="18.75rem">
            <Card style={style}>
              <CardContent>
                <LinkedInIcon
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginBottom: ".625rem",
                  }}
                />
                <Typography variant="h6" align="center">
                  LinkedIn
                </Typography>
                <Typography variant="subtitle1" align="center">
                Ayan Pal
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ayan-pal-45732222a/"
                    )
                  }
                  color="primary"
                  mt={1.5}
                >
                  Visit Profile
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <Grid
              container
              spacing={3}
              lg={8}
              sm={12}
              xs={12}
              pl={3}
              className="gtid"
            >
              <Grid item xs={12}>
                <Box>
                  <TextField
                    label="Your Full Name"
                    name="from_name"
                    required
                    fullWidth
                    variant="outlined"
                    borderColor="rgba(77, 181, 255, .4)"
                    style={textstyle}
                    sx={{
                      "& label": { color: "rgba(255, 255, 255, 0.6)" },
                      "& fieldset": { borderColor: "rgba(77, 181, 255, .4)" },
                      input: { color: "white" },
                    }}
                    // inputRef={textInput}
                  >
                    {" "}
                  </TextField>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {/* style={{ border: "1px solid black" }} */}
                <TextField
                  inputRef={textInput}
                  name="from_email"
                  label="Email Address"
                  required
                  fullWidth
                  variant="outlined"
                  borderColor="rgba(77, 181, 255, .4)"
                  sx={{
                    "& label": { color: "rgba(255, 255, 255, 0.6)" },
                    "& fieldset": { borderColor: "rgba(77, 181, 255, .4)" },
                    input: { color: "white" },
                  }}
                  // onChange={(e) => {
                  //   console.log(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  label="Message"
                  name="message" 
                  fullWidth
                  sx={{
                    input: { color: "white" },
                    "& label": { color: "rgba(255, 255, 255, 0.6)" },
                    "& fieldset": { borderColor: "rgba(77, 181, 255, .4)" },
                  }}
                  inputProps={{ style: { color: "white" } }}
                  multiline={true}
                  rows={6}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "3rem",
                marginLeft: "1.5rem",
              }}
            >
              Submit{" "}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;