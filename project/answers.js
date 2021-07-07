const Test = {
    data() {
        return{
            pace:[1],
            source_answers:[
                'C','A','C','C','D','B','A','A','B','A'
            ],
            people_answers:[],
            questions:[
                "<p class='question_text'>1.《诗经》是中国汉族文学上最早的一部诗歌总集，它又称()</p>",
                "<p class='question_text'>2.《诗经》中描写地方民间风俗的是哪一部分()</p>",
                "<p class='question_text'>3.《诗经》中主要是宗庙乐歌的是哪一部分()</p>",
                "<p class='question_text'>4.《诗经》全诗收集了自()至春秋中叶的作品</p>",
                "<p class='question_text'>5.《诗经》的主要采集者并尊称为“中华诗祖”的是()</p>",
                "<p class='question_text'>6.《风》包括了()个地方的民歌</p>",
                "<p class='question_text'>7. “关关雎鸠，在河之洲，窈窕淑女，君子好逑”出自《诗经》中()</p>",
                "<p class='question_text'>8. “执子之手，与子偕老”出自中()</p>",
                "<p class='question_text'>9. “雷填填兮雨冥冥，猿啾啾兮狖夜鸣”出自于()</p>",
                "<p class='question_text'>10. 《诗经》最晚的作品成于()</p>",

            ],
            answers_text:[
                ["<p class='answers_text'>A、《民歌》  </p>","<p class='answers_text'>B、《诗歌》  </p>","<p class='answers_text'>C、《诗》  </p>","<p class='answers_text'>D、《诗两百》  </p>"],
                ["<p class='answers_text'>A、风  </p>","<p class='answers_text'>B、小雅  </p>","<p class='answers_text'>C、颂  </p>","<p class='answers_text'>D、大雅  </p>"],
                ["<p class='answers_text'>A、风  </p>","<p class='answers_text'>B、小雅  </p>","<p class='answers_text'>C、颂  </p>","<p class='answers_text'>D、大雅  </p>"],
                ["<p class='answers_text'>A、夏朝  </p>","<p class='answers_text'>B、商朝  </p>","<p class='answers_text'>C、西周初年  </p>","<p class='answers_text'>D、东周初年  </p>"],
                ["<p class='answers_text'>A、王子夫  </p>","<p class='answers_text'>B、姜子牙  </p>","<p class='answers_text'>C、庄子  </p>","<p class='answers_text'>D、尹吉甫  </p>"],
                ["<p class='answers_text'>A、十四  </p>","<p class='answers_text'>B、十五  </p>","<p class='answers_text'>C、十六  </p>","<p class='answers_text'>D、十七  </p>"],
                ["<p class='answers_text'>A、国风  </p>","<p class='answers_text'>B、小雅  </p>","<p class='answers_text'>C、大雅  </p>","<p class='answers_text'>D、周颂  </p>"],
                ["<p class='answers_text'>A、风  </p>","<p class='answers_text'>B、大雅  </p>","<p class='answers_text'>C、颂  </p>","<p class='answers_text'>D、小雅  </p>"],
                ["<p class='answers_text'>A、《诗经》  </p>","<p class='answers_text'>B、《楚辞》  </p>","<p class='answers_text'>C、《汉赋》  </p>","<p class='answers_text'>D、《唐诗》  </p>"],
                ["<p class='answers_text'>A、春秋中叶  </p>","<p class='answers_text'>B、东周  </p>","<p class='answers_text'>C、汉初  </p>","<p class='answers_text'>D、战国  </p>"],
            ],
            answer1:"",
            answer2:"",
            answer3:"",
            answer4:"",
            question:"",
            questions_number:0,
            road_runner:true,
            perspectiveLeftReturn:true,
            perspectiveLeftReturn_fast:false,
            flipInX:false,
            selected_A:null,
            selected_B:null,
            selected_C:null,
            selected_D:null,
            select_vector:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
            score:0,
            seen:true,
            seen1:false,
            complete_test:0,
            disable:false,
            alert_seen:false,
            disable2:false,

        }
    },
    methods: {
        re_seen(){
            this.seen=true;
            this.seen1=false;
            this.select_vector=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            this.set_select();
            this.questions_number=0;
            this.pace=[1];
            this.perspectiveLeftReturn=true;
            this.road_runner=true;
            this.show();
            this.disable=true;
            this.correct_answer_select_set();
            this.set_select();
            console.log(this.select_vector);
            console.log(this.questions_number);
        },

        mouse_next(){
            if(this.pace.length<10){
            this.pace.push(1);
            this.questions_number++;
            this.perspectiveLeftReturn_fast=false;
            this.flipInX=false;
            this.perspectiveLeftReturn_fast=true;
            this.flipInX=true;
            setTimeout(() =>{
                this.perspectiveLeftReturn_fast=false;
                this.flipInX=false;
              },500);
              this.set_question();
              this.set_select();
              console.log(this.questions_number);
            }
        },
        mouse_after(){
            if(this.pace.length>1){
            this.pace.pop();
            this.questions_number--;
            this.perspectiveLeftReturn_fast=false;
            this.flipInX=false;
            this.perspectiveLeftReturn_fast=true;
            this.flipInX=true;
            setTimeout(() =>{
                this.perspectiveLeftReturn_fast=false;
                this.flipInX=false;
              },500);
              this.set_question();
              this.set_select();
              console.log(this.questions_number);
            }
        },

        show(){
            setTimeout(() =>{
                this.perspectiveLeftReturn=false;
              },1000);
              setTimeout(() =>{
                this.road_runner=false;
              },2000);
              this.set_question();
        },

        set_question(){
            this.answer1=this.answers_text[this.questions_number][0];
            this.answer2=this.answers_text[this.questions_number][1];
            this.answer3=this.answers_text[this.questions_number][2];
            this.answer4=this.answers_text[this.questions_number][3];
            this.question=this.questions[this.questions_number];
        },

        selectA(){
            this.reset_select();
            this.select_vector[this.questions_number][0]=1;
            this.set_select();
        },

        selectB(){
            this.reset_select();
            this.select_vector[this.questions_number][1]=1;
            this.set_select();

        },

        selectC(){
            this.reset_select();
            this.select_vector[this.questions_number][2]=1;
            this.set_select();

        },

        selectD(){
            this.reset_select();
            this.select_vector[this.questions_number][3]=1;
            this.set_select();

        },

        set_select(){
            this.selected_A=this.select_vector[this.questions_number][0];
            this.selected_B=this.select_vector[this.questions_number][1];
            this.selected_C=this.select_vector[this.questions_number][2];
            this.selected_D=this.select_vector[this.questions_number][3];
        },

        reset_select(){
            this.select_vector[this.questions_number][0]=0;
            this.select_vector[this.questions_number][1]=0;
            this.select_vector[this.questions_number][2]=0;
            this.select_vector[this.questions_number][3]=0;
        },

        submit_answers(){
            this.score=0;
            for(i=0;i<10;i++){
                if(this.select_vector[i][0]==1) this.people_answers[i]='A';
                else if(this.select_vector[i][1]==1) this.people_answers[i]='B';
                else if(this.select_vector[i][2]==1) this.people_answers[i]='C';
                else if(this.select_vector[i][3]==1) this.people_answers[i]='D';
                if(this.source_answers[i]==this.people_answers[i]) this.score++;
            }
            console.log(this.people_answers);
            console.log(this.score);
        },
        correct_answer_select_set(){
            for(i=0;i<10;i++){
                if(this.source_answers[i]=='A') this.select_vector[i][0]=1;
                else if(this.source_answers[i]=='B') this.select_vector[i][1]=1;
                else if(this.source_answers[i]=='C') this.select_vector[i][2]=1;
                else if(this.source_answers[i]=='D') this.select_vector[i][3]=1;
            }
        },
        submit(){
            this.submit_answers();
            this.complete_test=0;
            for(i=0;i<10;i++)
                for(j=0;j<4;j++){
                    this.complete_test+=this.select_vector[i][j];
                }
            if(this.complete_test>=10){
                this.seen=false;
                this.seen1=true;
            }
            else{
                this.alert_seen=true;
                this.disable=true;
                this.disable2=true;
            }
        },
        click_alert(){
                this.alert_seen=false;
                this.disable=false;
                this.disable2=false;
        }


    }
}

const app = Vue.createApp(Test);
const vm = app.mount('#header');
vm.show();
