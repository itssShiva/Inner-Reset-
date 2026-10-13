import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_HANDLE } from '../constants';

export const FALLBACK_SHORTS = [
  {
    id: '-1XeJysgzno',
    snippet: {
      title: 'If You’re Carrying Guilt, Watch This NOW',
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/-1XeJysgzno/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/-1XeJysgzno/maxresdefault.jpg' },
      },
    },
  },
  {
    id: '7kdp-m6hsgM',
    snippet: {
      title: "Credit Card Kho Gaya Tha… Then I Remembered Ho'oponopono ✨",
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/7kdp-m6hsgM/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/7kdp-m6hsgM/maxresdefault.jpg' },
      },
    },
  },
  {
    id: 'Q3Z3QKilfFE',
    snippet: {
      title: 'My BP Went From 162/101 to 133/89… Here’s What I Noticed',
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/Q3Z3QKilfFE/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/Q3Z3QKilfFE/maxresdefault.jpg' },
      },
    },
  },
  {
    id: 'AEGupxjmUhE',
    snippet: {
      title: 'Saying Affirmations Without Feeling Them? Try This Instead ✨',
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/AEGupxjmUhE/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/AEGupxjmUhE/maxresdefault.jpg' },
      },
    },
  },
  {
    id: 'Rh0NRhfMfj0',
    snippet: {
      title: 'Festivals = Khushi Ya Money Tension💸 Change This Mindset!',
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/Rh0NRhfMfj0/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/Rh0NRhfMfj0/maxresdefault.jpg' },
      },
    },
  },
  {
    id: 'Gazr1KPpso0',
    snippet: {
      title: 'Affirmations Not Working? Try This 60-Second Nervous System Reset First ✨',
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/Gazr1KPpso0/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/Gazr1KPpso0/maxresdefault.jpg' },
      },
    },
  },
  {
    id: 'u65yH4HQ8w0',
    snippet: {
      title: 'Abundance Is Coming ✨ If You Needed a Sign, This Is It | Manifestation',
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/u65yH4HQ8w0/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/u65yH4HQ8w0/maxresdefault.jpg' },
      },
    },
  },
  {
    id: '1ptMvNwkWBw',
    snippet: {
      title: 'Mindful Life & Tech Balance',
      thumbnails: {
        high: { url: 'https://i.ytimg.com/vi/1ptMvNwkWBw/hqdefault.jpg' },
        maxres: { url: 'https://i.ytimg.com/vi/1ptMvNwkWBw/maxresdefault.jpg' },
      },
    },
  },
];

/**
 * Parses ISO 8601 duration string to total seconds.
 * e.g. "PT1M30S" → 90
 */
function parseDurationToSeconds(duration) {
  const match = duration?.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] ?? '0', 10) || 0;
  const minutes = parseInt(match[2] ?? '0', 10) || 0;
  const seconds = parseInt(match[3] ?? '0', 10) || 0;
  return hours * 3600 + minutes * 60 + seconds;
}

// Known uploads playlist ID for @Shaifalyhealer (UC-A98V60MBObU6YQ3Bgl1tg -> UU-A98V60MBObU6YQ3Bgl1tg)
let cachedUploadsPlaylistId = 'UU-A98V60MBObU6YQ3Bgl1tg';
let memoryCache = null;

/**
 * Fetches a page of YouTube Shorts for the configured channel.
 * Returns { shorts: VideoItem[], nextPageToken: string|null }
 */
export async function fetchYouTubeShortsPage(pageToken = '') {
  // Use memory cache for initial page if already fetched
  if (!pageToken && memoryCache?.shorts?.length) {
    return memoryCache;
  }

  try {
    // 1. Resolve uploads playlist ID if needed
    if (!cachedUploadsPlaylistId) {
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=@${YOUTUBE_CHANNEL_HANDLE}&key=${YOUTUBE_API_KEY}`
      );
      if (channelRes.ok) {
        const channelData = await channelRes.json();
        if (channelData.items?.length) {
          cachedUploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        }
      }
    }

    // 2. Fetch playlist items
    const pageTokenParam = pageToken ? `&pageToken=${pageToken}` : '';
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${cachedUploadsPlaylistId}&maxResults=50${pageTokenParam}&key=${YOUTUBE_API_KEY}`
    );
    if (!playlistRes.ok) throw new Error(`Playlist fetch failed: ${playlistRes.status}`);
    const playlistData = await playlistRes.json();

    const nextPageToken = playlistData.nextPageToken ?? null;
    if (!playlistData.items?.length) {
      return { shorts: !pageToken ? FALLBACK_SHORTS : [], nextPageToken };
    }

    // 3. Fetch video details (duration) to filter Shorts (<= 90s)
    const videoIds = playlistData.items.map((item) => item.snippet.resourceId.videoId).join(',');
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    if (!videosRes.ok) throw new Error(`Videos fetch failed: ${videosRes.status}`);
    const videosData = await videosRes.json();

    const shorts = (videosData.items ?? []).filter(
      (video) => parseDurationToSeconds(video.contentDetails?.duration) <= 90
    );

    const result = {
      shorts: shorts.length > 0 ? shorts : (!pageToken ? FALLBACK_SHORTS : []),
      nextPageToken,
    };

    if (!pageToken && result.shorts.length > 0) {
      memoryCache = result;
    }

    return result;
  } catch (err) {
    console.warn('YouTube API fetch encountered error, using fallback:', err);
    if (!pageToken) {
      return { shorts: FALLBACK_SHORTS, nextPageToken: null };
    }
    throw err;
  }
}

