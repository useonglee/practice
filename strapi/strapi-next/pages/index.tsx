import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Home = () => {
  async function testAPIs() {
    const testAPI = await fetch("http://localhost:1337/graphql")
      .then((res) => res.json())
      .then((res) => res.data);

    return testAPI;
  }

  console.log(testAPIs());

  // console.log("testAPI: ", testAPI);
  return <div>test</div>;
};

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: "http://localhost:1337/graphql",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query {
//         tests {
//           data {
//             attributes {
//               test_name
//               test_position
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       tests: data.tests,
//     },
//   };
// }

export default Home;
