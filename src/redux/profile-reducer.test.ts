import {actions, profileReducer} from "./profile-reducer";
import {PostType} from "../types/typs";

const state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 11},
        {id: 2, message: "It's my first post", likesCount: 22},
    ] as Array<PostType>,
    profile: null,
    status: "",
    newPostText: "",
};

it("length of posts should be incremented", () => {
    // test data
    const action = actions.addPost("react")
    // action
    const newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(3)
});

it("message of new post should be correct", () => {

    const action = actions.addPost("react")

    const newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe("react")
});

it("after deleting length of messages should be decremented", () => {

    const action = actions.deletePost(1)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
});

it("after deleting length of messages shouldn't be decremented if id is incorrect", () => {

    const action = actions.deletePost(-1)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
});