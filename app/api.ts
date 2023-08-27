const api = {
  item: {
    fetch: async (id: string) => {
      const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(
        (res) =>
          res.json() as Promise<{
            id: string;
            title: string;
            thumbnail: string;
            price: number;
            currency_id: string;
            condition: string;
            sold_quantity: number;
          }>
      );
      const { plain_text } = await fetch(
        `https://api.mercadolibre.com/items/${id}/desciption`
      ).then(
        (res) =>
          res.json() as Promise<{
            plain_text: string;
          }>
      );
      return { ...item, description: plain_text };
    },
    search: (query: string, limit:number) =>
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`
      ).then(
        (res) =>
          res.json() as Promise<{
            results: {
              id: string;
              title: string;
              thumbnail: string;
              price: number;
              currency_id: string;
              seller_adress: {
                city: {
                  name: string;
                };
              };
            }[];
          }>
      ),
  },
};
export default api;
