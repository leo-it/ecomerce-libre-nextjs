// import Card from "../Card";

import Link from "next/link";
import api from "@/app/api";

const LastSearch = async () => {
  let ultimaBusqueda = null;

  if (typeof window !== "undefined") {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      ultimaBusqueda = await api.item.search(lastSearch, 3);
    }
  }

  return (
    <div>
      {ultimaBusqueda ? (
        <section>
          <h3>Basado en tu ultima busqueda</h3>
          <article className="grid grid-cols-3 gap-4">
            {ultimaBusqueda?.results?.map((item) => (
              <>
                <Link
                  href={`/items/${item.id}`}
                  className="flex gap-"
                  key={item.id}
                >
                 {/*  <Card item={item} /> */}
                </Link>
              </>
            ))}
          </article>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LastSearch;
