const RootComponent = {
    data () {
        return {
            ClassName1:"div1",
            ClassName2:"div2",
            ClassName3:"div3"
        }
    },
    methods: {
      onmouseenter1(){
        this.ClassName1="div1_hover";
        setTimeout(() =>{
          this.ClassName1="div1";
      },300);
      },
      onmouseenter2(){
        this.ClassName2="div2_hover";
        setTimeout(() =>{
          this.ClassName2="div2";
      },300);
      },
      onmouseenter3(){
        this.ClassName3="div3_hover";
        setTimeout(() =>{
          this.ClassName3="div3";
      },300);
      }
    }

}
const app = Vue.createApp(RootComponent);
const vm = app.mount('#header_div');

// const Menu1 = {
//   data() {
//     return {
//       seen:true,
//       f1:false,
//       f2:false,
//       f3:false,
//       f4:false,
//     }
//   },
//   methods: {
//     show(){
//       setTimeout(() =>{
//         this.f1=true;
//     },250);
//       setTimeout(() =>{
//         this.f2=true;
//     },500);
//       setTimeout(() =>{
//         this.f3=true;
//     },750);
//     setTimeout(() =>{
//       this.f4=true;
//     },1000);
//     },
//   }

// }
// const vm1 = Vue.createApp(Menu1).mount('#accordion1');
// // vm1.show();


