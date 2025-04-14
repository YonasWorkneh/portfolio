export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLLIElement>,
  sectionId: string,
  onSetIsOpen?: (value: boolean) => void
) => {
  e.preventDefault();
  onSetIsOpen?.(false);
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
