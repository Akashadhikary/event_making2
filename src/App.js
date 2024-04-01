import EventCreationForm from './components/EventCreationForm';
import EventListing from './components/EventListing';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (index) => {
    const updateEvents = [...events];
    updateEvents.splice(index , 1);
    setEvents(updateEvents);
  };

  const removeAllEvent = () => {
    setEvents([]);
  };

  return (
    <Router>
      
        <Nav/>
        <Routes>
          <Route path="/create" element={<EventCreationForm addEvent={addEvent} />}>
          </Route>

          <Route path="/" element={<EventListing events={events} onDelete={deleteEvent} onRemoveAll={removeAllEvent}/>}>
          </Route>
        </Routes>
      
    </Router>
  );
};
export default App;
