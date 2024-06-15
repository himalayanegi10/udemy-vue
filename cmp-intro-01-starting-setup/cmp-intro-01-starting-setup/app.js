const app = Vue.createApp({
    data() {
        return {
            showDetails: false,
            friends: [
                {
                    id: 1,
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                    name: 'Manuel Lorenzo',
                },
                {
                    id: 2,
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                    name: 'Julie Jones',
                }
            ]
        };
    },
    methods: {
        toggleShowDetails() {
            this.showDetails = !this.showDetails;
        }
    }
});

app.mount('#app');