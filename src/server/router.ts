import { z } from 'zod';
import { procedure, router } from './trpc';
import storyLoader from '@/story/storyloader';

export const appRouter = router({
    hello: procedure
        .input(
        z.object({
            text: z.string(),
        }).nullish(),
        )
        .query(({ input }) => {
        return {
            greeting: `hello ${input?.text ?? 'world'}`,
        };
        }),
    story : procedure.input(z.number()).query(async ({input}) => {
        return storyLoader(input);
    }),    
});

// export type definition of API
export type AppRouter = typeof appRouter;