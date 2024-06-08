import { PostMetrics as TPostMetrics } from "../api/postMetrics/PostMetrics";

export const POSTMETRICS_TITLE_FIELD = "postId";

export const PostMetricsTitle = (record: TPostMetrics): string => {
  return record.postId?.toString() || String(record.id);
};
