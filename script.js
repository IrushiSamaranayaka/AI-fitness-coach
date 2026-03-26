function generatePlan() {
  const name = document.getElementById("name").value.trim();
  const goal = document.getElementById("goal").value;
  const level = document.getElementById("level").value;
  const days = document.getElementById("days").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const result = document.getElementById("result");

  if (name === "") {
    result.innerHTML = "<p>Please enter your name first.</p>";
    return;
  }

  let workoutPlan = "";
  let nutritionTip = "";
  let motivation = "";

  if (goal === "lose") {
    workoutPlan = `${days}-day fat-loss plan with cardio, bodyweight exercises, and light strength training.`;
    nutritionTip = "Focus on high-protein meals, drink more water, and reduce sugary foods.";
    motivation = "Small daily progress will turn into big results.";
  } else if (goal === "muscle") {
    workoutPlan = `${days}-day muscle-building plan with strength training, progressive overload, and recovery time.`;
    nutritionTip = "Increase protein intake, eat enough calories, and never skip recovery.";
    motivation = "Consistency and discipline build strength over time.";
  } else if (goal === "fit") {
    workoutPlan = `${days}-day balanced fitness plan with cardio, mobility work, and full-body training.`;
    nutritionTip = "Eat balanced meals, stay active daily, and sleep well.";
    motivation = "Fitness is not perfection. It is consistency.";
  }

  if (level === "beginner") {
    workoutPlan += " Since you are a beginner, start with simple movements and proper form.";
  } else if (level === "intermediate") {
    workoutPlan += " Since you are at an intermediate level, increase intensity and track your progress weekly.";
  } else if (level === "advanced") {
    workoutPlan += " Since you are advanced, focus on performance, recovery, and structured progression.";
  }

  let bmiText = "Not calculated";
  let bmiStatus = "";

  if (weight !== "" && height !== "") {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    if (bmi < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiStatus = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obese";
    }

    bmiText = `${bmi} (${bmiStatus})`;
  }

  result.innerHTML = `
    <h2>Hello, ${name} 👋</h2>
    <p><span class="highlight">Goal:</span> ${getGoalText(goal)}</p>
    <p><span class="highlight">Level:</span> ${getLevelText(level)}</p>
    <p><span class="highlight">Workout Days:</span> ${days} days per week</p>
    <p><span class="highlight">BMI:</span> ${bmiText}</p>
    <p><span class="highlight">Recommended Plan:</span> ${workoutPlan}</p>
    <p><span class="highlight">Nutrition Tip:</span> ${nutritionTip}</p>
    <p><span class="highlight">Motivation:</span> ${motivation}</p>
  `;
}

function getGoalText(goal) {
  if (goal === "lose") {
    return "Lose Weight";
  } else if (goal === "muscle") {
    return "Gain Muscle";
  } else {
    return "Stay Fit";
  }
}

function getLevelText(level) {
  if (level === "beginner") {
    return "Beginner";
  } else if (level === "intermediate") {
    return "Intermediate";
  } else {
    return "Advanced";
  }
}

function getGoalText(goal) {
  if (goal === "lose") {
    return "Lose Weight";
  } else if (goal === "muscle") {
    return "Gain Muscle";
  } else {
    return "Stay Fit";
  }
}

function getLevelText(level) {
  if (level === "beginner") {
    return "Beginner";
  } else if (level === "intermediate") {
    return "Intermediate";
  } else {
    return "Advanced";
  }
}
function downloadPlan() {
  const resultText = document.getElementById("result").innerText.trim();

  if (resultText === "") {
    alert("Generate a plan first before downloading.");
    return;
  }

  const blob = new Blob([resultText], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "fitness-plan.txt";
  link.click();
}