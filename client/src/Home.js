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

  // useEffect(() => {
  //   fetch("/search_prescription").then((res) => {
  //     if (res.ok) {
  //       res.json().then((data) => {
  //         setPatientMedData(data);
  //         setEndResultArray(data);
  //       });
  //     }
  //   });
  // }, []);


  return (
    <div className="Home">
      <Calendar showDetailsHandle={showDetailsHandle} data={data} />
      <Container>
        <Table celled selectable collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Medication</Table.HeaderCell>
              <Table.HeaderCell>Schedule</Table.HeaderCell>
              <Table.HeaderCell>Notifications</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* An array here to list out all info */}
        </Table>
      </Container>
    </div>
  );
};

export default Home;
