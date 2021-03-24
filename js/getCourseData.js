function getCourseData(course) {
    
    const courseData = [
        {
            name: 'WAFS',
            full_name: 'Web App From Scratch',
            teachers: [
                'Joost Faber',
                'Suus ten Voorde'
            ]
        },
        {
            name: 'CSSTTR',
            full_name: 'CSS To The Rescue',
            teachers: [
                'Sanne t\'Hooft',
                'Vasilis van Gemert'
            ]
        },
        {
            name: 'PWA',
            full_name: 'Progressive Web Apps',
            teachers: [
                'Joost Faber',
                'Declan Rek'
            ]
        },
        {
            name: 'BT',
            full_name: 'Browser Technologies',
            teachers: [
                'Koop Renders',
                'Peter Paul Kech'
            ]
        },
        {
            name: 'RTW',
            full_name: 'Real-Time Web',
            teachers: [
                'Jan Janneman',
                'Man Mannejan',
                'Nam NammeJam'
            ]
        },
        {
            name: 'HCD',
            full_name: 'Human Centred Design',
            teachers: [
                'Jan Janneman',
                'Man Mannejan',
                'Nam NammeJam'
            ]
        },
        {
            name: 'MP',
            full_name: 'Meesterproef',
            teachers: [
                'Jan Janneman',
                'Man Mannejan',
                'Nam NammeJam'
            ]
        },
    ];

    return courseData.map(entry => {
        if (entry.name === course) {
            return entry;
        }
    }).filter(entry => entry !== undefined);
};

module.exports = { getCourseData };