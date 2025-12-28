const Sidebar = ({setFleets}) => {
    const [form, setForm] = useState({
        regNo : "",
        category : "",
        driver : "",
        available : "Available",
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    };

    const addFleet = () => {
        if(!form.regNo || !form.category || !form.driver)
        {
            alert("All fields are required");
            return;
        }

        setFleets((prev) => [...prev, {...form, id:Date.now()},
    ]);

    setForm({
        regNo: "",
        category: "",
        driver: "",
        available: "Available",
    });
    };

    return (
        <div className = "sidebar">
            <h3> Add Fleet</h3>
            <input name = "regNo" placeholder = "Vehicle Reg No" value = {form.regNo} onChange = {handleChange} />
            <select name = "category" value = {form.category} onChange = {handleChange}>
                <option value = "">Select Category</option>
                <option>Auto</option>
                <option>Bus</option>
                <option>Truck</option>
                <option>Car</option>
            </select>
            <input name = "driver" placeholder = "Driver Name" value = {form.driver} onchange = {handleChange}/>
            <select name = "available" value = {form.available} onChange = {handleChange}>
                <option>Available</option>
                <option>Unavailable</option>
            </select>
            <button onClick={addFleet}>Add Fleet</button>
        </div>
    );
};

export default Sidebar;