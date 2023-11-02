export const onAnchorNavigation = (event: any): void => {
  event.preventDefault();

  const id = event.target.getAttribute('href')!.slice(1);
  const scrollElement = document.getElementById(id);
  const header = document.querySelector('header');
  const offset = header!.clientHeight + 10;

  const targetPosition = scrollElement!.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};
