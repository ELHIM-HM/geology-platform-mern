import { useState, useEffect } from 'react';
import axios from 'axios';
import './Ann.scss';
import { Link } from 'react-router-dom';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', type: '', date: '' });
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/announcements');
        setAnnouncements(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAnnouncements();
  }, []);

  const confirmDeleteAnnouncement = (announcement) => {
    setAnnouncementToDelete(announcement);
    setShowConfirmDialog(true);
  };

  const deleteAnnouncement = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/announcements/${announcementToDelete._id}`);
      alert('Announcement deleted successfully!');
      setAnnouncements(announcements.filter(announcement => announcement._id !== announcementToDelete._id));
      setShowConfirmDialog(false);
      setAnnouncementToDelete(null);
    } catch (err) {
      console.error('Failed to delete announcement:', err);
      alert('Failed to delete announcement.');
    }
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
    setAnnouncementToDelete(null);
  };

  const startEditing = (announcement) => {
    setEditingAnnouncement(announcement._id);
    setEditForm({
      title: announcement.title,
      description: announcement.description,
      type: announcement.type,
      date: new Date(announcement.date).toISOString().split('T')[0], // Formatted for input[type="date"]
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const submitEdit = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/announcements/${id}`, editForm);
      alert('Announcement updated successfully!');
      setAnnouncements(announcements.map(announcement =>
        announcement._id === id ? { ...announcement, ...editForm } : announcement
      ));
      setEditingAnnouncement(null);
    } catch (err) {
      console.error('Failed to update announcement:', err);
      alert('Failed to update announcement.');
    }
  };

  return (
    <div className="announcements-list">
      <h2>Existing Announcements</h2>
      <Link to="/eventt" className="event-link">Go to Create Announcement</Link>
      
      <ul>
        {announcements.map(announcement => (
          <li key={announcement._id} className="announcement-item">
            {editingAnnouncement === announcement._id ? (
              <div>
                <input
                  type="text"
                  name="title"
                  value={editForm.title}
                  onChange={handleEditChange}
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  placeholder="Description"
                />
                <input
                  type="text"
                  name="type"
                  value={editForm.type}
                  onChange={handleEditChange}
                  placeholder="Type"
                />
                <input
                  type="date"
                  name="date"
                  value={editForm.date}
                  onChange={handleEditChange}
                />
                <button onClick={() => submitEdit(announcement._id)} className="save-button">
                  Save
                </button>
                <button onClick={() => setEditingAnnouncement(null)} className="cancel-button">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h3>{announcement.title}</h3>
                <p>{announcement.description}</p>
                <p>Type: {announcement.type}</p>
                <p>Date: {new Date(announcement.date).toLocaleDateString()}</p>
                <button onClick={() => startEditing(announcement)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => confirmDeleteAnnouncement(announcement)} className="delete-button">
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {showConfirmDialog && (
  <div className="confirm-dialog">
    <p>Are you sure you want to delete this announcement?</p>
    <button onClick={deleteAnnouncement} className="confirm-button">Yes</button>
    <button onClick={cancelDelete} className="cancel-button">No</button>
  </div>
)}

    </div>
  );
};

export default Announcements;
