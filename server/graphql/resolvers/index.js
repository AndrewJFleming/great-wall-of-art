import postsResolvers from "./posts.js";
import usersResolvers from "./users.js";
import commentsResolvers from "./comments.js";

const resolvers = {
  //Post is our modifier (acts like a middleware).
  Post: {
    likeCount(parent) {
      return parent.likes.length;
    },
    commentCount(parent) {
      return parent.comments.length;
    },
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};

export default resolvers;
