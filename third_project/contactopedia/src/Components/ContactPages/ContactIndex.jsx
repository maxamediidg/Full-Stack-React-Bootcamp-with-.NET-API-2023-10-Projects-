import React from "react";
import Header from "../layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllcontact from "./RemoveAllContact";
import AddContact from "./AddContact";
import GeneralContact from "./GeneralContact";
import Footer from "../layout/Footer";
import FavouriteContact from "./FavouriteContact";


class Contactindex extends React.Component {
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
               <FavouriteContact />
            </div>
            <div className="row py-2">
               <GeneralContact />
            </div>
        </div>

    </div>
    <Footer />
</div>
        )
    }
}

export default Contactindex;