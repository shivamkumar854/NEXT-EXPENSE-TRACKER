import {PrismaCilent} from '@prisma/client';

declare global {
    var prisma: PrismaCilent | undefined;
}

export const db = global.prisma || new PrismaCilent()

    if (process.env.NODE_ENV !== 'production') {
        globalThis.prisma = db;
    }