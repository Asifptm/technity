const quizData = [
  // Level 1 (Mixed Questions - Easy)
  [
    // Question 1
    {
      question: "Which is the longest river in India?",
      options: ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
      correctAnswer: "Ganges"
    },
    // Question 2
    {
      question: "First China war was fought between?",
      options: ["China and Japan", "China and Britain", "China and India", "China and Russia"],
      correctAnswer: "China and Britain"
    },
    // Question 3
    {
      question: "For the Olympics and world tournament, the dimensions of the basketball court are?",
      options: ["25m*15m", "28m*15m", "30m*20m", "22m*13m"],
      correctAnswer: "28m*15m"
    },
    // Question 4
    {
      question: "Red Cross day is celebrated on?",
      options: ["April 7", "May 8", "June 12", "July 15"],
      correctAnswer: "May 8"
    },
    // Question 5
    {
      question: "Film and TV Institute of India is located in?",
      options: ["Mumbai", "Kolkata", "Pune", "Chennai"],
      correctAnswer: "Pune"
    },
    // Question 6
    {
      question: "During World War 2, when did Germany attack France?",
      options: ["1939", "1940", "1941", "1942"],
      correctAnswer: "1940"
    },
    // Question 7
    {
      question: "What does the ozone layer restrict?",
      options: ["Infrared rays", "Ultraviolet rays", "Microwaves", "Radio waves"],
      correctAnswer: "Ultraviolet rays"
    },
    // Question 8
    {
      question: "Headquarters of UNO is situated in?",
      options: ["Geneva, Switzerland", "Paris, France", "New York, USA", "Vienna, Austria"],
      correctAnswer: "New York, USA"
    },
    // Question 9
    {
      question: "Seismometer is used to measure?",
      options: ["Temperature", "Pressure", "Humidity", "Earthquake"],
      correctAnswer: "Earthquake"
    },
    // Question 10
    {
      question: "What is the most played sport in the world?",
      options: ["Cricket", "Soccer/Football", "Basketball", "Tennis"],
      correctAnswer: "Soccer/Football"
    },
    // Question 11
    {
      question: "Who is known as the Father of computer?",
      options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"],
      correctAnswer: "Charles Babbage"
    },
    // Question 12
    {
      question: "What does SSD stand for?",
      options: ["Solid State Disk", "Super Speed Drive", "System Storage Device", "Solid State Drive"],
      correctAnswer: "Solid State Drive"
    },
    // Question 13
    {
      question: "Who is the Founder of Amazon?",
      options: ["Bill Gates", "Elon Musk", "Mark Zuckerberg", "Jeff Bezos"],
      correctAnswer: "Jeff Bezos"
    },
    // Question 14
    {
      question: "Full form of IP?",
      options: ["Internet Provider", "Internet Protocol", "Intranet Protocol", "Internal Protocol"],
      correctAnswer: "Internet Protocol"
    },
    // Question 15
    {
      question: "What is the capital city of Italy?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Rome"
    },
  ],
  // Level 2 (Mixed Questions - Medium)
  [
    // Question 1
    {
      question: "What is the purpose of a compiler in programming?",
      options: ["Translate source code to machine code", "Execute the program", "Debug the program", "Manage memory allocation"],
      correctAnswer: "Translate source code to machine code"
    },
    // Question 2
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars"
    },
    // Question 3
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci"
    },
    // Question 4
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    // Question 5
    {
      question: "What is the purpose of a function in programming?",
      options: ["Store data", "Perform a specific task", "Declare variables", "Create loops"],
      correctAnswer: "Perform a specific task"
    },
    // Question 6
    {
      question: "Who is the CEO of Apple Inc.?",
      options: ["Tim Cook", "Satya Nadella", "Mark Zuckerberg", "Elon Musk"],
      correctAnswer: "Tim Cook"
    },
    // Question 7
    {
      question: "Who is the CEO of Microsoft?",
      options: ["Tim Cook", "Satya Nadella", "Mark Zuckerberg", "Elon Musk"],
      correctAnswer: "Satya Nadella"
    },
    // Question 8
    {
      question: "Which company developed the Windows operating system?",
      options: ["Apple Inc.", "Microsoft", "Google", "Linux Foundation"],
      correctAnswer: "Microsoft"
    },
    // Question 9
    {
      question: "What is the purpose of RAM in a computer?",
      options: ["Store permanent data", "Store temporary data", "Run application software", "Manage hardware resources"],
      correctAnswer: "Store temporary data"
    },
    // Question 10
    {
      question: "Who is the founder of Facebook?",
      options: ["Bill Gates", "Mark Zuckerberg", "Jeff Bezos", "Elon Musk"],
      correctAnswer: "Mark Zuckerberg"
    },
  ],
  // Level 3 (Mixed Questions - Hard)
  [
    // Question 1
    {
      question: "What is the purpose of the command-line interface (CLI) in operating systems?",
      options: ["Provide a graphical user interface", "Run applications", "Execute commands using text", "Manage hardware resources"],
      correctAnswer: "Execute commands using text"
    },
    // Question 2
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
      correctAnswer: "Albert Einstein"
    },
    // Question 3 (New Hard GK Question)
    {
      question: "Which chemical element has the symbol 'Au'?",
      options: ["Silver", "Gold", "Platinum", "Copper"],
      correctAnswer: "Gold"
    },
    // Question 4 (Modified)
    {
      question: "Which programming language is used to build apps in iOS?",
      options: ["Java", "Swift", "Python", "C++"],
      correctAnswer: "Swift"
    },
    // Question 5
    {
      question: "What is the speed of light in a vacuum?",
      options: ["300,000 kilometers per second", "150,000 kilometers per second", "450,000 kilometers per second", "600,000 kilometers per second"],
      correctAnswer: "300,000 kilometers per second"
    },
  ]
];

