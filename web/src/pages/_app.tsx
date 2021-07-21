import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { ShowPopupProvider } from "../Context/Provider";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ShowPopupProvider>
        <Component {...pageProps} />
      </ShowPopupProvider>
    </ChakraProvider>
  );
}

export default MyApp;
