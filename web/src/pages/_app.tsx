import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Toast from "../components/toast/Toast";
import { LoginProvider, ShowPopupProvider } from "../Context/Provider";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ShowPopupProvider>
        <LoginProvider>
          <Component {...pageProps} />
          <Toast />
        </LoginProvider>
      </ShowPopupProvider>
    </ChakraProvider>
  );
}

export default MyApp;
