import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CatalogProps {
  title?: string;
}

const cardStyle = {
  display: "flex",
  width: "220px",
  border: "1px solid gray",
  flexDirection: "column" as const, // Update the type of flexDirection
  alignItems: "center",
};

const Catalog = ({ title = "Go back" }: CatalogProps) => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setList(data.slice(0, 10)); // Use `slice` instead of `splice`
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Link href="/">{title}</Link>
      <div
        style={{
          display: "flex",
          width: "750px",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "25px",
        }}
      >
        {list.map((d) => {
          return (
            <div key={d.id} style={cardStyle}>
              <p>{d.title}</p>
              <img width={200} src={d.url} alt={d.title} />{" "}
              {/* Added alt text for accessibility */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
