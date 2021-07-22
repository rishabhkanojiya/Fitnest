import { isServer } from "./actions";

let configs = {
  sDomain: isServer ? undefined : window.location.hostname,

  COOKIE_GM: "qid",

  enumUrl: {
    home: {
      link: "/home",
      title: "Home",
    },
    profile: {
      link: "/profile",
      title: "Profile",
    },
    history: {
      link: "/history",
      title: "History",
    },
    workout: {
      link: "/workout",
      title: "Workout",
    },
    exercises: {
      link: "/exercise",
      title: "Exercise",
    },
    login: {
      link: "/login",
      title: "Login",
    },
    register: {
      link: "/register",
      title: "Register",
    },
    logout: {
      link: "/logout",
      title: "Logout",
    },
  },
};

export default configs;
