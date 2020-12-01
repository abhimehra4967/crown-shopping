import React from "react"
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/collection-preview/preview-collection.component"


class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return (
        <div className="shopPage">{
            collections.map(({id,...otheritems})=>(
                <CollectionPreview key = {id} {...otheritems}></CollectionPreview>
            ))
        }
            
        </div>
        )
    }
}
export default ShopPage;