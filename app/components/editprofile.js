"use strict"; 

const editProfile = {
    template: `
    <form ng-submit="$ctrl.edit($ctrl.newInfo);">
        <h2>Use the form below to update your profile.</h1>
        <label>Name</label><input type="text" ng-model="$ctrl.newInfo.Name">
        <label>Contact</label><input type="text" ng-model="$ctrl.newInfo.Contact">
        <label>Bio</label><input type="text" ng-model="$ctrl.newInfo.Bio">
        <button class="update">Update</button>
    </form>
    `,

    controller: ["ProfileService", function(ProfileService) {
        const vm = this; 
        vm.edit = (newInfo) => {
            ProfileService.setUserProfile(newInfo); 
        }

    }]
}

angular
.module("App")
.component("editProfile", editProfile)