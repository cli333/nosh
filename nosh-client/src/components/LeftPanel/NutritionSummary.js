import React, { Component } from "react";
import {
  Header,
  Table,
  List,
  Divider,
  Grid,
  GridColumn
} from "semantic-ui-react";

class NutritionSummary extends Component {
  render() {
    const {
      calories,
      carbs,
      protein,
      fat,
      fiber,
      sugars,
      cholesterol,
      sodium,
      vegan,
      vegetarian,
      dairyFree,
      free,
      lowSugar,
      fatFree,
      glutenFree
    } = this.props;

    return (
      <div>
        <Header as="h1">Nutrition Facts</Header>
        <Table basic="very" celled collapsing>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Calories</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{calories || 0}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Carbs</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{carbs || 0}g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Protein</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{protein || 0}g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Fat</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{fat || 0}g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Fiber</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{fiber || 0}g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Sugars</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{sugars || 0}g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Cholesterol</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{cholesterol || 0}g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>Sodium</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{sodium || 0}g</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Header as="h1">Health Labels</Header>
        <Grid>
          <GridColumn width={7}>
            <List bulleted>
              <List.Item
                style={{ textDecoration: `${!vegan ? "line-through" : ""}` }}
              >
                Vegan
              </List.Item>
              <List.Item
                style={{
                  textDecoration: `${!vegetarian ? "line-through" : ""}`
                }}
              >
                Vegetarian
              </List.Item>
              <List.Item
                style={{
                  textDecoration: `${!dairyFree ? "line-through" : ""}`
                }}
              >
                Dairy-free
              </List.Item>
              <List.Item
                style={{ textDecoration: `${!lowSugar ? "line-through" : ""}` }}
              >
                Low-Sugar
              </List.Item>
              <List.Item
                style={{ textDecoration: `${!fatFree ? "line-through" : ""}` }}
              >
                Fat-Free
              </List.Item>
              <List.Item
                style={{
                  textDecoration: `${!glutenFree ? "line-through" : ""}`
                }}
              >
                Gluten-Free
              </List.Item>
            </List>
          </GridColumn>
          <GridColumn width={7}>
            <List bulleted>
              <List.Item
                style={{ textDecoration: `${!vegan ? "line-through" : ""}` }}
              >
                Vegan
              </List.Item>
              <List.Item
                style={{
                  textDecoration: `${!vegetarian ? "line-through" : ""}`
                }}
              >
                Vegetarian
              </List.Item>
              <List.Item
                style={{
                  textDecoration: `${!dairyFree ? "line-through" : ""}`
                }}
              >
                Dairy-free
              </List.Item>
              <List.Item
                style={{ textDecoration: `${!lowSugar ? "line-through" : ""}` }}
              >
                Low-Sugar
              </List.Item>
              <List.Item
                style={{ textDecoration: `${!fatFree ? "line-through" : ""}` }}
              >
                Fat-Free
              </List.Item>
              <List.Item
                style={{
                  textDecoration: `${!glutenFree ? "line-through" : ""}`
                }}
              >
                Gluten-Free
              </List.Item>
            </List>
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default NutritionSummary;
