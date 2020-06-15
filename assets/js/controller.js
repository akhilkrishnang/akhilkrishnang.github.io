var app = new Vue({
    el: '#profile',
    data: {
        activeSection:'profile',
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
    },
    methods: {
        goto(refName) {
            this.activeSection = refName;
            var element = this.$refs[refName];
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
})