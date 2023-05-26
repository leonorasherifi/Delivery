import React from "react";
import Layout from "../component/Layout";
import { Box, Button, Typography } from "@mui/material";
import { Route, Link, Routes, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Prishtina Food Delivery</Typography>
        <p>
          Please feel free to contact us using the information below:
          <br /> <br /> 
         Address: Rr.Ushin Kovaqica, Pristina Kosovo 10000
          <br />
          Phone: (043) 555-555
          <br />
          Email: info@delivery.com
          <br />
          Hours of Operation:
          <br />
          Monday - Friday: 11am - 10pm
          <br />
          Saturday - Sunday: 9am - 11pm
          <br />      <br /> 
          We also welcome you to make purchases, which can be made by phone or email. We
          look forward to hearing from you and hope to receive orders soon!
        </p>
      </Box>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography>
          <form>
            <label
              htmlFor="message"
              style={{ fontWeight: "bold", color: "black" }}
            >
              <h3>Send us your feedback:</h3>
            </label>
            <textarea id="message" name="message" rows="3"></textarea>
            <br />
            <Button
              style={{ backgroundColor: "blue", color: "white" }}
              type="submit"
            >
              Submit
            </Button>{" "}
          </form>{" "}
          <br />
          <button onClick={goBack}> Go back</button>
        </Typography>
      </Box>
    </Layout>
  );
};

export default Contact;