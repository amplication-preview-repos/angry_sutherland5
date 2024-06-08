import { CommentMetricsWhereInput } from "./CommentMetricsWhereInput";
import { CommentMetricsOrderByInput } from "./CommentMetricsOrderByInput";

export type CommentMetricsFindManyArgs = {
  where?: CommentMetricsWhereInput;
  orderBy?: Array<CommentMetricsOrderByInput>;
  skip?: number;
  take?: number;
};
