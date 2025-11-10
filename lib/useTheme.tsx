// "use client";
// import { useEffect, useState } from "react";

// export function useTheme() {
//   const [theme, setTheme] = useState<'light'|'dark'>(() =>
//     typeof window !== "undefined" && localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
//   );

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === "dark") {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

//   return { theme, setTheme };
// }
