const app = new Vue({

    el: '#root',

    data: {

        mails: [],
        mail:'',
    },
        
        created (){

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((Response) => {
                        
                        
                        this.mail = Response.data.response;
                        
                         console.log(this.mail)
                        this.mails.push(this.mail);
                        
                    })
            }
        }
    
})