import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostMetricsServiceBase } from "./base/postMetrics.service.base";

@Injectable()
export class PostMetricsService extends PostMetricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
