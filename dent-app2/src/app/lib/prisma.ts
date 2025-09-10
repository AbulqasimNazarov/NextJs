// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // чтобы при hot-reload не создавались новые клиенты
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// ✅ экспорт по умолчанию
export default prisma;

// ✅ именованный экспорт (для случаев `import { prisma } ...`)
export { prisma };
