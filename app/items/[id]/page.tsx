import api from "../../api";

export default async function itemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await api.item.fetch(id);

  return (
    <section className="grid gap-2">
      <img alt={item.title} src={item.thumbnail} />
      <p className="text-xl font-bold">
        {Number(item.price).toLocaleString("es-AR", {
          style: "currency",
          currency: item.currency_id,
        })}
      </p>
      <p>{item.title}</p>
      <hr />
      <p>{item.description}</p>
    </section>
  );
}
