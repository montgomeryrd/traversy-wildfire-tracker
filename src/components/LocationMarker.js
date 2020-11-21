import flames from './flame.svg';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <img className="location-icon" src={flames} alt="fire"/>
        </div>
    )
}

export default LocationMarker;