import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostMetricsService } from "./postMetrics.service";
import { PostMetricsControllerBase } from "./base/postMetrics.controller.base";

@swagger.ApiTags("postMetrics")
@common.Controller("postMetrics")
export class PostMetricsController extends PostMetricsControllerBase {
  constructor(protected readonly service: PostMetricsService) {
    super(service);
  }
}
