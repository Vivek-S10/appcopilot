import React from 'react';
import './PropertyCard.css'; // Assuming you will create a CSS file for styling

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h2 className="property-title">{property.title}</h2>
        <p className="property-location">{property.location}</p>
        <p className="property-price">${property.price}</p>
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;