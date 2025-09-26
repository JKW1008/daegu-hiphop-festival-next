import { InstagramPost } from "@/types";

export const INSTAGRAM_POSTS: InstagramPost[] = Array.from(
  { length: 30 },
  (_, index) => ({
    id: `${index + 1}`,
    image: `/images/sns/${index + 1}.jpg`,
    link: "https://www.instagram.com/daeguhiphop/",
  })
);
