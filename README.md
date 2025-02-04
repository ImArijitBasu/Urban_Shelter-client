# **URBAN SHELTER** (Client Side)

This project is based on a building management system where roles manage users. The building owner is the **Admin**, tenants are **Members**, and anyone who requests to book an apartment is a **User**. The **Admin** can manage members, coupons, and announcements.

## [Live link](https://urban-shelter-building.web.app/)  
---  
## Key Features 🎯  
- **Comprehensive Apartment Listings**  
- **Seamless Tenant Management**  
- **Online Payment System** (Stripe)  
- **Dynamic Coupon System**  
- **Real-Time Notifications**  
- **Responsive Design**  
- **User Authentication**  
- **Admin Dashboard**  
- **Pagination & Search**  

---
## Main Technologies used
- **react js**
- **Tailwind**
- **Firebase**
- **JWT**
- etc

## **Setup Process 🛠️**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/ImArijitBasu/Urban_Shelter-client.git
cd Urban_Shelter-client
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Setup Firebase**  
1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.  
2. Enable Authentication (Google, Email/Password, etc.).  
3. Create a Firestore database.  
4. Get your Firebase config credentials and update the `.env` file:  
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### **4️⃣ Setup Stripe**  
1. Create a Stripe account at [Stripe Dashboard](https://dashboard.stripe.com/).  
2. Get your **Publishable Key** and **Secret Key**.  
3. Add them to the `.env` file:  
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=your_publishable_key
   ```

### **5️⃣ Run the Project**  
```sh
npm run dev
```
The project should now be running at `http://localhost:5173/`.

---

## **npm Packages Used 🏹**  
- @stripe/react-stripe-js  
- @stripe/stripe-js  
- @tanstack/react-query  
- axios  
- date-fns  
- firebase  
- jsonwebtoken  
- jwt-decode  
- leaflet  
- react-dom  
- react-hook-form  
- react-hot-toast  
- react-icons  
- react-leaflet  
- react-modal  
- react-router-dom  
- sweetalert2  
- swiper  

---
