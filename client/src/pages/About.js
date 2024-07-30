import React from "react";
import { Layout } from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About Ecommerce App'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Shopify, your top source for electronics. Founded in
            2018 by Jane Doe, our passion for cutting-edge technology has driven
            us to provide the best gadgets and accessories worldwide. We
            prioritize quality, customer service, and innovation.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
