"use strict";
function ProfileService($location) {
    const self = this; 
    self.userProfile = {
        Name: "Grant Chirpus", 
        Contact: "grant@grandcircus.co", 
        Info: "111-1111",
        Bio: "the best",
    }
    self.getUserProfile = () => {
        console.log(self.userProfile);
        return self.userProfile; 
    }
    self.setUserProfile = (newInfo) => {
        console.log(newInfo); 
        self.userProfile = angular.copy(newInfo);
        $location.path("/userprofile"); 
    }
    
}

angular
.module("App")
.service("ProfileService", ProfileService)