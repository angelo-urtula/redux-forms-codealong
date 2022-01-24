import React, { Component } from 'react';

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <input type="text" placeholder="add todo" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateTodo;
