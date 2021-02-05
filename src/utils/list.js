const isEmptyList = obj => {
	return !Array.isArray(obj) || !obj.length;
};

export { isEmptyList };
