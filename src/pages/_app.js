import "@/styles/globals.css";
import ScanlinesContext from "@/context/scanlinesContext";


export default function App({ Component, pageProps }) {
  return (
    <ScanlinesContext>
      <Component {...pageProps} />
    </ScanlinesContext>
);
}
