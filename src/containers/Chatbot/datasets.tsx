const defaultDataset = {
    "init": {
        answers: [
            {content: "I have stress for a job", nextId: "job_offer"},
            {content: "I cannot go to school", nextId: "consultant"},
            {content: "I want to know how to learn a new subject", nextId: "community"},
            {content: "I check my score for examinations", nextId: "dating"},
        ],
        question: "What are your problems?",
    },
    "job_offer": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "website"},
            {content: "I want to know how to learn a new subject", nextId: "webapp"},
            {content: "I want to know how to learn a new subject", nextId: "automation_tool"},
            {content: "I want to know how to learn a new subject", nextId: "other_jobs"}
        ],
        question: "What are your problems?",
    },
    "website": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "contact"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
    "webapp": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "contact"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
    "automation_tool": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "contact"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
    "other_jobs": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "contact"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
    "consultant": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "https://google.com"},
            {content: "I want to know how to learn a new subject", nextId: "community"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
    "community": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "community_activity"},
            {content: "I want to know how to learn a new subject", nextId: "https://google.com"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
    "community_activity": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "https://google.com"},
            {content: "I want to know how to learn a new subject", nextId: "https://google.com"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
    "dating": {
        answers: [
            {content: "I want to know how to learn a new subject", nextId: "https://google.com"},
            {content: "I want to know how to learn a new subject", nextId: "init"}
        ],
        question: "What are your problems?",
    },
}

export default defaultDataset