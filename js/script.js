const app = new Vue({

    el: '#root',

    data: {

        mails: [],
        mail: '',
    },

    created() {

        if(this.mail != true){

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
    
                    this.mail = response.data.response;
    
                    console.log(this.mail);
    
                    this.mails.push(this.mail);
    
    
                })
            }
        }
    }

})