import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  

  return (
    <>
      <ToastContainer position="top-center" />
      <Provider store={store}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Provider>
      <Analytics />
    </>
  );
}
