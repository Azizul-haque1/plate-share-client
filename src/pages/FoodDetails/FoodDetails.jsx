import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import useAxios from "../../hooks/userAxios";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";
import FoodInfo from "./FoodInfo";
import RequestModal from "./RequestModal";
import RequestTable from "./RequestTable";

const FoodDetails = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [foodData, setFoodData] = useState({});
  const [requests, setRequests] = useState([]);
  const [refetchTable, setRefetchTable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch Food Details
  useEffect(() => {
    axiosInstance
      .get(`/foods/${id}`)
      .then((result) => {
        setFoodData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [axiosInstance, id, refetch]);

  // Fetch Requests (if owner)
  useEffect(() => {
    if (foodData.donator_email === user?.email) {
      axiosInstance(`/food-request/${id}`)
        .then((res) => {
          setRequests(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, axiosInstance, refetchTable, foodData.donator_email, user?.email]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitRequest = (e, foodId) => {
    e.preventDefault();
    const form = e.target;
    const writeLocation = form.writeLocation.value;
    const whayNeeFood = form.whayNeeFood.value;
    const contact = form.contact.value;

    const newRequestFood = {
      foodId: foodId,
      name: user.displayName,
      userEmail: user.email,
      photoURL: user.photoURL,
      write_location: writeLocation,
      contactNo: contact,
      status: "pending",
      whayNeeFood: whayNeeFood, // Adding this field as it was in the form but maybe not in original payload structure, ensuring consistency
    };

    axiosInstance.post("/food-request", newRequestFood).then((result) => {
      if (result.data.insertedId) {
        toast.success("Food Request Successful");
        form.reset();
        handleCloseModal();
        setRefetchTable((prev) => !prev);
      }
    });
  };

  const handleAccept = (requestId, foodId) => {
    const accepted = { status: "Accepted" };
    const donated = { food_status: "Donated" }; // Or whatever the status should be when accepted

    // Note: The original logic patched the request to "Accepted" AND the food to "Donated".
    // This implies one acceptance closes the food donation.

    axiosInstance
      .patch(`/food-request/${requestId}`, accepted)
      .then((result) => {
        if (result.data.modifiedCount) {
          axiosInstance
            .patch(`/foods/${foodId}`, donated)
            .then(() => {
              toast.success("Request Accepted");
              setRefetchTable((prev) => !prev);
              setRefetch((prev) => !prev); // Refetch food data to update status
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  };

  const handleReject = (_id) => {
    const rejected = { status: "Rejected" };
    axiosInstance
      .patch(`/food-request/${_id}`, rejected)
      .then((result) => {
        const data = result.data;
        console.log("data.......", data);
        toast.success("Request Rejected");
        // setRefatchTable((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-screen">
      <FoodInfo
        foodData={foodData}
        onRequest={handleOpenModal}
      />

      {/* Show requests table only if the current user is the donator */}
      {user?.email === foodData.donator_email && (
        <RequestTable
          requests={requests}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}

      <RequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitRequest}
        user={user}
        foodId={foodData._id}
      />
    </div>
  );
};

export default FoodDetails;
