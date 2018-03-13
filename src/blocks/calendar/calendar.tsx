import * as React from 'react';

interface CalendarProps {
  days?: any;
}

export class Calendar extends React.Component<CalendarProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { days } = this.props;
    const CAL = days.map((index, i) => {
      return <li data-level={index} key={i} />;
    });

    return (
      <div className="graph">
        <ul className="months">
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
        </ul>
        <ul className="day">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="squares">{CAL}</ul>
      </div>
    );
  }
}

export default Calendar;
