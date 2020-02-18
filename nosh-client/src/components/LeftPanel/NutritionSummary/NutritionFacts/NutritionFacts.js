import React, { useContext } from "react";
import { Header, Table, Card } from "semantic-ui-react";
import NutritionFactsItem from "./NutritionFactsItem";
import { nutritionContext } from "../../../../context/NutritionProvider";

const NutritionFacts = () => {
  const {
    nutritionObject: {
      calories,
      totalNutrients: { CHOCDF, PROCNT, FAT, FE, NA, CA, FIBTG }
    }
  } = useContext(nutritionContext);

  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>Nutrition Facts</Card.Header>
          <Table basic="very" celled collapsing>
            <Table.Body>
              <Table.Cell>
                <Header as="h5" image>
                  <Header.Content>Calories</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{calories || 0}</Table.Cell>
              <NutritionFactsItem
                item="Carbs"
                unit={CHOCDF && CHOCDF.unit}
                quantity={(CHOCDF && CHOCDF.quantity) || null}
              />
              <NutritionFactsItem
                item="Protein"
                unit={PROCNT && PROCNT.unit}
                quantity={(PROCNT && PROCNT.quantity) || null}
              />
              <NutritionFactsItem
                item="Fat"
                unit={FAT && FAT.unit}
                quantity={(FAT && FAT.quantity) || null}
              />
              <NutritionFactsItem
                item="Iron"
                unit={FE && FE.unit}
                quantity={(FE && FE.quantity) || null}
              />
              <NutritionFactsItem
                item="Sodium"
                unit={NA && NA.unit}
                quantity={(NA && NA.quantity) || null}
              />
              <NutritionFactsItem
                item="Calcium"
                unit={CA && CA.unit}
                quantity={(CA && CA.quantity) || null}
              />
              <NutritionFactsItem
                item="Fiber"
                unit={FIBTG && FIBTG.unit}
                quantity={(FIBTG && FIBTG.quantity) || null}
              />
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default NutritionFacts;
