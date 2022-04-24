const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
	{ id: 1, name: "A", email: "a@abc.com", phone: 1 },
	{ id: 2, name: "B", email: "b@abc.com", phone: 2 },
	{ id: 3, name: "C", email: "c@abc.com", phone: 3 },
	{ id: 4, name: "D", email: "d@abc.com", phone: 4 },
	{ id: 5, name: "E", email: "e@abc.com", phone: 5 },
];

app.get("/", (req, res) => {
	res.send("Hello World! Nodemon ?");
});

app.get("/users", (req, res) => {
	if (req.query.name) {
		const search = req.query.name.toLowerCase();
		const matched = users.filter((user) => user.name.toLowerCase().includes(search));
		res.send(matched);
	} else {
		res.send(users);
	}
});

app.post("/user", (req, res) => {
	console.log("request", req.body);
	const user = req.body;
	user.id = users.length + 1;
	users.push(user);
	res.send(user);
});

app.get("/user/:id", (req, res) => {
	const id = req.params.id;
	const user = users.find((u) => u.id == id);
	res.send(user);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
