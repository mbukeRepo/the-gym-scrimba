# What is Quizzical

This is the final solo project of the _Scrimba Frontend Career Path_ Course.

I used all my knowledge of HTML, CSS, JavaScript, and React to create this quiz app.

## Features of the quiz app

- Home page/quiz page
- Quiz has questions and any question with answers, any answer you press on is saved as your answer.
- When you finish the quiz, you get a score and you see which questions you answered correctly, and if you answered incorrectly the correct answer is displayed. Also the "check answers" button switches to the "play again" button, so you can start a new quiz.

## How I Created The App

- I used useEffect() hook, to put API data into state and deal with side effects
- I used useState() hook, to updating state objects with nested arrays of objects
- I used conditional rendering to conditionally display the homepage/quiz page and also for buttons
- I used _Nanoid_ dependency to have a unique id to keep track of all questions and answers.
- I used _He_ dependency to decode html entities into readable text. This was necessary because the API data for the questions
  and answers had html entities. Ex. NOT DECODED: Where would you find the &quot;Spanish Steps&quot;? DECODED: Where would you find the "Spanish Steps"
- I created a pixel perfect design from the mock up I received in a Figma file. I also made sure the design was responsive for any screen size.

## What I learned

- I strengthened my fundamental React knowledge with this project.
