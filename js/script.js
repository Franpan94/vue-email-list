const app = new Vue({

    el: '#root',

    data: {

        mails: [],
        mail: '',
    },

    methods: {

        listmail: function(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {

                this.mail = response.data.response;

                console.log(this.mail);

                this.mails.push(this.mail);
    
                })

        }

    },

    created() {

        for (let i = 0; i < 10; i++) {

            this.listmail();
            
        }
    }

})