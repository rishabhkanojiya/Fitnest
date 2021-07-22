export {};

// import configs from "./configs";

// export const setCookie = (c_name, value, exDays = null) => {
//   let exDate = new Date();
//   exDate.setDate(exDate.getDate() + exDays);
//   let c_value =
//     escape(value) +
//     (exDays === null
//       ? ";"
//       : "; expires=" +
//         exDate.toUTCString() +
//         ";domain=" +
//         configs.sDomain +
//         ";path=/");
//   let c_WithoutDomain =
//     escape(value) +
//     (exDays === null ? ";" : "; expires=" + exDate.toUTCString() + ";path=/");
//   document.cookie = c_name + "=" + c_value;
//   document.cookie = c_name + "=" + c_WithoutDomain;
// };

// export const getCookie = (c_name) => {
//   let i,
//     x,
//     y,
//     cookiesArray = document.cookie.split(";");
//   for (i = 0; i < cookiesArray.length; i++) {
//     x = cookiesArray[i].substr(0, cookiesArray[i].indexOf("="));
//     y = cookiesArray[i].substr(cookiesArray[i].indexOf("=") + 1);
//     x = x.replace(/^\s+|\s+$/g, "");
//     if (x === c_name) {
//       return window.decodeURIComponent(y);
//     }
//   }
// };

// export const deleteCookie = (name) => {
//   setCookie(name, "", -1);
// };

// export const getLoginCookie = () => {
//   let cookie = getCookie(configs.COOKIE_GM);
//   let returnCookie = null;
//   try {
//     if (cookie) {
//       cookie = window.decodeURIComponent(cookie);
//       let parsedCookie = JSON.parse(cookie);
//       if (parsedCookie) {
//         returnCookie = parsedCookie;
//       }
//     }
//     return returnCookie;
//   } catch (error) {
//     if (cookie) {
//       cookie = window.decodeURIComponent(cookie);
//       let cookieSpecial = cookie.replace(
//         /[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F-\x9F]/g,
//         ""
//       );
//       let parsedCookie = JSON.parse(cookieSpecial);
//       if (parsedCookie) {
//         returnCookie = parsedCookie;
//       }
//     }

//     return returnCookie;
//   }
// };
