/* eslint-disable */
import type { Prisma, VerificationToken } from '@prisma/client';
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions } from './_helper';
import * as request from './_helper';

export function useMutateVerificationToken() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/verificationToken/find`,
        `${endpoint}/verificationToken/aggregate`,
        `${endpoint}/verificationToken/count`,
        `${endpoint}/verificationToken/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createVerificationToken<T extends Prisma.VerificationTokenCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
    ) {
        try {
            return await request.post<Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>>(
                `${endpoint}/verificationToken/create`,
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

    async function updateVerificationToken<T extends Prisma.VerificationTokenUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
    ) {
        try {
            return await request.put<Prisma.VerificationTokenGetPayload<T>>(
                `${endpoint}/verificationToken/update`,
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

    async function updateManyVerificationToken<T extends Prisma.VerificationTokenUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
    ) {
        try {
            return await request.put<Prisma.BatchPayload>(`${endpoint}/verificationToken/updateMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function upsertVerificationToken<T extends Prisma.VerificationTokenUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
    ) {
        try {
            return await request.post<Prisma.VerificationTokenGetPayload<T>>(
                `${endpoint}/verificationToken/upsert`,
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

    async function deleteVerificationToken<T extends Prisma.VerificationTokenDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
    ) {
        try {
            return await request.del<Prisma.VerificationTokenGetPayload<T>>(
                `${endpoint}/verificationToken/delete`,
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

    async function deleteManyVerificationToken<T extends Prisma.VerificationTokenDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
    ) {
        try {
            return await request.del<Prisma.BatchPayload>(`${endpoint}/verificationToken/deleteMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }
    return {
        createVerificationToken,
        updateVerificationToken,
        updateManyVerificationToken,
        upsertVerificationToken,
        deleteVerificationToken,
        deleteManyVerificationToken,
    };
}

export function useFindManyVerificationToken<T extends Prisma.VerificationTokenFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>,
    options?: RequestOptions<Array<Prisma.VerificationTokenGetPayload<T>>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.VerificationTokenGetPayload<T>>>(
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
    );
}

export function useFindUniqueVerificationToken<T extends Prisma.VerificationTokenFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>,
    options?: RequestOptions<Prisma.VerificationTokenGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/findMany`, args, options);
}

export function useFindFirstVerificationToken<T extends Prisma.VerificationTokenFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>,
    options?: RequestOptions<Prisma.VerificationTokenGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/findMany`, args, options);
}

export function useAggregateVerificationToken<T extends Prisma.VerificationTokenAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.VerificationTokenAggregateArgs>,
    options?: RequestOptions<Prisma.GetVerificationTokenAggregateType<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetVerificationTokenAggregateType<T>>(
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
    );
}

export function useGroupByVerificationToken<
    T extends Prisma.VerificationTokenGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.VerificationTokenGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.VerificationTokenGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/verificationToken/findMany`, args, options);
}

export function useCountVerificationToken<T extends Prisma.VerificationTokenCountArgs>(
    args?: Prisma.Subset<T, Prisma.VerificationTokenCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
            : number
    >(`${endpoint}/verificationToken/findMany`, args, options);
}
