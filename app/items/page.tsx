import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
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
      {/* <div className="productBreadcrumb">
            <Breadcrumb categories={item.categories} />
          </div> */}
      <article className="grid gap-4">
        {results.map((item) => (
          <>
            <Link
              href={`/items/${item.id}`}
              className="flex gap-"
              key={item.id}
            >
              <Card item={item} />
            </Link>
          </>
        ))}
      </article>
    </section>
  );
}
