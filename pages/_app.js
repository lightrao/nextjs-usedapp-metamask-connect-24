import "@/styles/globals.css";
import { DAppProvider } from "@usedapp/core";

import { contractAddress } from "../constants/contract-address";

const config = {
  multicallAddresses: [contractAddress],
};

export default function App({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}
