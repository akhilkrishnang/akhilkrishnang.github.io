/**
 * View JS Controller
 * used mainly for dynamic data rendering
 */
var app = new Vue({
    el: '#profile-app',
    data: {
        mainSkills: [
            { name: 'HTML', rank: '90' },
            { name: 'CSS', rank: '90' },
            { name: 'Javascript', rank: '85' },
            { name: 'Angular JS', rank: '80' },
            { name: 'Angular', rank: '80' },
            { name: 'Ajax', rank: '80' },
            { name: 'Java', rank: '80' },
            { name: 'JSP', rank: '80' },
            { name: 'SQL', rank: '80' },
            { name: 'NPM', rank: '80' },
            { name: 'GIT(Bitbucket)', rank: '80' },
            { name: 'Jasmine', rank: '80' },
            { name: '+' }
        ],
        subSkills: ['RESTful web services', 'LESS/SCSS', 'Agile/Scrum', 'JIRA', 'Google Material Design', 'Airbnb Design follower', 'Eclipse/STS ', 'VSCode', 'IBM CLM', 'Adobe Photoshop', 'Figma'],
        experiences: [
            {
                companyName: 'IBS Software',
                timeLine: [
                    { position: 'SOLUTION ARCHITECT', period: 'Jul 2019 - Present' },
                    { position: 'TECHNICAL LEAD', period: 'Jun 2017 - Jul 2019' },
                    { position: 'SENIOR SOFTWARE ENGINEER', period: 'Jun 2016 - Jun 2017' },
                    { position: 'SOFTWARE ENGINEER', period: 'Jan 2014 - Jun 2016' }
                ],
                summary: 'Started career as a Full Stack Java Developer using Spring MVC and AngularJS. Currently more focused into front-end design and development using latest web technologies. 6+ years of product life cycle experience (Travel & Logistics Business)',
                highlights: [
                    'Designing UX for web applications, UI screen development and maintenance', 'Pioneer UX transformation initiatives and Hackathons in company', 'Create User Interface Sketches and Design', 'Develop reusable UI components with AngularJS and JavaScript', 'Fine-tune UI & business components in order to save loading time', 'Develop cross-browser, responsive designed screens with HTML5, Bootstrap, Google Material UI and CSS', 'Maintain UI checklist and coding standards for the project', 'Carry out code reviews and unit testing ', 'Mentoring junior developers'
                ]
            },
            {
                companyName: 'ClaySys Technologies',
                timeLine: [
                    { position: 'SOFTWARE ENGINEER', period: 'Jun 2013 - Dec 2013' }
                ],
                summary: 'Worked in different service projects in various technologies.',
                highlights: [
                    'Web/iPad analytical tool using different chart components', 'Desktop applications for windows using MVVM and WPF', 'Data transformation engines using SSIS, SSRS and XML', 'Live chat web application using ASP.net and HTML5'
                ]
            }
        ],
        achievements: [
            'Represented company in an international Hackathon event organised by International Air Transport Association (IATA) at Dublin, Ireland and bagged first prize in corporate category. Sole UI developer in the Hackathon team (IBS Software)',
            'Awarded 1 Customer Champ, 1 Department Champ and 6 Team Champ Awards during various stages of career for UX protoype design,  creating new business components, introducing coding standards, and fine tuning UI components (IBS Software)',
            'Best Debutant Award for an extra ordinary start in organisation (IBS Software)',
            'Oil & Gas Logistics Industry business knowledge & certification (IBS Software)'
        ],
        education: [
            {
                timeLine: [
                    { position: 'GRADUATION', period: '2009-2013' }
                ],
                companyName: 'Govt. College of Engineering, Cherthala',
                summary: 'Computer Science and Engineering(B.Tech.) with Distinction having 76% marks from Cochin University of Science and Technology.'
            },
            {
                timeLine: [
                    { position: '10+2', period: '2007-2009' }
                ],
                companyName: 'Holy Family HSS, Cherthala',
                summary: 'Computer Science. Higher secondary education from Board of higher secondary education , Kerala with 84% marks.'
            }
        ]
    }
})

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

let mainNavLinks = document.querySelectorAll(".content__sidebar-items a");
function updateActiveLink() {
    let fromTop = window.scrollY;
    let linksLength = mainNavLinks.length;
    for (var i = 0; i < linksLength; i++) {
        let currlink = mainNavLinks[i];
        let currSection = document.querySelector(currlink.hash);
        let condition = fromTop + 100 >= currSection.offsetTop;//Check if scroll position is after start of section

        if (i + 1 < linksLength) {//If there is next section, modify condition
            let nextlink = mainNavLinks[i + 1];
            let nextSection = document.querySelector(nextlink.hash);
            condition = condition && (fromTop + 100 < nextSection.offsetTop)//Check if scroll not passed to next section start
        }

        if (condition) {
            currlink.classList.add("sidebar__menu-icon--active");
        } else {
            currlink.classList.remove("sidebar__menu-icon--active");
        }
    }
}

var debouncedActivateFn = debounce(updateActiveLink, 100);
window.addEventListener("scroll", debouncedActivateFn);//Debouncing for performance benefit