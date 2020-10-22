const defaultDataset = {
    "init": {
        answers: [
            {content: "I am looking for a job", nextId: "job_offer"},
            {content: "I cannot go to school", nextId: "consultant"},
            {content: "I want to know how to learn a new subject", nextId: "community"},
            {content: "I check my score for examinations", nextId: "dating"},
        ],
        question: "What are your problems?",
    },
    "job_offer": {
        answers: [
            {content: "You can check Likdln", nextId: "website"},
            {content: "You should create a good portfolio", nextId: "website"},
            {content: "I want to talk to you", nextId: "consultant"},
            {content: "Nothing", nextId: "consultant"}
        ],
        question: "Do you have anything resolved?",
    },
    "website": {
        answers: [
            {content: "Yes, I want", nextId: "contact"},
            {content: "Go back to the beginning", nextId: "init"}
        ],
        question: "Do you want to conntact me?",
    },
    "consultant": {
        answers: [
            {content: "I am working on", nextId: "https://google.com"},
            {content: "I am working on", nextId: "community"},
            {content: "I am working on", nextId: "init"}
        ],
        question: "Early!",
    },
    "community": {
        answers: [
            {content: "I am working on", nextId: "community_activity"},
            {content: "I am working on", nextId: "https://google.com"},
            {content: "I am working on", nextId: "init"}
        ],
        question: "Early!!",
    },
    "community_activity": {
        answers: [
            {content: "I am working on", nextId: "https://google.com"},
            {content: "I am working on", nextId: "https://google.com"},
            {content: "I am working on", nextId: "init"}
        ],
        question: "Early!!!",
    },
    "dating": {
        answers: [
            {content: "I am working on", nextId: "https://google.com"},
            {content: "I am working on", nextId: "init"}
        ],
        question: "WEarly!!!!",
    },
}

export default defaultDataset