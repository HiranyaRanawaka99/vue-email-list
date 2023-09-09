const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],
            numberEmails: 10.
        };
    },

    methods: {
        fetchEmails() {
            for (let i = 0; i <= 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        // console.log(response.data.response);
                        const generatedEmail = response.data.response;
                        this.emails.push(generatedEmail);
                    })
            }
        },
    },

    mounted() {
        this.fetchEmails();
    },
}).mount('#app')