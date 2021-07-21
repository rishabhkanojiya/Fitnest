import { createContext } from "react";

export const ErrorContext = createContext(null);
ErrorContext.displayName = "ErrorData";

export const ShowPopupContext = createContext(null);
ShowPopupContext.displayName = "ShowPopupData";
