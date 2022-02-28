import {Component} from "react";

class Calendar extends Component {

    // Attributes
    rows = [{name: "Midi", id: "A"}];
    startDate = Date.today()
    days = Date.today()
    scale = "Day"
    timeHeaders = [{ groupBy: "Month"},{ groupBy: "Day", format: "d"}]

    // Rendering
    render() {
        return (
            <div></div>
        );
    }
}

export default Calendar;
