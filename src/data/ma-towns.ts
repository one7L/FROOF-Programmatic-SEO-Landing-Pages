export type Region = 'metro-west' | 'snow-belt' | 'coastal' | 'greater-boston' | 'south-coast' | 'south-shore' | 'western-ma';

export interface TownData {
    slug: string;
    name: string;
    county: string;
    region: Region;
    housingStock: string;
    primaryPainPoint: string;
    historic: boolean;
    snowBelt: boolean;
    coastal: boolean;
    heroImage: string;
    videoTestimonial?: {
        url: string;
        thumbnail: string;
        homeownerName: string;
    };
}

export const TOWNS: Record<string, TownData> = {
    // Phase 1: Metro West
    'newton': {
        slug: 'newton',
        name: 'Newton',
        county: 'Middlesex',
        region: 'metro-west',
        housingStock: 'Newton\'s distinguished historic properties and multi-story Colonial estates',
        primaryPainPoint: 'historic preservation and slate roofing complexity',
        historic: true,
        snowBelt: false,
        coastal: false,
        heroImage: '/images/hero/newton.png'
    },
    'wellesley': {
        slug: 'wellesley',
        name: 'Wellesley',
        county: 'Norfolk',
        region: 'metro-west',
        housingStock: 'Wellesley\'s high-end estates and luxury residential properties',
        primaryPainPoint: 'white-glove service and premium material selection',
        historic: true,
        snowBelt: false,
        coastal: false,
        heroImage: '/images/hero/wellesley.png'
    },
    'natick': {
        slug: 'natick',
        name: 'Natick',
        county: 'Middlesex',
        region: 'metro-west',
        housingStock: 'Natick\'s family-oriented neighborhoods and modern residential stock',
        primaryPainPoint: 'fast, efficient installation with minimal family disruption',
        historic: false,
        snowBelt: false,
        coastal: false,
        heroImage: '/images/hero/natick.png'
    },
    'framingham': {
        slug: 'framingham',
        name: 'Framingham',
        county: 'Middlesex',
        region: 'metro-west',
        housingStock: 'Framingham\'s diverse housing stock from post-war ranches to newer builds',
        primaryPainPoint: 'balancing modern durability with affordable financing',
        historic: false,
        snowBelt: false,
        coastal: false,
        heroImage: '/images/hero/framingham.png'
    },

    // Video Testimonial Batch
    'somerset': {
        slug: 'somerset',
        name: 'Somerset',
        county: 'Bristol',
        region: 'south-coast',
        housingStock: 'Somerset\'s coastal Cape and Colonial homes',
        primaryPainPoint: 'salt-air corrosion and high-humidity moisture management',
        historic: true,
        snowBelt: false,
        coastal: true,
        heroImage: '/images/hero/somerset.png',
        videoTestimonial: { url: '/videos/testimonials/somerset.mp4', thumbnail: '/images/testimonials/somerset-thumb.jpg', homeownerName: 'James R.' }
    },
    'brockton': {
        slug: 'brockton',
        name: 'Brockton',
        county: 'Plymouth',
        region: 'south-shore',
        housingStock: 'Brockton\'s iconic triple-deckers and industrial-era worker cottages',
        primaryPainPoint: 'extreme heat resilience and aging structural integrity',
        historic: false,
        snowBelt: false,
        coastal: false,
        heroImage: '/images/hero/brockton.png',
        videoTestimonial: { url: '/videos/testimonials/brockton.mp4', thumbnail: '/images/testimonials/brockton-thumb.jpg', homeownerName: 'Maria S.' }
    },
    'winthrop': {
        slug: 'winthrop',
        name: 'Winthrop',
        county: 'Suffolk',
        region: 'greater-boston',
        housingStock: 'Winthrop\'s dense coastal peninsula properties',
        primaryPainPoint: 'intensive coastal storm surges and flood-resilient roofing',
        historic: true,
        snowBelt: false,
        coastal: true,
        heroImage: '/images/hero/winthrop.png',
        videoTestimonial: { url: '/videos/testimonials/winthrop.mp4', thumbnail: '/images/testimonials/winthrop-thumb.jpg', homeownerName: 'Thomas L.' }
    },
    'medford': {
        slug: 'medford',
        name: 'Medford',
        county: 'Middlesex',
        region: 'greater-boston',
        housingStock: 'Medford\'s classic streetcar suburb architecture and Italianate homes',
        primaryPainPoint: 'aging infrastructure and riverine flood protection',
        historic: true,
        snowBelt: false,
        coastal: false,
        heroImage: '/images/hero/medford.png',
        videoTestimonial: { url: '/videos/testimonials/medford.mp4', thumbnail: '/images/testimonials/medford-thumb.jpg', homeownerName: 'Sarah K.' }
    },
    'salem': {
        slug: 'salem',
        name: 'Salem',
        county: 'Essex',
        region: 'coastal',
        housingStock: 'Salem\'s world-renowned First Period and masonry historic districts',
        primaryPainPoint: 'slate repair and sea-level rise vulnerability',
        historic: true,
        snowBelt: false,
        coastal: true,
        heroImage: '/images/hero/salem.png',
        videoTestimonial: { url: '/videos/testimonials/salem.mp4', thumbnail: '/images/testimonials/salem-thumb.jpg', homeownerName: 'Robert D.' }
    },
    'sutton': {
        slug: 'sutton',
        name: 'Sutton',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Sutton\'s rural Colonial farmhouses and acreage estates',
        primaryPainPoint: 'severe ice damming and heavy snow load management',
        historic: true,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/sutton.png',
        videoTestimonial: { url: '/videos/testimonials/sutton.mp4', thumbnail: '/images/testimonials/sutton-thumb.jpg', homeownerName: 'Mark B.' }
    },
    'leominster': {
        slug: 'leominster',
        name: 'Leominster',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Leominster\'s varied residential stock and manufacturing-era homes',
        primaryPainPoint: 'freeze-thaw cycle fatigue and winter storm resilience',
        historic: false,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/leominster.png',
        videoTestimonial: { url: '/videos/testimonials/leominster.mp4', thumbnail: '/images/testimonials/leominster-thumb.jpg', homeownerName: 'Linda G.' }
    },
    'berlin': {
        slug: 'berlin',
        name: 'Berlin',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Berlin\'s quiet rural residential properties',
        primaryPainPoint: 'remote access and extreme winter weather protection',
        historic: false,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/berlin.png',
        videoTestimonial: { url: '/videos/testimonials/berlin.mp4', thumbnail: '/images/testimonials/berlin-thumb.jpg', homeownerName: 'Chris P.' }
    },
    'worcester': {
        slug: 'worcester',
        name: 'Worcester',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Worcester\'s high-density triple-deckers and urban core architecture',
        primaryPainPoint: 'ice dam prevention and aggressive financing needs',
        historic: false,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/worcester.png',
        videoTestimonial: { url: '/videos/testimonials/worcester.mp4', thumbnail: '/images/testimonials/worcester-thumb.jpg', homeownerName: 'Ellen J.' }
    },
    'spencer': {
        slug: 'spencer',
        name: 'Spencer',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Spencer\'s rural and lakeside residential stock',
        primaryPainPoint: 'moisture management and heavy winter precipitation',
        historic: false,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/spencer.png',
        videoTestimonial: { url: '/videos/testimonials/spencer.mp4', thumbnail: '/images/testimonials/spencer-thumb.jpg', homeownerName: 'John W.' }
    },
    'auburn': {
        slug: 'auburn',
        name: 'Auburn',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Auburn\'s mid-century suburban ranches',
        primaryPainPoint: 'aging material failure and ice dam prevention',
        historic: false,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/auburn.png',
        videoTestimonial: { url: '/videos/testimonials/auburn.mp4', thumbnail: '/images/testimonials/auburn-thumb.jpg', homeownerName: 'Patricia M.' }
    },
    'charlton': {
        slug: 'charlton',
        name: 'Charlton',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Charlton\'s historic double-chimney Colonial homes',
        primaryPainPoint: 'structural snow load integrity and chimney flashing',
        historic: true,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/charlton.png',
        videoTestimonial: { url: '/videos/testimonials/charlton.mp4', thumbnail: '/images/testimonials/charlton-thumb.jpg', homeownerName: 'David H.' }
    },
    'webster': {
        slug: 'webster',
        name: 'Webster',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Webster\'s lakeside cottages and pre-1939 residential stock',
        primaryPainPoint: 'moisture intrusion and winter freeze damage',
        historic: true,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/webster.png',
        videoTestimonial: { url: '/videos/testimonials/webster.mp4', thumbnail: '/images/testimonials/webster-thumb.jpg', homeownerName: 'Kelly F.' }
    },
    'douglas': {
        slug: 'douglas',
        name: 'Douglas',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Douglas\'s rural woodland properties and historic cottages',
        primaryPainPoint: 'debris management and extreme winter resilience',
        historic: true,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/douglas.png',
        videoTestimonial: { url: '/videos/testimonials/douglas.mp4', thumbnail: '/images/testimonials/douglas-thumb.jpg', homeownerName: 'Michael B.' }
    },
    'hopedale': {
        slug: 'hopedale',
        name: 'Hopedale',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Hopedale\'s historic company-built double-family houses',
        primaryPainPoint: 'multi-family roofing complexity and historic district compliance',
        historic: true,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/hopedale.png',
        videoTestimonial: { url: '/videos/testimonials/hopedale.mp4', thumbnail: '/images/testimonials/hopedale-thumb.jpg', homeownerName: 'Nancy T.' }
    },
    'upton': {
        slug: 'upton',
        name: 'Upton',
        county: 'Worcester',
        region: 'snow-belt',
        housingStock: 'Upton\'s established single-family suburban stock',
        primaryPainPoint: 'asphalt shingle longevity and ice dam prevention',
        historic: false,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/upton.png',
        videoTestimonial: { url: '/videos/testimonials/upton.mp4', thumbnail: '/images/testimonials/upton-thumb.jpg', homeownerName: 'George S.' }
    },
    'southwick': {
        slug: 'southwick',
        name: 'Southwick',
        county: 'Hampden',
        region: 'western-ma',
        housingStock: 'Southwick\'s Greek Revival and Federal architectural heritage',
        primaryPainPoint: 'extreme heat records and Pioneer Valley flood risk',
        historic: true,
        snowBelt: true,
        coastal: false,
        heroImage: '/images/hero/southwick.png',
        videoTestimonial: { url: '/videos/testimonials/southwick.mp4', thumbnail: '/images/testimonials/southwick-thumb.jpg', homeownerName: 'Linda W.' }
    }
};
