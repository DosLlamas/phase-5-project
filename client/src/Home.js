import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table } from "semantic-ui-react";
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
  console.log(currentUser);
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
              <Table.HeaderCell className="table-text-size">
                Medication
              </Table.HeaderCell>
              <Table.HeaderCell className="table-text-size">
                Schedule
              </Table.HeaderCell>
              <Table.HeaderCell className="table-text-size">
                Notifications
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* An array here to list out all info */}
          <Table.Row>
              <Table.HeaderCell>
                Tylenol 500mg
              </Table.HeaderCell>
              <Table.HeaderCell >
              9 am
              </Table.HeaderCell>
              <Table.HeaderCell >
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
              Xanax 0.25mg
              </Table.HeaderCell>
              <Table.HeaderCell >
               1 pm
              </Table.HeaderCell>
              <Table.HeaderCell >
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
              </Table.HeaderCell>
            </Table.Row>  <Table.Row>
              <Table.HeaderCell>
                Tylenol 500mg
              </Table.HeaderCell>
              <Table.HeaderCell >
                1:30 pm
              </Table.HeaderCell>
              <Table.HeaderCell >
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
              </Table.HeaderCell>
            </Table.Row>  <Table.Row>
              <Table.HeaderCell>
                Tylenol 500mg
              </Table.HeaderCell>
              <Table.HeaderCell >
                4 pm
              </Table.HeaderCell>
              <Table.HeaderCell >
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
              </Table.HeaderCell>
            </Table.Row>  <Table.Row>
              <Table.HeaderCell>
                Xanax 0.25mg
              </Table.HeaderCell>
              <Table.HeaderCell >
                5 pm
              </Table.HeaderCell>
              <Table.HeaderCell >
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
              </Table.HeaderCell>
            </Table.Row>  <Table.Row>
              <Table.HeaderCell>
                Xanax 0.25mg
              </Table.HeaderCell>
              <Table.HeaderCell >
                6 pm
              </Table.HeaderCell>
              <Table.HeaderCell >
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
              </Table.HeaderCell>
            </Table.Row>  <Table.Row>
              <Table.HeaderCell>
                Tylenol 500mg
              </Table.HeaderCell>
              <Table.HeaderCell >
                7 pm
              </Table.HeaderCell>
              <Table.HeaderCell >
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
              </Table.HeaderCell>
            </Table.Row>
        </Table>
      </Container>
    </div>
  );
};

export default Home;
