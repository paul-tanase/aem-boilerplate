export default function decorate(block) {
 const callback = () => {
  alert('mouseover');
};

  block.removeEventListener('mouseover', callback);
  block.addEventListener('mouseover', callback);
}
