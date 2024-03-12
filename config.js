var config = {
    style: 'mapbox://styles/vivek1799/cltomiq2m01no01qpesx2ezg1',
    accessToken: 'pk.eyJ1Ijoidml2ZWsxNzk5IiwiYSI6ImNsdG40amVoZTAydXAyanRuaWY5ZDFwZjMifQ.LG0RZfoOgruQJ-3CRaJUkg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: "Journey & Background : I have always been drawn to visuals that ignite stories and inspire a deeper form of storytelling. Originally, I pursued my undergrad in Economics and Statistics with the aim of becoming an academic, centering my work around economic policies and international trade. However, my passion for writing and an inspiring story covered by a senior in my communications major ultimately led me to journalism. I started by covering local news as a reporting intern for a publication called punekarnews.in",
            // image: './path/to/image/source.png',
            // description: 'I have always been drawn to visuals that ignite stories and inspire a deeper form of storytelling. Originally, I pursued my undergrad in Economics and Statistics with the aim of becoming an academic, centering my work around economic policies and international trade. However, my passion for writing and an inspiring story covered by a senior in my communications major ultimately led me to journalism. I started by covering local news as a reporting intern for a publication called punekarnews.in,
            location: {
                center: [78.22250, 22.04088],
                zoom: 3.69,
                pitch: 34.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //  {
                //     layer: 'mapbox://styles/vivek1799/cltomiq2m01no01qpesx2ezg1',
                //      opacity: 1,
                //      duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: `Seeking newer forms of storytelling in journalism and leveraging my knack for numbers, I naturally progressed to Columbia's data journalism program. Throughout this journey, data has remained the focal point of my work. At Columbia, I honed my skills as a data reporter, covering the commercial rent regulation bill, which focused on the significant implications for small businesses and the local economy in New York City. Following the commercial rent and spaces beat, I conducted an in-depth analysis of neighborhood-level retail vacancy rates across the city and their complex relationships with metrics like poverty, unemployment, and rent using regression analysis. My goal was to identify where and how vacancy rates have spiked most dramatically. Through this analysis of retail vacancy across New York City's diverse neighborhoods, I developed an appreciation for understanding localities at a granular level with the help of public data.`,
            description:`Link to the story: <a href="https://vivek1799.github.io/New-York-Storefront-Analysis-2021-22/" target="_blank">Storefront Vaccany in NYC</a>`,
            location: {
                center: [-73.96236, 40.80746],
                zoom: 15.12,
                pitch: 30.50,
                bearing: -9.60
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            //     
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: "For my master's project, I studied rare earth mining in Greenland. Titled 'Mineral Riches and Melting Ice: Greenland's Rare Earth Opportunity and Challenge,' the story explored the resource potential, as just two mines hold 13% of the world's resources. I aimed to visually narrate the environmental and social concerns surrounding some of these mines. Collaborating closely with the Bloomberg CityLab editor, I mapped every rare earth mine in Greenland, leveraging interactive elements to highlight the industry's significance. This original data story stemmed from discovering an untapped dataset illuminating rare earth sites worldwide. Though more robust investment data could have enriched the piece further, I demonstrated proficiency in gathering, processing, and creatively presenting complex spatial information to tell a compelling data narrative.",
            // image: './path/to/image/source.png',
            description: `Link to the story: <a href="https://vivek1799.github.io/Greenland-Rare-Earth-Potential/" target="_blank">Mineral Riches and Melting Ice: Greenland's Rare Earth Opportunity </a>`,
            location: {
                center: [-44.11974, 75.34625],
                zoom: 2.47,
                pitch: 9.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'My interest in reporting on commodities led me to work as a market reporter covering the poultry industry. Here, I gained an understanding of the chicken and turkey supply chain. With the constant threat of highly pathogenic avian influenza (HPAI), I built a county-level HPAI tracker for my team to monitor the impact on companies and their flocks. While this role was rewarding, it did not fully utilize my data skills.',
            // image: './path/to/image/source.png',
            description: `Link to the story: <a href="https://vivek1799.github.io/hpai_cases_county_level/" target="_blank">An interactive map to efficiently track High Pathogenic Avian Influenza (HPAI) cases in commercial poultry at the county level</a>`,
            location: {
                center: [-74.19930, 39.95226],
                zoom: 10.45,
                pitch: 30.50,
                bearing: -9.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: "From reporting on pressing climate issues like rising sea levels to covering new innovations in science and technology, Scientific American's commitment aligns with my passion for energy and sustainability reporting. With their esteemed reputation and dedication to communicating scientific discoveries, Scientific American is the ideal platform to amplify my data storytelling abilities and contribute to raising awareness about the planet's pressing challenges. (Below mapped data from the Year Floodplain for the 2020s, based on FEMA's Preliminary Work Map data and the New York Panel on Climate Change's 90th Percentile Projections for Sea-Level Rise (11 inches). This visual representation highlights the potential impact of rising sea levels, a critical issue that Scientific American has been at the forefront of covering.) ",
            location: {
                center: [-74.04423, 40.73589],
                zoom: 8.52,
                pitch: 0.00,
                bearing: -26.27
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-of-ny-ezfn-5dsb-0nj9cy',
                    opacity: 1,
                    duration: 5000 // Optionally, specify a duration for the opacity transition
                }
            ],
            onChapterExit: [
                {
                    layer: 'city-of-ny-ezfn-5dsb-0nj9cy',
                    opacity: 0
                }
            ]
        },
        
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: "This internship opportunity at Scientific American will allow me to collaborate with a team of talented reporters and further develop my skills in reporting. If given this opportunity, I am confident that I would thrive on your team and make valuable contributions. I would appreciate the chance to discuss how my background and experience make me a strong fit for this role. Please feel free to review my portfolio and contact me if you require any additional information. Thank you for your consideration.",
            // image: './path/to/image/source.png',
            description: `<a href="https://www.vivekpatildata.com/" target="_blank">Portfolio </a> <br> <br>Sincerely, Vivek`,
            location: {
                center: [-96.09206, 40.79865],
                zoom: 3.62,
                pitch: 30.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};

// map.on('load', function() {
//     // Assuming 'city-of-ny' is a new source you need to add
//     // If it's already in the style, you only need to add the layer
//     map.addSource('city-of-ny', {
//         type: 'vector',
//         url: 'mapbox://styles/vivek1799/cltomiq2m01no01qpesx2ezg1', // Example URL, adjust to your source
//     });

//     map.addLayer({
//         "id": "city-of-ny-ezfn-5dsb-0nj9cy",
//         "type": "fill",
//         "source": "city-of-ny", // This matches the source ID added above
//         "source-layer": "city-of-ny-ezfn-5dsb-0nj9cy",
//         "minzoom": 0,
//         "maxzoom": 22,
//         "paint": {
//             "fill-color": "hsl(0, 89%, 79%)"
//         }
//     });
// });


   