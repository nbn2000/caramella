import api from "./index";
import { CART } from "./urls";
import { ErrorHandle } from "@/utils/ErrorHandle";
import { ShowUserMessage } from "@/utils/ShowUserMessage";

// cart api
export const cartApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (body: any) => ({
        url: `${CART.ADDTOCART}`,
        method: "POST",
        body,
      }),
      transformErrorResponse: (err) => ErrorHandle(err),
      transformResponse: (res: any) => {
        ShowUserMessage(res);
        return res?.innerData;
      },
      invalidatesTags: ["ADDTOCART"],
    }),

    getCart: builder.query({
      query: (id) => `${CART.GETCART}/${id}`,
      transformResponse: (res: any) => res?.innerData,
      providesTags: ["ADDTOCART"],
    }),

    changeAmount: builder.mutation({
      query: (body: any) => ({
        url: `${CART.CHANGEAMOUNT}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ADDTOCART"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useChangeAmountMutation,
} = cartApiReq;