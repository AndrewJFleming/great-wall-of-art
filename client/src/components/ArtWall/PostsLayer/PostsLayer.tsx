import { Box } from "@mui/material";

interface Props {
  imgClass: any;
  divClass: any;
  rotationMultiplier: number;
  posts: any;
  startAndEnd: number[];
}

const PostsLayer = ({
  imgClass,
  divClass,
  rotationMultiplier,
  posts,
  startAndEnd,
}: Props) => {
  return (
    <Box className={divClass}>
      {posts?.slice(startAndEnd[0], startAndEnd[1]).map((post: any) => (
        <Box
          component="img"
          className={imgClass}
          sx={{
            transform: `rotate(${Math.floor(
              Math.random() * rotationMultiplier
            )}deg)`,
          }}
          src={post.imageUrl}
          alt={post.title}
          key={post.id}
        />
      ))}
    </Box>
  );
};

export default PostsLayer;
