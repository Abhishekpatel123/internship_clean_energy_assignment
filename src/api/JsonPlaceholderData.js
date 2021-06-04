export const GetAllPosts = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts/');
        return await result.json();
    } catch (error) {
        return null
    }
}

export const AddNewPost = async (data) => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts/',
            {
                body: JSON.stringify(data),
                method: "POST",
                headers: { 'Content-Type': 'application/json' }
            }
        );
        return await result.json();
    } catch (error) {
        return null
    }
}

export const UpdatePost = async (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

export const DeletePost = async (id) => {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {method: "DELETE"}
        );
        return await result.json();
    } catch (error) {
        return null
    }
}