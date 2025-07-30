
export const funcionNoRecargar = (event, sectionId) => {
  event.preventDefault(event);
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
