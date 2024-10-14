/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {} The randomly generated math question
 */
const questions = [];
function getQuestion() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let question;
    let answer;

    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return getQuestion();
            }
            if (num2 > num1) {
                return getQuestion();
}
            question = `${num1} / ${num2}`;
            answer = num1 / num2;
            break;
    }

    questions.push({ question, answer });
    return { question };
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(userAnswer) {
    const [currentQuestion] = questions.slice(-1);
    if (!currentQuestion) return false;
    return currentQuestion.answer === parseFloat(userAnswer);
}

module.exports = {
    getQuestion,
    isCorrectAnswer
}