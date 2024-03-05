import Contact from "./Contact";

const FavouriteContact = (props) => {
  return (
    <div className="col-12 py-2" style={{borderRadius:"10px", backgroundColor:"#323637"}}>

    <div className="text-center text-white-50">Favourites</div>
    <div className="py-2">  
     {
      props.contacts.map((contact, index) =>(
        <Contact contact={contact} key={index} favouriteClick={props.favouriteClick}
        deletecontact = {props.deletecontact}
        updatedClick={props.updatedClick}></Contact>
      ))
     }
     </div>
    </div>
  );
};

export default FavouriteContact;
