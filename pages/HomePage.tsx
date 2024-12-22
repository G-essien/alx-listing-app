//import files
import React from "react";
import { PROPERTYLISTINGSAMPLE } from "../constants/index";
import PropertyCard from "./PropertyCard";
import Layout from "../components/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
