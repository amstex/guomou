import React from "react";


const PricingRow = ({ service, rate, duration }) => (
  <tr>
    <td>{service}</td>
    <td>{rate}</td>
    <td>{duration}</td>
  </tr>
);

export default PricingRow;
