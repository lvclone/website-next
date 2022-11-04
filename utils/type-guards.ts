import {
    ApiTag,
    Article,
    SponsorData,
    StatsApiData,
    TagsApiData,
    ToolsApiData,
    VotesApiData,
} from './types';

export const isToolsApiData = (data: unknown): data is ToolsApiData => {
    if (!data || typeof data !== 'object') {
        return false;
    }

    for (const key of Object.keys(data)) {
        const res =
            (data as ToolsApiData)[key].name !== undefined &&
            (data as ToolsApiData)[key].categories !== undefined &&
            (data as ToolsApiData)[key].languages !== undefined &&
            (data as ToolsApiData)[key].licenses !== undefined &&
            (data as ToolsApiData)[key].types !== undefined &&
            (data as ToolsApiData)[key].homepage !== undefined;

        if (!res) {
            return false;
        }
    }
    return true;
};

export const isApiTag = (data: unknown): data is ApiTag => {
    return (
        (data as ApiTag).name !== undefined &&
        (data as ApiTag).tag !== undefined &&
        (data as ApiTag).tag_type !== undefined
    );
};

export const isTagsApiData = (data: unknown): data is TagsApiData => {
    if (!data || typeof data !== 'object') {
        return false;
    }

    let result = true;

    for (const key of Object.keys(data)) {
        const res = (data as TagsApiData)[key].filter(isApiTag);

        if (!res.length) {
            result = false;
        }
    }
    return result;
};

export const isArticlesApiData = (data: unknown): data is Article[] => {
    if (!data || !Array.isArray(data)) {
        return false;
    }

    for (const entry of data) {
        const res =
            (entry as Article).slug !== undefined &&
            (entry as Article).meta !== undefined &&
            (entry as Article).source !== undefined &&
            (entry as Article).html !== undefined &&
            (entry as Article).summary !== undefined;

        if (!res) {
            return false;
        }
    }
    return true;
};

export const isStatsApiData = (data: unknown): data is StatsApiData => {
    if (!data || typeof data !== 'object' || !Object.keys(data).length) {
        return false;
    }

    for (const key of Object.keys(data)) {
        const res = (data as StatsApiData)[key] !== undefined;
        if (!res) {
            return false;
        }
    }
    return true;
};

export const isVotesApiData = (data: unknown): data is VotesApiData => {
    if (!data || typeof data !== 'object' || !Object.keys(data).length) {
        return false;
    }

    for (const key of Object.keys(data)) {
        const res =
            (data as VotesApiData)[key].sum !== undefined &&
            (data as VotesApiData)[key].upVotes !== undefined &&
            (data as VotesApiData)[key].downVotes !== undefined;
        if (!res) {
            return false;
        }
    }
    return true;
};

export const isSponsorData = (data: unknown): data is SponsorData[] => {
    if (!data || !Array.isArray(data)) {
        return false;
    }

    for (const entry of data) {
        const res =
            (entry as SponsorData).name !== undefined &&
            (entry as SponsorData).description !== undefined &&
            (entry as SponsorData).href !== undefined &&
            (entry as SponsorData).tool !== undefined &&
            (entry as SponsorData).url !== undefined &&
            (entry as SponsorData).logo !== undefined;

        if (!res) {
            return false;
        }
    }
    return true;
};
