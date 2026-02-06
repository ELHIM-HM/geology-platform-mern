import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/announcements');
        // Trier les annonces par date décroissante
        const sortedAnnouncements = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAnnouncements(sortedAnnouncements);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div className="p-6 ">
    <Navbar />
      <h2 className="text-center text-3xl  font-bold text-blue-500 mt-16">Events</h2>
      <ul className="space-y-4 ">
        {announcements.map(announcement => (
          <li key={announcement._id} className="p-4  bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">{announcement.title}</h3>
            <p className="mt-2 text-gray-700">{announcement.description}</p>
            <p className="mt-2 text-sm text-gray-500">Type: {announcement.type}</p>
            <p className="mt-1 text-sm text-gray-500">Date: {new Date(announcement.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsPage;
