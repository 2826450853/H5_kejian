const Menu1 = {
    data () {
        return {
            r1:true,
            bf1:false
        }
    },
    methods: {
      onmouseenter4(){
        this.bf1=true;
        setTimeout(() =>{
          this.bf1=false;
        },1000);
      },
      show(){
  
      setTimeout(() =>{
        this.r1=false;
      },2000);
      },
    }
  }
Vue.createApp(Menu1).mount('#header_div').show();
