import React from "react";

const FleetCard = ({fleet, onUpdateDriver, onToggleAvailabilty, onDelete}) => {
    return (
        <div className = "card">
            <img src= "https://via.placeholder.com/150" alt = "Vehicle" />
            <p><b>Reg No:</b>{fleet.regNo}</p>
            <p><b>Category:</b>{fleet.category}</p>
            <p><b>Driver:</b>{fleet.driver}</p>
            <p><b>Status:</b>{fleet.available}</p>

            <button onClick = {() => onUpdateDriver(fleet.id)}>Update Driver</button><br></br>
            <button onClick = {() => onToggleAvailabilty(fleet.id)}>Toggle Availability</button><br></br>
            <button onClick = {() => onDelete(fleet.id)}>Delete</button><br></br>
        </div>
    );
};

export default React.memo(FleetCard);