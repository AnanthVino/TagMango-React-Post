/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

const createPost = (data) => {
    console.log('action data', data);
    return {
        type: 'CREATEPOSTDETAILS',
        data: data
    }
}

export default createPost;