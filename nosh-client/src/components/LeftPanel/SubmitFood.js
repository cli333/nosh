import React, { Component } from "react";
import { Form, FormField, Button } from "semantic-ui-react";

class SubmitFood extends Component {
  render() {
    return (
      <Form>
        <FormField>
          <label>
            <strong>Enter an ingredient and a quantity</strong>
          </label>
          <input placeholder="e.g. 1 large apple" />
        </FormField>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SubmitFood;
