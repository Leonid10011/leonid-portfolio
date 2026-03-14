// lib/utils.ts
export const scrollToId = (id: string) => {
  // Ensure this code only runs in the browser
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  } else {
    console.warn(`Element with id "${id}" not found for scrolling.`);
  }
};
