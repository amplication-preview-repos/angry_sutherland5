import { Module } from "@nestjs/common";
import { PostMetricsModuleBase } from "./base/postMetrics.module.base";
import { PostMetricsService } from "./postMetrics.service";
import { PostMetricsController } from "./postMetrics.controller";
import { PostMetricsResolver } from "./postMetrics.resolver";

@Module({
  imports: [PostMetricsModuleBase],
  controllers: [PostMetricsController],
  providers: [PostMetricsService, PostMetricsResolver],
  exports: [PostMetricsService],
})
export class PostMetricsModule {}
