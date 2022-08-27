import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardContact from "../components/CardContact";
import detailContact from "../redux/action/getDetailContact";

export default function DetailContact() {
  const dispatch = useDispatch();
  const params = useParams();
  const contact = useSelector((state) => state.contactReducer.detailContact);
  console.log(contact);
  useEffect(() => {
    dispatch(detailContact(params.id));
  }, []);
  return (
    <>
      <div className="container">
        <CardContact contact={contact} fromDetail={true} />
      </div>
    </>
  );
}
