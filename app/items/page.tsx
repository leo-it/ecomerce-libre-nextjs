import Link from "next/link";
import api from "../api";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { results } = await api.item.search(searchParams.search);

  return (
    <section>
      <article className="grid gap-4">
        {results.map((item) => (
          <Link href={`/items/${item.id}`} className="flex gap-" key={item.id}>
            <img alt={item.title} src={item.thumbnail} />
            <div>
              <p className="text-xl font-bold">
                {Number(item.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: item.currency_id,
                })}
              </p>
              <p>{item.title}</p>
            </div>
            {/* <span className="lowercase ml-auto txt-sm opacity-50">
              {item.seller_adress?.city?.name}
            </span> */}
          </Link>
        ))}
      </article>
    </section>
  );
}
