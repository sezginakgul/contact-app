import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "./components/form/Form";
import TableComponent from "./components/table/Table";
import { AddUser, UpdateUser } from "./utils/firebase";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);
  const [isAdd, setIsAdd] = useState("ADD");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    setInfo(initialValues);
    setIsAdd("ADD");
  };
  // console.log("info", info);

  const editUser = (id, username, phoneNumber, gender) => {
    setIsAdd("UPDATE");
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <Container fluid>
      <Row className="vh-100 ">
        <Col
          lg={6}
          className="d-flex flex-column align-items-center justify-content-center mt-4"
        >
          <FormComponent
            info={info}
            setInfo={setInfo}
            handleSubmit={handleSubmit}
            isAdd={isAdd}
          />
        </Col>
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center mt-4"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <TableComponent editUser={editUser} />
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
}

export default App;
