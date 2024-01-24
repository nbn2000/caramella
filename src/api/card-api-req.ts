import api from "./index";
import { CARD } from "./urls";

// card api
export const cardApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleCard: builder.query({
      query: (id: string) => `${CARD.GETSINGLECARD}/${id}`,
      transformResponse: (data: any) => data.innerData,
    }),
    getNewThreeCard: builder.query({
      query: () => `${CARD.GETTHREENEWCARD}`,
      transformResponse: (data: any) => data.innerData,
    }),
  }),
});

export const { useLazyGetSingleCardQuery, useGetNewThreeCardQuery } =
  cardApiReq;
