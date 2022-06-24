import Head from "next/head";
import HomePage from "../components/pages/home/HomePage";
import HeaderImage from "../components/sections/HeaderImage";

export default function Home() {
  return <HomePage />;
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
