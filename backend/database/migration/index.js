import createConnectionToDB from "./001_create_users.js";
import createPostTable from "./002_create_post.js";
import seedUserData from "../seed/001_seed_users.js";
import seedPostData from "../seed/002_seed_post.js";

(async () => {
  try {
    await createConnectionToDB();
    await createPostTable();
    await seedUserData();
    await seedPostData();
  } catch (error) {
    console.error("❌ Migration or seeding error:", error);
  }
})();
