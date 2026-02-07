// Assessment Questions Data - 15 questions per domain (75 total)

export const questionsData = {
    // Frontend Development - 15 questions
    frontend: [
        {
            id: 'q_f1', text: 'Which HTML5 tag is used to define navigation links?', difficulty: 'Easy', options: [
                { id: 'opt_f1_1', text: '<nav>', correct: true },
                { id: 'opt_f1_2', text: '<navigation>', correct: false },
                { id: 'opt_f1_3', text: '<links>', correct: false },
                { id: 'opt_f1_4', text: '<menu>', correct: false }
            ]
        },
        {
            id: 'q_f2', text: 'What is the purpose of the useEffect hook in React?', difficulty: 'Medium', options: [
                { id: 'opt_f2_1', text: 'To perform side effects', correct: true },
                { id: 'opt_f2_2', text: 'To manage global state only', correct: false },
                { id: 'opt_f2_3', text: 'To create components', correct: false },
                { id: 'opt_f2_4', text: 'To style elements', correct: false }
            ]
        },
        {
            id: 'q_f3', text: 'What is a Closure in JavaScript?', difficulty: 'Medium', options: [
                { id: 'opt_f3_1', text: 'Function bundled with its lexical environment', correct: true },
                { id: 'opt_f3_2', text: 'A variable that cannot be changed', correct: false },
                { id: 'opt_f3_3', text: 'A CSS property', correct: false },
                { id: 'opt_f3_4', text: 'A React component', correct: false }
            ]
        },
        {
            id: 'q_f4', text: 'Which CSS property is used for flexbox layout?', difficulty: 'Easy', options: [
                { id: 'opt_f4_1', text: 'display: flex', correct: true },
                { id: 'opt_f4_2', text: 'layout: flex', correct: false },
                { id: 'opt_f4_3', text: 'flex: true', correct: false },
                { id: 'opt_f4_4', text: 'position: flex', correct: false }
            ]
        },
        {
            id: 'q_f5', text: 'What is the Virtual DOM in React?', difficulty: 'Medium', options: [
                { id: 'opt_f5_1', text: 'A lightweight copy of the actual DOM', correct: true },
                { id: 'opt_f5_2', text: 'A CSS framework', correct: false },
                { id: 'opt_f5_3', text: 'A browser API', correct: false },
                { id: 'opt_f5_4', text: 'A database', correct: false }
            ]
        },
        {
            id: 'q_f6', text: 'What does CSS Grid provide?', difficulty: 'Medium', options: [
                { id: 'opt_f6_1', text: 'Two-dimensional layout system', correct: true },
                { id: 'opt_f6_2', text: 'One-dimensional layout only', correct: false },
                { id: 'opt_f6_3', text: 'Animation capabilities', correct: false },
                { id: 'opt_f6_4', text: 'Color management', correct: false }
            ]
        },
        {
            id: 'q_f7', text: 'What is the purpose of React Context?', difficulty: 'Medium', options: [
                { id: 'opt_f7_1', text: 'Share data across component tree', correct: true },
                { id: 'opt_f7_2', text: 'Style components', correct: false },
                { id: 'opt_f7_3', text: 'Handle routing', correct: false },
                { id: 'opt_f7_4', text: 'Manage animations', correct: false }
            ]
        },
        {
            id: 'q_f8', text: 'Which method is used to update state in React?', difficulty: 'Easy', options: [
                { id: 'opt_f8_1', text: 'setState or useState hook', correct: true },
                { id: 'opt_f8_2', text: 'updateState', correct: false },
                { id: 'opt_f8_3', text: 'changeState', correct: false },
                { id: 'opt_f8_4', text: 'modifyState', correct: false }
            ]
        },
        {
            id: 'q_f9', text: 'What is event bubbling in JavaScript?', difficulty: 'Medium', options: [
                { id: 'opt_f9_1', text: 'Event propagation from child to parent', correct: true },
                { id: 'opt_f9_2', text: 'Creating new events', correct: false },
                { id: 'opt_f9_3', text: 'Preventing events', correct: false },
                { id: 'opt_f9_4', text: 'Event deletion', correct: false }
            ]
        },
        {
            id: 'q_f10', text: 'What is the box model in CSS?', difficulty: 'Medium', options: [
                { id: 'opt_f10_1', text: 'Content, padding, border, margin', correct: true },
                { id: 'opt_f10_2', text: 'Width and height only', correct: false },
                { id: 'opt_f10_3', text: 'Color and background', correct: false },
                { id: 'opt_f10_4', text: 'Font and text', correct: false }
            ]
        },
        {
            id: 'q_f11', text: 'What does "async/await" do in JavaScript?', difficulty: 'Hard', options: [
                { id: 'opt_f11_1', text: 'Handles asynchronous operations', correct: true },
                { id: 'opt_f11_2', text: 'Creates loops', correct: false },
                { id: 'opt_f11_3', text: 'Defines variables', correct: false },
                { id: 'opt_f11_4', text: 'Styles elements', correct: false }
            ]
        },
        {
            id: 'q_f12', text: 'What is the purpose of "key" prop in React lists?', difficulty: 'Medium', options: [
                { id: 'opt_f12_1', text: 'Identify elements for efficient re-rendering', correct: true },
                { id: 'opt_f12_2', text: 'Style list items', correct: false },
                { id: 'opt_f12_3', text: 'Add animations', correct: false },
                { id: 'opt_f12_4', text: 'Handle events', correct: false }
            ]
        },
        {
            id: 'q_f13', text: 'What is TypeScript?', difficulty: 'Easy', options: [
                { id: 'opt_f13_1', text: 'JavaScript with static typing', correct: true },
                { id: 'opt_f13_2', text: 'A new programming language', correct: false },
                { id: 'opt_f13_3', text: 'A CSS preprocessor', correct: false },
                { id: 'opt_f13_4', text: 'A database system', correct: false }
            ]
        },
        {
            id: 'q_f14', text: 'What is lazy loading in React?', difficulty: 'Hard', options: [
                { id: 'opt_f14_1', text: 'Loading components on demand', correct: true },
                { id: 'opt_f14_2', text: 'Slow rendering', correct: false },
                { id: 'opt_f14_3', text: 'Background loading', correct: false },
                { id: 'opt_f14_4', text: 'Preloading all components', correct: false }
            ]
        },
        {
            id: 'q_f15', text: 'What is the purpose of webpack?', difficulty: 'Medium', options: [
                { id: 'opt_f15_1', text: 'Bundle JavaScript modules', correct: true },
                { id: 'opt_f15_2', text: 'Test applications', correct: false },
                { id: 'opt_f15_3', text: 'Deploy applications', correct: false },
                { id: 'opt_f15_4', text: 'Design UI', correct: false }
            ]
        }
    ],

    // Backend Development - 15 questions
    backend: [
        {
            id: 'q_b1', text: 'What does REST stand for?', difficulty: 'Easy', options: [
                { id: 'opt_b1_1', text: 'Representational State Transfer', correct: true },
                { id: 'opt_b1_2', text: 'Remote Server Transaction', correct: false },
                { id: 'opt_b1_3', text: 'Rapid Exchange Service Tool', correct: false },
                { id: 'opt_b1_4', text: 'Real-time Execution System', correct: false }
            ]
        },
        {
            id: 'q_b2', text: 'Which HTTP method is idempotent?', difficulty: 'Medium', options: [
                { id: 'opt_b2_1', text: 'PUT', correct: true },
                { id: 'opt_b2_2', text: 'POST', correct: false },
                { id: 'opt_b2_3', text: 'PATCH', correct: false },
                { id: 'opt_b2_4', text: 'DELETE can also be idempotent', correct: false }
            ]
        },
        {
            id: 'q_b3', text: 'What is middleware in Express.js?', difficulty: 'Medium', options: [
                { id: 'opt_b3_1', text: 'Functions that process requests/responses', correct: true },
                { id: 'opt_b3_2', text: 'Database connections', correct: false },
                { id: 'opt_b3_3', text: 'Front-end libraries', correct: false },
                { id: 'opt_b3_4', text: 'CSS frameworks', correct: false }
            ]
        },
        {
            id: 'q_b4', text: 'What is JWT used for?', difficulty: 'Medium', options: [
                { id: 'opt_b4_1', text: 'Secure token-based authentication', correct: true },
                { id: 'opt_b4_2', text: 'Database queries', correct: false },
                { id: 'opt_b4_3', text: 'File uploads', correct: false },
                { id: 'opt_b4_4', text: 'Email sending', correct: false }
            ]
        },
        {
            id: 'q_b5', text: 'What is Node.js?', difficulty: 'Easy', options: [
                { id: 'opt_b5_1', text: 'JavaScript runtime environment', correct: true },
                { id: 'opt_b5_2', text: 'A database', correct: false },
                { id: 'opt_b5_3', text: 'A programming language', correct: false },
                { id: 'opt_b5_4', text: 'A web browser', correct: false }
            ]
        },
        {
            id: 'q_b6', text: 'What is the purpose of async/await in Node.js?', difficulty: 'Medium', options: [
                { id: 'opt_b6_1', text: 'Handle asynchronous operations', correct: true },
                { id: 'opt_b6_2', text: 'Create databases', correct: false },
                { id: 'opt_b6_3', text: 'Build UI components', correct: false },
                { id: 'opt_b6_4', text: 'Manage memory', correct: false }
            ]
        },
        {
            id: 'q_b7', text: 'What is GraphQL?', difficulty: 'Medium', options: [
                { id: 'opt_b7_1', text: 'Query language for APIs', correct: true },
                { id: 'opt_b7_2', text: 'A database system', correct: false },
                { id: 'opt_b7_3', text: 'A testing framework', correct: false },
                { id: 'opt_b7_4', text: 'A CSS library', correct: false }
            ]
        },
        {
            id: 'q_b8', text: 'What is the purpose of CORS?', difficulty: 'Hard', options: [
                { id: 'opt_b8_1', text: 'Control cross-origin resource sharing', correct: true },
                { id: 'opt_b8_2', text: 'Compress responses', correct: false },
                { id: 'opt_b8_3', text: 'Cache data', correct: false },
                { id: 'opt_b8_4', text: 'Encrypt data', correct: false }
            ]
        },
        {
            id: 'q_b9', text: 'What is a microservice architecture?', difficulty: 'Hard', options: [
                { id: 'opt_b9_1', text: 'Small, independent services', correct: true },
                { id: 'opt_b9_2', text: 'Monolithic applications', correct: false },
                { id: 'opt_b9_3', text: 'Large databases', correct: false },
                { id: 'opt_b9_4', text: 'Frontend frameworks', correct: false }
            ]
        },
        {
            id: 'q_b10', text: 'What is npm?', difficulty: 'Easy', options: [
                { id: 'opt_b10_1', text: 'Node Package Manager', correct: true },
                { id: 'opt_b10_2', text: 'New Programming Method', correct: false },
                { id: 'opt_b10_3', text: 'Network Protocol Manager', correct: false },
                { id: 'opt_b10_4', text: 'Native Process Module', correct: false }
            ]
        },
        {
            id: 'q_b11', text: 'What is WebSocket?', difficulty: 'Medium', options: [
                { id: 'opt_b11_1', text: 'Full-duplex communication protocol', correct: true },
                { id: 'opt_b11_2', text: 'HTTP replacement', correct: false },
                { id: 'opt_b11_3', text: 'Database connector', correct: false },
                { id: 'opt_b11_4', text: 'File transfer protocol', correct: false }
            ]
        },
        {
            id: 'q_b12', text: 'What is caching in backend systems?', difficulty: 'Medium', options: [
                { id: 'opt_b12_1', text: 'Storing data for faster access', correct: true },
                { id: 'opt_b12_2', text: 'Deleting old data', correct: false },
                { id: 'opt_b12_3', text: 'Encrypting data', correct: false },
                { id: 'opt_b12_4', text: 'Compressing files', correct: false }
            ]
        },
        {
            id: 'q_b13', text: 'What is API rate limiting?', difficulty: 'Hard', options: [
                { id: 'opt_b13_1', text: 'Restricting number of API requests', correct: true },
                { id: 'opt_b13_2', text: 'Increasing API speed', correct: false },
                { id: 'opt_b13_3', text: 'Securing API endpoints', correct: false },
                { id: 'opt_b13_4', text: 'Testing API performance', correct: false }
            ]
        },
        {
            id: 'q_b14', text: 'What is RESTful API versioning?', difficulty: 'Medium', options: [
                { id: 'opt_b14_1', text: 'Managing different API versions', correct: true },
                { id: 'opt_b14_2', text: 'Updating databases', correct: false },
                { id: 'opt_b14_3', text: 'Scaling servers', correct: false },
                { id: 'opt_b14_4', text: 'Testing endpoints', correct: false }
            ]
        },
        {
            id: 'q_b15', text: 'What is load balancing?', difficulty: 'Hard', options: [
                { id: 'opt_b15_1', text: 'Distributing traffic across servers', correct: true },
                { id: 'opt_b15_2', text: 'Reducing file sizes', correct: false },
                { id: 'opt_b15_3', text: 'Database optimization', correct: false },
                { id: 'opt_b15_4', text: 'Code minification', correct: false }
            ]
        }
    ],

    // Cloud Computing - 15 questions
    cloud: [
        {
            id: 'q_c1', text: 'What does AWS stand for?', difficulty: 'Easy', options: [
                { id: 'opt_c1_1', text: 'Amazon Web Services', correct: true },
                { id: 'opt_c1_2', text: 'Advanced Web Solutions', correct: false },
                { id: 'opt_c1_3', text: 'Automated Workspace System', correct: false },
                { id: 'opt_c1_4', text: 'Application Web Server', correct: false }
            ]
        },
        {
            id: 'q_c2', text: 'What is Docker used for?', difficulty: 'Medium', options: [
                { id: 'opt_c2_1', text: 'Containerization of applications', correct: true },
                { id: 'opt_c2_2', text: 'Database management', correct: false },
                { id: 'opt_c2_3', text: 'Frontend development', correct: false },
                { id: 'opt_c2_4', text: 'Testing applications', correct: false }
            ]
        },
        {
            id: 'q_c3', text: 'What is Kubernetes?', difficulty: 'Hard', options: [
                { id: 'opt_c3_1', text: 'Container orchestration platform', correct: true },
                { id: 'opt_c3_2', text: 'Programming language', correct: false },
                { id: 'opt_c3_3', text: 'Database system', correct: false },
                { id: 'opt_c3_4', text: 'Code editor', correct: false }
            ]
        },
        {
            id: 'q_c4', text: 'What is CI/CD?', difficulty: 'Medium', options: [
                { id: 'opt_c4_1', text: 'Continuous Integration/Continuous Deployment', correct: true },
                { id: 'opt_c4_2', text: 'Code Integration/Code Development', correct: false },
                { id: 'opt_c4_3', text: 'Cloud Infrastructure/Cloud Delivery', correct: false },
                { id: 'opt_c4_4', text: 'Container Installation/Container Deployment', correct: false }
            ]
        },
        {
            id: 'q_c5', text: 'What is serverless computing?', difficulty: 'Hard', options: [
                { id: 'opt_c5_1', text: 'Cloud provider manages servers', correct: true },
                { id: 'opt_c5_2', text: 'No servers are used', correct: false },
                { id: 'opt_c5_3', text: 'Local development only', correct: false },
                { id: 'opt_c5_4', text: 'Desktop applications', correct: false }
            ]
        },
        {
            id: 'q_c6', text: 'What is AWS Lambda?', difficulty: 'Medium', options: [
                { id: 'opt_c6_1', text: 'Serverless compute service', correct: true },
                { id: 'opt_c6_2', text: 'Database service', correct: false },
                { id: 'opt_c6_3', text: 'Storage service', correct: false },
                { id: 'opt_c6_4', text: 'Networking service', correct: false }
            ]
        },
        {
            id: 'q_c7', text: 'What is AWS S3?', difficulty: 'Easy', options: [
                { id: 'opt_c7_1', text: 'Object storage service', correct: true },
                { id: 'opt_c7_2', text: 'Database service', correct: false },
                { id: 'opt_c7_3', text: 'Compute service', correct: false },
                { id: 'opt_c7_4', text: 'Email service', correct: false }
            ]
        },
        {
            id: 'q_c8', text: 'What is a VPC in AWS?', difficulty: 'Medium', options: [
                { id: 'opt_c8_1', text: 'Virtual Private Cloud', correct: true },
                { id: 'opt_c8_2', text: 'Virtual Processing Center', correct: false },
                { id: 'opt_c8_3', text: 'Verified Public Container', correct: false },
                { id: 'opt_c8_4', text: 'Virtual Protocol Connection', correct: false }
            ]
        },
        {
            id: 'q_c9', text: 'What is Infrastructure as Code?', difficulty: 'Hard', options: [
                { id: 'opt_c9_1', text: 'Managing infrastructure through code', correct: true },
                { id: 'opt_c9_2', text: 'Writing applications', correct: false },
                { id: 'opt_c9_3', text: 'Debugging systems', correct: false },
                { id: 'opt_c9_4', text: 'Testing infrastructure', correct: false }
            ]
        },
        {
            id: 'q_c10', text: 'What is a Docker image?', difficulty: 'Medium', options: [
                { id: 'opt_c10_1', text: 'Template for creating containers', correct: true },
                { id: 'opt_c10_2', text: 'A virtual machine', correct: false },
                { id: 'opt_c10_3', text: 'A database backup', correct: false },
                { id: 'opt_c10_4', text: 'A configuration file', correct: false }
            ]
        },
        {
            id: 'q_c11', text: 'What is AWS EC2?', difficulty: 'Easy', options: [
                { id: 'opt_c11_1', text: 'Virtual server in the cloud', correct: true },
                { id: 'opt_c11_2', text: 'Storage service', correct: false },
                { id: 'opt_c11_3', text: 'Database service', correct: false },
                { id: 'opt_c11_4', text: 'Networking service', correct: false }
            ]
        },
        {
            id: 'q_c12', text: 'What is autoscaling?', difficulty: 'Medium', options: [
                { id: 'opt_c12_1', text: 'Automatically adjusting resource capacity', correct: true },
                { id: 'opt_c12_2', text: 'Manual server management', correct: false },
                { id: 'opt_c12_3', text: 'Fixed resource allocation', correct: false },
                { id: 'opt_c12_4', text: 'Code optimization', correct: false }
            ]
        },
        {
            id: 'q_c13', text: 'What is CloudFormation?', difficulty: 'Hard', options: [
                { id: 'opt_c13_1', text: 'AWS infrastructure as code service', correct: true },
                { id: 'opt_c13_2', text: 'Database migration tool', correct: false },
                { id: 'opt_c13_3', text: 'Monitoring service', correct: false },
                { id: 'opt_c13_4', text: 'Security service', correct: false }
            ]
        },
        {
            id: 'q_c14', text: 'What is a container registry?', difficulty: 'Medium', options: [
                { id: 'opt_c14_1', text: 'Storage for container images', correct: true },
                { id: 'opt_c14_2', text: 'Database for applications', correct: false },
                { id: 'opt_c14_3', text: 'Code repository', correct: false },
                { id: 'opt_c14_4', text: 'Testing environment', correct: false }
            ]
        },
        {
            id: 'q_c15', text: 'What is AWS CloudWatch?', difficulty: 'Medium', options: [
                { id: 'opt_c15_1', text: 'Monitoring and observability service', correct: true },
                { id: 'opt_c15_2', text: 'Storage service', correct: false },
                { id: 'opt_c15_3', text: 'Deployment service', correct: false },
                { id: 'opt_c15_4', text: 'Database service', correct: false }
            ]
        }
    ],

    // Databases - 15 questions
    databases: [
        {
            id: 'q_d1', text: 'What does SQL stand for?', difficulty: 'Easy', options: [
                { id: 'opt_d1_1', text: 'Structured Query Language', correct: true },
                { id: 'opt_d1_2', text: 'Simple Question Language', correct: false },
                { id: 'opt_d1_3', text: 'Standard Query Logic', correct: false },
                { id: 'opt_d1_4', text: 'System Query Language', correct: false }
            ]
        },
        {
            id: 'q_d2', text: 'What is a primary key?', difficulty: 'Easy', options: [
                { id: 'opt_d2_1', text: 'Unique identifier for a record', correct: true },
                { id: 'opt_d2_2', text: 'Foreign key reference', correct: false },
                { id: 'opt_d2_3', text: 'Index on a table', correct: false },
                { id: 'opt_d2_4', text: 'Database password', correct: false }
            ]
        },
        {
            id: 'q_d3', text: 'What is normalization?', difficulty: 'Medium', options: [
                { id: 'opt_d3_1', text: 'Organizing data to reduce redundancy', correct: true },
                { id: 'opt_d3_2', text: 'Backing up databases', correct: false },
                { id: 'opt_d3_3', text: 'Encrypting data', correct: false },
                { id: 'opt_d3_4', text: 'Creating indexes', correct: false }
            ]
        },
        {
            id: 'q_d4', text: 'What is MongoDB?', difficulty: 'Medium', options: [
                { id: 'opt_d4_1', text: 'NoSQL document database', correct: true },
                { id: 'opt_d4_2', text: 'SQL database', correct: false },
                { id: 'opt_d4_3', text: 'Programming language', correct: false },
                { id: 'opt_d4_4', text: 'Web server', correct: false }
            ]
        },
        {
            id: 'q_d5', text: 'What is ACID in databases?', difficulty: 'Hard', options: [
                { id: 'opt_d5_1', text: 'Atomicity, Consistency, Isolation, Durability', correct: true },
                { id: 'opt_d5_2', text: 'Advanced Control and Information Display', correct: false },
                { id: 'opt_d5_3', text: 'Automatic Creation and Insertion of Data', correct: false },
                { id: 'opt_d5_4', text: 'Application Configuration and Integration Database', correct: false }
            ]
        },
        {
            id: 'q_d6', text: 'What is an index in databases?', difficulty: 'Medium', options: [
                { id: 'opt_d6_1', text: 'Data structure for faster queries', correct: true },
                { id: 'opt_d6_2', text: 'Database backup', correct: false },
                { id: 'opt_d6_3', text: 'Table relationship', correct: false },
                { id: 'opt_d6_4', text: 'Data type', correct: false }
            ]
        },
        {
            id: 'q_d7', text: 'What is a JOIN in SQL?', difficulty: 'Medium', options: [
                { id: 'opt_d7_1', text: 'Combining rows from multiple tables', correct: true },
                { id: 'opt_d7_2', text: 'Creating new tables', correct: false },
                { id: 'opt_d7_3', text: 'Deleting records', correct: false },
                { id: 'opt_d7_4', text: 'Updating data', correct: false }
            ]
        },
        {
            id: 'q_d8', text: 'What is a foreign key?', difficulty: 'Easy', options: [
                { id: 'opt_d8_1', text: 'Reference to primary key in another table', correct: true },
                { id: 'opt_d8_2', text: 'Unique identifier', correct: false },
                { id: 'opt_d8_3', text: 'Database password', correct: false },
                { id: 'opt_d8_4', text: 'Index column', correct: false }
            ]
        },
        {
            id: 'q_d9', text: 'What is database sharding?', difficulty: 'Hard', options: [
                { id: 'opt_d9_1', text: 'Horizontal partitioning of data', correct: true },
                { id: 'opt_d9_2', text: 'Vertical partitioning of data', correct: false },
                { id: 'opt_d9_3', text: 'Database backup strategy', correct: false },
                { id: 'opt_d9_4', text: 'Data encryption method', correct: false }
            ]
        },
        {
            id: 'q_d10', text: 'What is Redis?', difficulty: 'Medium', options: [
                { id: 'opt_d10_1', text: 'In-memory data structure store', correct: true },
                { id: 'opt_d10_2', text: 'SQL database', correct: false },
                { id: 'opt_d10_3', text: 'Web framework', correct: false },
                { id: 'opt_d10_4', text: 'Testing tool', correct: false }
            ]
        },
        {
            id: 'q_d11', text: 'What is a transaction in databases?', difficulty: 'Medium', options: [
                { id: 'opt_d11_1', text: 'Sequence of operations as single unit', correct: true },
                { id: 'opt_d11_2', text: 'Single query execution', correct: false },
                { id: 'opt_d11_3', text: 'Database connection', correct: false },
                { id: 'opt_d11_4', text: 'Table creation', correct: false }
            ]
        },
        {
            id: 'q_d12', text: 'What is database replication?', difficulty: 'Hard', options: [
                { id: 'opt_d12_1', text: 'Copying data across multiple databases', correct: true },
                { id: 'opt_d12_2', text: 'Creating backups', correct: false },
                { id: 'opt_d12_3', text: 'Indexing data', correct: false },
                { id: 'opt_d12_4', text: 'Encrypting data', correct: false }
            ]
        },
        {
            id: 'q_d13', text: 'What is PostgreSQL?', difficulty: 'Easy', options: [
                { id: 'opt_d13_1', text: 'Open-source relational database', correct: true },
                { id: 'opt_d13_2', text: 'NoSQL database', correct: false },
                { id: 'opt_d13_3', text: 'Programming language', correct: false },
                { id: 'opt_d13_4', text: 'Web server', correct: false }
            ]
        },
        {
            id: 'q_d14', text: 'What is a stored procedure?', difficulty: 'Medium', options: [
                { id: 'opt_d14_1', text: 'Precompiled SQL code', correct: true },
                { id: 'opt_d14_2', text: 'Database backup', correct: false },
                { id: 'opt_d14_3', text: 'Table structure', correct: false },
                { id: 'opt_d14_4', text: 'Index type', correct: false }
            ]
        },
        {
            id: 'q_d15', text: 'What is CAP theorem?', difficulty: 'Hard', options: [
                { id: 'opt_d15_1', text: 'Consistency, Availability, Partition tolerance', correct: true },
                { id: 'opt_d15_2', text: 'Create, Alter, Partition', correct: false },
                { id: 'opt_d15_3', text: 'Connection, Authentication, Protocol', correct: false },
                { id: 'opt_d15_4', text: 'Cache, Access, Performance', correct: false }
            ]
        }
    ],

    // Security - 15 questions
    security: [
        {
            id: 'q_s1', text: 'What is HTTPS?', difficulty: 'Easy', options: [
                { id: 'opt_s1_1', text: 'HTTP with encryption (SSL/TLS)', correct: true },
                { id: 'opt_s1_2', text: 'Faster version of HTTP', correct: false },
                { id: 'opt_s1_3', text: 'HTTP for servers only', correct: false },
                { id: 'opt_s1_4', text: 'HTTP version 2', correct: false }
            ]
        },
        {
            id: 'q_s2', text: 'What is OAuth?', difficulty: 'Medium', options: [
                { id: 'opt_s2_1', text: 'Open authorization framework', correct: true },
                { id: 'opt_s2_2', text: 'Database protocol', correct: false },
                { id: 'opt_s2_3', text: 'Programming language', correct: false },
                { id: 'opt_s2_4', text: 'Testing framework', correct: false }
            ]
        },
        {
            id: 'q_s3', text: 'What is SQL injection?', difficulty: 'Medium', options: [
                { id: 'opt_s3_1', text: 'Malicious SQL code insertion', correct: true },
                { id: 'opt_s3_2', text: 'Database optimization', correct: false },
                { id: 'opt_s3_3', text: 'Query enhancement', correct: false },
                { id: 'opt_s3_4', text: 'Data migration', correct: false }
            ]
        },
        {
            id: 'q_s4', text: 'What is XSS?', difficulty: 'Medium', options: [
                { id: 'opt_s4_1', text: 'Cross-Site Scripting attack', correct: true },
                { id: 'opt_s4_2', text: 'Extra Security System', correct: false },
                { id: 'opt_s4_3', text: 'XML Style Sheets', correct: false },
                { id: 'opt_s4_4', text: 'External Server Script', correct: false }
            ]
        },
        {
            id: 'q_s5', text: 'What is CSRF?', difficulty: 'Hard', options: [
                { id: 'opt_s5_1', text: 'Cross-Site Request Forgery', correct: true },
                { id: 'opt_s5_2', text: 'Client-Side Resource Fraud', correct: false },
                { id: 'opt_s5_3', text: 'Centralized Security Response Framework', correct: false },
                { id: 'opt_s5_4', text: 'Cookie Storage and Retrieval Function', correct: false }
            ]
        },
        {
            id: 'q_s6', text: 'What is encryption?', difficulty: 'Easy', options: [
                { id: 'opt_s6_1', text: 'Converting data to secure format', correct: true },
                { id: 'opt_s6_2', text: 'Compressing files', correct: false },
                { id: 'opt_s6_3', text: 'Deleting data', correct: false },
                { id: 'opt_s6_4', text: 'Backing up data', correct: false }
            ]
        },
        {
            id: 'q_s7', text: 'What is two-factor authentication?', difficulty: 'Easy', options: [
                { id: 'opt_s7_1', text: 'Two verification methods for login', correct: true },
                { id: 'opt_s7_2', text: 'Two passwords required', correct: false },
                { id: 'opt_s7_3', text: 'Two users needed', correct: false },
                { id: 'opt_s7_4', text: 'Two devices required', correct: false }
            ]
        },
        {
            id: 'q_s8', text: 'What is a hash function?', difficulty: 'Medium', options: [
                { id: 'opt_s8_1', text: 'One-way data transformation', correct: true },
                { id: 'opt_s8_2', text: 'Two-way encryption', correct: false },
                { id: 'opt_s8_3', text: 'Data compression', correct: false },
                { id: 'opt_s8_4', text: 'File storage', correct: false }
            ]
        },
        {
            id: 'q_s9', text: 'What is OWASP?', difficulty: 'Medium', options: [
                { id: 'opt_s9_1', text: 'Open Web Application Security Project', correct: true },
                { id: 'opt_s9_2', text: 'Online Web Access Security Protocol', correct: false },
                { id: 'opt_s9_3', text: 'Operational Web Application Service Platform', correct: false },
                { id: 'opt_s9_4', text: 'Organized Web App Security Panel', correct: false }
            ]
        },
        {
            id: 'q_s10', text: 'What is bcrypt?', difficulty: 'Medium', options: [
                { id: 'opt_s10_1', text: 'Password hashing function', correct: true },
                { id: 'opt_s10_2', text: 'Database encryption', correct: false },
                { id: 'opt_s10_3', text: 'Network protocol', correct: false },
                { id: 'opt_s10_4', text: 'File compression', correct: false }
            ]
        },
        {
            id: 'q_s11', text: 'What is a firewall?', difficulty: 'Easy', options: [
                { id: 'opt_s11_1', text: 'Network security barrier', correct: true },
                { id: 'opt_s11_2', text: 'Antivirus software', correct: false },
                { id: 'opt_s11_3', text: 'Password manager', correct: false },
                { id: 'opt_s11_4', text: 'Backup system', correct: false }
            ]
        },
        {
            id: 'q_s12', text: 'What is SSL/TLS?', difficulty: 'Medium', options: [
                { id: 'opt_s12_1', text: 'Cryptographic protocols for secure communication', correct: true },
                { id: 'opt_s12_2', text: 'Database protocols', correct: false },
                { id: 'opt_s12_3', text: 'Programming languages', correct: false },
                { id: 'opt_s12_4', text: 'Testing frameworks', correct: false }
            ]
        },
        {
            id: 'q_s13', text: 'What is penetration testing?', difficulty: 'Hard', options: [
                { id: 'opt_s13_1', text: 'Authorized simulated cyber attack', correct: true },
                { id: 'opt_s13_2', text: 'Unit testing', correct: false },
                { id: 'opt_s13_3', text: 'Performance testing', correct: false },
                { id: 'opt_s13_4', text: 'Integration testing', correct: false }
            ]
        },
        {
            id: 'q_s14', text: 'What is a DDoS attack?', difficulty: 'Medium', options: [
                { id: 'opt_s14_1', text: 'Distributed Denial of Service attack', correct: true },
                { id: 'opt_s14_2', text: 'Data Download Delay System', correct: false },
                { id: 'opt_s14_3', text: 'Direct Database Operation Service', correct: false },
                { id: 'opt_s14_4', text: 'Distributed Data Output System', correct: false }
            ]
        },
        {
            id: 'q_s15', text: 'What is the principle of least privilege?', difficulty: 'Hard', options: [
                { id: 'opt_s15_1', text: 'Minimum access rights for users', correct: true },
                { id: 'opt_s15_2', text: 'Maximum security measures', correct: false },
                { id: 'opt_s15_3', text: 'Least expensive security', correct: false },
                { id: 'opt_s15_4', text: 'Lowest priority tasks', correct: false }
            ]
        }
    ]
};
