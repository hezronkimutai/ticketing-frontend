<template>
    <div class="categories-container">
      <h2>Book Your Event Category</h2>
      <form @submit.prevent="submitCategory">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="email">Your Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="category">Select Category</label>
          <select id="category" v-model="formData.category" required>
            <option value="" disabled>Select a category</option>
            <option value="vip">VIP</option>
            <option value="vvip">VVIP</option>
            <option value="student">Student</option>
            <option value="regular">Regular</option>
          </select>
        </div>
  
        <button type="submit" class="submit-button">Submit</button>
      </form>
  
      <div v-if="submitted">
        <h3>Booking Details</h3>
        <p><strong>Name:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Category:</strong> {{ formData.category }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoriesComponent",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          category: "",
        },
        submitted: false,
      };
    },
    methods: {
      submitCategory() {
        if (this.formData.name && this.formData.email && this.formData.category) {
          this.submitted = true;
          alert("Booking successfully submitted!");
        } else {
          alert("Please fill out all fields.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .categories-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .submit-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  