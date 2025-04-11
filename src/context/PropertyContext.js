import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  const selectProperty = (property) => {
    setSelectedProperty(property);
  };

  const clearSelectedProperty = () => {
    setSelectedProperty(null);
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        addProperty,
        selectedProperty,
        selectProperty,
        clearSelectedProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};