/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts;
// awesomeThoughts="I am xueyan and I am awesome!"
// console.log(awesomeThoughts);
// funThoughts=awesomeThoughts.replace("awesome","fun");
// $("#main").append(funThoughts);
var name="xue yan";
formattedName=HTMLheaderName.replace("%data%",name);

var role="frontend-developer";
formattedRole=HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var bio={
// 	"name":"xueyan",
// 	"role":"students",
// 	"contact info":15355458156,
// 	"picture URL":"httpfsdfsfdsf",
// 	"welcome message":"welcome",
// 	"skills":"dancing"
// }
// $("#main").append(bio.name);

// var work={};
// work.position="students";
// work.employer="jobs";

// var education={}
// education["name"]="Peking University";
// education["years"]="17";
// $("#main").append(education.years);
// $("#main").append(work["position"]);

var work=[{
	"employer":"zhejiang University of technology",
	"title":"graduate",
	"location":"HangZhou",
	"date":2016,
	"description":"I have a master degree."

},{
	"employer":"siyuejiaoyu",
	"title":"English Teacher",
	"location":"Hangzhou",
	"date":2016,
	"description":"I am a on-line Teacher."
}]

var projects=[{
	"title":"English Reading Library",
	"dates":"2016/11/14",
	"description":"This library includes a lot of books",
	"images":["images/hellibotty","images/gameOfThrone"]
}]

var bio={
	"name":"Xue Yan",
	"role":"teacher",
	"welcomeMessage":"Nice to meet you!",
	"biopic":"I am very kind to others",
	"skills":["English","programing"],
	"contacts":{
	"email":"1152991535@qq.com",
	"github":"xueyan123321",
	"qq":1152991535,
	"location":"Hangzhou"
	}
}

var schools=[zhejiangTechnology={
	"name":"zhejiang technology of university",
	"location":"Hangzhou",
	"degreedates":"2016/11/14",
	"url":"zjut.com",
	"majors":["programing","studying","communication"],
	"onlineCourses":[{
		"title":"Intro to jquery",
		"school":"udacity",
		"dates":"2016/11/14",
		"url":"https//"
	}]
}]

if(bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);
	HTMLskills0=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(HTMLskills0);
	HTMLskills1=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(HTMLskills1);
}

function displayWork(){
	work.forEach(function(element){
	$("#workExperience").append(HTMLworkStart);
	workEmployer=HTMLworkEmployer.replace("%data%",element.employer);
	workTitle=HTMLworkTitle.replace("%data%",element.title);
	theWorkThing=workEmployer+workTitle;
	$(".work-entry:last").append(theWorkThing);
	var formattedDate=HTMLworkDates.replace("%data%",element.date);
	// console.log(formatteddate);
	$(".work-entry:last").append(formattedDate);
	var formattedDescription=HTMLworkDescription.replace("%data%",element.description);	
	// console.log(formattedDescription);
    $(".work-entry:last").append(formattedDescription);

})
}

displayWork();
// $(document).click(function(loc){
// 	logClicks(loc.pageX,loc.pageY);
// })

function inName(){
		interNa=bio.name.split(" ");
		bio.name=interNa[0].slice(0,1).toUpperCase()+interNa[0].slice(1)+" "+interNa[1].toUpperCase();
		console.log(bio.name);
	}

$("#main").append(internationalizeButton);
$("button").click(function(){
	inName();
})


