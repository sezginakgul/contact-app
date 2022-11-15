import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import Container from "react-bootstrap/Container";

const FormComponent = ({ info, setInfo, handleSubmit, isAdd }) => {
  const handleChange = (e) => {
    e.preventDefault();
    // const name=e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    // console.log(info);
  };

  return (
    <Container
      className="d-flex flex-column align-items-center "
      style={{
        width: "90%",
      }}
    >
      <div
        className=" d-block w-75 text-center mb-4 fs-4 bg-dark text-light rounded-3"
        style={{ maxWidth: "500px" }}
      >
        ADD CONTACT
      </div>
      <Form
        className="w-75"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
          >
            <BsFillPersonFill size={20} />
          </InputGroup.Text>
          <Form.Control
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              outlineColor: "none",
            }}
            name="username"
            value={info?.username || ""}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            required
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
          >
            <AiFillPhone size={20} />
          </InputGroup.Text>
          <Form.Control
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
            name="phoneNumber"
            value={info?.phoneNumber || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            type="tel"
            required
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Form.Group className="mb-3 w-100 mw-">
          <Form.Select
            id="disabledSelect"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
            name="gender"
            value={info?.gender || "Gender"}
            onChange={handleChange}
          >
            <option selected disabled>
              Gender
            </option>
            <option defaultValue="male">Male</option>
            <option defaultValue="female">Female</option>
            <option defaultValue="other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button className="w-100 " type="submit" variant="dark">
          {isAdd}
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
