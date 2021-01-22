const postList = (map, baseRoute) => {
    if (!map) return [];
    return Object
        .keys(map)
        .map(key => apiPost(key, { route: baseRoute }, map[key]));
};

const contentList = map => {
    if (!map) return [];
    return Object
        .keys(map)
        .map(key => apiContent(key, map[key]));;
};

const apiPost = (id, content, post) => {
    if (!post) return {};
    return {
        ...post,
        id,
        contentType: post.text ? "text" : "serie",
        route: `${content.route}/${id}`
    };
}

const apiContent = (id, response) => {
    if (!response) return {};
	return {
        ...response,
        id: id,
        contentType: "category",
        data: postList(response.data, response.baseRoute),
    };
};

const apiContentList = response => {
    if (!response) return [];
	return contentList(response);
};

export default { apiPost, apiContent, apiContentList };
