export const week6LearningJournal = `
# Part One: Developing and Reviewing Capstone Ideas with My Team

During our team discussions this week, each of us (Liena, Brian, Hejun, and myself) pitched three prospective capstone project ideas. For each concept, we broke down why we came up with it, who the target audience is, who benefits from the system, and the technology stack necessary to bring it from blueprint to completion. After discussing everyone's proposals, we each shared our individual thoughts and feedback.

Here is the breakdown of all the project proposals and my thoughts on each:

---

## Teammate: Liena Zhazulin

### 1. LifeFlow — Personal Planning Assistant
* **Why We Came Up With It:** Working students and parents constantly struggle to balance busy work schedules, school assignments, household chores, errands, and family time.
* **Target Audience & Beneficiaries:** Working parents, college students, and busy families who need to coordinate complex daily routines in a single hub.
* **Technology Required:** A responsive web application (React/Next.js), shared calendar integration (Google Calendar / Outlook API), mapping/geolocation APIs for errand route grouping, and an AI assistant engine to suggest optimal daily schedules and schedule adjustments based on priorities and travel distance.
* **My Thoughts:** It would be incredible to see project planning software be implemented into home life. I love the idea of being able to see schedules for every member of the family at a single homepage. If it works at companies, I know it will work at home.

### 2. MindSteps — Personalized Wellness and Learning
* **Why We Came Up With It:** Many individuals deal with stress, anxiety, anger management, and relationship communication challenges, but lack immediate or low-barrier resources to work through them without feeling overwhelmed.
* **Target Audience & Beneficiaries:** Minors, young adults, and anyone seeking private, self-paced mental wellness support who may not want to burden or concern others, or who cannot immediately access therapy.
* **Technology Required:** Secure web platform with end-to-end data encryption for private journaling, mood check-in tracking, interactive educational modules and quizzes, and an AI recommendation engine to suggest relevant content based on user goals while preserving strict user privacy without replacing professional medical care.
* **My Thoughts:** An easy-to-reach resource that doesn't require appointments to access resources regarding mental health. I think it could help minors or adults who do not want to burden or concern others.

### 3. NewRoots — Multilingual Community Resource Navigator
* **Why We Came Up With It:** Immigrants, refugees, and non-native English speakers frequently encounter steep language barriers and bureaucratic confusion when trying to locate trustworthy local support, legal help, and essential community services.
* **Target Audience & Beneficiaries:** Immigrants, newly arrived residents, displaced individuals/families, and tourists who need reliable local assistance.
* **Technology Required:** Multilingual web directory with internationalization (i18n), geolocation and interactive map routing, a verified service database with automated last-updated tracking, and an AI conversational assistant capable of answering questions in the user's preferred language and translating complex bureaucratic steps into simple terms.
* **My Thoughts:** This multilingual navigator would be much appreciated by tourists and those displaced by war. Leaving home can make you feel like you don't belong, and an app like this would help people get past that feeling.

---

## Teammate: Brian

### 1. CloudPulse — Multiplayer Matchmaking and Server Management
* **Why We Came Up With It:** Indie game developers face massive technical hurdles when managing online player lobbies, matchmaking queues, and server spin-ups without the budget for enterprise server engineers.
* **Target Audience & Beneficiaries:** Independent game developers, small multiplayer game studios, and their online gaming communities.
* **Technology Required:** High-concurrency backend (Node.js/Go), WebSocket real-time player queueing, automated containerized server orchestration (Docker/Kubernetes or cloud container instances), live match analytics dashboard, and an AI assistant to monitor active server loads, predict regional traffic spikes, and optimize server provisioning to cut latency and cloud costs.
* **My Thoughts:** This load balancer idea could be beneficial, especially when a specific user or game is experiencing a spike of usage and being able to either isolate or redirect new users.

### 2. LogicCraft — Visual Enemy AI Behavior Tree Editor
* **Why We Came Up With It:** Designing complex decision-making systems for non-player characters (NPCs) often requires writing tedious low-level state code from scratch, slowing down game development and iteration cycles.
* **Target Audience & Beneficiaries:** Game designers, solo indie developers, and gameplay programmers looking to build rich AI behavior without getting bogged down in boilerplate code.
* **Technology Required:** Web-based node canvas editor, real-time visual debugger for playtesting, code export engine generating production-ready C++ and C# scripts, and an AI analysis engine to detect infinite logic loops, unreachable nodes, and pathfinding performance bottlenecks before deployment.
* **My Thoughts:** A template system that is customizable for NPCs can help game developers cut significant time and costs.

### 3. ModelVault — Interactive 3D Asset Management Platform
* **Why We Came Up With It:** 3D artists and game development teams struggle to organize, inspect, version, and share 3D assets across teams and with external clients without relying on clumsy cloud drives.
* **Target Audience & Beneficiaries:** 3D modelers, animators, game studios, creative agencies, and freelance artists.
* **Technology Required:** Browser-based WebGL/Three.js interactive 3D renderer, version control integration for large binary 3D assets, texture inspection tools, secure client share links, and an AI assistant to auto-generate descriptive metadata tags and suggest mesh/poly-count optimizations for real-time game engines.
* **My Thoughts:** Sharing files through systems like Google Drive and Dropbox isn't as good as sharing files across a local network, but when you need to share files outside of the shared network, those generic cloud services just don't cut it.

---

## Teammate: Hejun Zhang

### 1. StudySync — Academic Planning and Study Support Platform
* **Why We Came Up With It:** College students often juggle heavy course loads, competing assignment deadlines, exams, and study groups, leading to disorganization and academic burnout.
* **Target Audience & Beneficiaries:** College and university students looking for structured academic time management.
* **Technology Required:** Full-stack web application with task priority matrices, calendar synchronization, deadline notification webhooks, and an AI study assistant that breaks down large multi-week assignments into manageable daily milestones and creates personalized study schedules.
* **My Thoughts:** I would love to be able to organize my assignments and be able to see all of my deadlines coming. The AI could adapt to my way of working and help me manage my assignments much more effectively.

### 2. MealMate — Meal Planning and Grocery List Platform
* **Why We Came Up With It:** Deciding what to cook, creating recipes, and maintaining grocery lists each week is a repetitive chore that often leads to food waste, unhealthy takeout habits, and blown budgets.
* **Target Audience & Beneficiaries:** Busy professionals, college students, and families looking to streamline their weekly nutritional planning and grocery spending.
* **Technology Required:** Recipe database API, ingredient inventory management, interactive grocery checklist with purchase status tracking, and an AI recommendation engine that suggests weekly meal plans and recipes tailored to the user's budget, dietary preferences, and existing pantry ingredients.
* **My Thoughts:** Being able to keep track of my groceries and organize them can be very helpful when it comes to budgeting and sticking to a diet.

### 3. PetCare — Pet Care Management Platform
* **Why We Came Up With It:** Pet owners have to manage fragmented veterinary records, vaccine booster dates, medication dosages, and feeding instructions across multiple physical papers and clinic portals.
* **Target Audience & Beneficiaries:** Pet owners, foster parents, veterinary clinics, and pet sitters.
* **Technology Required:** Multi-pet profile management system, vaccination record digital locker, automated appointment/medication push reminders, and an AI assistant providing general, breed- and age-specific wellness suggestions without replacing professional veterinary diagnosis.
* **My Thoughts:** Being able to keep track of my pets' records can be very helpful in the case of an emergency or when leaving them with a pet sitter.

---

## Teammate: Ivan Alier-Reyes (My Capstone Proposals)

### 1. Este Cosmos — Intelligent Vehicle Fuel Tracking
* **Why We Came Up With It:** High-mileage drivers face significant wear and tear on their vehicles, with hidden mechanical issues often going undetected until they lead to expensive breakdowns and poor fuel economy.
* **Target Audience & Beneficiaries:** Commuters, rideshare/delivery drivers, and commercial fleet operators who depend on vehicle longevity and fuel efficiency.
* **Technology Required:** Progressive Web Application (PWA) with offline-first logging capabilities, Firebase cloud synchronization, OBD-II sensor integration, and WebAssembly-based Edge Impulse / TinyML machine learning models running client-side to detect fuel consumption anomalies and mechanical degradation patterns.
* **My Thoughts:** I drive up to 1,000 miles a week for my job and that means there is a lot of wear and tear on my car. Creating a sensor that connects my car to my phone via a native app while also using AI to read the data can help me become a better driver while also keeping my car in much better shape.

### 2. Grazing Ponies — Autonomous Cyber-Physical Smart Garden
* **Why We Came Up With It:** Keeping indoor houseplants and micro-gardens alive and thriving requires nuanced care, but standard commercial plant meters offer only crude, one-size-fits-all moisture indicators without true adaptive feedback.
* **Target Audience & Beneficiaries:** Urban gardeners, houseplant hobbyists, and home growers aiming for sustainable, automated plant care.
* **Technology Required:** ESP32 microcontrollers deployed over a 3x3 planter grid, local telemetry logging, embedded TinyML models running on-device for dynamic watering without needing constant cloud connectivity, and a React monitoring dashboard or standalone exterior display unit.
* **My Thoughts:** I want to take care of my houseplants, but a simple Arduino with a water level sensor is not enough. Using TinyML models, plants can be taken care of in a personalized manner—each plant is different, and each sensor knows that. This would also connect to the cloud every now and then, OR it could be a device outside of the planter that displays all of this information. I would also like to implement this in outdoor gardens and use weather sensors to better maintain plants, using soil composition to help the plant thrive by helping the user understand what the plant needs to be at its best.

### 3. AgriSense — Precision Irrigation and Crop Monitoring
* **Why We Came Up With It:** Agricultural operations face severe water scarcity and variable microclimates, making real-time, precision crop monitoring critical for resource conservation and preventing crop loss.
* **Target Audience & Beneficiaries:** Commercial growers, agricultural producers in regions like the Salinas Valley, and farm managers.
* **Technology Required:** Web dashboard integrated with IoT soil sensor arrays, satellite multispectral imagery APIs, local weather telemetry, and predictive AI analytics that synthesize historical weather patterns with current soil moisture to recommend exact, zone-specific irrigation schedules.
* **My Thoughts:** It is basically Grazing Ponies, but scaled up to commercial acreage with drones to help diagnose pests, disease outbreaks, and overall crop health factors across entire fields.

---

# Part Two: Keep Up With Your Learning Journal

### Takeaways from the Career Guide & Module 6 Lecture
Reviewing the Module 6 lecture materials and the CSUMB Career Development resources provided some timely perspective on what companies actually look for in new hires. Beyond raw technical ability, employers want individuals who can clearly communicate their problem-solving process, demonstrate adaptability, and translate complex technical tasks into business value. Going through the resume and cover letter instructional videos and guides made me re-examine how I frame my own background, ensuring that my real-world IT desktop support experience and coursework aren't just listed as daily duties, but as measurable impact, efficiency gains, and technical milestones.

The segment on coding interviews using AI coding tools was particularly eye-opening. Seeing how AI tools are actively leveraged in modern technical interviews highlighted a crucial balance: while AI assistants can accelerate syntax generation, boilerplate code, and debugging, they are completely useless if you don't deeply understand the underlying algorithms, data structures, and logic yourself. To be successful in future technical coding interviews, what I truly need to master in the CS Online program is the fundamental core, knowing computational complexity, edge cases, memory management, and how to articulate every architectural decision out loud under pressure. AI is a powerful force multiplier, but your own mental model is what ultimately gets evaluated.

### Awaiting Capstone Selection & Final Presentation Prep
We are currently awaiting Dr. Tao's review and selection before we officially start developing and finalizing the project for our final presentation. 


### Workplace Reflections: Scripting, Efficiency, and Industry Friction
Outside of class, I have continued pushing to automate repetitive tasks at my job. Lately, I have learned to write and deploy more scripts to solve operational issues that my coworkers are still dealing with manually. Automating these workflows saves hours of redundant labor, yet it can be incredibly frustrating to deal with the pushback. At times, it feels like either people are simply too unprofessional to cooperate, or they look down upon me because of my age and having fewer years in the industry.

I genuinely appreciate that there are teammates and leaders who recognize and value my contributions to the team. But it remains exhausting to constantly battle resistance from individuals who make it difficult to solve simple, routine issues that we really should not be wasting valuable company resources on. Learning to write scripts to fix systemic inefficiencies has been great technical practice, but learning how to navigate office politics, resistance to change, and uncooperative peers has been an equally rigorous lesson in professional growth.
`;
