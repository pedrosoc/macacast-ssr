import { isEmptyList } from "@/utils/list";

const postListByStatus = (map, baseRoute, status) => {
    if (!map) return [];

    const posts = Object
        .keys(map)
        .map(key => apiPost(key, { route: baseRoute }, map[key]));

    if (!status)
        return posts;
        
    return posts.filter(p => p.state === status);
};

const contentListByStatus = (map, status) => {
    if (!map) return [];
    return Object
        .keys(map)
        .map(key => apiContentByStatus(key, map[key], status));;
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

const apiContentByStatus = (id, response, status) => {
    if (!response) return {};
	return {
        ...response,
        id: id,
        contentType: "category",
        data: postListByStatus(response.data, response.baseRoute, status).reverse(),
    };
};

const apiContentListByStatus = (response, status) => {
    if (!response) return [];
	return contentListByStatus(response, status);
};

const apiFilterLastPosts = (posts, limit, contentRoute, status, actualID) => {
    if (!posts) return [];
    return limitLastPosts(
        postListByStatus(posts, contentRoute, status),
        limit,
        actualID
    );
}

const limitLastPosts = (posts, limit, actualID) => {
    if (isEmptyList(posts)) return [];

    return posts.sort((a, b) => {
        if (a.publicationTime < b.publicationTime)
            return 1;

        if (a.publicationTime > b.publicationTime)
            return -1;

        return 0;
    })
    .filter(p => p.id !== actualID)
    .slice(0, limit)
}

export default {
    apiPost,
    apiContentByStatus,
    apiContentListByStatus,
    apiFilterLastPosts,
    limitLastPosts,
};
