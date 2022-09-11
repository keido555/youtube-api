import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AdminFlagProvider } from "src/components/providers/AdminFlagProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdminFlagProvider>
      <Component {...pageProps} />
    </AdminFlagProvider>
  );
}

export default MyApp;
