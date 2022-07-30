import "../styles/globals.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Provider } from "react-redux";
import { store } from "../store/index";
import Layout from "../components/Layout";
import { auth } from "../firebase/clientApp";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(() => auth.currentUser || undefined);
  const loadingUser = user === undefined;

  useEffect(() => auth.onAuthStateChanged(setUser), []);

  if (loadingUser) return null; // or show loading icon, etc.

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
