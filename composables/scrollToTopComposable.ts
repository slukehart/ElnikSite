
export default function scrollToTopComposable() {
  const scrollToSection = (id: HTMLElement | null | undefined) => {
    if (id) {
      id.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    scrollToSection,
  }
}