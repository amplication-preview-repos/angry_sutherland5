import { Module } from "@nestjs/common";
import { CommentMetricsModuleBase } from "./base/commentMetrics.module.base";
import { CommentMetricsService } from "./commentMetrics.service";
import { CommentMetricsController } from "./commentMetrics.controller";
import { CommentMetricsResolver } from "./commentMetrics.resolver";

@Module({
  imports: [CommentMetricsModuleBase],
  controllers: [CommentMetricsController],
  providers: [CommentMetricsService, CommentMetricsResolver],
  exports: [CommentMetricsService],
})
export class CommentMetricsModule {}
