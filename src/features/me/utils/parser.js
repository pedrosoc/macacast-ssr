const apiCategories = map => {
    if (!map) return [];
    return Object
        .keys(map)
        .map(key => ({ ...map[key] }));;
};


export default {
    apiCategories,
};
