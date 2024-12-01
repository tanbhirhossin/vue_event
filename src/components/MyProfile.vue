<template>
  <div className="content-wrapper">
  <div class="profile-page">
    <div class="profile-header">
      <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture"/>
      <div class="profile-info">
        <h1>{{ user.name }}</h1>
        <p class="email">{{ user.email }}</p>
        <p class="bio">{{ user.bio }}</p>
      </div>
    </div>

    <div class="profile-details">
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Phone:</strong> {{ user.phone }}</li>
        <li><strong>Address:</strong> {{ user.address }}</li>
      </ul>
    </div>

    <div class="profile-footer">
      <button @click="editProfile">Edit Profile</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyProfile',
  data() {
    return {
      user: {
        name: 'TANBHIR HOSSIN',
        email: 'tanbhirhossin@gmail.com',
        bio: 'A passionate web developer with a love for Vue.js!',
        phone: '+8801845631245',
        address: 'NVIT, 2No gate, Chattogram',
        profilePicture: 'https://via.placeholder.com/150' // Add a default placeholder
      }
    };
  },
  methods: {
    editProfile() {
      // This method will be for editing the profile (to be implemented)
      alert('Edit Profile functionality to be implemented.');
    }
  }
};
</script>

<style scoped>
.profile-page {
  max-width: 700px;
  max-height: 800px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 50px;
  background-color: #1998ca;
  border-radius: 8px;
 color: azure;
  
}

.profile-page{

  font-style: italic;
  

}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-picture {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-info h1 {
  font-size: 24px;
  margin: 0;
  color: #f7f4f4;
}

.profile-info .email {
  font-size: 16px;
  /* color: rgb(234, 245, 234); */
}

.profile-info .bio {
  font-size: 14px;
  /* color: #f7f4f4; */
}

.profile-details {
  margin-top: 30px;
  color: #f7f4f4;
}

.profile-details h2 {
  font-size: 20px;
  /* color: #f5f1f1; */
}

.profile-details ul {
  list-style: none;
  padding: 0;
}

.profile-details li {
  font-size: 16px;
  margin-bottom: 10px;
}

.profile-footer {
  margin-top: 40px;
  text-align: center;
}

.profile-footer button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.profile-footer button:hover {
  background-color: #0056b3;
}
</style>
