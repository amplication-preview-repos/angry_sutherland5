import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentMetricsServiceBase } from "./base/commentMetrics.service.base";

@Injectable()
export class CommentMetricsService extends CommentMetricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
