import { SortOrder } from "../../util/SortOrder";

export type PostMetricsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