// Other code remains unchanged

  
  let currentLevel = 0;
  let currentQuestion = 0;
  let timer;
  let timeLeft = 10; // Set the initial time for each question in seconds
  
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const timerContainer = document.getElementById("timer-container");
      const progressContainer = document.getElementById("progress-container");
  
    
    const currentQuizData = quizData[currentLevel][currentQuestion];
  progressContainer.querySelector("#question-number").textContent = `${currentQuestion + 1}/${quizData[currentLevel].length}`;
  
    questionContainer.textContent = currentQuizData.question;
    optionsContainer.innerHTML = "";
    
    timerContainer.textContent = `Time left: ${timeLeft} seconds`;
  
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => selectOption(index));
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function startTimer() {
    timer = setInterval(function () {
      timeLeft--;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timer-container").textContent = "Time's up!";
        playTimeUpSound();
      } else {
        document.getElementById("timer-container").textContent = `Time left: ${timeLeft} seconds`;
      }
    }, 1000);
  }
  
  function playTimeUpSound() {
    const timeUpSound = document.getElementById("timeUpSound");
    timeUpSound.play();
    
     setTimeout(function () {
      timeUpSound.pause();
      timeUpSound.currentTime = 0; // Reset the playback to the beginning
    }, 2000);
    
  }
  
  
  
  function selectOption(selectedIndex) {
    clearInterval(timer); // Stop the timer
  
    const currentQuizData = quizData[currentLevel][currentQuestion];
    const selectedOption = selectedIndex !== -1 ? currentQuizData.options[selectedIndex] : null;
  
    timeLeft = 10; // Reset the timer for the next question
  }
  
  function showAnswer() {
    clearInterval(timer); // Stop the timer
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.add("disabled");
    }
    document.getElementById("timer-container").textContent = ""; // Clear the timer display
  
    const currentQuizData = quizData[currentLevel][currentQuestion];
    const resultContainer = document.getElementById("result-container");
  
    if (currentQuizData.correctAnswer) {
      resultContainer.textContent = `Correct Answer: ${currentQuizData.correctAnswer}`;
    }
  
    if (currentQuestion === quizData[currentLevel].length - 1) {
      // Last question in the level
      document.getElementById("next-level-btn").style.display = "block";
    }
  }


  
  function goToNextQuestion() {
    clearInterval(timer); // Stop the timer
    currentQuestion++;
    timeLeft = 10; // Reset the timer for the next question
  
    const resultContainer = document.getElementById("result-container");
    resultContainer.textContent = ""; // Clear the correct answer display
  
    if (currentQuestion < quizData[currentLevel].length) {
      loadQuestion();
    } else {
      // Current level completed
      showResult();
    }
  }


  
  function showResult() {
    const resultContainer = document.getElementById("result-container");
    const buttons = document.querySelectorAll("button");
  
    if (currentLevel < quizData.length - 1) {
      // If there are more levels
      resultContainer.textContent = `Level ${currentLevel + 1} completed!`;
      document.getElementById("next-level-btn").style.display = "block";
    } else {
      // If all levels are completed
      resultContainer.innerHTML = `
      <h1>Quiz completed!</h1>
        <p> Thanks for participating in this event.</p>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/customer-review-8071789-6481485.png?f=webp" alt="Event Completed Image" style="max-width: 100%;">
      `;
  
      // Hide all other elements and buttons
      document.getElementById("question-container").style.display = "none";
      document.getElementById("options-container").style.display = "none";
      document.getElementById("timer-container").style.display = "none";
      document.getElementById("progress-container").style.display = "none";
      
  
      buttons.forEach(button => {
        button.style.display = "none";
      });
    }
     // Additional check to hide the "Next Level" button after completing Level 3
  if (currentLevel === quizData.length - 1) {
    document.getElementById("next-level-btn").style.display = "none";
  }
  }
  
  function startNextLevel() {
    currentLevel++;
    currentQuestion = 0;
    document.getElementById("next-level-btn").style.display = "none";
    loadQuestion();
  }
  
  loadQuestion();
  