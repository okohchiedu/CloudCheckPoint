import { GoogleMap, LoadScript, Marker }  from "@react-google-maps/api";



const MapContainer = () => {
    const item = {
        name: "Location 1",
        location :{
            lat :6.465422,
            lng :3.406448
        }
    }

    const mapStyles ={
        height : "70vh",
        width : "70%"
    }

    const defaultCenter = {
        lat :6.465422,
        lng :3.406448
    }


    return (
        <did>
            <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
                <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={12}>
                    <Marker Key={item.name} position={item.location}></Marker>
                </GoogleMap>
            </LoadScript>
        </did>
    )
};

export default MapContainer;