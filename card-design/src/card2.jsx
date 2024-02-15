import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";

const CardContent1= () => {
    const [showCard1, setCard1] = useState(true);
    const [showCard2, setCard2] = useState(true);
    const [showCard3, setCard3] = useState(true);

    const handleViewMore = (cardNumber) => {
        setShowCrad1(cardNumber === 1);
        setShowCrad2(cardNumber === 2);
        setShowCrad3(cardNumber === 3);
    };
    return (
        <div>
            {showCard1 && (
                <card>
                    <CardContent div className="card">
                        <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/yorkshire-terrier-2-2.jpg" alt="Yorkshire-Terrier"></img>
                        <h1 className="card-tittle1">Dog Breed</h1>
                        <h2 className="card-tittle2">Yorkshire-Terror</h2>

                        <div>
                            <p className="about">The Yorkshire Terrier’s appearance is that of a well-balanced, long coated, small (Toy-type) terrier, readily identified by its steel blue and tan, straight-flowing coat. The hair is parted on the muzzle and from the base of the skull to the end of the tail. The body is square and evenly proportioned. The dog’s high head carriage and confident manner gives the appearance of vigor and self-importance.

                                The Yorkshire Terrier is tolerant of older children, provided they respect its personal space. Due to its small size and bold temperament (which arises from its working origins) the Yorkshire Terrier is not recommended for young children unless carefully supervised. The Yorkshire Terrier can occasionally be a bit too brave when dealing with larger dogs, but gets along fine with cats and other household pets. Yorkies prefer life indoors, and are especially unsuited to cold climates.</p>
                        </div>

                        <button onClick={() => handleViewMore(1)}>View More</button>
                    </CardContent>
                </card>
            )}
                {showCard2 && (
                <card>
                    <CardContent>
                        <div className="card">
                            <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/yorkshire-terrier-2-2.jpg" alt="Yorkshire-Terrier"></img>
                            <h1 className="card-tittle1">Dog Breed</h1>
                            <h2 className="card-tittle2">Yorkshire-Terror</h2>
                           </div>
                            <div>
                                <p className="about">The Yorkshire Terrier’s appearance is that of a well-balanced, long coated, small Toy-type terrier, readily identified by its steel blue and tan, straight-flowing coat. The hair is parted on the muzzle and from the base of the skull to the end of the tail. The body is square and evenly proportioned. The dog’s high head carriage and confident manner gives the appearance of vigor and self-importance.

                                    The Yorkshire Terrier is tolerant of older children, provided they respect its personal space. Due to its small size and bold temperament which arises from its working origins the Yorkshire Terrier is not recommended for young children unless carefully supervised. The Yorkshire Terrier can occasionally be a bit too brave when dealing with larger dogs, but gets along fine with cats and other household pets. Yorkies prefer life indoors, and are especially unsuited to cold climates.</p>
                                    </div>
                   <button className="btn" onClick={()=> handleViewMore(2)} >View More </button>
                    </CardContent>
                </card>
            )
            }
        </div>
    );
};
export default CardContent1;
