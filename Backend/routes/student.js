const router = require("express").Router();
const Student = require("../models/student");

// http://localhost:8071/student/add
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    });

    newStudent.save()
        .then(() => {
            res.json("Student Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// http://localhost:8071/student
router.get("/", (req, res) => {
    Student.find()
        .then((students) => {
            res.json(students);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// http://localhost:8071/student/update/:id
router.route("/update/:id").put(async (req, res) => {
    const userId = req.params.id;
    const { name, age, gender } = req.body;

    const updateStudent = {
        name,
        age,
        gender
    };

    try {
        const update = await Student.findByIdAndUpdate(userId, updateStudent);
        res.status(200).json({ status: "User updated"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error with updating data", error: err.message });
    }
});

// http://localhost:8071/student/delete/:id
router.route("/delete/:id").delete(async (req, res) => {
    const userId = req.params.id;

    try {
        await Student.findByIdAndDelete(userId);
        res.status(200).json({ status: "User deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "Error with delete", error: err.message });
    }
});

// http://localhost:8071/student/get/:id
router.route("/get/:id").get(async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await Student.findById(userId);
        res.status(200).json({ status: "User fetched", user: user });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "Error with getting user", error: err.message });
    }
});

module.exports = router;
