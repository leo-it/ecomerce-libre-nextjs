// @ts-nocheck
import Card from "./components/Card";
import Image from "next/image";
import Link from "next/link";
import api from "./api";
export default async function Home() {
  const alimentos = await api.item.search("comida", 3);
  const tecnologia = await api.item.search("celular", 3);
  const ropa = await api.item.search("jeans", 3);
  return (
    <>
      {/* <LastSearch/> no funciona del lado del cliente */}

      <section>
        <h3>Alimentos</h3>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {alimentos.results.map((item) => (
            <>
              <Link href={`/items/${item.id}`} className="flex " key={item.id}>
                <Card item={item} />
              </Link>
            </>
          ))}
        </article>
      </section>
      <section>
        {" "}
        <h3>Tecnologia</h3>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tecnologia.results.map((item) => (
            <>
              <Link href={`/items/${item.id}`} className="flex " key={item.id}>
                <Card item={item} />
              </Link>
            </>
          ))}
        </article>
      </section>
      <section>
        {" "}
        <h3>Ropa</h3>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ropa.results.map((item) => (
            <>
              <Link href={`/items/${item.id}`} className="flex " key={item.id}>
                <Card item={item} />
              </Link>
            </>
          ))}
        </article>
      </section>
    </>
  );
}
