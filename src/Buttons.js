

function Buttons({filteredResorts}) {

    const viewAll = () => {
        document.location.reload(true);
    }

    return (
        <div>
            <div className="btnContainer mt-5 mb-3">
                <button className="searchBtn" onClick={() => filteredResorts("Africa, Cape Town")}>Africa, Cape Town</button>
                <button className="searchBtn" onClick={() => filteredResorts("Asia, Singapore")}>Asia, Singapore</button>
                <button className="searchBtn" onClick={() => filteredResorts("Middle East, Abu Dhabi")}>Middle East, Abu Dhabi</button>
                <button className="searchBtn" onClick={() => filteredResorts("Europe, Amsterdam")}>Europe, Amsterdam</button>
                <button className="searchBtn"onClick={() => filteredResorts("North America, Orlando")}>North America, Orlando</button>
            </div>
            <div className="btnContainer">
                <button className="searchBtn" onClick={() => viewAll()}>View all</button>
            </div>
        </div>
    )
}
export default Buttons;