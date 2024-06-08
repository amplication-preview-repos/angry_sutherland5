import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostMetricsWhereInput = {
  id?: StringFilter;
  likes?: IntNullableFilter;
  postId?: StringNullableFilter;
  views?: IntNullableFilter;
};
