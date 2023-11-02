export const navigateTo = (event: any, id: string): void => {
  event.preventDefault();

  const scrollElement = document.getElementById(id);

  const header = document.querySelector('header');
  const offset = header!.clientHeight + 10;

  const targetPosition = scrollElement!.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};
