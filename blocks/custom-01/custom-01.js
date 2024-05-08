export default function decorate(block) {
    const callback = () => {
        console.log('mouseover');
    };

    block.removeEventListener('mouseover', callback)
    block.addEventListener('mouseover', callback);
}