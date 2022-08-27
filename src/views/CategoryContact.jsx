import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getAllContact from "../redux/action/getAllContact";
import CardContact from "../components/CardContact";
import Loading from "../components/Loading";
import DataNotFound from "../components/DataNotFound";

export default function CategoryContact() {
  const dispatch = useDispatch();
  const params = useParams();

  const loading = useSelector((state) => state.loadingReducer.loading);
  const contacts = useSelector((state) => state.contactReducer.allContact);
  const categoryContact = useSelector(
    (state) => state.contactReducer.categoryContact
  );

  useEffect(() => {
    dispatch(getAllContact());
  }, []);

  useEffect(() => {
    const regex = new RegExp(params.category, "i");
    const myContact = contacts.filter((contact) => {
      return regex.test(contact.category);
    });
    dispatch({ type: "CATEGORY_CONTACT", payload: myContact });
  }, [params, contacts]);

  return (
    <div className="container mt-3">
      {loading ? (
        <Loading />
      ) : categoryContact.length === 0 ? (
        <DataNotFound/>
        ) : (
        categoryContact.map((contact) => {
          return (
            <div key={contact.id} className="col-md-3 p-1">
              <CardContact contact={contact} />
            </div>
          );
        })
      )}
    </div>
  );
}
