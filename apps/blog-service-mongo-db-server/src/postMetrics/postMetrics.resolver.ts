import * as graphql from "@nestjs/graphql";
import { PostMetricsResolverBase } from "./base/postMetrics.resolver.base";
import { PostMetrics } from "./base/PostMetrics";
import { PostMetricsService } from "./postMetrics.service";

@graphql.Resolver(() => PostMetrics)
export class PostMetricsResolver extends PostMetricsResolverBase {
  constructor(protected readonly service: PostMetricsService) {
    super(service);
  }
}
