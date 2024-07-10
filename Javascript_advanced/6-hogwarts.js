class studentHogwarts {
  // Private fields
  #privateScore = 0;

  // Public field
  name = null;

  // Private method
  #changeScoreby(points) {
    this.#privateScore += points;
  }

  // Set name
  setName(newName) {
    this.#name = newName;
  }

  // Reward students
  rewardStudent() {
    this.#changeScoreby(1);
  }

  // Penalize Students
  penalizeStudent() {
    this.#changeScoreby(-1);
  }

  // get Score
  getScore() {
    return `${this.#name}: ${this.#privateScore}`;
  }
}

// Harry
const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// Draco
const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.rewardStudent();
draco.rewardStudent();
draco.rewardStudent();
console.log(draco.getScore());