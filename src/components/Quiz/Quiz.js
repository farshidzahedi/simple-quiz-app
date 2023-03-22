import React from "react";
import "./Quiz.css";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          questionText: "فریم ورک ری اکت در چه سالی منتشر شد",
          answerOptions: [
            { answerText: "2023", isCorrect: false },
            { answerText: "2020", isCorrect: false },
            { answerText: "2011", isCorrect: true },
            { answerText: "2010", isCorrect: false },
          ],
        },
        {
          questionText: "اولیک بار React در کدام شرکت مورد استفاده قرار گرفت",
          answerOptions: [
            { answerText: "گوگل", isCorrect: false },
            { answerText: "فیس بوک", isCorrect: true },
            { answerText: "اینستاگرام", isCorrect: false },
            { answerText: "توئیتر", isCorrect: false },
          ],
        },
        {
          questionText: "برای یادگیری React بهتر است به چه زبان هایی مسلط باشیم",
          answerOptions: [
            { answerText: "JS / ES6", isCorrect: true },
            { answerText: "PHP", isCorrect: false },
            { answerText: "jQuery", isCorrect: false },
            { answerText: "CSS", isCorrect: false },
          ],
        },
        {
          questionText: "در ری اکت از چه syntax  استفاده می شود",
          answerOptions: [
            { answerText: "CSS", isCorrect: false },
            { answerText: "XML", isCorrect: false },
            { answerText: "JS", isCorrect: false },
            { answerText: "JSX ", isCorrect: true },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  clickHandler(isCorrect) {
    if (isCorrect) {
      this.setState((preveState) => {
        return { score: preveState.score + 1 };
      });
    }
    if (this.state.currentQuestion+1 === this.state.questions.length) {
      this.setState({ showScore: true });
    } else {
      this.setState((preveState) => {
        return { currentQuestion: preveState.currentQuestion + 1 };
      });
    }
  }

  render() {
    return (
      <div className="app">
        {/* next div is for showing user score */}
        {this.state.showScore ? (
          <div className="score-section">
            تعداد پاسخ صحیح شما {this.state.score} از  {this.state.questions.length} می باشد
          </div> 
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>سوالات {this.state.currentQuestion + 1}</span>/ 
                {this.state.questions.length}
              </div>
              <div className="question-text">
                {this.state.questions[this.state.currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {this.state.questions[
                this.state.currentQuestion
              ].answerOptions.map((answer) => (
                <button
                  onClick={this.clickHandler.bind(this, answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
