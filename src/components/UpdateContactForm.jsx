import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import getDetailContact from "../redux/action/getDetailContact";
import updateContact from "../redux/action/updateContact";

export default function UpdateContactForm(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Family");

  const contact = useSelector((state) => state.contactReducer.detailContact);

  const detailContact = (id) => {
    dispatch(getDetailContact(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
        title: `Please Fill Form Update Contact`,
      });
    } else {
      dispatch(
        updateContact(
          {
            user: {
              name,
              email,
              phone,
              category,
            },
          },
          contact.id
        )
      );
    }
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCategory("Family");
  };

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phonenumber);
    setCategory(contact.category);
  }, [contact]);
  return (
    <>
      <button
        onClick={() => detailContact(props.idContact)}
        className="btn btn-warning"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#formUpdateContact"
      >
        Update
      </button>

      <div
        className="modal fade"
        id="formUpdateContact"
        tabIndex="-1"
        aria-labelledby="formUpdateContactLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Contact
              </h5>
              <button
                onClick={() => resetForm()}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="mb-1" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="mb-1" htmlFor="category">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="Family">Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Work">Work</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => resetForm()}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
