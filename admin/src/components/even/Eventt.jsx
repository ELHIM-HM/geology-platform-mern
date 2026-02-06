import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Event.scss';

const Event = () => {
  const [announcement, setAnnouncement] = useState({ title: '', description: '', type: '' });

  const handleChange = (e) => {
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/announcements', announcement);
      setAnnouncement({ title: '', description: '', type: '' });
      alert('Announcement created successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to create announcement.');
    }
  };

  return (
    <div className="event-container">
      <div className="form-container">
        <h2>Create Announcement</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={announcement.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              value={announcement.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              value={announcement.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="conferences">conferences</option>
              <option value="symposia">symposia</option>
              <option value="workshops">workshops</option>
              <option value="seminars">seminars</option>
              <option value="congress">congress</option>
            </select>
          </div>
          <div>
            <button type="submit" className="submit-button">
              Create
            </button>
          </div><Link to="/Ann" className="anoua">
          View Existing Announcements
        </Link>
        </form>
        
      </div>
    </div>
  );
};

export default Event;
