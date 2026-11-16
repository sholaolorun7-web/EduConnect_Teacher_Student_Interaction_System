const DB_KEY = "educonnect_db_v1";
const SESSION_KEY = "educonnect_session_v1";
const Store = {
  read(){ try{return JSON.parse(localStorage.getItem(DB_KEY)) || null}catch(e){return null} },
  write(data){localStorage.setItem(DB_KEY,JSON.stringify(data))},
  session(){try{return JSON.parse(sessionStorage.getItem(SESSION_KEY))}catch(e){return null}},
  setSession(user){sessionStorage.setItem(SESSION_KEY,JSON.stringify({id:user.id}))},
  clearSession(){sessionStorage.removeItem(SESSION_KEY)},
  id(){return "id_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8)},
  init(){
    if(this.read()) return;
    const teacher={id:"demo_teacher",name:"Jordan Williams",email:"teacher@educonnect.demo",password:"teach123",role:"teacher"};
    const student={id:"demo_student",name:"Taylor Morgan",email:"student@educonnect.demo",password:"learn123",role:"student"};
    const db={users:[teacher,student],announcements:[
      {id:"ann1",title:"Welcome to the new learning space",body:"Welcome everyone! Use EduConnect to stay updated, ask questions and keep track of your assignments. Let's have a productive learning experience.",author:teacher.name,authorId:teacher.id,date:new Date().toISOString()},
      {id:"ann2",title:"Class discussion this Friday",body:"Please come prepared to discuss the fundamentals of web development. Bring your questions and examples.",author:teacher.name,authorId:teacher.id,date:new Date(Date.now()-86400000).toISOString()}
    ],assignments:[
      {id:"as1",title:"Introduction to Web Development",subject:"Web Development",description:"Explain the roles of HTML, CSS and JavaScript in building a modern website. Include one practical example for each technology.",deadline:new Date(Date.now()+5*86400000).toISOString().slice(0,10),teacherId:teacher.id,teacherName:teacher.name,date:new Date().toISOString()},
      {id:"as2",title:"Principles of Computer Programming",subject:"Computer Science",description:"Define an algorithm and list four characteristics of a good algorithm.",deadline:new Date(Date.now()+9*86400000).toISOString().slice(0,10),teacherId:teacher.id,teacherName:teacher.name,date:new Date().toISOString()}
    ],submissions:[],questions:[
      {id:"q1",studentId:student.id,studentName:student.name,question:"Can you recommend a good way to practise JavaScript every day?",answer:"Start with small exercises such as variables, conditions and functions. Build a tiny project as you learn.",teacherId:teacher.id,date:new Date(Date.now()-3600000).toISOString(),answeredDate:new Date().toISOString()}
    ],feedback:[]};
    this.write(db);
  },
  get(){this.init();return this.read()},
  save(db){this.write(db)}
};
Store.init();