"use strict";
const userProfile = {
    template: `
    <section class="container">
        <img>
    </section>

    <section class="main">
        <h1>Name: {{ $ctrl.info.Name }}</h1>
        <p>Email: {{ $ctrl.info.Contact }}</p>
        <p>Bio: {{ $ctrl.info.Bio }}</p>
        <a href="#!/edit-profile">Edit</button>
    </section>

    `,
    
    controller: ["ProfileService", function(ProfileService) {
        const vm = this; 
        vm.info = ProfileService.getUserProfile(); 

    }]

}; 


angular
.module("App")
.component("userProfile", userProfile)