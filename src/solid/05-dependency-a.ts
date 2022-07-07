import { PostService } from "./05-dependency-b";
import {
  JsonDatabaseService,
  LocalDataBaseService,
  webApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  // const provider = new JsonDatabaseService();
  // const provider = new LocalDataBaseService();
  const provider = new webApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
