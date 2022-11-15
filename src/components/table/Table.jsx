import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { TbEdit } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import { DeleteUser, useFetch } from "../../utils/firebase";

const TableComponent = ({ editUser }) => {
  const { isLoading, contactList } = useFetch();

  return (
    <Container className="mt-3">
      <div className=" d-block w-100 text-center mb-3 fs-4 bg-dark text-light rounded-3">
        CONTACTS
      </div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive="sm"
        size="sm"
        className="w-90 text-center"
      >
        <thead>
          <tr>
            <th>User Name</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5}> Loading</td>
            </tr>
          ) : contactList?.lenght === 0 ? (
            <tr>
              <td colSpan={5}> No Result Found</td>
            </tr>
          ) : (
            contactList?.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.gender}</td>
                <td>
                  <AiTwotoneDelete
                    color="red"
                    type="button"
                    onClick={() => DeleteUser(item.id)}
                  />
                </td>
                <td>
                  <TbEdit
                    color="orange"
                    type="button"
                    onClick={() =>
                      editUser(
                        item.id,
                        item.username,
                        item.phoneNumber,
                        item.gender
                      )
                    }
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
