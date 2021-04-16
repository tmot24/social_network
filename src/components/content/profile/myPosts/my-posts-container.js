import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {MyPosts} from "./myPosts";

const MyPostsContainer = ({posts}) => {
    return (
        <MyPosts posts={posts}/>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);