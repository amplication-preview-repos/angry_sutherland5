import { PostMetricsWhereInput } from "./PostMetricsWhereInput";
import { PostMetricsOrderByInput } from "./PostMetricsOrderByInput";

export type PostMetricsFindManyArgs = {
  where?: PostMetricsWhereInput;
  orderBy?: Array<PostMetricsOrderByInput>;
  skip?: number;
  take?: number;
};
