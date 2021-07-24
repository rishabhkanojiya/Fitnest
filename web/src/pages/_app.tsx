import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Toast from "../components/toast/Toast";
import NewWorkout from "../components/workout";
import {
  LoginProvider,
  NewWorkoutProvider,
  ShowPopupProvider,
} from "../Context/Provider";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ShowPopupProvider>
        <NewWorkoutProvider>
          <LoginProvider>
            <Component {...pageProps} />
            <Toast />
          </LoginProvider>
        </NewWorkoutProvider>
      </ShowPopupProvider>
    </ChakraProvider>
  );
}

export default MyApp;
