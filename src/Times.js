class Times {
    getTimes(time) {
        if (!time) {
            return null;
        }

        let times = [];
        let keys = Object.keys(time);
        let values = Object.values(time);

        for (let i = 0; i < Object.entries(time).length; i++) {
            let timeslot = keys[i] + ": " + values[i];

            times.push(
                <li className="Timeslot">{timeslot}</li>
            );
        }

        return times;
    }

    getTimesDefault(time) {
        if (!time) {
            return null;
        }

        let times = [];
        let keys = Object.keys(time);
        let values = Object.values(time);

        for (let i = 0; i < Object.entries(time).length; i++) {
            let timeslot = keys[i] + ": " + values[i];

            times.push(
                <div className="Timeslot">{timeslot}</div>
            );
        }

        return times;
    }
}

export default Times;