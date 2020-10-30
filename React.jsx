// React: Render State in the User Interface Another Way

// There is another way to access state in a component. In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
      const name=this.state.name
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{name}</h1>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  