import { createContext } from "react";

export const ErrorContext = createContext(null);
ErrorContext.displayName = "ErrorData";

export const ShowPopupContext = createContext(null);
ShowPopupContext.displayName = "ShowPopupData";

export const LoginContext = createContext(null);
LoginContext.displayName = "LoginData";

export const NewWorkoutContext = createContext(null);
NewWorkoutContext.displayName = "NewWorkoutData";
