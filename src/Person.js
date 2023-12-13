import React, { PureComponent } from 'react';

class Person extends React.PureComponent {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }

  // Override shouldComponentUpdate() method to avoid unnecessary re-renders
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name !== this.props.name || nextProps.age !== this.props.age) {
      // Only update if name or age props have changed
      return true;
    }
    return false;
  }
}

export default Person;
