import { useState } from "react";

function ExploreGallery({myResorts}) {

    const [showMore, setShowMore] = useState(false);

    const showTextClick = (resort) => {
        resort.showMore = !resort.showMore;
        setShowMore(!showMore)
    }

    return (
        <div className="resorts">
            {myResorts.map((resort => {
                const { id, name, description, image, price, source, searchTerm, link, showMore } = resort;
                const btnText = showMore ? "Show less" : "Show more";
                return (
                    <div key={id} className="resort-card">
                        <div className="ImageContainer">
                            <img className="ResortImage" src={image} alt="resortImage" />
                            <a className="triangleBtn" href={link} target={'_blank'} rel={"noopener noreferrer"}><span className="bookBtn">Book<br />now</span></a>
                        </div>
                        <div className="Container mt-3">
                            <p className="Source">Source: {source}</p>
                        </div>
                        <div className="Container">
                            <h2 className="ResortName">{id} {name}</h2>
                        </div>
                        <div className="Container">
                            <h3 className="SearchTerm">{searchTerm}</h3>
                        </div>
                        <div className="Container">
                            <p className="Description">
                            {showMore ? description : description.substring(0, 170) + "...."}
                                <span className='whiteSpace'></span>
                                <button className="showMoreBtn" onClick={() => showTextClick(resort)}>{btnText}</button>
                            </p>
                        </div>
                        <div className="Container">
                            <h3 className="Price">Price: {price}</h3>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}
export default ExploreGallery;