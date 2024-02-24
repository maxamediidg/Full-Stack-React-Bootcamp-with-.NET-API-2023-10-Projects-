import React from "react";
import Header from "../layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllcontact from "./RemoveAllContact";
import AddContact from "./AddContact";
import GeneralContact from "./GeneralContact";
import Footer from "../layout/Footer";
import FavouriteContact from "./FavouriteContact";


class Contactindex extends React.Component {
   
   constructor(props){
   super(props);
   this.state={
       contactList:[
        {
        id:1,
        name:"Ben parker",
        phone:"666-666-7770",
        email:"benparker@gmail.com",
        isFavourite:false,
       },
       {
        id:1,
        name:"kathy parker",
        phone:"111-222-0000",
        email:"kathyparker@gmail.com",
        isFavourite:true,
       },
       {
        id:1,
        name:"Paul show",
        phone:"999-222-1111",
        email:"Paul@gmail.com",
        isFavourite:true,
       },
    ],
   };
   }
   
    render()
    {
        return(
<div>
    <Header />
    <div className="container" style={{minHeight:"85vh"}}>
        <div className="row py-3">
            <div className="col-4 offset-2">
                <AddRandomContact />
            </div>
            <div className="col-4">
                <RemoveAllcontact />
            </div>
            <div className="row py-2">
               <AddContact />
            </div>
            <div className="row py-2">
               <FavouriteContact contacts={this.state.contactList.filter((u)=>u.isFavourite == true)} />
            </div>
            <div className="row py-2">
               <GeneralContact  contacts={this.state.contactList.filter((u)=>u.isFavourite == false)} /> />
            </div>
        </div>

    </div>
    <Footer />
</div>
        )
    }
}

export default Contactindex;