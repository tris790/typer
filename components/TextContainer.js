import React, { Component } from "react";
import Statistics from "./Statistics";
import TypingZone from "./TypingZone";

export default class TextContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            allWords: props.randomArticle.match(/\S+\s*/g),
            successWords: [],
            errors: [],
            currentIndex: 0,
            rightSpelling: true
        };
    }

    onTyping(e) {
        console.log("type");
        const currentIndex = this.state.currentIndex;
        const currentWord = this.state.allWords[currentIndex];
        const text = e.target.value;
        if (text === currentWord) {
            this.onSuccessWord();
        } else {
            this.setState({
                text,
                rigthSpelling: currentWord.indexOf(this.state.text) === 0
            });
        }
    }

    onSuccessWord() {
        const updatedSuccess = [...this.state.successWords];
        const currentIndex = this.state.currentIndex;
        const currentWord = this.state.allWords[currentIndex];
        updatedSuccess.push(currentWord);

        this.setState({
            text: "",
            currentIndex: currentIndex + 1,
            successWords: updatedSuccess
        });
    }

    render() {
        const currentIndex = this.state.currentIndex;
        const currentWord = this.state.allWords[currentIndex];
        const rightSpelling = this.state.rigthSpelling;
        const beforeWord = this.state.allWords.slice(0, currentIndex);
        const afterWord = this.state.allWords.slice(currentIndex + 1);

        return (
            <div className="content">
                <p style={{ overflowY: "scroll", maxHeight: 400 }}>
                    <span>{beforeWord}</span>
                    <span style={{ color: rightSpelling ? "cyan" : "red" }}>
                        <b>{currentWord}</b>
                    </span>
                    <span>{afterWord}</span>
                </p>

                <TypingZone
                    onTyping={this.onTyping.bind(this)}
                    text={this.state.text}
                />
                <Statistics
                    words={this.state.successWords}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}
