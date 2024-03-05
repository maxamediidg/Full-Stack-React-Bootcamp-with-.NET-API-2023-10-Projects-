import { getRandomUser } from "../../Utility/api";

const getRandomcontact = async (props) => {
  const responseFromApi = await getRandomUser();
  console.log(responseFromApi);

  return props.handleAddRandomcontact({
    name: responseFromApi.data.first_name + " " + responseFromApi.data.last_name,
    email: responseFromApi.data.email,
    phone: responseFromApi.data.phone,
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => getRandomcontact(props)}
      >
        Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
