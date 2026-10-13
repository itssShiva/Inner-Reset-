import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ src, onClose }) {
  const overlayRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      ref={overlayRef}
      className="lightbox active"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        className="lightbox-close absolute top-[30px] right-[30px] flex items-center justify-center w-11 h-11 rounded-full cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
        }}
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>
      <img src={src} alt="Full size view" />
    </div>
  );
}
