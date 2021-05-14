import {connect} from "react-redux";
import {actions} from "../../../../redux/profile-reducer";
import {MyPosts} from "./myPosts";
import {AppStateType} from "../../../../redux/redux-store";
import {PostType} from "../../../../types/typs";
import {FC} from "react";

type MyPostsContainerType = {
    posts: Array<PostType>
    addPost: (newPostText: string) =>void
}

const MyPostsContainer: FC<MyPostsContainerType> = ({posts, addPost}) => {
    return (
        <MyPosts posts={posts} addPost={addPost}/>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = {
    addPost: actions.addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);