const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },

    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Workout is required",
        },
        name: {
          type: String,
          trim: true,
          required: "Name is required",
        },
        duration: {
          type: Number,
        },

        weight: {
          type: Number,
        },

        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },

        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // allows temporary property
    },
  }
);

//name your virtual property
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce(function (total, exercise) {
    return total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// * Add exercises to a previous workout plan.

//   * Add new exercises to a new workout plan.

//   * View multiple the combined weight of multiple exercises on the `stats` page.
