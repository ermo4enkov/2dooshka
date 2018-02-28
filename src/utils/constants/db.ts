export let DB = {
	"user": {
	   "name": "Roma"
	},
	"everyday_tasks": [
		"30 pages",
		"sport",
		"hexlet",
		"english", 
		"js",
		"React",
		"2dooshka"
	],
	"completed_tasks": [
		"wake up"
	],
	"today_tasks": ["wash plates", "clean room"],
	"grades": [
	   { "date": { "$date": 11122018 }, "tasks": 5, "score": 2 },
	   { "date": { "$date": 12122018 }, "tasks": 5, "score": 4 },
	   { "date": { "$date": 13122018 }, "tasks": 5, "score": 5 }
	]
};

export default DB;
