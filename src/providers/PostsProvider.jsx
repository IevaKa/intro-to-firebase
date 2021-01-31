import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

export const PostsContext = createContext();

class PostsProvider extends Component {
  state = { posts: [] };

  unsubscribeunsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeunsubscribeFromFirestore = firestore
      .collection("posts")
      .onSnapshot((snap) => {
        const posts = snap.docs.map(collectIdsAndDocs);
        this.setState({ posts });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeunsubscribeFromFirestore();
  };

  render() {
    const { posts } = this.state;
    const { children } = this.props;

    return (
      <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
    );
  }
}

export default PostsProvider;