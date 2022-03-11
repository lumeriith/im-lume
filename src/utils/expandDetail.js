import './expandDetail.css';

/**
 * @param {Element} node
 * @param {boolean} show
 */
export default function expandDetail(node, show) {
	node.classList.add('expand-detail');
	updateShow(show);

	function updateShow(show) {
		if (show && !node.classList.contains('expanded')) {
			node.classList.add('expanded');
		} else if (!show && node.classList.contains('expanded')) {
			node.classList.remove('expanded');
		}
	}

	return {
		update(newShow) {
			updateShow(newShow);
		}
	};
}
