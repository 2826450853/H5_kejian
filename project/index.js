const Menu1 = {
  data () {
      return {
          c1:false,
          c2:false,
          c3:false,
          seen1:false,
          seen2:false,
          seen2:false,
          f1:false,
          f2:false,
          f3:false,
          r1:true,
          bf1:false,
          sf1:false,//书签是否显示
          sb1:false,//书签跳跃动画
          sf2:true,//书签出场动画
      }
  },
  methods: {
    onmouseenter1(){
      this.c1=true;
      setTimeout(() =>{
        this.c1=false;
    },300);
    },
    onmouseenter2(){
      this.c2=true;
      setTimeout(() =>{
        this.c2=false;
    },300);
    },
    onmouseenter3(){
      this.c3=true;
      setTimeout(() =>{
        this.c3=false;
    },300);
    },
    onmouseenter4(){
      this.bf1=true;
      setTimeout(() =>{
        this.bf1=false;
      },1000);
    },
    onmouseenter5(){
      this.sb1=true;
      setTimeout(() =>{
        this.sb1=false;
        this.sf2=false;
      },1000);
    },
    show(){

      setTimeout(() =>{
        this.seen1=true;
        this.f1=true;
    },250);
      setTimeout(() =>{
        this.seen2=true;
        this.f2=true;
    },500);
      setTimeout(() =>{
        this.seen3=true;
        this.f3=true;
    },750);
      setTimeout(() =>{
        this.f1=false;
    },1250);
    setTimeout(() =>{
      this.f2=false;
    },1550);
    setTimeout(() =>{
      this.f3=false;
    },2000);
    setTimeout(() =>{
      this.r1=false;
    },2000);
    setTimeout(() =>{
      this.sf1=true;
    },1000);
    },
  }
}
Vue.createApp(Menu1).mount('#header_div').show();
