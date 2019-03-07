var gameBoard = $("#game-area")

//Trivia questions
var triviaQuestions = [{
    question: "What was the name of the sword that cut the One Ring from Sauron's hand?",
    choices: ["Glamdring", "Sting", "Narsil", "Longclaw"],
    correctAnswer: "Narsil"
}, {
    question: "Who was Frodo's gardener?",
    choices: ["Sam", "Merry", "Gandalf", "Pippin"],
    correctAnswer: "Sam"
}, {
    question: "Who did the four Hobbits meet at the Prancing Pony inn?",
    choices: ["Boromir", "Strider", "Gandalf", "Elrond"],
    correctAnswer: "Strider"
}, {
    question: "Who was the king of Rohan when Aragorn, Gimli and Legolas got to Edoras?",
    choices: ["Éomer", "Théoden", "Wormtongue", "Saruman"],
    correctAnswer: "Théoden"
}, {
    question: "Who was Boromir's younger brother?",
    choices: ["Bilbo", "Denethor", "Théodred", "Faramir"],
    correctAnswer: "Faramir"
}, {
    question: "How many rings were given to the race of Men?",
    choices: ["One", "Seven", "Nine", "Three"],
    correctAnswer: "Nine"
}, {
    question: "Who did Merry and Pippin meet in Fangorn Forest?",
    choices: ["Treebeard", "Beorn", "Tom Bombadil", "Aragog"],
    correctAnswer: "Treebeard"
}, {
    question: "Who was guiding Sam and Frodo into Mordor?",
    choices: ["Legolas", "Faramir", "Gollum", "Talion"],
    correctAnswer: "Gollum"
}, {
    question: "Who kills the leader of the Nazgûl?",
    choices: ["Arwen", "Galadriel", "Gandalf", "Éowyn"],
    correctAnswer: "Éowyn"
}, {
    question: "Who saves Sam and Frodo from Mount Doom's eruption after they destroy the One Ring?",
    choices: ["The Ents", "The Eagles", "The Elves", "Merry and Pippin"],
    correctAnswer: "The Eagles"
}];

var countdownTimer;

var triviaGame = {

    //Score tracking and timer
    rightAnswers: 0,
    wrongAnswers: 0,
    timerTime: 120,

    countdown: function () {
        triviaGame.timerTime--;
        $("#trivia-timer").html(triviaGame.timerTime);
        if (triviaGame.timerTime === 0) {
            console.log("THE QUEST IS OVER");
            triviaGame.gameEnd();
        }
    },

    start: function () {
        countdownTimer = setInterval(triviaGame.countdown, 1000);

        $("#timerDiv").prepend("<h2>Remaining Quiz Time: <span id='trivia-timer'>120</span> seconds</h2>");

        $("#gameStart").remove();

        for (var i = 0; i < triviaQuestions.length; i++) {
            gameBoard.append("<h2>" + triviaQuestions[i].question + "</h2>");
            for (var ans = 0; ans < triviaQuestions[i].choices.length; ans++); {
                gameBoard.append("<input type='radio' name='question-" + i +
                    "' value='" + triviaQuestions[i].choices[ans] + "''>" + triviaQuestions[i].choices[ans]);
            }
        }

        gameBoard.append("<button class='style' id='gameEnd'><img src='assets/images/EndQuest.png' alt='End Quest'></button>");
    },

    gameEnd: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === triviaQuestions[0].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === triviaQuestions[1].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-2'] checked"), function () {
            if ($(this).val() === triviaQuestions[2].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-3'] checked"), function () {
            if ($(this).val() === triviaQuestions[3].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-4'] checked"), function () {
            if ($(this).val() === triviaQuestions[4].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-5'] checked"), function () {
            if ($(this).val() === triviaQuestions[5].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-6'] checked"), function () {
            if ($(this).val() === triviaQuestions[6].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-7'] checked"), function () {
            if ($(this).val() === triviaQuestions[7].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        }); 

        $.each($("input[name='question-8'] checked"), function () {
            if ($(this).val() === triviaQuestions[8].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-9'] checked"), function () {
            if ($(this).val() === triviaQuestions[9].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        });

        $.each($("input[name='question-10'] checked"), function () {
            if ($(this).val() === triviaQuestions[10].correctAnswer) {
                triviaGame.rightAnswers++;
            } else {
                triviaGame.wrongAnswers++;
            }
        }); 

        this.endResult();

    },

    endResult: function() {

        clearInterval(countdownTimer);

        $("#timerDiv h2").remove();

        gameBoard.html("<h2>The Quest is over!</h2>");
        gameBoard.append("<h3> Correct Answers: " + this.rightAnswers + "</h3>");
        gameBoard.append("<h3> Wrong Answers: " + this.wrongAnswers + "</h3>");
        gameBoard.append("<h3>Unanswered: " + (triviaQuestions.length - (this.wrongAnswers + this.rightAnswers)) + "</h3>");
    }
};

// GAME START AND FINISH CLICK EVENTS

$(document).on("click", "#gameStart", function () {
    triviaGame.start();
});

$(document).on("click", "#gameEnd", function () {
    triviaGame.gameEnd();
});


