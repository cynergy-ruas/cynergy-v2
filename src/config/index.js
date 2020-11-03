const images = require('@images');

module.exports = {
    siteTitle: 'Cynergy | Coding Club',
    tagline: 'collaboration. innovation. competition.',
    principles: {
        desktop: ['bigger', 'better', 'open & free'],
        mobile: ['bigger', 'better', 'foss'],
    },
    siteDescription: 'RUAS official coding club.',
    siteKeywords: 'Cynergy, Coding, Club',
    siteUrl: 'http://cynergyruas.tech',
    siteLanguage: 'en_US',
    name: 'Cynergy RUAS',
    location: 'Bengaluru, IN',
    email: 'cynergyruas@gmail.com',
    whatsapp: 'https://wa.me/918511595490',
    github: 'https://github.com/cynergy-ruas',
    socialMedia: [
        {
            name: 'GitHub',
            url: 'https://github.com/cynergy-ruas',
            iconName: 'github',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/cynergy_ruas',
            iconName: 'instagram',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/cynergy.ruas',
            iconName: 'twitter',
        },
        {
            name: 'Linkedin',
            url: 'https://linkedin.com/company/cynergy-ruas',
            iconName: 'linkedin',
        },
    ],

    navLinks: [
        {
            name: 'about',
            url: '/#about',
        },
        {
            name: 'events',
            url: '/#events',
        },
        {
            name: 'contact',
            url: '/#contact',
        },
    ],

    navHeight: 100,

    eventsTitle: 'events',
    eventCardsInfo: [
        {
            title: 'expert sessions',
            description:
                'Cynergy is the first of its kind coding club at RUAS. The purpose of Cynergy is embodied in its core open principles - Collaboration, Innovation and Competition. Cynergy is a plaform to promote learning and development of programming skills. It empowers students with competitive programming skill.',
            image: images.SessionsImage,
        },
        {
            title: 'hands-on workshops',
            description:
                'Cynergy is the first of its kind coding club at RUAS. The purpose of Cynergy is embodied in its core open principles - Collaboration, Innovation and Competition. Cynergy is a plaform to promote learning and development of programming skills. It empowers students with competitive programming skill.',
            image: images.WorkshopsImage,
        },
        {
            title: 'monthly challenges',
            description:
                'Cynergy is the first of its kind coding club at RUAS. The purpose of Cynergy is embodied in its core open principles - Collaboration, Innovation and Competition. Cynergy is a plaform to promote learning and development of programming skills. It empowers students with competitive programming skill.',
            image: images.ChallengesImage,
        },
        {
            title: 'techfest - aadhya',
            description:
                'Cynergy is the first of its kind coding club at RUAS. The purpose of Cynergy is embodied in its core open principles - Collaboration, Innovation and Competition. Cynergy is a plaform to promote learning and development of programming skills. It empowers students with competitive programming skill.',
            image: images.AadhyaImage,
        },
    ],
    srConfig: (delay = 200) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};
