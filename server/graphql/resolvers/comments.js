import Post from "../../models/Post.js";
import { checkAuthenticated } from "../../util/checkAuth.js";
import { UserInputError } from "apollo-server";

const commentsResolvers = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuthenticated(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty Comment", {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }
      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};

export default commentsResolvers;
