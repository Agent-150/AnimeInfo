type MediaType = 'ANIME' |
                 'MANGA'

type MediaRankType = 'RATED' |
                     'POPULAR'

type MediaSeason = 'FALL' |
                   'WINTER' |
                   'SPRING' |
                   'SUMMER'

type MediaStatus = 'FINISHED' |
                   'RELEASING' |
                   'CANCELLED' |
                   'NOT_YET_RELEASED'

type MediaSource = 'MANGA' |
                   'OTHER' |
                   'ORIGINAL' |
                   'VIDEO_GAME' |
                   'LIGHT_NOVEL' |
                   'VISUAL_NOVEL'

type MediaFormat = 'TV' |
                   'OVA' |
                   'ONA' |
                   'MOVIE' |
                   'MUSIC' |
                   'MANGA' |
                   'NOVEL' |
                   'SPECIAL' |
                   'ONE_SHOT' |
                   'TV_SHORT'

export interface MediaTrailer {
    id: string;
    site: string;
}

export interface CoverImage {
    large: string;
    medium: string;
}

export interface MediaTitle {
    native: string;
    romaji: string;
    english: string;
}

export interface FuzzyDateInt {
    day: number;
    year: number;
    month: number;
}

export interface MediaExternalLink {
    id: number;
    url: string;
    site: string;
}

export interface MediaRanking {
    id: number;
    rank: number;
    year: number;
    context: string;
    allTime: boolean;
    type: MediaRankType;
    format: MediaFormat;
    season: MediaSeason;
}

export interface MediaStreamingEpisode {
    url: string;
    site: string;
    title: string;
    thumbnail: string;
}

export interface AiringSchedule {
    id: number;
    media: Media;
    episode: number;
    mediaIt: number;
    airingAt: number;
    timeUntilAiring: number;
}

export interface Media {}