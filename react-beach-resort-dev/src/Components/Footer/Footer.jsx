import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2> <a href="https://icdsupweb.org/chhattisgarh-police-bharti/">Chattisgarh Police</a> | <a href="https://www.iiitnr.ac.in/">IIIT Naya Raipur</a></h2>
      <p>
       <h3> <a href="https://hackmanthan.com/"><center>HackManthan <span>{year}</span></center></a> </h3>
      </p>
    </footer>
  );
}
