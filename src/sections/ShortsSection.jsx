import { useState, useEffect, useRef } from 'react';
import { Video, Play, RefreshCw, Loader } from 'lucide-react';
import { fetchYouTubeShortsPage, FALLBACK_SHORTS } from '../services/youtube';

const INITIAL_COUNT = 8;
const INCREMENT = 8;

export default function ShortsSection() {
  const [allShorts, setAllShorts] = useState(() => FALLBACK_SHORTS);
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [status, setStatus] = useState('success'); // 'loading' | 'success' | 'error' | 'loadingMore'
  const [errorMsg, setErrorMsg] = useState('');
  const loadingMoreRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function loadInitial() {
      try {
        const { shorts, nextPageToken: token } = await fetchYouTubeShortsPage();
        if (!cancelled && shorts && shorts.length > 0) {
          setAllShorts(shorts);
          setNextPageToken(token);
          setStatus('success');
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Error fetching YouTube shorts:', err);
          setErrorMsg('Could not load latest shorts. Please check your connection.');
          // If we already have fallback shorts in state, keep showing them
          setStatus((prev) => (prev === 'loading' ? 'error' : prev));
        }
      }
    }

    loadInitial();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleLoadMore() {
    if (loadingMoreRef.current) return;
    const newCount = displayCount + INCREMENT;
    setDisplayCount(newCount);

    // Fetch more from API if we need more than what's cached
    if (allShorts.length < newCount && nextPageToken) {
      loadingMoreRef.current = true;
      setStatus('loadingMore');
      try {
        const { shorts, nextPageToken: token } = await fetchYouTubeShortsPage(nextPageToken);
        setAllShorts((prev) => [...prev, ...shorts]);
        setNextPageToken(token);
      } catch (err) {
        console.error('Error fetching additional shorts:', err);
      } finally {
        setStatus('success');
        loadingMoreRef.current = false;
      }
    }
  }

  const shortsToShow = allShorts.slice(0, displayCount);
  const hasMore = allShorts.length > displayCount || Boolean(nextPageToken);

  function getThumbnailUrl(video) {
    const thumbs = video.snippet?.thumbnails;
    if (!thumbs) return '';
    return thumbs.maxres?.url ?? thumbs.high?.url ?? thumbs.medium?.url ?? '';
  }

  return (
    <section className="section stack-section reveal" id="shorts">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
          <Video size={16} /> YouTube Shorts
        </div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
          Insights &amp; Daily Wisdom.
        </h2>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            marginTop: 32,
          }}
        >
          {status === 'loading' && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
              Loading latest shorts...
            </p>
          )}

          {status === 'error' && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
              {errorMsg}
            </p>
          )}

          {(status === 'success' || status === 'loadingMore') && shortsToShow.length === 0 && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
              No shorts found.
            </p>
          )}

          {shortsToShow.map((video) => {
            const videoId = video.id;
            const title = video.snippet?.title ?? 'YouTube Short';
            const thumb = getThumbnailUrl(video);
            return (
              <a
                key={videoId}
                href={`https://www.youtube.com/shorts/${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-card-shine"
                style={{
                  aspectRatio: '9/16', borderRadius: 24, overflow: 'hidden', position: 'relative',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.4s var(--ease-elastic), box-shadow 0.4s',
                  display: 'block', padding: 0, textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'; }}
              >
                {thumb && (
                  <img
                    src={thumb}
                    loading="lazy"
                    alt={title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s', border: 'none' }}
                  />
                )}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: 48, height: 48, background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', border: '1px solid rgba(255,255,255,0.5)', transition: '0.3s',
                }}>
                  <Play size={24} fill="currentColor" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Load more */}
        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button
              onClick={handleLoadMore}
              disabled={status === 'loadingMore'}
              className="btn"
              style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', cursor: status === 'loadingMore' ? 'not-allowed' : 'pointer' }}
            >
              {status === 'loadingMore' ? <><Loader size={18} /> Fetching...</> : <><RefreshCw size={18} /> Load More Shorts</>}
            </button>
          </div>
        )}

        <style>{`
          @media (max-width: 900px) { #shorts .section-inner > div[style] { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { #shorts .section-inner > div[style] { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; } }
        `}</style>
      </div>
    </section>
  );
}
