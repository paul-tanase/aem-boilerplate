export default function decorate(block) {
  const callback = () => {
    document.body.style.borderTopWidth = '50px';
  };

  block.removeEventListener('mouseover', callback);
  block.addEventListener('mouseover', callback);
}
