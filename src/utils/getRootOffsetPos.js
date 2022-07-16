export default function getRootOffsetPos(element) {
	let offsetLeft = 0;
	let offsetTop = 0;

	do {
		offsetLeft += element.offsetLeft;
		offsetTop += element.offsetTop;
		element = element.offsetParent;
	} while (element);

	return { offsetLeft, offsetTop };
}
