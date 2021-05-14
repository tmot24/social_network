import {connect} from "react-redux";
import {actions} from "../../../../redux/profile-reducer";
import {MyPosts} from "./myPosts";

const MyPostsContainer = ({posts, addPost}) => {
    return (
        <MyPosts posts={posts} addPost={addPost}/>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = {
    actions
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);