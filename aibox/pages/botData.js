const bots = [
    { name: 'Ai Box', responses: [
        { title: 'Hello', text: 'Start your conversation with this', response: 'Hello!' },
        { title: 'Quick Tip', text: 'New developer you need this!', response: 'Give a quick tip for a developer' },
        { title: 'Tell a Joke', text: 'Start your day with a laugh', response: 'Tell me a joke!' },
        { title: 'Play a Game', text: 'Start a game with me', response: `## Prompt for a Science Trivia Game

        You are a trivia game host. Your goal is to ask engaging trivia questions about science for players.
        
        **Game Type:** Trivia
        
        **Category:** Science
        
        **Instructions:**
        
        1. Ask a multiple-choice trivia question about science.
        2. Provide four answer choices (A, B, C, D).
        3. Make the questions challenging but not impossible to answer. 
        4. Keep the tone playful and engaging.
        
        **Example:**
        
        **Question:** What is the name of the largest planet in our solar system?
        
        **Answer Choices:**
        
        A. Mars
        B. Jupiter
        C. Saturn
        D. Uranus
        
        **Output Format:**
        
        **Question:** [Question Text]
        
        **Answer Choices:**
        
        A. [Answer Choice A]
        B. [Answer Choice B]
        C. [Answer Choice C]
        D. [Answer Choice D]
        
        **Please provide a new science trivia question in the format above.**` },
        { title: 'Recommend a Book', text: 'Get a book recommendation', response: 'recommend me a book which no one read, full of mystery' },
        { title: 'Recommend a Movie', text: 'Get a movie recommendation', response: 'recommend me a movie which is full of action' },
        { title: 'Recommend a Song', text: 'Get a song recommendation', response: 'recommend me a song which is full of energy' },
        { title: 'Recommend an Anime', text: 'Get an Anime recommendation', response: 'recommend me an anime with high rating' },
        { title: 'Tell a Story', text: 'Get a story original for you', response: 'Tell me a story' },
        {
    title: `Unleash Your Creativity`,
    text: `Give me a creative writing prompt`,
    response: `Here's a writing prompt to spark your imagination: You wake up in a world where everyone's dreams become reality. What adventure awaits?`
  },
  {
    title: `Brainteaser Time!`,
    text: `Challenge me with a riddle`,
    response: `I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?" (Answer: A map)`
  },
  {
    title: `Would You Rather?`,
    text: `Play a game of Would You Rather`,
    response: `Would you rather be able to fly or become invisible?`
  },
  {
    title: `Fact or Fiction?`,
    text: `Tell me something surprising (true or false)`,
    response: `Did you know that the population of the Earth is roughly the same as the number of stars in our galaxy (the Milky Way)?" (Follow up with clarification: This is actually a surprising coincidence, but not necessarily true.)`
  },
  {
    title: "Time Travel Twist",
    text: "Take me on a historical adventure",
    response: "Imagine you could travel back in time to witness a pivotal historical event. Where and when would you go, and why?"
  },
  {
    title: "Future Forecast",
    text: "Predict the future (humorously)",
    response: "In the year 2042, the most popular social media platform will be for sharing dreams (and nightmares!). What will your first post be?"
  },
  {
    title: "Quote Me On It",
    text: "Give me a motivational quote",
    response: "The journey of a thousand miles begins with a single step. - Lao Tzu"
  },
  {
    title: "DIY Challenge",
    text: "Give me a creative project idea",
    response: "Feeling crafty? Upcycle an old jar into a beautiful terrarium filled with miniature plants. It's a fun and sustainable way to add a touch of nature to your home."
  },
  {
    title: "Philosophical Pondering",
    text: "Make me think with a philosophical question",
    response: "If a tree falls in a forest and no one is around to hear it, does it make a sound?"
  },
  {
    title: "Brainstorm Buddies",
    text: "Help me brainstorm ideas (for anything!)",
    response: "What are you trying to brainstorm today? Perhaps we can come up with some creative solutions together."
  }] },
    { name: 'Study Box', responses: [
        {
          "title": "Explain a Concept",
          "text": "Can you explain [Concept Name] in a way I can understand?",
          "response": "I'd be happy to! Tell me about the concept you'd like help with, and I'll do my best to break it down."
        },
        {
          "title": "Study Tips",
          "text": "Give me some study tips for [Subject Name]",
          "response": "I can definitely help with that! What subject are you studying? Tell me more about it."
        },
        {
          "title": "Practice Problems",
          "text": "Can you give me some practice problems for [Topic Name]?",
          "response": "Of course! Let's get some practice in.  What topic are you working on?" 
        },
        {
          "title": "Concept Check",
          "text": "Check my understanding of [Concept Name]",
          "response": "I'm here to help!  Explain what you understand about [Concept Name], and I'll see if we can clarify anything." 
        },
        {
          "title": "Learning Resources",
          "text": "Recommend some learning resources for [Subject Name]",
          "response": "I'm happy to suggest some resources. What subject are you looking for help with?"
        },
        {
          "title": "Test Prep",
          "text": "Help me prepare for my [Test Name] test",
          "response": "Let's get you ready! What kind of test are you preparing for?  Tell me more."
        },
        {
          "title": "Time Management",
          "text": "How can I manage my time effectively for studying?",
          "response": "Time management is key!  Let's talk about strategies that work for you. Tell me more about your study schedule and goals."
        },
        {
          "title": "Learning Styles",
          "text": "What is my learning style?",
          "response": "I can help you figure that out! Tell me more about how you learn best, and we can explore your learning style together." 
        },
        {
          "title": "Motivation Boost",
          "text": "I'm feeling unmotivated to study. Help!",
          "response": "We've all been there! Let's brainstorm some ways to get you back on track. What are your goals? What makes studying feel tough?"
        },
        {
          "title": "Break Down a Problem",
          "text": "Help me break down this problem: [Problem Statement]",
          "response": "Let's work through it together!  Tell me more about the problem, and we can approach it step by step."
        },
        {
          "title": "Explain a Concept",
          "text": "Explain [Concept Name] in a different way",
          "response": "I'd be happy to! What concept are you thinking of? Tell me more, and we'll try different approaches."
        },
        {
          "title": "Connect the Dots",
          "text": "How does [Concept A] relate to [Concept B]?",
          "response": "Let's explore the connections!  Tell me more about the concepts, and we can see how they fit together."
        },
        {
          "title": "Real-World Application",
          "text": "How is [Concept Name] used in the real world?",
          "response": "That's a great question!  Let's see if we can find some examples of how [Concept Name] is applied in real life."
        },
        {
          "title": "Critical Thinking",
          "text": "Help me think critically about [Topic Name]",
          "response": "Let's dive deeper! What topic are you thinking about?  Tell me more, and we can explore different perspectives."
        },
        {
          "title": "Problem-Solving",
          "text": "Help me solve this problem: [Problem Statement]",
          "response": "Let's tackle it!  Tell me more about the problem, and we can explore different approaches to find a solution."
        },
        {
          "title": "Research Assistance",
          "text": "Can you help me find information about [Topic Name]?",
          "response": "I can definitely point you in the right direction!  Tell me more about what you're looking for, and I'll try to find some resources for you."
        },
        {
          "title": "Summarize a Text",
          "text": "Summarize this text for me: [Text]",
          "response": "Let's get to the main points!  Paste the text you'd like me to summarize, and I'll do my best to break it down for you."
        },
        {
          "title": "Generate Questions",
          "text": "Generate some study questions for [Topic Name]",
          "response": "Great idea!  What topic are you working on?  I'll try to come up with some thought-provoking questions to test your understanding."
        },
        {
          "title": "Explain in Your Own Words",
          "text": "Explain [Concept Name] in your own words",
          "response": "I'd love to!  What concept are you asking about?  Let me know, and I'll do my best to explain it in a way that makes sense to you."
        }
      ]
       },
    // Add more bots as needed
    { name: 'Health Box', responses: [
        {
        "title": "Explain a Concept",
        "text": "Can you explain [Concept Name] in a way I can understand?",
        "response": "I'd be happy to! Tell me about the concept you'd like help with, and I'll do my best to break it down."
        },
        {
        "title": "Study Tips",
        "text": "Give me some study tips for [Subject Name]",
        "response": "I can definitely help with that! What subject are you studying? Tell me more about it."
        },
        {
        "title": "Practice Problems",
        "text": "Can you give me some practice problems for [Topic Name]?",
        "response": "Of course! Let's get some practice in. What topic are you working on?"
        },
        {
        "title": "Concept Check",
        "text": "Check my understanding of [Concept Name]",
        "response": "I'm here to help! Explain what you understand about [Concept Name], and I'll see if we can clarify anything."
        },
        {
        "title": "Learning Resources",
        "text": "Recommend some learning resources for [Subject Name]",
        "response": "I'm happy to suggest some resources. What subject are you looking for help with?"
        },
        {
        "title": "Test Prep",
        "text": "Help me prepare for my [Test Name] test",
        "response": "Let's get you ready! What kind of test are you preparing for? Tell me more."
        },
        {
        "title": "Time Management",
        "text": "How can I manage my time effectively for studying?",
        "response": "Time management is key! Let's talk about strategies that work for you. Tell me more about your study schedule and goals."
        },
        {
        "title": "Learning Styles",
        "text": "What is my learning style?",
        "response": "I can help you figure that out! Tell me more about how you learn best, and we can explore your learning style together."
        },
        {
        "title": "Motivation Boost",
        "text": "I'm feeling unmotivated to study. Help!",
        "response": "We've all been there! Let's brainstorm some ways to get you back on track. What are your goals? What makes studying feel tough?"
        },
        {
        "title": "Break Down a Problem",
        "text": "Help me break down this problem: [Problem Statement]",
        "response": "Let's work through it together! Tell me more about the problem, and we can approach it step by step."
        },
        {
        "title": "Explain a Concept",
        "text": "Explain [Concept Name] in a different way",
        "response": "I'd be happy to! What concept are you thinking of? Tell me more, and we'll try different approaches."
        },
        {
        "title": "Connect the Dots",
        "text": "How does [Concept A] relate to [Concept B]?",
        "response": "Let's explore the connections! Tell me more about the concepts, and we can see how they fit together."
        },
        {
        "title": "Real-World Application",
        "text": "How is [Concept Name] used in the real world?",
        "response": "That's a great question! Let's see if we can find some examples of how [Concept Name] is applied in real life."
        },
        {
        "title": "Critical Thinking",
        "text": "Help me think critically about [Topic Name]",
        "response": "Let's dive deeper! What topic are you thinking about? Tell me more, and we can explore different perspectives."
        },
        {
        "title": "Problem-Solving",
        "text": "Help me solve this problem: [Problem Statement]",
        "response": "Let's tackle it! Tell me more about the problem, and we can explore different approaches to find a solution."
        },
        {
        "title": "Research Assistance",
        "text": "Can you help me find information about [Topic Name]?",
        "response": "I can definitely point you in the right direction! Tell me more about what you're looking for, and I'll try to find some resources for you."
        },
        {
        "title": "Summarize a Text",
        "text": "Summarize this text for me: [Text]",
        "response": "Let's get to the main points! Paste the text you'd like me to summarize, and I'll do my best to break it down for you."
        },
        {
        "title": "Generate Questions",
        "text": "Generate some study questions for [Topic Name]",
        "response": "Great idea! What topic are you working on? I'll try to come up with some thought-provoking questions to test your understanding."
        },
        {
        "title": "Explain in Your Own Words",
        "text": "Explain [Concept Name] in your own words",
        "response": "I'd love to! What concept are you asking about? Let me know, and I'll do my best to explain it in a way that makes sense to you."
        }
        ]
        },
    { name: 'Career Box', responses: [
        {
          "title": "Career Exploration",
          "text": "Help me explore different career paths",
          "response": "I'm here to help! What are your interests, skills, and values? Let's explore some career options that align with you."
        },
        {
          "title": "Skills Assessment",
          "text": "Assess my skills and identify areas for improvement",
          "response": "Great idea! Tell me about your skills and experience. We can then look at which areas could be strengthened to boost your career prospects."
        },
        {
          "title": "Job Market Research",
          "text": "Tell me about the job market for [Career Field]",
          "response": "Let's investigate! Tell me more about the career field you're interested in. We can explore industry trends, job outlook, and potential salary ranges."
        },
        {
          "title": "Career Advice",
          "text": "Give me some career advice",
          "response": "I'm happy to share some insights. What kind of advice are you looking for? Are you thinking about changing careers, advancing in your current field, or starting your own business?"
        },
        {
          "title": "Networking Tips",
          "text": "How can I build a strong professional network?",
          "response": "Networking is essential! Let's discuss some effective strategies. Are you looking to connect with people in your field, expand your professional circle, or build relationships for potential job opportunities?"
        },
        {
          "title": "Resume and Cover Letter Review",
          "text": "Review my resume and cover letter",
          "response": "I'd be happy to take a look! Please share your resume and cover letter with me. We can work on making them more impactful."
        },
        {
          "title": "Interview Preparation",
          "text": "Help me prepare for a job interview",
          "response": "I can definitely assist! What kind of interview is it? Tell me about the company and the position, and we can brainstorm some strategies."
        },
        {
          "title": "Salary Negotiation",
          "text": "Give me tips for salary negotiation",
          "response": "Negotiating your salary can be tricky. Tell me more about the job offer and your research on salary ranges in the industry. We can discuss strategies for effectively advocating for your value."
        },
        {
          "title": "Career Path Planning",
          "text": "Help me create a career plan",
          "response": "Great idea! What are your long-term career goals?  Let's map out a plan that includes short-term milestones, education or training opportunities, and potential career transitions."
        },
        {
          "title": "Entrepreneurship Advice",
          "text": "I'm thinking about starting my own business. What should I know?",
          "response": "Starting your own business is exciting! Let's explore the key aspects of entrepreneurship, including business plan development, funding options, and legal considerations."
        },
        {
          "title": "Industry Trends",
          "text": "What are the latest trends in [Industry Name]?",
          "response": "I can share some insights!  Tell me more about the industry you're interested in. We can discuss emerging technologies, changing demands, and potential career opportunities."
        },
        {
          "title": "Skill Development",
          "text": "Recommend courses or resources to develop my skills",
          "response": "I'm happy to suggest some options! What skills are you hoping to develop? Tell me about your learning preferences (online courses, books, workshops, etc.)."
        },
        {
          "title": "Work-Life Balance",
          "text": "How can I achieve a better work-life balance?",
          "response": "Finding a balance is important! Tell me more about your current work and personal life. We can explore strategies for setting boundaries, prioritizing tasks, and making time for what matters most."
        },
        {
          "title": "Job Search Strategies",
          "text": "Help me with my job search",
          "response": "I can help you streamline your search! What kind of jobs are you looking for? Tell me about your target companies and industries. We can discuss effective job searching techniques and online resources."
        },
        {
          "title": "Career Growth",
          "text": "How can I advance my career?",
          "response": "Let's explore some options! What are your career goals?  Are you looking to move into a leadership role, gain new skills, or explore different industries? We can discuss potential paths for growth."
        }
      ]
      },
      { name: 'Cooking Box', responses: [
        {
          "title": "Recipe Search",
          "text": "Find me a recipe for [Dish Name]",
          "response": "I'd be happy to! Tell me more about what you're looking for. Do you have any dietary restrictions or preferences?  What kind of cuisine are you in the mood for?"
        },
        {
          "title": "Ingredient Inspiration",
          "text": "I have [Ingredients List]. What can I make?",
          "response": "Let's get creative! Tell me about the ingredients you have on hand. I'll try to come up with some delicious recipe ideas."
        },
        {
          "title": "Cooking Tips",
          "text": "Give me some tips for cooking [Dish Name]",
          "response": "I'm here to help!  What dish are you planning to make? Tell me more about it, and I'll offer some tips and tricks to make it a success."
        },
        {
          "title": "Cooking Techniques",
          "text": "Explain [Cooking Technique]",
          "response": "Let's break it down! What cooking technique are you curious about? I'll do my best to explain it in detail, step by step."
        },
        {
          "title": "Dietary Modifications",
          "text": "How can I make this recipe [Dietary Restriction]? ",
          "response": "I can definitely help with that! What recipe are you thinking of, and what dietary restrictions do you need to consider?  We can explore some modifications together."
        },
        {
          "title": "Recipe Conversion",
          "text": "Convert this recipe to serve [Number] people",
          "response": "Let's adjust the portions! Share the recipe with me, and I'll help you scale it for the number of servings you need."
        },
        {
          "title": "Kitchen Tools",
          "text": "What tools do I need for [Recipe Name]?",
          "response": "I'm happy to provide a kitchen toolkit! What recipe are you looking at? I'll list the essential tools you'll need for a successful cooking experience."
        },
        {
          "title": "Cooking Substitutions",
          "text": "Can I substitute [Ingredient] with something else?",
          "response": "I'm here to help you get creative! Tell me what you'd like to substitute, and I'll offer some suitable alternatives based on the recipe and your preferences."
        },
        {
          "title": "Cooking Time Management",
          "text": "Help me plan a meal prep schedule",
          "response": "Let's create a cooking roadmap! Tell me about the dishes you want to prepare, and we can work on a schedule that makes meal prep efficient and enjoyable."
        },
        {
          "title": "Food Safety",
          "text": "Give me some food safety tips",
          "response": "Food safety is crucial! What are you preparing?  I'll share some essential tips to ensure your food is safe and delicious."
        },
        {
          "title": "Cuisine Exploration",
          "text": "Tell me about [Cuisine Name]",
          "response": "Let's embark on a culinary journey! What cuisine are you interested in? I can share some information about its origins, key ingredients, and popular dishes."
        },
        {
          "title": "Food Storage Tips",
          "text": "How should I store [Food Item]?",
          "response": "Storing food properly helps preserve its freshness and flavor. Tell me about the food item you want to store, and I'll provide some guidelines."
        },
        {
          "title": "Recipe Inspiration",
          "text": "I need some new recipe ideas",
          "response": "Let's spark your culinary creativity!  What kind of dishes are you in the mood for? Tell me about your dietary restrictions, preferences, and any ingredients you have on hand."
        },
        {
          "title": "Cooking Challenges",
          "text": "Help me solve this cooking problem: [Problem]",
          "response": "Let's troubleshoot! Tell me more about the cooking challenge you're facing. We can brainstorm solutions together."
        },
        {
          "title": "Cooking Terminology",
          "text": "Explain this cooking term: [Term]",
          "response": "I'd be glad to!  What cooking term are you curious about? I'll provide a clear definition and maybe even some examples."
        }
      ]
      },
    ];

    export default bots;
