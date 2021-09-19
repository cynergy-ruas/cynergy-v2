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
         {
            name: 'Slack ',
            url: 'https://join.slack.com/t/cynergy-ruas/shared_invite/zt-vqnbx9is-7Q1sz7pSBDN7Pv66GIymig',
            iconName: 'slack',
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
                'Learning anything happens at a faster rate if you just observe the experts do it. At Cynergy, we try to absorb the skills of others who have mastered it and therefore we try to bring in various experts from industries to help us upskill and build things faster. Experts from companies like Microsoft, Crio.Do, Coding Ninjas, Toshiba, and various other tech companies have given sessions in past.',
            image: images.SessionsImage,
        },
        {
            title: 'hands-on workshops',
            description:
                'All those theory learnt in the class is no good, unless you apply it on the field. We help our members to have talk with experts from various industries and the one most common feedback they delivered to students is to increase the amount of time they spend on hands-on work. On the same lines, we catalyze this by providing in person hands-on workshops for our members on anything under the sun.',
            image: images.WorkshopsImage,
        },
        {
            title: 'monthly challenges',
            description:
                "Challenges are the key to improvisation. If you succeed, you will get to celebrate and brag about it, but if you fail you will get to learn much more than who succeeded. These challenges are designed to test what you learnt. All the memes of getting test out of syllabus aren't relatable here because we aren't challenging what you memorized, but we would be challenging you on what you can apply.",
            image: images.ChallengesImage,
        },
        {
            title: 'techfest - aadhya',
            description:
                'We take initiatives to build a stronger community and build memories which you can cherish for years. Organizing the techfest for RUAS was one of the many initiatives which Cynergy upheld and leaving a legacy to hold the fort strongly for coming generations of students. View more about our techfest at aadhya.tech',
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
