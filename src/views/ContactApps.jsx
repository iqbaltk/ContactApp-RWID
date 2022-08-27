import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContact from "../components/CardContact";
import DataNotFound from "../components/DataNotFound";
import Loading from "../components/Loading";
import getAllContact from "../redux/action/getAllContact";

export default function ContactApps() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer.loading);
  const contacts = useSelector((state) => state.contactReducer.allContact);

  useEffect(() => {
    dispatch(getAllContact());
  }, []);

  return (
    <>
      <div className="container mt-2">
        {loading ? (
          <Loading />
        ) : contacts.length === 0 ? (
          <DataNotFound />
        ) : (
          contacts.map((contact) => {
            return (
              <div key={contact.id} className="col-md-3 p-1">
                <CardContact contact={contact} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
