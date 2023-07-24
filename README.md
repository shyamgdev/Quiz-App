# Quiz App

This project is a simple web-based quiz application that allows users to answer trivia questions and check their knowledge. It fetches random questions from the Trivia Quiz API and presents them to the user for answering. The user can select an option and then check whether their answer is correct or not. The application keeps track of the number of questions asked, the total score, and the top score achieved.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Used](#api-used)
- [Dependencies](#dependencies)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can try out the live demo of the Quiz App by visiting [this link](https://shyamgdev.github.io/Quiz-App/).

## Features

- Randomly fetches trivia questions from the Trivia Quiz API.
- Allows users to select an option from the provided choices.
- Verifies the selected answer and displays whether it is correct or not.
- Keeps track of the number of questions asked and the total score.
- Displays the top score achieved during the session.
- Allows users to play again to start a new quiz session.

## Getting Started

To get a local copy of the project up and running on your machine, follow these steps:

1. Clone the repository using `git clone`:

```bash
git clone https://github.com/shyamgdev/Quiz-App.git
```

2. Open the `index.html` file in your web browser to view the Quiz App.

## API Used

The Quiz App fetches trivia questions from the [Trivia Quiz API](https://opentdb.com/api.php?amount=1). It retrieves a single random question for each quiz session.

## Dependencies

The Quiz App uses the following external libraries and resources:

- [Font Awesome](https://fontawesome.com/) - For icons.
- [Trivias API](https://opentdb.com/api.php?amount=1) - To fetch trivia questions.

## How to Use

1. When you open the Quiz App, you will see the question and options displayed.
2. Click on the option you think is the correct answer.
3. After selecting an option, click the "Check Answer" button.
4. The application will inform you whether your answer is correct or not.
5. The score will be updated based on your correct answers.
6. Continue answering questions until you complete the quiz.
7. Once you finish the quiz, the final score will be displayed.
8. To play again, click the "Play Again" button.

## Contributing

If you find any issues or have suggestions for improvements, feel free to create a pull request or raise an issue in the [GitHub repository](https://github.com/shyamgdev/Quiz-App). Your contributions are welcome!

## License

The Quiz App is released under the [MIT License](LICENSE).

---
**Note:** This README provides an overview of the Quiz App and how to use it. For more detailed code explanations and comments, please refer to the individual code files (index.html, style.css, app.js) in the GitHub repository.
