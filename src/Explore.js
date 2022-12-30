import { useState } from "react";
import { data } from "./data";
import ExploreGallery from "./ExploreGallery";
import Buttons from "./Buttons";


function Explore() {

    const [resorts, setResorts] = useState(data);

    const chosenResorts = (searchTerm) => {
        const newResorts = data.filter(element => element.searchTerm === searchTerm);
        setResorts(newResorts);
    }


    return (
        <div>
            <div className="mt-5">
                <h2 className="text-center display-3 explorePageTitle">Explore your resorts</h2>
            </div>

            <Buttons filteredResorts = {chosenResorts} />
            
            <ExploreGallery myResorts = {resorts} />
            
        </div>
    )
}
export default Explore;