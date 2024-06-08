import { SortOrder } from "../../util/SortOrder";

export type CommentMetricsOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  spamReports?: SortOrder;
  updatedAt?: SortOrder;
};
