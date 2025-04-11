import React from 'react';

function PropertyDetail({ property }) {
  return (
    <div className="property-detail">
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      <button>Contact Owner</button>
    </div>
  );
}

export default PropertyDetail;