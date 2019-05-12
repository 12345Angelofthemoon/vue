let vm=new Vue({
  el: '#root',
  data: {
    show: true,
    agree_txt,
    step: 1,
    check: false,
    form: {
      name: '',
      password: '',
      password2: '',
      mobile: '',
      email: ''
    }
  },
  methods: {
    close(){
      this.show=false;
    },
    prev(){
      if(this.step==1)return;

      this.step--;
    },
    next(){
      if(this.step==3)return;

      this.step++;
    },
    valid(){
      switch(this.step){
        case 1:
          return this.check;
        case 2:
          if(!this.form.name){
            return false;
          }else if(!this.form.password || !this.form.password2){
            return false;
          }else if(this.form.password!=this.form.password2){
            return false;
          }

          return true;
        case 3:
          if(!this.form.mobile || !this.form.email){
            return false;
          }

          return true;
      }
    },
    submit(){
      console.log(this.form);
    }
  }
})
