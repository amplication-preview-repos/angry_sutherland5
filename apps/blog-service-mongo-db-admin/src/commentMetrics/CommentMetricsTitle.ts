import { CommentMetrics as TCommentMetrics } from "../api/commentMetrics/CommentMetrics";

export const COMMENTMETRICS_TITLE_FIELD = "commentId";

export const CommentMetricsTitle = (record: TCommentMetrics): string => {
  return record.commentId?.toString() || String(record.id);
};
