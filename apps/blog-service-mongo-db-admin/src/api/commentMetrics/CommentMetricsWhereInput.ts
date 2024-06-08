import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CommentMetricsWhereInput = {
  commentId?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  spamReports?: IntNullableFilter;
};
