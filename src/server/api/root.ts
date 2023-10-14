import { createTRPCRouter } from "@/server/api/trpc";
import { sayHelloApi } from "./routers/sayHello";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: sayHelloApi,
});

// export type definition of API
export type AppRouter = typeof appRouter;
