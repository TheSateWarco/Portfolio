$(document).ready(function () {
    // Initial visibility states
    $('.otherProjects').hide();
    $('.project').hide();
    $('.abt').show();

    // Contact links data
    const contactLinks = [
        { text: "slayge.treasure@gmail.com", href: "mailto:slayge.treasure@gmail.com" },
        { text: "LinkedIn", href: "http://www.linkedin.com/in/sage-tesoro-a2ab672b1" },
        { text: "Resume", href: "media/otherMedia/STEM Resume Sage 'Aulani Tesoro (2026).pdf" }
    ];

    // Projects data
    const projects = [
        {
            title: "KOI - Kingdom of Influence",
            description: "Many young neurodivergent adults struggle with social interactions. Unspecified Studios is creating a single player roleplay game that blends relationship-building with real-world developmental psychology principles. DIR Floortime principles help people build emotion connections by using one's interests to help with engagement, inspire problem solving, and more.<br><br>The Minimum Viable Product was made on Godot and is open to the public! In this alpha version, I helped program player movement, camera movement, a guitar mini game, and interactions with objects. In addition, I connected a motion traking AI to capture the player's physical facial expressions and rely that in Godot in real time.<br><br>We are now working on a Unity demo; however, I will be taking a step back from this project due to my workload. The project will continue development, but I will be in a mentor position instead of a main developer.<br><br>Note: The video is the face tracking program also working in unity",
            status: "Ongoing",
            language: ["C#", "Python", "GDScript"],
            program: ["Unity", "Godot", "GitHub", "Blender"],
            imageURLs: ["mainMenu.jpg", "KOI.png","conceptArt.png"],
            imageAlt: ["main Menu art", "KOI alpha","MC concept art"],
            videos: ["facetracking.mp4"],
            youtube: "",
            links: "",
            linkText: "",
            downloadable: "KingdomOfInfluence.exe",
            downloadText: "Download KOI Alpha Now!"
        },
        {
            title: "Ex-traterrestrial",
            description: "In November 2025, Arizona State University held the first Arizona State Game Jam. Two teams from the schools Arizona State University, Northern Arizona University, Grand Canyon University, The University of Arizona, and University of Advancing Technology with a max of 5 developers competed against eachother. We had 24 hours to make a game based on the theme \"Creepy.\" We also had the artistic constraint of only using assets provided by the hosts. <br><br>We all brainstormed what we thought were creepy until one of the guys on my team suggested \"MEN.\" Luckily, I made a game with a similar concept earlier in this year (check out the project \"No Place Like Home.\") At first, we wanted the player to somehow escape a house but soon realized that goal wouldn't make sense if we wanted the player to be the Creep. Ultimately, we made the player's goal to go deeper into the house. The whole game the player must find clues of their lover's location while attempting to hide from the invader. If the player succeeds, the game reveals that the player is the girl's ex and the invader is actually her new boyfriend.<br><br>I worked on the main movement and sound mechanics of the player and how the enemy reacted to them. When the player moves, the enemy would be able to \"hear\" the player and notifies the player they are now being chased. Based on the type of movement (sprint, walk, crouch), the enemy will be able to hear from different distances.<br><br>In the end, our team won the game jam! It was nice working with people who were all as passionate about game development as I am.",
            status: "Demo Completed",
            language: ["C#"],
            program: ["Unity", "GitHub"],
            imageURLs: ["ex1.png", "ex3.JPEG"],
            imageAlt: ["Gameplay", "Winners of Game Jam"],
            videos: [],
            youtube: "https://www.youtube.com/embed/H0Ieh5kTyJI",
            links: "",
            linkText: "",
            downloadable: "Ex-traterrestrial.zip",
            downloadText: 'Download Ex-traterrestrial Zipfile Now!'
        },
        {
            title: "Archery Simulator",
            description: "STEM Capstone is a year long project meant for seniors in highschool. I unknowingly enrolled for this class as a junior and completed the STEM honors a year ahead of my grade. <br><br> I started archery in 4th grade and was inspired to fix a common problem among archers, their form. Many people have a hard time keeping a consistent form. There are a couple devices that attempt to fix certain bad habits, but they all have their drawbacks:<br><br>&emsp;Accubow: Good for practicing front arm stabalization, but not good for consistency<br><br>&emsp;Clicker: Good for draw consistency, but the user may be reliant on the sound rather than their back muscles<br><br>My solution was a virtual simulation that tracks both arms of the archer. A phone is attached to their bow. The gyroscope in the phone relays information to the simulation and changes the point of view in the virtual reality. Another gyroscope is placed on the back arm using a glove. This tracks the position of the back hand and how much it moves during the \"drawing\" processes. This is information is also relayed to the user by showing in real-time motion tracking. The user is able to see a side view of a human model that is replicating the movement of their back arm.<br><br>I decided to pick this project back up 4 years later. Instead of making a simulation, I plan to make an app or website that will show statistical data. It will track exact hand placement and will act similar to a physical clicker; however, I want the user to be able to use it without relying on a sound. This will be done using a laser distance measuring tool, VL53L1X. In the application, my goal is to create a toggable setting where the user can ask for assistance and there will be a visual or audible indication to let the user know if they have good form. When the setting is off, the user will still be able to collect data on hand placement and can attempt to fix their form by themselves.",
            status: "On-Hold",
            language: ["C++", "C#"],
            program: ["Unity", "Ardiuno","OnShape"],
            imageURLs: ["simulation.PNG", "design.png"],
            imageAlt: ["Mobile Simulation", "3D Model of the attachment"],
            videos: ["ArcherySim.mp4"],
            youtube: "",
            links: "media/otherMedia/STEM Research.pdf",
            linkText: "Research Paper",
            downloadable: "",
            downloadText: ""
        },
        {
            title: "No Place Like Home",
            description: "I lead a team of 3 to create a horror game within a week for the Bi-Annual (2025) Brackey's game jam. We were given the topic of \"Nothing Can Go Wrong\" and thought of an escape game. Since most of the team were new to game development and Unity, we decided to make a 3D point and click game. <br><br>The story behind our game was that the player is stuck in a house and isn't exactly sure why. After exploring through certain areas, the player realizes they are a stalker and their crush's family just came home. The player's goal is to escape. <br><br>Sadly, when the team turned it in, none of the jumpscares worked. We had planned to fix this, but never got around to do it.",
            status: "Demo Completed",
            language: ["C#"],
            program: ["Unity"],
            imageURLs: ["Title.png","MirrorCutscene.png"],
            imageAlt: ["Title Screen","Mirror Cutscene"],
            videos: [],
            youtube: "https://www.youtube.com/embed/g59TiysYv4w",
            links: "",
            linkText: "",
            downloadable: "BGJ2025_Data.zip",
            downloadText: "Download the zipfile to play!"
        },
        {
            title: "Bubble Buzzer Beater",
            description: "I participated in the annual Global Game Jame 2025 hosted by NAU. I worked with 3 other game developers to create a game based on the theme \"Bubble.\" We sent 48 hours to make multiple minigames.<br><br>My minigame consisted of the player playing as a turtle and collecting a certain amount of bubbles as fast as possible. This went through many iterations like a game similar to flappy bird, but I am happy with the end result.",
            status: "Demo Completed",
            language: ["C#"],
            program: ["Unity"],
            imageURLs: ["bbb1.png","bbb2.png","bbb3.png"],
            imageAlt: ["Title Screen","dancing Mini game", "turtle minigame"],
            videos: [],
            youtube: "https://www.youtube.com/embed/-5FgYpnkq7Q",
            links: "",
            linkText: "",
            downloadable: "BubbleBuzzerBeater.zip",
            downloadText: "Download the zipfile to play!"
        },
        {
            title: "StreetShot",
            description: "I was introduced to photography in sophmore year of highschool; however, that was the year the world was quarantined. I was upset that I couldn't learn photography by actually going out and taking photos. Even now, photos are repatitive when you are unable to leave a certain vicinity. I tried looking for photography simulators and I couldn't find any on STEAM. I decided to change that.<br><br>My goal is to make a photography simulator that can teach new photographers the basics without needed an expensive camera or a \"beautiful\" area to take photos in.",
            status: "On Hiatus",
            language: ["C++"],
            program: ["Unreal"],
            imageURLs: ["camera.jpg","studioLayout.png"],
            imageAlt: ["camera model","studio layout"],
            videos: [],
            youtube: "",
            links: "",
            linkText: "",
            downloadable: "",
            downloadText: ""
        }, 
        {
            title: "ImportsExports",
            description: "My friend requested me to make a website for his family's business. I am still programming the backend to make a demo. I will program the purchase and security at a later date",
            status: "On Going",
            language: ["html","java script","css"],
            program: ["pgAdmin"],
            imageURLs: [],
            imageAlt: [],
            videos: [],
            youtube: "",
            links: "",
            linkText: "",
            downloadable: "",
            downloadText: ""
        },  
        {
            title: "Operating System Simulation",
            description: "I am creating a simulation of an operating system similar to windows. This is JUST a simulation and I will not be mplementing nearly as much as a real OS. <br><br>Note: Contact me if you want to see this project in action. It will stay private due to policies from Northern Arizona University",
            status: "On Going",
            language: ["C"],
            program: ["PuTTY", "WinSCP"],
            imageURLs: [],
            imageAlt: [],
            videos: [],
            youtube: "",
            links: "",
            linkText: "",
            downloadable: "",
            downloadText: ""
        },
        {
            title: "Gauntlet",
            description: "Created a 2d platform game. Your goal is to escape the dungeon. I did all the programming which includes player movement, interactions, double jump, and the grappling hook mechanics.<br><br>Note: The link may be broken",
            status: "Completed",
            language: ["nodes"],
            program: ["Construct"],
            imageURLs: ["gauntlet.png"],
            imageAlt: ["Screenshot of the game"],
            videos: [],
            youtube: "",
            links: "https://sat484.z13.web.core.windows.net/Gauntlet/index.html",
            linkText: "Play Now!",
            downloadable: "",
            downloadText: ""
        }, 
        {
            title: "Bittersweet",
            description: "Created a text based story game. Starts out as a typical dating simulator, but it's the player's choice if they want to continue a down a different path.",
            status: "Completed",
            language: ["nodes"],
            program: ["Twine"],
            imageURLs: ["text.png"],
            imageAlt: ["Screenshot of the game"],
            videos: [],
            youtube: "",
            links: "media/otherMedia/BitterSweet.html",
            linkText: "Play Now!",
            downloadable: "",
            downloadText: ""
        }, 
        {
            title: "Fairy Tactics",
            description: "Lead a group of 3 to make a fantasy board game. The player must choose between gathering materials and attacking opponents. ",
            status: "Completed",
            language: [],
            program: [],
            imageURLs: ["boardGame.png"],
            imageAlt: ["Screenshot of the game"],
            videos: [],
            youtube: "https://www.youtube.com/embed/25xXVjU7Yqg",
            links: "",
            linkText: "",
            downloadable: "",
            downloadText: ""
        }
    ];

    // Experience data
    const experience = [
        {
            title: "Grader",
            dates: "August 2025 - December 2025",
            locations: "Northern Arizona University",
            desc: "Graded for the class IMG 186 that teaches students the basic theories behind game development"
        },
        {
            title: "Data Annotations Tech",
            dates: "March 2024 - March 2025",
            locations: "Remote",
            desc: "Review hundreds of AI generated programs (mainly in Python and Java) and train AI models on how to improve their code"
        }
    ];

    // School/Education data
    const school = [
        {
            School: "Northern Arizona University",
            dates: "August 2024 - Current",
            GPA: "3.94",
            class: "Computer Science (Python, C), Data Structures (C), Web Programming, Computer Networks, Artificial Intelligence, Discrete Math, Linear Algebra"
        },
        {
            School: "Leeward Community College",
            dates: "January 2024 - June 2024",
            GPA: "4.0",
            class: "Computer Science (Java), Physics I & II"
        },
        {
            School: "University of Hawaii - West Oahu",
            dates: "August 2023 - May 2023",
            GPA: "4.0",
            class: "Calculus I & II"
        }
    ];

    // Extract all unique languages from projects
    let skillLanguage = new Set();
    projects.forEach((project) => {
        project.language.forEach((language) => {
            skillLanguage.add(language);
        });
    });

    // Extract all unique programs from projects
    let skillPrograms = new Set();
    projects.forEach((project) => {
        project.program.forEach((program) => {
            skillPrograms.add(program);
        });
    });

    // RENDER FUNCTIONS

    function renderContact() {
        let contactContainer = $("#contactContainer");
        contactContainer.empty();

        contactLinks.forEach((link) => {
            const linkCard = $(`<a>${link.text}</a>`)
                .attr("href", link.href)
                .attr("target", "_blank")
                .attr("id", "contact");
            contactContainer.append(linkCard);
        });
    }

    function renderSkills() {
        let langContainer = $(".abtLang");
        langContainer.empty();

        skillLanguage.forEach((lang) => {
            const langCard = $(`<li>${lang}</li>`);
            langContainer.append(langCard);
        });

        let progContainer = $(".abtProgram");
        progContainer.empty();

        skillPrograms.forEach((prog) => {
            const progCard = $(`<li>${prog}</li>`);
            progContainer.append(progCard);
        });
    }

    function renderEdu() {
        let educationTable = $(".eduTable");
        educationTable.empty();

        school.forEach(edu => {
            // HEADER ROW - School name spans 2 columns
            const headerRow = document.createElement("tr");
            const th = document.createElement("th");
            th.colSpan = 2;
            th.textContent = edu.School;
            headerRow.appendChild(th);
            educationTable.append(headerRow);

            // DATE + CLASS ROW
            const dateClassRow = document.createElement("tr");

            const tdDate = document.createElement("td");
            tdDate.textContent = edu.dates;
            dateClassRow.appendChild(tdDate);

            const tdClass = document.createElement("td");
            tdClass.textContent = edu.class;
            tdClass.rowSpan = 2;
            dateClassRow.appendChild(tdClass);

            educationTable.append(dateClassRow);

            // GPA ROW
            const GPARow = document.createElement("tr");

            const tdGPA = document.createElement("td");
            tdGPA.textContent = "GPA: " + edu.GPA;
            GPARow.appendChild(tdGPA);

            educationTable.append(GPARow);
        });
    }

    function renderEx() {
        let experiencesTable = $(".exTable");
        experiencesTable.empty();

        experience.forEach(exp => {
            // HEADER ROW - Title spans 2 columns
            const headerRow = document.createElement("tr");
            const th = document.createElement("th");
            th.colSpan = 2;
            th.textContent = exp.title;
            headerRow.appendChild(th);
            experiencesTable.append(headerRow);

            // DATE + DESCRIPTION ROW
            const dateDescRow = document.createElement("tr");

            const tdDate = document.createElement("td");
            tdDate.textContent = exp.dates;
            dateDescRow.appendChild(tdDate);

            const tdDesc = document.createElement("td");
            tdDesc.textContent = exp.desc;
            tdDesc.rowSpan = 2;
            dateDescRow.appendChild(tdDesc);

            experiencesTable.append(dateDescRow);

            // LOCATION ROW
            const locationRow = document.createElement("tr");

            const tdLocation = document.createElement("td");
            tdLocation.textContent = exp.locations;
            locationRow.appendChild(tdLocation);

            experiencesTable.append(locationRow);
        });
    }

    function renderProjectCard(project, index) {
        // Image container
        let imageContainer = $('.imgContainer');
        imageContainer.empty();

        project.imageURLs.forEach((url, imgIndex) => {
            let img = $("<img>")
                .attr("src", 'media/images/' + index + "/" + url)
                .attr("alt", project.imageAlt[imgIndex] || "")
                .css({ width: "400px", height: "250px"});
            imageContainer.append(img);
        });

        // Main text
        if (project.links.length > 1){
            $('.mainText').html(`
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `);
        }
        else{
            $('.mainText').html(`
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `);
        }


        // Download link
        let down = $('.link');
        down.empty();
        if (project.downloadText) {
            const downCard = $(`<a>${project.downloadText}</a>`)
                .attr("href", project.downloadable)
                .attr("download", "");
            down.append(downCard);
        }
        if (project.links.length > 1){
            const linkCard = $(`<a>${project.linkText}</a>`)
                .attr("href", project.links)
            down.append(linkCard);
        }

        // Status
        $('.status').html(`<h3>Status:</h3>&nbsp;<p>${project.status}</p>`);

        // Languages
        let langContainer = $(".lang");
        langContainer.empty();
        project.language.forEach((language) => {
            const lang = $(`<p>- ${language}</p>`);
            langContainer.append(lang);
        });

        // Programs
        let programContainer = $(".program");
        programContainer.empty();
        project.program.forEach((program) => {
            const prog = $(`<p>- ${program}</p>`);
            programContainer.append(prog);
        });

        // Video
        let htmlContent = ``;
        $('.video').empty();
        if (project.youtube) {
            htmlContent += `
                <iframe width="480" height="270"
                    src="${project.youtube}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            `;
        } else if (project.videos && project.videos.length > 0) {
            htmlContent += `
                <video width="480" height="270" controls>
                    <source src="media/otherMedia/${project.videos}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            htmlContent += `<p><em>No video available for this project.</em></p>`;
        }
        $('.video').html(htmlContent);
    }

    function renderOtherProjects() {
        let container = $('.otherProjects');
        container.empty();

        projects.slice(3).forEach((project, idx) => {
            const actualIndex = idx + 3;
            console.log(actualIndex);
            
            // Build images HTML
            let imagesHTML = '';
            project.imageURLs.forEach((url, imgIndex) => {
                imagesHTML += `<img src="media/images/${actualIndex}/${url}" 
                                    alt="${project.imageAlt[imgIndex] || ''}" 
                                    style="width: 400px; height: 250px;">`;
            });

            // Build languages HTML
            let languagesHTML = project.language.map(lang => `<p>- ${lang}</p>`).join('');

            // Build programs HTML
            let programsHTML = project.program.map(prog => `<p>- ${prog}</p>`).join('');

            // Build video HTML
            let videoHTML = '';
            if (project.youtube) {
                videoHTML = `
                    <iframe width="480" height="270"
                        src="${project.youtube}"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                `;
            } else if (project.videos && project.videos.length > 0) {
                videoHTML = `
                    <video width="480" height="270" controls>
                        <source src="media/otherMedia/${actualIndex}/${project.videos}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else {
                videoHTML = `<p><em>No video available for this project.</em></p>`;
            }

            // Build download link HTML
            let downloadHTML = '';
            if (project.downloadText) {
                downloadHTML = `<a href="${project.downloadable}" download>${project.downloadText}</a>`;
            }

            // Build research link HTML
            let linkHTML = '';
            if (project.linkText) {
                linkHTML = `<a href="${project.links}" target="_blank">${project.linkText}</a>`;
            }

            const projectDiv = $(`
                <section class="otherProjectCard">
                <section class="mainContainer">
                    <section class="imgContainer">${imagesHTML}</section>

                    <section class="mainText">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    </section>

                    <section class="link">${downloadHTML} ${linkHTML}</section>
                </section>

                <section class="subContainer">
                    <section class="status"><h3>Status:</h3>&nbsp;<p>${project.status}</p></section>

                    <section class="skills2">
                    <section class="projLang">
                        <h3>Languages</h3>
                        <section class="lang">${languagesHTML}</section>
                    </section>

                    <section class="projProgram">
                        <h3>Programs</h3>
                        <section class="program">${programsHTML}</section>
                    </section>
                    </section>

                    <section class="video">${videoHTML}</section>
                </section>
                </section>
                `);
            container.append(projectDiv);
        });
    }

    // Initialize all render functions
    renderContact();
    renderSkills();
    renderEx();
    renderEdu();
    renderOtherProjects();

    // EVENT HANDLERS

    // Top 3 projects hover
    $('.top').hover(function () {
        $('.project').show();
        $('.otherProjects').hide();
        $('.abt').hide();

        const index = $(this).data('index');
        const project = projects[index];
        renderProjectCard(project, index);
    });

    // About Me hover
    $('.about').hover(function () {
        $('.otherProjects').hide();
        $('.project').hide();
        $('.abt').show();
    });

    // Other Projects hover
    $('.other').hover(function () {
        renderOtherProjects()
        $('.abt').hide();
        $('.project').hide();
        $('.otherProjects').show();
    });

});