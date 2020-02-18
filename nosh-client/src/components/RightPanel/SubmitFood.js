import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, FormField, Button, Input } from "semantic-ui-react";
import { nutritionContext } from "../../context/NutritionProvider";
import { isValidNutrition, convertQuery, toTitleCase } from "../../utils/utils";

const SubmitFood = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setNutritionObject, setCurrentQuery, resetNutritionObj } = useContext(
    nutritionContext
  );

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let response = await axios.get(
      `http://localhost:5000/${convertQuery(input)}`
    );

    let nutritionObject = response.data;
    if (isValidNutrition(nutritionObject)) {
      setCurrentQuery(toTitleCase(input));
      setNutritionObject(nutritionObject);
    } else {
      setCurrentQuery(null);
      resetNutritionObj();
      setError(true);
    }

    setLoading(false);
    setInput("");
  };

  const handleChange = e => {
    if (error) setError(false);
    setInput(e.target.value);
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <FormField>
        <label
          style={{
            color: error && "red"
          }}
        >
          <strong>Enter a valid ingredient and quantity</strong>
        </label>
        <Input
          placeholder={`${loading ? "loading..." : "e.g. 1 large apple"}`}
          value={input}
          onChange={e => handleChange(e)}
          error={error}
          loading={loading}
          disabled={loading}
        />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SubmitFood;
