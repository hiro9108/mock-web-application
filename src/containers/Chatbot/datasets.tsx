const defaultDataset = {
    "init": {
        answers: [
            {content: "I am looking for a developer", nextId: "job_offer"},
            {content: "I want to contact you", nextId: "job_offer"},
            {content: "I want to know what you can do", nextId: "check"},
            {content: "I am not sure", nextId: "check"},
        ],
        question: "What do you require?",
    },
    "job_offer": {
        answers: [
            {content: "Go to Contact", nextId: "contact"},
            {content: "See the Sorce Code", nextId: "check"},
            {content: "Check the Linkedln", nextId: "consultant"},
            {content: "Nothing", nextId: "init"}
        ],
        question: "Do you want to contact me",
    },
    "check": {
        answers: [
            {content: "Please click the icon below", nextId: "init"},
            {content: "Go to beginning", nextId: "init"}
        ],
        question: "Thank you!",
    },
}

export default defaultDataset