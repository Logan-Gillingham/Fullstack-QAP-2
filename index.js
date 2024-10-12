const express = require('express');
const app = express();
const port = 3000;

// Additional dependencies
const bodyParser = require('body-parser'); // Alternative to express.urlencoded
const { getQuestion, isCorrectAnswer } = require('./utils/mathUtilities');

// Data storage (in-memory)
let currentStreak = 0;
let questions = [];
let leaderboards = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files (e.g., CSS)

// Routes
app.get('/', (req, res) => {
    res.render('index', { currentStreak, leaderboards });
});

app.get('/quiz', (req, res) => {
    const newQuestion = getQuestion();
    res.render('quiz', newQuestion);
});

app.post('/quiz', (req, res) => {
    const { answer } = req.body;
    const isCorrect = isCorrectAnswer(answer);

    if (isCorrect) {
        currentStreak++;
    } else {
        currentStreak = 0;
    }

    const leaderboardEntry = { streak: currentStreak, date: new Date() };
    leaderboards.push(leaderboardEntry);
    leaderboards.sort((a, b) => b.streak - a.streak).slice(0, 10);

    res.render('result', { currentStreak });
});

app.get('/leaderboards', (req, res) => {
    res.render('leaderboards', { leaderboards });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
