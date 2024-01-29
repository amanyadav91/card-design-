import { useState } from "react";



function Card(){

    const [view,setView]=useState(false)

    return(
        <><><div className="card">
            <img className="image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg" alt="akita"></img>
            <h1 className="card-tittle1">Dog Breed</h1>
            <h2 className="card-tittle2">Akita</h2>
            {view?
            <div>
            <p className="about">The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for their dignity, courage, and loyalty. In their native land, they're venerated as family protectors and symbols of good health, happiness, and long life
                Akitas are burly, heavy-boned spitz-type dogs of imposing stature. Standing 24 to 28 inches at the shoulder, Akitas have a dense coat that comes in several colors, including white. The head is broad and massive, and is balanced in the rear by a full, curled-over tail. The erect ears and dark, shining eyes contribute to an expression of alertness, a hallmark of the breed. Akitas are quiet, fastidious dogs. Wary of strangers and often intolerant of other animals, Akitas will gladly share their silly, affectionate side with family and friends. They thrive on human companionship. The large, independent-thinking Akita is hardwired for protecting those they love. They must be well socialized from birth with people and other dogs.</p>
                <button onClick={()=>setView(false)}>view less</button>
                </div>
                : <><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, deserunt?</p>
                <button onClick={()=>setView(!view)}>view more+</button></>

}
        </div><div className="card">
                <img className="image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg" alt="akita"></img>
                <h1 className="card-tittle1">Dog Breed</h1>
                <h2 className="card-tittle2">Akita</h2>
                <p className="about">The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for their dignity, courage, and loyalty. In their native land, they're venerated as family protectors and symbols of good health, happiness, and long life.

                    Akitas are burly, heavy-boned spitz-type dogs of imposing stature. Standing 24 to 28 inches at the shoulder, Akitas have a dense coat that comes in several colors, including white. The head is broad and massive, and is balanced in the rear by a full, curled-over tail. The erect ears and dark, shining eyes contribute to an expression of alertness, a hallmark of the breed. Akitas are quiet, fastidious dogs. Wary of strangers and often intolerant of other animals, Akitas will gladly share their silly, affectionate side with family and friends. They thrive on human companionship. The large, independent-thinking Akita is hardwired for protecting those they love. They must be well socialized from birth with people and other dogs.</p>
            </div></><div className="card">
                <img className="image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg" alt="akita"></img>
                <h1 className="card-tittle1">Dog Breed</h1>
                <h2 className="card-tittle2">Akita</h2>
                <p className="about">The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for their dignity, courage, and loyalty. In their native land, they're venerated as family protectors and symbols of good health, happiness, and long life.

                    Akitas are burly, heavy-boned spitz-type dogs of imposing stature. Standing 24 to 28 inches at the shoulder, Akitas have a dense coat that comes in several colors, including white. The head is broad and massive, and is balanced in the rear by a full, curled-over tail. The erect ears and dark, shining eyes contribute to an expression of alertness, a hallmark of the breed. Akitas are quiet, fastidious dogs. Wary of strangers and often intolerant of other animals, Akitas will gladly share their silly, affectionate side with family and friends. They thrive on human companionship. The large, independent-thinking Akita is hardwired for protecting those they love. They must be well socialized from birth with people and other dogs.</p>
            </div></>
    );

}
export default Card