import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { withApollo as CreateWithApollo } from "next-apollo";

const client = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: "http://localhost:4000/graphql" as string,
    credentials: "include",
    // headers: {
    //   cookie:
    //     (typeof window === "undefined"
    //       ? ctx.req?.headers.cookie
    //       : "undefined") || "",
    // },

    cache: new InMemoryCache({
      //   typePolicies: {
      //     Query: {
      //       fields: {
      //         posts: {
      //           keyArgs: [],
      //           merge(
      //             existing: PaginatedPost | undefined,
      //             incoming: PaginatedPost
      //           ): PaginatedPost {
      //             return {
      //               ...incoming,
      //               posts: [...(existing?.posts || []), ...incoming.posts],
      //             };
      //           },
      //         },
      //       },
      //     },
      //   },
    }),
  });

export const withApollo = CreateWithApollo(client as any);
