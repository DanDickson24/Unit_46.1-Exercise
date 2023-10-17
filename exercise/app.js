const SET_MOOD = 'SET_MOOD';

function setMood(mood) {
    return {
        type: SET_MOOD,
        payload: mood,
    };
}

function moodReducer(state = '', action) {
    switch (action.type) {
        case SET_MOOD:
            return action.payload;
        default:
            return state;
    }
}

const store = Redux.createStore(moodReducer);

const happyBtn = document.getElementById('happyBtn');
const sadBtn = document.getElementById('sadBtn');
const angryBtn = document.getElementById('angryBtn');
const confusedBtn = document.getElementById('confusedBtn');
const moodDisplay = document.getElementById('moodDisplay');
const moodColors = {
    '😃 Happy': 'yellow',
    '😢 Sad': 'blue',
    '😠 Angry': 'red',
    '😕 Confused': 'gray',
};

const randomMoodBtn = document.getElementById('randomMoodBtn');

function getRandomMood() {
    const moods = Object.keys(moodColors);
    const randomIndex = Math.floor(Math.random() * moods.length);
    return moods[randomIndex];
}

randomMoodBtn.addEventListener('click', () => {
    const randomMood = getRandomMood();
    store.dispatch(setMood(randomMood));
});

function updateMoodDisplay() {
    const currentMood = store.getState();
    moodDisplay.textContent = currentMood;
    moodDisplay.style.backgroundColor = moodColors[currentMood];
}

happyBtn.addEventListener('click', () => {
    store.dispatch(setMood('😃 Happy'));
});

sadBtn.addEventListener('click', () => {
    store.dispatch(setMood('😢 Sad'));
});

angryBtn.addEventListener('click', () => {
    store.dispatch(setMood('😠 Angry'));
});

confusedBtn.addEventListener('click', () => {
    store.dispatch(setMood('😕 Confused'));
});

store.subscribe(updateMoodDisplay);

updateMoodDisplay();
