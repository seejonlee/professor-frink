function ArithGeo(arr) { 
	if (arr.length === 1) return -1;
	const aPattern = arr[1] - arr[0];
	const gPattern = arr[1] / arr[0];
	let aResult = true;
	let gResult = true;

	for (let i = 1; i < arr.length - 1; i++) {
		const currentAPattern = arr[i + 1] - arr[i];
		const currentGPattern = arr[i + 1] / arr[i];

		if (aPattern !== currentAPattern) {
			aResult = false;
		}

		if (gPattern !== currentGPattern) {
			gResult = false;
		}

		if (!aResult && !gResult) {
			return -1;
		}
	}

	if (aResult) {
		return 'Arithmetic';
	}

	if (gResult) {
		return 'Geometric';
	}

	return -1;
}
