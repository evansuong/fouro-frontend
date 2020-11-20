// Users file for Creating, Reading, Updating, and Deleting Users
// and User Profile Management
import "firebase/firestore";
import "firebase/auth";
import firebase from "../firebase/config";
// Import timerCorrector to handle trivial timer warnings
import "../timerCorrector";

// Firestore
export const db = firebase.firestore();
export const users = db.collection("users");

const UsersAPI = {

  // user: firebase.auth().currentUser,

  createNewUser: function(username, firstName, lastName) {
    // same functionality
    this.updateUserProfile(username, firstName, lastName);
    console.log(user);
    /*
    this.user.updateProfile({displayName: username});
    users.doc(user.uid).set({
      first_name: firstName,
      last_name: lastName
    });
    */
  },

  uploadUserProfilePicture: function() {    // TODO this function may not work correctly.
    // create a cloud storage refrence
    var storageRef = firebase.storage().ref(user.uid + '/profilePicture/' + file.name);

    // save to cloud storage
    var task = storageRef.put(file);

    // update user's photo URL to the saved cloud storage url
    user.updateProfile({ photoURL: storageRef.getDownloadURL() });
  },

  getUserProfile: function(userId) {
    var userProfile = {
      username: this.user.username,
      firstName: users.get(user.first_name),
      lastName: users.get(user.last_name),
      profPicUrl: this.user.photoURL
    };
    return userProfile;
  },

  // TODO: Need to fix for testing purposes
  // User and UID remains constant throughout expo session
  // In order to reset UID, close metro bundler and npm start again
  // TODO: Develop a SIGNOUT button ASAP
  updateUserProfile: function(username, firstName, lastName) {
    const user = firebase.auth().currentUser;
    console.log(user);
    // await user.updateProfile({displayName: username});
    users.doc(user.uid).update({
      first_name: firstName,
      last_name: lastName,
      username: username,
    });
  }
}
 
const HugCountAPI = {
  getUserHugCount: function() {

  },

  getUserHugStreak: function() {

  },

  resetUserHugCount: function() {

  },

  increaseHugCount: function() {
    
  }
}

export default UsersAPI;
