import React from "react";
import { PropertyProps } from "../interfaces/index";

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="border rounded-md shadow-md p-4">
      <img src={property.image} alt={property.name} className="rounded-md" />
      <h3 className="text-lg font-bold mt-2">{property.name}</h3>
      <p>{property.address.city}, {property.address.state}, {property.address.country}</p>
      <p>Rating: {property.rating}</p>
      <p>Price: ${property.price} / night</p>
      <p>Offers: {property.offers.bed} Beds, {property.offers.shower} Showers, {property.offers.occupants} Occupants</p>
    </div>
  );
};

export default PropertyCard;
