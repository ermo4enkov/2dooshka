import * as React from "react";
import  Introduction from "../../blocks/introduction";

export class TodayView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = {
            "user": {
                "name": "Roma"
            },
            "tasks": {
                "everyday_Tasks": [
                    "30 pages",
                    "sport",
                    "hexlet",
                    "english"
                ],
                "today_Tasks": ["wash plates", "clean room"],
            },
            "grades": [
                { "date": { "$date": 11122018 }, "tasks": 5, "score": 2 },
                { "date": { "$date": 12122018 }, "tasks": 5, "score": 4 },
                { "date": { "$date": 13122018 }, "tasks": 5, "score": 5 }
            ]
        };
        return(
            <div className="conteiner">
                <h1 className="title">Сегодня</h1>
                <Introduction data={data}/>
            </div>
        );
    }
}

export default TodayView;