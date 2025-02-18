import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



type ProductPurchase = {
    id: number;
    price: number;
}




type PurchasePayload = {
    products: ProductPurchase[];
    billing: {
      name: string,
      email: string,
      document: string
    },
    delivery: {
      email: string
    },
    payment: {
      card: {
        active: boolean,
        owner?: {
          name: string,
          document: string
        },
        name?: string,
        number?: string,
        expires?: {
          month: number;
          year: number;
        };
        code?: number;
      };
      installments: number;
    };
};



type PurchaseResponse = {
  orderId: string;


}


const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({

      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({

      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({

      query: () => 'acao'
    }),
    getRpgGames: builder.query<Game[], void>({

      query: () => 'rpg'
    }),
    getFightGames: builder.query<Game[], void>({

      query: () => 'luta'
    }),
    getSimulation: builder.query<Game[], void>({

      query: () => 'simulacao'
    }),
    getSports: builder.query<Game[], void>({

      query: () => 'esportes'
    }),
    getGame: builder.query<Game, string>({

      query: (id) => `jogos/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      }),
    })


  })
})

export const { usePurchaseMutation ,useGetFeaturedGameQuery, useGetOnSaleQuery, useGetSoonQuery, useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationQuery, useGetSportsQuery, useGetGameQuery  } = api
export default api