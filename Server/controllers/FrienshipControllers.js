const {Friendship} = require('../models')


const createFriendship = async (req, res) => {
  try {
    const { user1_id, user2_id, status } = req.body;
    const newFriendship = new Friendship({ user1_id, user2_id, status })
    await newFriendship.save();
    res.status(201).json({ message: 'Friendship created successfully', friendship: newFriendship });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create friendship', error: error.message });
  }
}

  const getFriendships = async (req, res) => {
    try {
      const friendships = await Friendship.find();
      res.status(200).json(friendships);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch friendships', error: error.message });
    }
  }

  const updateFriendship = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedFriendship = await Friendship.findByIdAndUpdate(id, { status }, { new: true });
      res.status(200).json({ message: 'Friendship updated successfully', friendship: updatedFriendship });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update friendship', error: error.message });
    }
  }
  
  
const deleteFriendship = async (req, res) => {
    try {
      const { id } = req.params;
      await Friendship.findByIdAndDelete(id);
      res.status(200).json({ message: 'Friendship deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete friendship', error: error.message });
    }
  }


  const searchFriendshipsByLoggedInUserId = async (req, res) => {
    const {id} = req.params; // Assuming the ID of the loggedInUser is provided in the request params
  
    try {
     
      const friendships = await Friendship.find({
        $or: [{ user1_id: id }, { user2_id: id }],
      }).populate('user1_id user2_id'); // Populate user details if needed
  
      res.status(200).json({ friendships });
    } catch (error) {
      res.status(500).json({ message: 'Error searching friendships', error: error.message });
    }
  };
  




  module.exports = {
    createFriendship,
    getFriendships,
    updateFriendship ,
    deleteFriendship,
    searchFriendshipsByLoggedInUserId 

  }
