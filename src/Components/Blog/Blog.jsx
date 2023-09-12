
import PropTypes from 'prop-types'
const Blog = ({blog}) => {
    
    return (
        <div>
            <h1>Title</h1>
            <p>Author</p>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;