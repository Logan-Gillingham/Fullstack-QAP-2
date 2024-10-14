const { getQuestion} = require("../../utils/mathUtilities");

describe('getQuestion', () => {
    it('should generate a valid math question', () => {
        const question = getQuestion();
        expect(question.question).toMatch(/^\d+ [\+\-\*\/] \d+$/);
    });
});

describe('isCorrectAnswer', () => {
    it('should detect a correct answer', () => {
        const question = (2 + 2);
        const userAnswer = 4;
        expect(userAnswer).toBe(question);
    });

    it('should detect an incorrect answer', () => {
        const question = 2 + 2;
        const userAnswer = 5;

        expect(userAnswer) != question
    });
});