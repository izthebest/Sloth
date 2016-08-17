var mysurvey = new Survey.Survey(
{pages:[{
    name:"question1",
    questions:[{
        type:"dropdown",
        choices:[
        {value:"one",
            text:"Arts and Music"},
        {value:"two",
            text:"Sports"},
        {value:"three",
            text:"Academics"}],
        name:"What are your interests?"}]},
        {
    name:"question2",
    questions:[{
        type:"checkbox",
        choices:[
        {value:"one",
            text:"Anxiety"},
        {value:"two",
            text:"Stress"},
        {value:"three",
            text:"Low Self Esteem"},
        {value:"four",
            text:"Depression"},
        //{value:"five",
        //    text:"Sexuality"},
        {value:"five",
            text:"No/Prefer Not to Answer"}],
        name:"Have you and/or are you experiencing any of the following?"    }]}
        ]});
mysurvey.onComplete.add(function (s) {alert("The results are:" + JSON.stringify(s.data));});
mysurvey.render("mySurveyName");