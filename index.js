// Function to display welcome message with today's date
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Function to display a workout routine
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    if (workoutInput) {
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
    } else {
        alert('Please enter a workout!');
    }
};

// Event listener for submitting a workout routine
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);


// Function to add a new goal
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    if(goalInput){
    const goalList = document.querySelector('#goalList');
    
    const existingGoals = Array.from(goalList.children).map((li) =>
    li.textContent.trim()
  );
  if (existingGoals.includes(goalInput)) {
   
    alert("This goal already exists in the list!");
  } else {
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
    document.querySelector("#goalInput").value = "";
    }
  } else {
  
    alert("Please enter a goal");
  }
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

// Event listeners for increasing and decreasing water intake
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Function to toggle between light and dark themes
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Function to handle submission of meal plan form
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};
// Event listener for meal plan form submission
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
