import React, {useState} from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import { Link } from "react-router-dom";

const Shop = () => {

    const [cartArray, setCartArray] = useState([]);

    const [cartImg, setCartImg] = useState([
        <img className="itemPic" src= {require("../imgs/item1Sample.jpg")}></img>,
        <img className="itemPic" src= {require("../imgs/item2Sample.jpg")}></img>
    ]);
    
    

    // merge data-value and images to a single array then pass through the fn?
    // if statement in add to cart for adding images?
    function addToCart(event) {

        // let itemValue = <div> {cartImg[0]} {event.target.parentElement.getAttribute('data-value')} </div>;
        let itemValue = "";

        if (event.target.parentElement.getAttribute('data-value') == "item 1 Value") {
            alert("item 1 matches")

            itemValue = <div> {cartImg[0]} {event.target.parentElement.getAttribute('data-value')} </div>;
        }

        if (event.target.parentElement.getAttribute('data-value') == "item 2 Value") {
            alert("item 2 matches")

            itemValue = <div> {cartImg[1]} {event.target.parentElement.getAttribute('data-value')} </div>;
        }
        
        let itemQuantity = Number(event.target.previousElementSibling.value);

        // console.log(itemQuantity);

        const repeat = (arrPass, numOfRepeat) => [].concat(...Array(numOfRepeat).fill(arrPass))

        let result = repeat([itemValue], itemQuantity)

        // console.log(result)
            
        setCartArray (
            cartArray.concat(result)
        )
    };

    function showSideBar() {
        document.querySelector('#sideBar').classList.remove('hideSideBar');

    }

    function hideSideBar() {
        document.querySelector('#sideBar').classList.add('hideSideBar');
    }

    console.log(cartArray);

    return(
        <div id="shopWrapper">
            <Header homeLink = 
            {<Link to="/"><li className='navList'>Home</li></Link>}
            shopLink={
                <Link smooth="true" to="/shop">
                    <li id="shopBtn" className='navList'>Shop</li>
                </Link>
            }
            cart = {<div id="cartLink" onClick={showSideBar}>Cart: {cartArray.length}</div>}
            />

            <div className="shopHead">I'm from the shop page foo!</div>
            <br/>

            <div >
                <div data-value= "item 1 Value">Item 1 <input id="input1" type="number" defaultValue="1" min="1" max="99"></input> <button type="button" onClick={addToCart}>Add to Cart</button></div>
                
            </div>
            <br/>
            <div >
                <div data-value="item 2 Value">Item 2 <input id="input2"  defaultValue="1" type="number" min="1" max="99"></input> <button type="button" onClick={addToCart}>Add to Cart2</button></div>
                
            {cartImg}

            </div>
            
            <div id="sideBar" className="hideSideBar">
                <div className="sideBarHeader">
                    <div>Sidebar</div>
                    <div><button type="button" className="sideBtn" onClick={hideSideBar}>X</button></div>
                </div>

                <div id="cartPageList">
                    <ul>
                    {cartArray.map((item, index) => 
                    <li key={index}>
                        {/* <img className="itemPic" src= {require("../imgs/item1Sample.jpg")}></img> */}
                        
                        {item}</li>)}
                
                    </ul>
                </div>

            </div>
        
        </div>
    )
};

// separate item/array in cart link?
export default Shop;