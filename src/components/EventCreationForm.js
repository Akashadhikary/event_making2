import React, { useState } from 'react';

function EventCreationForm({ addEvent }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [location, setLocation] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if(startDateTime >= endDateTime){
            alert("End time should be greater than start time");
            return;
        };

        const newEvent = {
            title,
            description,
            startDateTime,
            endDateTime,
            location
        };
        addEvent(newEvent);
        setTitle('');
        setDescription('');
        setStartDateTime('');
        setEndDateTime('');
        setLocation('');
        alert("Event created successfully...Please go home to see upcoming events.");

        
    };

    return (
        <div className='form-container'>
            <div className='form-section'>
                <form onSubmit={handleSubmit}>
                    <label>Event name</label>
                        <input type="text" placeholder="Enter Event Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    
                    <label>Description</label>
                        <input type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    
                    <label>Start Date</label>
                        <input type="datetime-local" value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)} required />
                    
                    <label>End Date</label>
                        <input type="datetime-local" value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)} required />
                            
                    <label>Location</label>
                        <input type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                     
                    <button type="submit">Create Event</button>
                </form>
            </div>
            <div className='image-section'>
                <img src='image1.jpg' alt='Not found' />
            </div>
        </div>
    );
}
export default EventCreationForm;
