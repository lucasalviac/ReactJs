import { Item } from '../Item/Item'

const ItemListContainer = ({ greeting }) => {
    

    return (
        <div>
            <h2>
                {greeting}                
            </h2>
            
            <div>
                <Item  />         
            </div>
        </div>
    )
}

export default ItemListContainer