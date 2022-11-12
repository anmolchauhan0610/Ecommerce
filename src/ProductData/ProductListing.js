import axios from 'axios';
import React, { useEffect, useState } from 'react'
import heart from "../Asessts/heart.svg";
import filled from "../Asessts/filled.svg";


const ProductListing = () => {
    const [allProducts, setallProducts] = useState([]);
    const [favCount, setFavCount] = useState(0);
    const [showFavItems, setshowFavItems] = useState(false);
    const [FavList, setFavList] = useState([]);


    useEffect(() => {
        check();
    }, [])


    const countingNum = () => {
        const count = allProducts.filter((element) => element?.favourite == true)
        console.log("the count is", count)
        setFavCount(count?.length)
        setFavList(count);

    }

    const check = () => {
        try {
            axios.get("https://fakestoreapi.com/products").then((resp) => {
                const myData = resp.data
                console.log("my data is ", myData)
                const new_data = myData.map((items) => {
                    return {
                        ...items, favourite: false
                    }

                })
                console.log("new data is ", new_data)
                setallProducts(new_data)
            })
        } catch (error) {
            console.log("your error is", error)
        }
    }

    const handleClick = (id) => {

        const newArray = allProducts.findIndex((item) => item.id === id)
        let arryCopy = [...allProducts]
        if (!arryCopy[newArray].favourite) {
            arryCopy[newArray].favourite = true;

        } else {
            arryCopy[newArray].favourite = false;
        }

        setallProducts(arryCopy)
        countingNum();
    }

    const handleFavItems = () => {
        setshowFavItems((prevState) => !prevState)
    }






    return (
        <>
            <div className=' listbutton d-flex justify-content-end mx-4 mt-2' >
                <button className='btn btn-primary ' onClick={handleFavItems}>{favCount} Favourite Items</button>
            </div>
            {showFavItems ? <div className='row w-100 mx-2'>
                {
                    FavList?.map((items) => {
                        return (
                            <>

                                <div className="card mt-5 productlist mx-3 p-5">

                                    <img src={items.image} style={{ width: "200px", height: "200px" }} alt='product' />
                                    <p className='mt-2' >Price:{items.price}</p>
                                    <p>Catergory : {items.category}</p>
                                    <p>Title : {items.title}</p>
                                </div>

                            </>
                        )
                    })
                }
            </div> :
                <div className='row w-100 mx-2'>
                    {
                        allProducts?.map((items) => {
                            return (
                                <>

                                    <div className="card mt-5 productlist mx-3 p-5">
                                        <button className=' btn hearticon bg-transparent'><img className="" src={items.favourite ? filled : heart}
                                            onClick={() => handleClick(items.id)} /></button>
                                        <img src={items.image} style={{ width: "200px", height: "200px" }} alt='product' />
                                        <p className='mt-2' >Price:{items.price}</p>
                                        <p>Catergory : {items.category}</p>
                                        <p>Title : {items.title}</p>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            }
        </>

    )
}

export default ProductListing
