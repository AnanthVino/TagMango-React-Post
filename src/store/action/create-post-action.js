const createPost = (data) => {
    console.log('action data', data);
    return {
        type: 'CREATEPOSTDETAILS',
        data: data
    }
}

export default createPost;