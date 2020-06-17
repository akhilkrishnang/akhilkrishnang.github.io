/**
 * View JS Controller
 * used mainly for dynamic data rendering
 */
var app = new Vue({
    el: '#profile-app',
    data: {
        mainSkills: [
            { name: 'HTML+CSS', rank: '90' },
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
        subSkills: ['RESTful web services', 'LESS/SCSS', 'Agile/Scrum', 'JIRA', 'Google Material Design', 'Airbnb Design follower', 'Eclipse/STS ', 'VSCode', 'IBM CLM', 'Adobe Photoshop', 'Figma']
    }
})

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
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
    console.log("in");
    let fromTop = window.scrollY;
    let linksLength = mainNavLinks.length;
    for (var i = 0; i < linksLength; i++) {
        let currlink = mainNavLinks[i];
        let currSection = document.querySelector(currlink.hash);
        let condition = fromTop >= currSection.offsetTop;//Check if scroll position is after start of section

        if (i + 1 < linksLength) {//If there is next section, modify condition
            let nextlink = mainNavLinks[i + 1];
            let nextSection = document.querySelector(nextlink.hash);
            condition = condition && (fromTop < nextSection.offsetTop)//Check if scroll not passed to next section start
        }

        if (condition) {
            currlink.classList.add("sidebar__menu-icon--active");
        } else {
            currlink.classList.remove("sidebar__menu-icon--active");
        }
    }
}

var debouncedActivateFn = debounce(updateActiveLink, 100);
window.addEventListener("scroll",debouncedActivateFn);//Debouncing for performance benefit