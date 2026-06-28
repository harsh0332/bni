export const ASSETS = {
  testimonialAtul: '/images/testimonial-atul.jpg',
  testimonialPushpendra: '/images/testimonial-pushpendra.jpg',
  experienceInPerson: '/images/experience-inperson.svg',
  experienceOnline: '/images/experience-online.svg',
  experienceHybrid: '/images/experience-hybrid.svg',
  bannerGeneric: '/images/banner-generic.jpg',
  planVisit: '/images/plan-visit.jpg',
  gettingStarted: '/images/getting-started.png',
  favicon192: '/images/favicon-192.png',
  heroBetterTogether: '/images/hero-better-together.jpg',
  benefitScale: '/images/benefit-scale.jpg',
  benefitRelationships: '/images/benefit-relationships.png',
  benefitMasterConnector: '/images/benefit-master-connector.png',
  experienceInPersonPhoto: '/images/experience-inperson.jpg',
  experienceOnlinePhoto: '/images/experience-online.jpg',
  experienceHybridPhoto: '/images/experience-hybrid.jpg',
  bannerMasterConnector: '/images/banner-master-connector.jpg',
} as const;

export type AssetKey = keyof typeof ASSETS;

/**
 * Returns a tasteful, premium SVG gradient data URL placeholder for any missing image.
 * Uses the brand's design token colors (brand-maroon, brand-red, gold accent border, cloud text)
 * and adapts dynamically to width, height, and display text.
 */
export function PLACEHOLDER(key: string, width = 600, height = 400, customText?: string): string {
  const text = customText || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  
  // Create an SVG with a premium dark red/maroon gradient and a gold accent border
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="grad-${key.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#7A0D14;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#CF2030;stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Background Gradient -->
    <rect width="100%" height="100%" fill="url(#grad-${key.replace(/[^a-zA-Z0-9]/g, '')})" />
    
    <!-- Subtle gold card inner border -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="8" fill="none" stroke="#C9A24B" stroke-width="1.5" stroke-opacity="0.25" />
    
    <!-- Typography overlay -->
    <text 
      x="50%" 
      y="50%" 
      fill="#F7F6F3" 
      font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
      font-weight="700" 
      font-size="${Math.max(14, Math.min(width, height) * 0.065)}px" 
      text-anchor="middle" 
      dominant-baseline="middle"
      opacity="0.9"
    >
      ${text}
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
