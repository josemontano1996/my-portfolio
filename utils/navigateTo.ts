export const navigateTo = (event: any, id: string): void => {
  event.preventDefault();
  const scrollElement = document.getElementById(id);
  if (scrollElement) {
    const header = document.querySelector('header');
    const offset = header!.clientHeight;
    const targetPosition = scrollElement.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
};
