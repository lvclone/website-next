import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { objectToQueryString } from 'utils';

export enum APIPaths {
    TOOLS = 'tools',
    TOOL = 'tool',
    BLOG = 'articles',
    VOTES = 'votes',
    TAGS = 'tags/other',
    LANGUAGE_TAGS = 'tags/languages',
}

export const getBaseApiURLFromContext = (
    ctx: GetServerSidePropsContext,
    pathName?: string,
) => {
    // Get BaseUrl from context request (localhost or host url)
    const protocol = ctx.req?.headers['x-forwarded-proto'] || 'http';
    const baseUrl = ctx.req ? `${protocol}://${ctx.req.headers.host}` : '';

    if (pathName && pathName !== '') {
        return `${baseUrl}/api/${pathName}`;
    }

    return `${baseUrl}/api`;
};

export const getApiURLFromContext = (
    ctx: GetServerSidePropsContext,
    pathName: string,
    query?: ParsedUrlQuery,
) => {
    // Get BaseUrl from context request (localhost or host url)
    let url = getBaseApiURLFromContext(ctx, pathName);

    if (ctx.query || query) {
        const queryString = objectToQueryString({ ...ctx.query, ...query });
        if (queryString) {
            url += `? ${queryString} `;
        }
    }

    return url;
};
