const workoutService = require ("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
    const Workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get Workout ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {
    const cratedWorkout = workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Create workout ${req.params.workoutId}`);
};

const updateOneWorkout = (req, res) => {
    const updatedOneWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
    workoutService.deletedOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};