(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{18:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),s=n(19),o=n.n(s),c=(n(18),n(8)),r=n(3),l=n(10),d=n(9),m=n(21),h=[{title:!0,text:"Kamal Sacranie",path:"/"},{text:"About",path:"/about"},{text:"CV",path:"/cv"},{text:"Contact",path:"/contact"},{text:"WebEssence",path:"https://webessence.xyz",external:!0}],u=n(1),b=function(){return Object(u.jsx)("nav",{children:h.filter((function(e){return!e.title})).map((function(e){return e.external?Object(u.jsx)("a",{className:"p-3 block transition duration-200 pl-5 rounded hover:bg-blue-700 hover:text-white",href:e.path,children:e.text},e.text):Object(u.jsx)(c.b,{className:"p-3 block transition duration-200 pl-5 rounded hover:bg-blue-700 hover:text-white",to:e.path,children:e.text},e.text)}))})},g=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(r.e)();return Object(a.useEffect)((function(){i(!1),window.scrollTo(0,0)}),[s]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{onClick:function(){return i(!1)},className:"fixed static top-0 left-0 min-h-screen font-medium px-3 bg-black text-blue-100 px-2 py-7 w-screen md:w-80 md:rounded-r-3xl space-y-6 ".concat(n?"transform -translate-x-0":"transform -translate-x-full"," transition duration-500"),children:[h.filter((function(e){return e.title})).map((function(e){return Object(u.jsxs)(c.b,{to:e.path,className:"flex items-center space-x-5 pl-5",children:[Object(u.jsx)(d.c,{className:"h-12 w-12"}),Object(u.jsx)("span",{className:"text-2xl font-extrabold",children:e.text})]},e.text)})),Object(u.jsx)(b,{})]}),Object(u.jsx)("button",{className:"bg-gradient-to-t hover:from-pink-500 hover:to-blue-500 ".concat(n?"text-white from-pink-500 to-yellow-500":"text-black"," fill-current transition duration-500 fixed static top-0 right-0"),onClick:function(){return i(!n)},children:Object(u.jsx)(m.a,{className:"p-3 h-16 w-16 ".concat(n?"transform rotate-180":"transform rotate-0"," transition duration-500")})})]})},f={github:"https://github.com/kamalsacranie",linkedin:"https://www.linkedin.com/in/kamal-sacranie-3b49991b1/",email:"mailto:kamalsjunkmail@gmail.com"},j=function(e){var t=e.link,n=e.content;return Object(u.jsx)("a",{href:t,className:"link",children:n})},x=function(){var e=new Date;return Object(u.jsx)("footer",{className:"bg-blue-100 bottom-0 pb-8 rounded-t-3xl",children:Object(u.jsxs)("div",{className:"grid grid-rows-2 text-center",children:[Object(u.jsxs)("div",{className:"m-8",children:["Copyright \xa9 Kamal Sacranie ",String(e.getFullYear())]}),Object(u.jsxs)("div",{className:"grid grid-cols-3 py-3",children:[Object(u.jsx)(j,{link:f.github,content:Object(u.jsx)(d.a,{className:"h-10 w-10 m-auto"})}),Object(u.jsx)(j,{link:f.linkedin,content:Object(u.jsx)(d.b,{className:"h-10 w-10 m-auto"})}),Object(u.jsx)(j,{link:f.email,content:Object(u.jsx)(d.d,{className:"h-10 w-10 m-auto"})})]})]})})},p=n.p+"static/media/landing-vector.47683570.svg",w=n.p+"static/media/landing-vector-smallmedia.ae296945.svg",y=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(u.jsxs)("div",{className:"order-last md:order-none flex-1 flex-wrap flex items-center justify-center",children:[Object(u.jsx)("h1",{className:"font-serif text-5xl md:text-6xl bold tracking-wider text-center shadow-inner m-4 p-2 animate-bounce",children:"Kamal"}),Object(u.jsx)("h1",{className:"font-serif text-5xl md:text-6xl bold tracking-wider text-center shadow-inner m-4 p-2 md:transform md:translate-x-4 md:translate-y-20",children:"Sacranie"})]}),Object(u.jsx)("div",{className:"flex-1 min-h-screen/3 bg-cover md:hidden bg-bottom",style:{backgroundImage:"url(".concat(w,")")}}),Object(u.jsx)("div",{className:"hidden md:flex min-w-screen/2 min-h-screen/2 bg-cover",style:{backgroundImage:"url(".concat(p,")")}})]})})},v={about:"I sat down one day dissatisfied with my old personal site, I'd just\n          learnt React.js and decided to redesign my site from the ground up.\n          It helped me solidify my React knowledge but, most importantly, it\n          introduced me to TailwindCSS. This website is a showcase of my\n          initial capabilities using React and Tailwind. To an extent, building\n          this website also honed my eye for design. I had grandiose plans of\n          creating my own backend using Django like I've done in the past for\n          eCommerce sites I have test built and host my backend on a Raspberry\n          Pi, then reality dawned on me and I realised I didn't have A\n          Raspberry Pi and no real reason for hosting a backend other than\n          updating it with CV\n          information."},O=n.p+"static/media/profile-pic.900aed5a.png",k=function(){return Object(u.jsxs)("div",{className:"bg-yellow-100 rounded-b-3xl",children:[Object(u.jsx)(y,{}),Object(u.jsxs)("div",{className:"lg:mx-auto single-card max-width-screen4/5 lg:max-w-screen-lg text-white text-center sm:tracking-wide transform hover:-translate-y-1 hover:scale-105",children:[Object(u.jsx)("h1",{className:"py-3 text-2xl font-extrabold",children:"About This Site"}),Object(u.jsxs)("div",{className:"flex justify-center tracking-widest divide-x p-3 text-lg",children:[Object(u.jsx)("div",{className:"p-3 flex-1",children:"REACT"}),Object(u.jsx)("div",{className:"p-3 flex-1",children:"TAILWIND"})]}),Object(u.jsx)("p",{className:"text-sm sm:p-5 sm:text-lg",children:v.about})]}),Object(u.jsx)("div",{className:"mx-auto h-1 bg-gray-300 my-10 rounded-lg max-w-screen4/5"}),Object(u.jsx)("img",{src:O,alt:"Kamal Sacranie, AKA Me",className:"mx-auto rounded-full w-72 sm:w-96 ring ring-purple-900 ring-offset-4 ring-offset-purple-100 shadow-inner"}),Object(u.jsxs)("h2",{className:"reg-text",children:["Welcome to my site. Here you can learn"," ",Object(u.jsx)(c.b,{className:"link",to:"/about",children:"about me"}),", have a look at my"," ",Object(u.jsx)(c.b,{className:"link",to:"cv",children:"resum\xe9/CV"}),", or"," ",Object(u.jsx)(c.b,{className:"link",to:"/contact",children:"contact me."})]})]})},N={funFacts:[{fact:"Favourite \ud83c\udf79",answer:"Long Island Ice Tea"},{fact:"\u26bd\ufe0f team",answer:"Manchester United"},{fact:"Home country",answer:"South Africa \ud83c\uddff\ud83c\udde6"},{fact:"Current home",answer:"England \ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f"}]},I=function(){return Object(u.jsxs)("div",{className:"hidden md:inline-block md:w-72 transform lg:w-96 \\ single-card hover:-translate-y-2 hover:scale-100 m-0",children:[Object(u.jsx)("img",{src:O,alt:"Kamal Sacranie profile pic",className:"rounded-full p-5"}),Object(u.jsx)("p",{className:"card-text text-white",children:"Hi, I'm Kamal. I love learning new things, building things, solving problems until 4 in the morning, and Nirvana. I spend a lot of time optimising my setup which results in me asking if I'm \"working hard, or hardly working\"; but what can I say, I'm a perfectionist. Recon you should have a poke about."}),Object(u.jsxs)("div",{className:"card-text text-white",children:[Object(u.jsx)("p",{className:"big-text",children:"Fun facts:"}),Object(u.jsx)("ul",{className:"list-inside list-disc",children:N.funFacts.map((function(e){return Object(u.jsxs)("li",{children:[e.fact," - ",e.answer]},e.fact)}))})]})]})},S=function(e){var t=e.children,n=e.xRotate,i=e.yRotate,s=Object(a.useState)([0,0]),o=Object(l.a)(s,2),c=o[0],r=o[1],d=Object(a.useState)([]),m=Object(l.a)(d,2),h=m[0],b=m[1];return n&&0!==i?Object(u.jsx)("div",{className:"inline-block",style:{transform:"perspective(400px) rotateX(".concat(-c[1],"deg) rotateY(").concat(c[0],"deg)")},onMouseEnter:function(e){return b([e.currentTarget.offsetWidth,e.currentTarget.offsetHeight])},onMouseMove:function(e){return function(e){var t=h[0],a=h[1];r([(e.nativeEvent.offsetX-t/2)/t/2*n,(e.nativeEvent.offsetY-a/2)/a/2*i])}(e)},onMouseLeave:function(){return r([0,0])},children:t}):Object(u.jsx)("div",{className:"inline-block",children:t})},A=function(e){var t=e.hClasses,n=e.ulClasses,a=e.liClasses,s=e.pClasses,o=e.data;return Object(u.jsx)(i.a.Fragment,{children:Object.keys(o).map((function(e,c){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(S,{children:Object(u.jsx)("h2",{className:t,children:e})}),o[e]instanceof Array?Object(u.jsx)("ul",{className:n,children:o[e].map((function(t){return Object(u.jsx)(i.a.Fragment,{children:Object(u.jsx)("li",{className:a,children:t})},o[e].findIndex((function(e){return e===t})))}))}):Object(u.jsx)("p",{className:s,children:o[e]})]},e)}))})},C=function(e){var t=e.children;return Object(u.jsxs)("div",{className:"inline-block transform scale-150 md:scale-100",children:[Object(u.jsx)("style",{children:".neon {\n          font-family: neon;\n          /*   color: #000; */\n          font-size: 9vw;\n          line-height: 9vw;\n          text-shadow: 0 0 1vw #1041FF, 0 0 3vw #000, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;\n          color: #28D7FE;\n        }"}),Object(u.jsx)("span",{className:"neon",children:t})]})},F={Intro:"I am a Third Year Undergraduate at the London School of Economics\n  and Political Science. I am passionate about many things and I take pride in\n  the actions I perform. That, in essence, is why I decided to redesign my\n  website","A Brief History":["I moved to South Africa when I was four years old where\n    I underwent all of my primary and secondary education.","I went to boarding school from the ages of 14-18 which thoroughly moulded\n    who I am today. I attribute much of my quick thinking and EQ to this\n    experience.","I embarked on a short stint at Sellenbosh University before I moved to\n    London to pursue an undergraduate degree in Accounting and Finance.","I've always loved using technology and was probably the first bloke I know\n    who knew how to download torrent or jailbreak a phone","I've caught the bug for intellectual acquisition and I'm extremely\n    grateful for catching it. I'm self-taught in VBA, Python, and HTML, CSS,\n    JavaScript, and React.","I'm an absolute fiend for formatting my documents, uni notes, etc. I'm\n    constantly looking for ways to better my workflow. Currently, I've settled\n    on writing notes in rmarkdown in VIM and then using bookdown, pandoc, and\n    RStudio to create a beautiful PDF and HTML book. This is arguably the best\n    decision I've ever made.","I'm also a sucker for regular old analytical work because I'm just a bit\n    of a loser.  I get extreme satisfaction from analysing a set of financial\n    statements or doing a discount cash flow analysis.","Naturally, I owe just about everything to my parents who have worked their\n    utmost to allow me every opportunity I've come across."]},T=function(){return Object(u.jsxs)("div",{className:"bg-yellow-100 rounded-b-3xl",children:[Object(u.jsxs)("div",{className:"min-h-screen flex",children:[Object(u.jsx)("div",{id:"sidecard",className:"self-center md:m-10",children:Object(u.jsx)(I,{})}),Object(u.jsxs)("div",{className:"flex flex-auto flex-col text-center self-center",children:[Object(u.jsx)("div",{className:"flex-auto inline",children:Object(u.jsx)(C,{children:"About"})}),Object(u.jsx)("div",{className:"flex-auto inline transform translate-y-5",children:Object(u.jsx)(C,{children:" Me."})})]})]}),Object(u.jsx)("div",{className:"reg-text",children:Object(u.jsx)(A,{data:F,ulClasses:"list list-disc text-left",liClasses:"py-3",hClasses:"inline-block gradient big-text px-5 py-3 text-white rounded-3xl shadow-lg",pClasses:"py-3"})})]})},E=(n(37),n.p+"static/media/lse-logo.db5230fa.svg"),M=n(17),R=n(22),P="w-60 h-60",L={"Cadiz Asset Management":{subheading:"Two-week Asset Management and Hedge Fund Internship",points:["Undertook a two-week internship to learn the intricacies of asset\n      management at a small asset management firm. Attended product development\n      and optimisation meetings and took minutes","Learned about analysis, quants, portfolio management and hedge fund\n      management","Contributed to 2 analyses of listed companies using Accounting knowledge\n      and Excel skills","Quickly learnt DCF and Multiple Analysis"],img:"https://iankilbride.com/wp-content/uploads/2019/11/Cadiz-Logo-scaled.jpg"},"Sygnia Asset Management":{subheading:"My introduction to Asset Management",points:["Job shadow observing the statistical methods and data analysis used in determining the suitability and risk associated with JSE listed companies","Engaged with individuals from the firm which helped developed understanding of terminology, connections and strategies for investment","Developed the necessary skills to match the fast paced environment of the world of Financial Services"],img:"https://digitalnewspapercms.ince.co.za:444/inceconnect/uploads/articles/sygnia-grows-assets-in-tough-environment.jpg"},"Artefect Antiques":{subheading:"Financial Assistant and Technical Support",points:["Oversaw the operations of Artefect for 6 months. This included making sales, producing financial statements and managing tax reports to SARS","Use VBA to automate the accounts for the company with Excel and as such am extremely competent with the programme and helped save an estimated 11 minutes per invoice produced","Being my first major position, it required fast-paced learning and acute organisational skills. I developed these fundamental skills in tandem with the job; much like I developed my software development skills. Thanks to my ability to learn at exceptional pace, I am able to overcome any challenge"],img:"https://www.artefect.co.za/wp-content/uploads/2018/04/artefect-logo-dark.png"},"Practical Excel Modelling for Accounting and Finance UG":{subheading:"Course to formalise my financial modelling knowledge through Financial Edge",points:["Created a 3 statement model with historical data, ratios, statistics, and forward assumptions","Forecasted both the Balance Sheet and Income Statement and derived the Cash Flow Statement","Completed debt and interest calculations which allowed me to properly execute my Revolver calculations","Constructed a Discount Cash Flow analysis which I already had experience doing using Python, OpenPyExcel, and financial APIs"],reactIcon:Object(u.jsx)(R.a,{className:P})}},D={"Athena Tuition":{subheading:"I tutor subjects of my choice through Athena",points:["After having a successful interview where I taught Python as a demo, I was taken on board as one of the tutors","I find teaching incredibly fulfilling and often learn something new every time I teach"],reactIcon:Object(u.jsx)(M.b,{className:P})},"LSE Student Academic Mentor":{subheading:"Academic mentor for first-years",points:["A pastoral and academic role for which I was specifically selected for my Accounting faculty","Mentored and provided support to First Years trying to flourish at university","Provided academic assistance for two of the pupils for their First Year Accounting module","Refined my ability explain complex concepts and how to encorporate different people with different strengths into a team which I am effectively leading"],img:E},"LSESU Boxing Social Secretary":{subheading:"Elected as Social Secretary for two years in a row",points:["Responsible for organising socials for a club of over 90 people","Elected for my exemplary ability to connect with people, and bring people together","This has helped refine my organisational skills due to making sure all precautions are met when planning events accompanied by the actual event planning","Being my first university position of leadership, it taught me invaluable teamwork skills when working in a closely integrated team and how to most effectively delegate tasks"],reactIcon:Object(u.jsx)(M.a,{className:P})}},H=function(e){var t=e.data,n=e.objKey,s=e.index,o=Object(a.useState)(!1),c=Object(l.a)(o,2),r=c[0],d=c[1];return Object(u.jsx)(S,{xRotate:r?0:10,yRotate:r?0:10,children:Object(u.jsx)("div",{className:"m-0 single-card text-center min-h-fill text-white w-72 sm:w-96 ".concat(r&&"max-h-screen/2 overflow-y-auto"),onClick:function(){return d(!r)},children:r?Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"big-text",children:t[n].subheading}),Object(u.jsx)("ul",{className:"pointer-events-none list-disc text-left p-5",children:t[n].points.map((function(e){return Object(u.jsx)("li",{className:"pointer-events-none",children:e},t[n].points.findIndex((function(t){return t===e})))}))})]}):Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("h2",{className:"big-text pointer-events-none p-5",children:n}),t[n].reactIcon?Object(u.jsx)("div",{className:"flex justify-center text-9xl",children:t[n].reactIcon}):Object(u.jsx)("img",{className:"pointer-events-none rounded-3xl p-3",src:t[n].img,alt:n}),Object(u.jsx)("h3",{className:"pointer-events-none color-yellow-100 p-5",children:t[n].subheading})]})},s)})},B=[L,{"This Website, and other sites":{subheading:"I built everything on this site from the ground up. None of that Squarespace mumbo jumbo",points:["Having had a lot of experience with Python, I decided to pivot to focussing on web-dev","I've now used React to flesh out my front end and Tailwind to handle the CSS side of things","I've built a production-ready ecommerce site with JWT authentication, a Django backend API, and Redux for state management. I'm just about ready to undertake any regular website project now and have the necessary confidence in my abilities"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"},"Algo Trading Competition":{subheading:"Came second in the LSE algo-trading competition",points:["Qualified for enrolment into LSE\u2019s algorithmic trading competition","Utilised async API request, multithreading using Python\u2019s threading module and use K-nearest-neighbours to optimise the bot","Quickly leant how to pairs trade using log prices and hedging ratios whilst managing portfolio volume","Lead my team to first places in the arbitrage section of the competition and single-handedly coded all code for the trading section of the competition using an OOP approach"],img:"https://img.icons8.com/ios/452/python--v1.png"}},D],K=function(){var e=Object(a.useState)(100),t=Object(l.a)(e,2);t[0],t[1];return Object(u.jsxs)("div",{className:"bg-yellow-100 pb-10 -mb-10",children:[Object(u.jsxs)("div",{className:"flex flex-col items-center",children:[Object(u.jsx)("h1",{className:"big-text text-center pt-10",children:"Resum\xe9 and Notable Achievements"}),Object(u.jsx)("p",{className:"container text-center py-10 px-10 border-b-4 border-purple-900 text-xl max-w-2xl",children:"Here are all my notable achievments. Clicking on each card will give you a more detailed description of each of my endeavours. As you can see, one of my main strength is the diversity of my skillset. While studying my undergraduate degree in Accounting and Finance, I have constantly been concurrently teaching myself Software and Web Development."})]}),Object(u.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:container gap-9 p-12 justify-items-center m-auto min-h-screen",children:B.map((function(e){return Object.keys(e).map((function(t,n){return Object(u.jsx)(H,{data:e,objKey:t,index:n})}))}))})]})},U=n(23),W=function(){return Object(u.jsxs)("div",{className:"bg-yellow-100 -mb-5 flex flex-col items-center",style:{minHeight:"calc(100vh - 177.33822631835938px)"},children:[Object(u.jsxs)("div",{className:"flex p-10",children:[Object(u.jsx)(U.a,{className:"flex-shrink-0 w-12 md:w-16 h-12 md:h-16 m-3"}),Object(u.jsx)("h1",{className:"text-5xl md:text-7xl font-serif",children:"Get Connected"})]}),Object(u.jsxs)("div",{className:"container place-content-center text-2xl sm:text-3xl md:text-5xl font-serif grid grid-rows-3 gap-y-8",children:[Object(u.jsxs)("div",{className:"container place-items-center md:place-items-start grid grid-rows-2 md:grid-cols-2",children:[Object(u.jsx)(d.d,{className:"md:border-r-2 md:pr-2 border-black md:justify-self-end sm:mr-8"}),Object(u.jsx)(j,{link:f.email,content:f.email.slice(7)})]}),Object(u.jsxs)("div",{className:"container place-items-center md:place-items-start grid grid-rows-2 md:grid-cols-2",children:[Object(u.jsx)(d.b,{className:"md:border-r-2 md:pr-2 border-black md:justify-self-end sm:mr-8"}),Object(u.jsx)(j,{link:f.linkedin,content:"My LinkedIn"})]}),Object(u.jsxs)("div",{className:"container place-items-center md:place-items-start grid grid-rows-2 md:grid-cols-2",children:[Object(u.jsx)(d.a,{className:"md:border-r-2 md:pr-2 border-black md:justify-self-end sm:mr-8"}),Object(u.jsx)(j,{link:f.github,content:"My GitHub"})]})]})]})};var q=function(){return Object(u.jsxs)(c.a,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:k}),Object(u.jsx)(r.a,{path:"/about",component:T}),Object(u.jsx)(r.a,{path:"/cv",component:K}),Object(u.jsx)(r.a,{path:"/contact",component:W}),Object(u.jsx)(x,{}),Object(u.jsx)(g,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root")),z()}},[[39,1,2]]]);
//# sourceMappingURL=main.d5f4c4ec.chunk.js.map