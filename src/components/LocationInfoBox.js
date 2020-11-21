const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Wildfire Location Info:</h2>
            <ul>
                <li><strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
