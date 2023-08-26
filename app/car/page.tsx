"use client";

import React, { useEffect, useState } from "react";

const Car = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    const items = localStorage.getItem("idsCar");
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <section>
      <article className="grid gap-4">
       {/*  {results.map((item) => (
          <>
            <Link
              href={`/items/${item.id}`}
              className="flex gap-"
              key={item.id}
            >
              <Card item={item} />
            </Link>
          </>
        ))} */}
      </article>
    </section>
  );
};

export default Car;
