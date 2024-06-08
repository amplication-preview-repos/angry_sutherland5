import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentMetricsService } from "./commentMetrics.service";
import { CommentMetricsControllerBase } from "./base/commentMetrics.controller.base";

@swagger.ApiTags("commentMetrics")
@common.Controller("commentMetrics")
export class CommentMetricsController extends CommentMetricsControllerBase {
  constructor(protected readonly service: CommentMetricsService) {
    super(service);
  }
}
