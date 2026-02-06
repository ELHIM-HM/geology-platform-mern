const Announcement = require('../models/Announcement');

exports.createAnnonce = async (req, res) => {
  try {
    const announcement = new Announcement(req.body);
    await announcement.save();
    res.json(announcement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAnnonces = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAnnonce = async (req, res) => {
    try {
      const announcement = await Announcement.findById(req.params.id);
      if (!announcement) {
        console.log(`Announcement with id ${req.params.id} not found`);
        return res.status(404).json({ message: 'Announcement not found' });
      }
      await announcement.remove();
      console.log(`Announcement with id ${req.params.id} deleted successfully`);
      res.json({ message: 'Announcement deleted' });
    } catch (err) {
      console.error('Error deleting announcement:', err);
      res.status(500).json({ message: err.message });
    }
};
