Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Pre-Employee Screening",
    pages: [{
            // questions: == start of new page        
            // page 1
            questions: [{
                type: "text",
                name: "name",
                title: "Please'",
                placeHolder: "Jon Snow",
                isRequired: true
            }, {
                name: "email",
                type: "text",
                inputType: "email",
                title: "Your e-mail:",
                placeHolder: "jon.snow@nightwatch.org",
                isRequired: true,
                validators: [{
                    type: "email"
                }]
            }]
        }, {
            // Page 2
            questions: [{
                    type: "radiogroup",
                    name: "eduLevel",
                    title: "Do you have a high school diploma or more?",
                    choices: [
                        "Yes", "No", "Not sure"
                    ],
                    correctAnswer: "Yes"
                },
                {
                    type: "radiogroup",
                    name: "post2ndLevel",
                    title: "Do you have a post secondary education?",
                    choices: [
                        "Yes", "No", "Not sure"
                    ],
                    correctAnswer: "Yes"
                }
            ]
        }, {
            // page 3
            questions: [{
                    type: "radiogroup",
                    name: "firstJob",
                    title: "Is this your first job?'",
                    choices: [
                        "Yes", "No", "Not sure"
                    ],
                },
                {
                    type: "radiogroup",
                    name: "similarExp",
                    title: "Do you have similar work experience to this position?'",
                    choices: [
                        "Yes", "No", "Not sure"
                    ],
                    correctAnswer: "Yes"
                }
            ]
        }, {
            // page 4
            questions: [{
                    type: "dropdown",
                    name: "transportMethod",
                    title: "How are you going to get to work?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Remote Work",
                        "Walk",
                        "Bicycle",
                        "Automobile",
                        "Bus",
                        "Other"
                    ]
                },
                {
                    type: "dropdown",
                    name: "transportreliable",
                    title: "How reliable is your transportation method?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "Not at all",
                        "Somewhat",
                        "Ok",
                        "Mostly",
                        "Very"
                    ]
                }
            ]
        }, {
            // page 5
            questions: [{
                    type: "rating",
                    name: "anticipation",
                    title: "How excited are you for this opportunity?",
                    minRateDescription: "Not At All",
                    maxRateDescription: "Extremely Excited"
                },
                {
                    type: "rating",
                    name: "satisfaction",
                    title: "How satisfied are you with the Product?",
                    minRateDescription: "Not Satisfied",
                    maxRateDescription: "Completely satisfied"
                }
            ]
        },

    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function(result) {
        document
            .location = "multithanks.html";
    });

$("#surveyElement").Survey({ model: survey });