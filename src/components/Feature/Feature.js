import React from "react";
import "./Feature.css";
import ArrIcon from "../../Assets/Svgs/ArrIcon";
import CrossIcon from "../../Assets/Svgs/CrossIcon";
const analytices = [
  {
    value: 182,
    txt: "total dog parks",
  },
  {
    value: 33,
    txt: "total water parks",
  },
  {
    value: 117,
    txt: "total fenced dog parks",
  },
  {
    value: 26,
    txt: "total hiking tails",
  },
  {
    value: 48,
    txt: "dog fields",
  },
  {
    value: 18,
    txt: "dog agility parks",
  },
];

const features = [
  {
    feature: "Designed for private play",
  },
  {
    feature: "Rentable by the hour",
  },
  {
    feature: "Off leash options",
  },
  {
    feature: "Very large and/or fully fenced options",
  },
  {
    feature: "Pricing",
    snifSpot: "$5 - $15 per dog per hour",
    perk: "Free",
  },
];

const Feature = () => {
  return (
    <div
      style={{
        width: "75%",
        margin: "0  auto",
        fontFamily: "Work Sans",
      }}
    >
      <h1>Why rent a private dog park in Seattle, Washington?</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {analytices.map((target, index) => (
          <div key={index}>
            <div
              style={{
                fontSize: "42px",
                fontWeight: "700",
                color: "#3aa648",
              }}
            >
              {target.value}
            </div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              {target.txt}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "50px" }}>
        <table className="w-100">
          <tr className="table_heading">
            <th style={{ marginBottom: "100px" }} colspan="4">
              Features
            </th>
            <th colspan="2">Sniffspot</th>
            <th colspan="2">Public park</th>
          </tr>
          <tbody
            style={{
              marginTop: "20px",
            }}
          >
            {features.map((target, index) => (
              <tr>
                <td className="table_row" colspan="4">
                  {target.feature}
                </td>
                <td className="table_row" colspan="2">
                  <ArrIcon
                    style={{ color: "color: rgb(58, 166, 72) !important" }}
                  />
                </td>
                <td className="table_row" colspan="2">
                  <CrossIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feature;
