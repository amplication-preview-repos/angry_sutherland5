import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  title?: string | null;
};
