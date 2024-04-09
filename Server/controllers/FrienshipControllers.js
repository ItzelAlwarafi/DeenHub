const {Frienship} = require('../models')


const createFriendship = async (req, res) => {
    try {
      const { user1_id, user2_id, status } = req.body;
      const newFriendship = new Frienship({ user1_id, user2_id, status });
      await newFriendship.save();
      res.status(201).json({ message: 'Friendship created successfully', friendship: newFriendship });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create friendship', error: error.message });
    }
  }

  const getFriendships = async (req, res) => {
    try {
      const friendships = await Frienship.find();
      res.status(200).json(friendships);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch friendships', error: error.message });
    }
  }

  const updateFriendship = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedFriendship = await Frienship.findByIdAndUpdate(id, { status }, { new: true });
      res.status(200).json({ message: 'Friendship updated successfully', friendship: updatedFriendship });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update friendship', error: error.message });
    }
  }
  
  
const deleteFriendship = async (req, res) => {
    try {
      const { id } = req.params;
      await Frienship.findByIdAndDelete(id);
      res.status(200).json({ message: 'Friendship deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete friendship', error: error.message });
    }
  }
  module.exports = {
    createFriendship,
    getFriendships,
    updateFriendship ,
    deleteFriendship

  }
