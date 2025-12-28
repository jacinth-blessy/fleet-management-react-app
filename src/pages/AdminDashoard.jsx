import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const AdminDashboard = () => {
    const [fleets, setFleets] = useState([]);
    const updateDriver = useCallback((id) => {
        const newDriver = prompt("Enter new driver name");
        if(!newDriver || !newDriver.trim())
            return;
        setFleets((prev) => prev.map((fleet) => fleet.id === id? {...fleet, driver:newDriver} : fleet));
    }, []);


    const toggleAvailabity = useCallback((id) => {
        setFleets((prev) => prev.map((fleet) => fleet.id === id?{...fleet, available:fleet.available === "Available" ? "Unavailable" : "Available",} :fleet));
    }, []);

    const deleteFleet = (id) => {
        if(confirm("Are you sure you want to delete this vehicle?"))
        {
            setFleets((prev) => prev.filter((fleet) => fleet.id!== id));
        }
    };

    return (
        <>
        <Navbar />
        <div className = "layout">
            <Sidebar setFleets = {setFleets} />
            <div className = "cards">
                {fleets.map((fleet) => (
                 <FleetCard key = {fleet.id}  fleet = {fleet} onUpdateDriver = {updateDriver} onToggleAvailability = {toggleAvailabity} onDelete = {deleteFleet} />))}
            </div>
       </div>
        </>
    );

};


export default AdminDashboard;