export default function getRelativeRect(target, base) {
	const targetRect = target.getBoundingClientRect();
	const baseRect = base.getBoundingClientRect();

	return {
		x: targetRect.x - baseRect.x,
		y: targetRect.y - baseRect.y,
		left: targetRect.left - baseRect.left,
		top: targetRect.top - baseRect.top,
		width: targetRect.width,
		height: targetRect.height,
		bottom: targetRect.bottom - baseRect.top,
		right: targetRect.right - baseRect.left
	};
}
