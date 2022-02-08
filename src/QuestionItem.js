class QuestionsItem {
    /**
     * @param quesions shows the value of the question.
     * @param answer  defines answer either being true or false.
     */
    constructor(question, answer) {
        this.question = question;
        this.answer = answer
    }

    setText() {
        return this.question;
    }

    checkAnswer() {
        return this.answer;
    }
};






