export const DOMAINS = [
    { id: 'frontend', name: 'Frontend Development', icon: 'Layout', description: 'HTML, CSS, JavaScript, React, and Performance' },
    { id: 'backend', name: 'Backend Development', icon: 'Server', description: 'Node.js, Databases, API Design, and Architecture' },
    { id: 'cloud', name: 'Cloud Computing', icon: 'Cloud', description: 'AWS, Docker, Kubernetes, and CI/CD' },
    { id: 'database', name: 'Databases', icon: 'Database', description: 'SQL, NoSQL, Indexing, and Data Modeling' },
    { id: 'security', name: 'Security', icon: 'Shield', description: 'Auth, OWASP, Encryption, and Best Practices' },
];

export const MOCK_QUESTIONS = {
    frontend: [
        {
            id: 1,
            question: "Which HTML5 tag is used to define navigation links?",
            options: ["<navigation>", "<nav>", "<links>", "<menu>"],
            correctAnswer: 1, // Index
            difficulty: "Beginner",
            explanation: "The <nav> tag is the semantic HTML element for a section of the page capable of navigation."
        },
        {
            id: 2,
            question: "What is the purpose of the 'useEffect' hook in React?",
            options: ["To manage state", "To perform side effects", "To optimize rendering", "To create context"],
            correctAnswer: 1,
            difficulty: "Intermediate",
            explanation: "useEffect is designed to handle side effects like data fetching, subscriptions, or manual DOM manipulations."
        },
        {
            id: 3,
            question: "Which CSS property triggers hardware acceleration?",
            options: ["transform: translate3d(0,0,0)", "acceleration: true", "gpu: on", "optimize: speed"],
            correctAnswer: 0,
            difficulty: "Advanced",
            explanation: "Using 3D transforms like translate3d tells the browser to use the GPU for rendering layers."
        },
        {
            id: 4,
            question: "What is a Closure in JavaScript?",
            options: ["A function that has no return value", "A function combined with its lexical environment", "A method to close a database connection", "A variable that cannot be changed"],
            correctAnswer: 1,
            difficulty: "Intermediate",
            explanation: "A closure gives you access to an outer function's scope from an inner function."
        },
        {
            id: 5,
            question: "Which of the following creates a microtask in JavaScript?",
            options: ["setTimeout", "setInterval", "Promise.resolve().then()", "requestAnimationFrame"],
            correctAnswer: 2,
            difficulty: "Advanced",
            explanation: "Promise callbacks are added to the microtask queue, which has higher priority than the macrotask queue (setTimeout)."
        }
    ],
    backend: [
        {
            id: 1,
            question: "What does REST stand for?",
            options: ["Remote Execution State Transfer", "Representational State Transfer", "Reliable Server Technology", "Real-time Service Transaction"],
            correctAnswer: 1,
            difficulty: "Beginner",
            explanation: "REST stands for Representational State Transfer, an architectural style for network-based software."
        },
        {
            id: 2,
            question: "Which HTTP method is idempotent?",
            options: ["POST", "PUT", "PATCH", "CONNECT"],
            correctAnswer: 1,
            difficulty: "Intermediate",
            explanation: "PUT is idempotent, meaning multiple identical requests should have the same effect as a single one."
        }
    ]
    // Add more domains as needed
};
