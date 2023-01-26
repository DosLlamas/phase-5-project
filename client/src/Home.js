import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table} from "semantic-ui-react";
import { format } from "date-fns";
import Calendar from "./Calendar";

const Home = ({ currentUser, setCurrentUser }) => {
  const [showDetails, setShowDetails] = useState(true);
  const todaysDate = format(new Date(), "ccc dd MMM yy");
  const [data, setData] = useState(todaysDate);
  // const { compare } = Int.Collator('en-US');

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };
  console.log(currentUser)
  return (
    <div className="Home">
      <Calendar showDetailsHandle={showDetailsHandle} data={data} />
      <div className="add-delete">
        <div className="plus-minus-btn">＋</div>
        <div className="plus-minus-btn">−</div>
      </div>

      <Container>
        <Table celled selectable collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="table-text-size">Medication</Table.HeaderCell>
              <Table.HeaderCell className="table-text-size">Schedule</Table.HeaderCell>
              <Table.HeaderCell className="table-text-size">Notifications</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* An array here to list out all info */}
        </Table>
      </Container>
    </div>
  );
};

export default Home;
