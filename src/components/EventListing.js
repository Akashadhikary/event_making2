import React from 'react';
import { Link } from 'react-router-dom';
function EventListing({ events, onDelete, onRemoveAll }) {
    return (
        <div className='event-listing-container'>
            <Link to="/" className='heading'><h2>Upcoming Events</h2></Link>
            {events.length === 0 ? (<p style={{color: "red"}}>No Event Available. Please Create Event.</p>) : (
                <>
                    <ul>
                        {events.map((event, index) => (
                            <div className='event-container'>
                            <li key={index} className="event-item">
                                <h3 className='event-title'>{event.title}</h3>
                                <p className='event-description'>{event.description}</p>
                                <div className='event-details'>
                                    <p className='event-detail'><b>Start Date:</b> {event.startDateTime}</p>
                                    <p className='event-detail'><b>End Date:</b> {event.endDateTime}</p>
                                    <p className='event-detail'>Location: {event.location}</p>
                                </div>
                                <div className='button-container'>
                                    <button className='delete-button' onClick={() => onDelete(index)}>Cancel</button>
                                </div>
                            </li>
                            <img src='image2.png' alt='image2' className='event-image'/>
                            </div>
                        ))}
                    </ul>
                    <button className='removeAll-button' onClick={onRemoveAll}>Remove All</button>
                </>
            )}
        </div>
    );
}
export default EventListing;
