import { useState } from "react";


function Card(){

    const [view1,setView1]=useState(false)
    const [view2,setView2]=useState(false)
    const [view3,setView3]=useState(false)
    const [view4,setView4]=useState(false)
    const [view5,setView5]=useState(false)
    const [view6,setView6]=useState(false)

    return(<>
    {/* dog breed 1 */}
        <div className="card">
            <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/american-akita-2.jpg" alt="akita"></img>
            <h1 className="card-tittle1">Dog Breed</h1>
            <h2 className="card-tittle2">Akita</h2>
            {view1?
            <div>
            <p className="about">The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for their dignity, courage, and loyalty. In their native land, they're venerated as family protectors and symbols of good health, happiness, and long life
                Akitas are burly, heavy-boned spitz-type dogs of imposing stature. Standing 24 to 28 inches at the shoulder, Akitas have a dense coat that comes in several colors, including white. The head is broad and massive, and is balanced in the rear by a full, curled-over tail. The erect ears and dark, shining eyes contribute to an expression of alertness, a hallmark of the breed. Akitas are quiet, fastidious dogs. Wary of strangers and often intolerant of other animals, Akitas will gladly share their silly, affectionate side with family and friends. They thrive on human companionship. The large, independent-thinking Akita is hardwired for protecting those they love. They must be well socialized from birth with people and other dogs.</p>
                <button  className="btn"onClick={()=>setView1(false)}>view less</button>
                </div>
                : <><p>The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for their dignity, courage, and</p>
                <button className="btn" onClick={()=>setView1(!view1)}>View More+</button></>

}</div>
{/* dog breed 2 */}
<div className="card">
            <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/french-bulldog-2.jpg" alt="french-bulldog"></img>
            <h1 className="card-tittle1">Dog Breed</h1>
            <h2 className="card-tittle2">French Bulldog</h2>
            {view2?
            <div>
            <p className="about">The Frenchie shares many of the traits that made its bulldog ancestors so successful in the bull-baiting arena: low center of gravity, wide body, heavy bone, muscular build and large, square head. It has soft loose skin forming wrinkles about the head and shoulders. Unlike the bulldog, it has an alert, curious expression, which is aided by its bar ears. Also, unlike the bulldog, its movement is unrestrained and free, with reach and drive. It is a hardy, entertaining home companion and a solid lap dog.

The French bulldog is a clown in a lap dog. It enjoys playing and entertaining its family, as well as cuddling and snoozing with its favorite person. It is amiable, sweet, companionable and willing to please.</p>
                <button  className="btn"onClick={()=>setView2(false)}>view less</button>
                </div>
                : <><p>The French bulldog is a clown in a lap dog. It enjoys playing and entertaining its family,as well as </p>
                <button className="btn" onClick={()=>setView2(!view2)}>View More+</button></>

}</div>
{/* dog breeds 3 */}
<div className="card">
            <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/labrador-retriever-2.jpg"alt="Labrador Retriever"></img>
            <h1 className="card-tittle1">Dog Breed</h1>
            <h2 className="card-tittle2">Labrador</h2>
            {view3?
            <div>
            <p className="about">The Labrador Retriever is a medium to large-sized, short-coupled, powerfully-built dog with a short, dense, water-resistant coat; small, drop ears; and a short, thick otter-like tail carried level with the back or with a slight upward curve. The length of body is equal to or only slightly longer than the height at the withers, and the distance from the elbows to the ground is equal to one-half the height at the withers. Balance, outline, intelligence, temperament and movement are of overriding importance. The Labrador Retriever is a breed of moderation, thoroughly sound, and willing and able to do its work. The Labrador Retriever is a dog without exaggeration, so light, weedy dogs; long, low-stationed dogs; and cloddy, lumbering dogs are to be equally penalized. The Labrador Retriever should be evaluated as a working gun dog, and exaggerations or faults should be penalized in proportion to how much they interfere with the dog’s ability to work.

The Labrador Retriever is an enthusiastic hunter with a good nose and a soft mouth. They excel in all performance activities. Another essential characteristic of the Labrador Retriever is the short, dense, double coat that protects the dog when retrieving from water. The short, “otter” tail is another distinctive feature of this breed. Labrador Retrievers are noted for their excellent temperaments. This breed is friendly, outgoing and eager to please. They are extremely intelligent and easily trained to perform a variety of complex tasks.</p>
                <button  className="btn"onClick={()=>setView3(false)}>view less</button>
                </div>
                : <><p>The Labrador Retriever is an enthusiastic hunter with a good nose and a soft mouth. They excel in all </p>
                <button className="btn" onClick={()=>setView3(!view3)}>View More+</button></>
// dog breeds 4
}</div>
{/* dog breed 4 */}
<div className="card">
            <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/german-shepherd-dog-2.jpg" alt="german-shepherd"></img>
            <h1 className="card-tittle1">Dog Breed</h1>
            <h2 className="card-tittle2">German-Shephard</h2>
            {view4?
            <div>
            <p className="about">The German Shepherds are medium to large-sized dogs, well-balanced, muscular dog, slightly longer than tall, with a medium length coat, erect ears, and a low-set natural tail that normally reaches to the hock and is carried in a slight curve like a saber. The outline of the German Shepherd Dog is made up of smooth curves rather than angles. The head is in proportion to the size of the body, strong without appearing coarse or fine. Gender differences are readily apparent. The German Shepherd Dog should be evaluated as an all-around working dog, and exaggerations or faults should be penalized in proportion to how much they interfere with the dog’s ability to work.

The German Shepherd Dog is confident and fearless, willing to be approached, yet a certain level of aloofness towards strangers is acceptable. When working, the German Shepherd is alert and eager, adapting well to new tasks. Lack of confidence is a serious defect in the character of a German Shepherd. The structure of this breed was designed for efficient locomotion, particularly at the trot, so poor movement is another serious fault.</p>
                <button  className="btn"onClick={()=>setView4(false)}>view less</button>
                </div>
                : <><p>The German Shepherd Dog is confident and fearless, willing to be approached, yet a certain level of </p>
                <button className="btn" onClick={()=>setView4(!view4)}>View More+</button></>

}</div>
{/* dog breed 5 */}
<div className="card">
            <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/bulldog-2-3.jpg" alt="akita"></img>
            <h1 className="card-tittle1">Dog Breed</h1>
            <h2 className="card-tittle2">Bull-Dog</h2>
            {view5?
            <div>
            <p className="about">The English Bulldog is a wide, medium-sized, compact dog with short legs. The body and head are massive with extra skin on both the skull and forehead falling in folds. The cheeks extend to the sides of the eyes. The muzzle is wide, short and pug with a broad, deep stop. The black nose is broad with large nostrils. The dark eyes are deep set. The rose ears are small, thin and set high on the head. The jaws are massive, very broad, and square with hanging upper lips. The teeth should have an under bite. The tail is either straight or screwed and carried low. The short, flat coat is straight, smooth and glossy. Coat colors include red brindle and other shades of brindle, solid white, solid red, fawn, fallow, piebald, pale yellow or washed-out red or white or a combination of these colors.

Despite its "sourmug," the bulldog is jovial, comical and amiable, among the most docile and mellow of dogs. It is willing to please, although it retains a stubborn streak. It is very good with children. Most are moderately friendly toward strangers. Although some can be aggressive with strange dogs, the breed is quite good with other pets.</p>
                <button  className="btn"onClick={()=>setView5(false)}>view less</button>
                </div>
                : <><p>The bulldog is jovial, comical and amiable, among the most docile and mellow of dogs. It is willing to please,although it retains a</p>
                <button className="btn" onClick={()=>setView5(!view5)}>View More+</button></>

}</div>
{/* dog breed 6 */}
<div className="card">
            <img className="image" src="https://www.dogbreedslist.info/uploads/dog-pictures/yorkshire-terrier-2-2.jpg" alt="Yorkshire-Terrier"></img>
            <h1 className="card-tittle1">Dog Breed</h1>
            <h2 className="card-tittle2">Yorkshire-Terror</h2>
            {view6?
            <div>
            <p className="about">The Yorkshire Terrier’s appearance is that of a well-balanced, long coated, small (Toy-type) terrier, readily identified by its steel blue and tan, straight-flowing coat. The hair is parted on the muzzle and from the base of the skull to the end of the tail. The body is square and evenly proportioned. The dog’s high head carriage and confident manner gives the appearance of vigor and self-importance.

            The Yorkshire Terrier is tolerant of older children, provided they respect its personal space. Due to its small size and bold temperament (which arises from its working origins) the Yorkshire Terrier is not recommended for young children unless carefully supervised. The Yorkshire Terrier can occasionally be a bit too brave when dealing with larger dogs, but gets along fine with cats and other household pets. Yorkies prefer life indoors, and are especially unsuited to cold climates.</p>
                <button  className="btn"onClick={()=>setView6(false)}>view less</button>
                </div>
                : <><p>The Yorkshire Terrier is tolerant of older children, provided they respect its personal space. Due to its small size and</p>
                <button className="btn" onClick={()=>setView6(!view6)}>View More+</button></>

}</div>
</>
);
};
export default Card