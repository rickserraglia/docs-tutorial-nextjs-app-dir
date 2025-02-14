/* eslint-disable */
import type { Prisma, Session } from '@prisma/client';
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions } from './_helper';
import * as request from './_helper';

export function useMutateSession() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/session/find`,
        `${endpoint}/session/aggregate`,
        `${endpoint}/session/count`,
        `${endpoint}/session/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createSession<T extends Prisma.SessionCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SessionCreateArgs>,
    ) {
        try {
            return await request.post<Prisma.CheckSelect<T, Session, Prisma.SessionGetPayload<T>>>(
                `${endpoint}/session/create`,
                args,
                mutate,
            );
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateSession<T extends Prisma.SessionUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>,
    ) {
        try {
            return await request.put<Prisma.SessionGetPayload<T>>(`${endpoint}/session/update`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateManySession<T extends Prisma.SessionUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>,
    ) {
        try {
            return await request.put<Prisma.BatchPayload>(`${endpoint}/session/updateMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function upsertSession<T extends Prisma.SessionUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>,
    ) {
        try {
            return await request.post<Prisma.SessionGetPayload<T>>(`${endpoint}/session/upsert`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteSession<T extends Prisma.SessionDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>,
    ) {
        try {
            return await request.del<Prisma.SessionGetPayload<T>>(`${endpoint}/session/delete`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteManySession<T extends Prisma.SessionDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>,
    ) {
        try {
            return await request.del<Prisma.BatchPayload>(`${endpoint}/session/deleteMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }
    return { createSession, updateSession, updateManySession, upsertSession, deleteSession, deleteManySession };
}

export function useFindManySession<T extends Prisma.SessionFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>,
    options?: RequestOptions<Array<Prisma.SessionGetPayload<T>>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.SessionGetPayload<T>>>(`${endpoint}/session/findMany`, args, options);
}

export function useFindUniqueSession<T extends Prisma.SessionFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>,
    options?: RequestOptions<Prisma.SessionGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.SessionGetPayload<T>>(`${endpoint}/session/findMany`, args, options);
}

export function useFindFirstSession<T extends Prisma.SessionFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>,
    options?: RequestOptions<Prisma.SessionGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.SessionGetPayload<T>>(`${endpoint}/session/findMany`, args, options);
}

export function useAggregateSession<T extends Prisma.SessionAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.SessionAggregateArgs>,
    options?: RequestOptions<Prisma.GetSessionAggregateType<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetSessionAggregateType<T>>(`${endpoint}/session/findMany`, args, options);
}

export function useGroupBySession<
    T extends Prisma.SessionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SessionGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SessionGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.TupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.SessionGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SessionGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.SessionGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SessionGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/session/findMany`, args, options);
}

export function useCountSession<T extends Prisma.SessionCountArgs>(
    args?: Prisma.Subset<T, Prisma.SessionCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
            : number
    >(`${endpoint}/session/findMany`, args, options);
}
