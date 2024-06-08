import * as graphql from "@nestjs/graphql";
import { CommentMetricsResolverBase } from "./base/commentMetrics.resolver.base";
import { CommentMetrics } from "./base/CommentMetrics";
import { CommentMetricsService } from "./commentMetrics.service";

@graphql.Resolver(() => CommentMetrics)
export class CommentMetricsResolver extends CommentMetricsResolverBase {
  constructor(protected readonly service: CommentMetricsService) {
    super(service);
  }
}
