import React from "react";
import Header from "../layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllcontact from "./RemoveAllContact";
import AddContact from "./AddContact";
import GeneralContact from "./GeneralContact";
import Footer from "../layout/Footer";
import FavouriteContact from "./FavouriteContact";

class Contactindex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben parker",
          phone: "666-666-7770",
          email: "benparker@gmail.com",
          isFavourite: false,
        },
        {
          id: 2,
          name: "kathy parker",
          phone: "111-222-0000",
          email: "kathyparker@gmail.com",
          isFavourite: true,
        },
        {
          id: 3,
          name: "Paul show",
          phone: "999-222-1111",
          email: "Paul@gmail.com",
          isFavourite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handlerAddcontact = (newcontact) => {
    if (newcontact.name == "") {
      return { status: "failure", msg: "please Enter a valid name" };
    } else if (newcontact.phone == "") {
      return { status: "failure", msg: "please Enter a valid phone number" };
    }

    const DuplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newcontact.name && x.phone == newcontact.phone) {
        return true;
      }
    });
    if (DuplicateRecord.length > 0) {
      return { status: "failure", msg: "duplicate record" };
    } else {
      const NewFinalContact = {
        ...newcontact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavourite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([NewFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  handleToggleFavourite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return {
              ...obj,
              isFavourite: !obj.isFavourite,
            };
          }
          return obj;
          {
          }
        }),
      };
    });
  };

  handleAddRandomContact = (newcontact) => {
    const NewFinalContact = {
      ...newcontact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavourite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([NewFinalContact]),
      };
    });
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contactId;
          {
          }
        }),
      };
    });
  };

  

  handleRemoveAllcontact = (removecontact) => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

  handleUpdatedClick = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };

  handleCancelUpdatedClick = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };
  
  handleUpdatecontact = (updatedcontact) => {
    if (updatedcontact.name == "") {
      return { status: "failure", msg: "please Enter a valid name" };
    } else if (updatedcontact.phone == "") {
      return { status: "failure", msg: "please Enter a valid phone number" };
    }

  
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.map((obj)=>{
            if(obj.id==updatedcontact.id){
              return{
                ...obj,
                name:updatedcontact.name,
                email:updatedcontact.email,
                phone:updatedcontact.phone
              };
            }
            return obj;
          }),
          isUpdating:false,
          selectedContact:undefined,
        };
      });
      return { status: "success", msg: "Contact was updated successfully" };
    };
  


  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomcontact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllcontact
                handleRemoveAllcotact={this.handleRemoveAllcontact}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  handlerAddcontact={this.handlerAddcontact}
                  cancelupdateContact={this.handleCancelUpdatedClick}
                  handleupdatecontact = {this.handleUpdatecontact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContact
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite == true
                  )}
                  favouriteClick={this.handleToggleFavourite}
                  deletecontact={this.handleDeleteContact}
                  updatedClick={this.handleUpdatedClick}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContact
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite == false
                  )}
                  favouriteClick={this.handleToggleFavourite}
                  deletecontact={this.handleDeleteContact}
                  updatedClick={this.handleUpdatedClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contactindex;
