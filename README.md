<div align="center">

# 🛒 E-Commerce Product Listing  
### Frontend Assessment

</div>

## 🔴 Problem Statement

❤️ Thank you for the opportunity to work on this frontend assessment.

The goal of this project was to build a **modern, responsive e-commerce interface** where users can:

- 🛍️ Browse products  
- 🔍 Search items  
- 🎯 Apply filters  
- ➕ Add items to a cart with real-time updates  

The application is developed using **Next.js** and **Tailwind CSS**, with a focus on:

- ⚡ Clean UI & smooth user experience  
- 🧩 Reusable, component-based architecture  
- 🧠 Efficient state management using React Context API  
- 🛒 Cart functionality with quantity handling & persistence  
## 🔴 Assessment Requirements

The assessment required building a frontend application that includes:

- A product listing page
- Filters for product categories
- Search functionality
- Price range filter
- Add to Cart feature
- Cart count update on adding items
- Responsive UI
- Clean and readable code structure

---

## 🔴 How I Built This Project (Step-by-Step)

### 🧱 Step 1: Project Setup
- Created the project using **Next.js (App Router)**
- Configured **Tailwind CSS** for styling
- Set up global styles and layout

---

### 🧩 Step 2: Component-Based Architecture
The UI is broken into reusable components:

- **Header** – Logo, search bar, cart count  
- **Sidebar** – Category and price filters  
- **ProductCard** – Product details and Add to Cart button  
- **Footer** – Links and social icons  

This keeps the code clean and easy to maintain.

---

### 🛍️ Step 3: Product Listing
- Products are rendered using static data
- Displayed in a responsive grid layout
- One product is highlighted as a featured item

---

### 🎯 Step 4: Filters & Search
- Category filter using radio buttons
- Price filter using slider
- Search filter using text input
- All filters work together dynamically

---

### 🛒 Step 5: Cart Functionality
- Implemented cart logic using **React Context API**
- Clicking **Add to Cart**:
  - Increases cart count
  - Updates quantity if the same product is added again
- Cart data is stored in **localStorage** for persistence

---

### 🎨 Step 6: UI Styling
- Styled completely using **Tailwind CSS**
- Applied light blue global background
- Ensured responsive layout for mobile and desktop
- UI inspired by the provided assessment reference

---

### 🚀 Step 7: Deployment
- Code pushed to GitHub
- Deployed using **Vercel**
- Automatic build and live hosting

---

## 🔴 Features Implemented

- ✅ Product listing UI
- ✅ Category & price filters
- ✅ Search functionality
- ✅ Add to cart with quantity handling
- ✅ Cart count updates in real time
- ✅ Persistent cart using localStorage
- ✅ Responsive design
- ✅ Clean component structure

---

## 🔴 Folder Structure

```
├── app/
│   ├── layout.tsx        # Root layout with CartProvider
│   ├── page.tsx          # Main page
│   ├── globals.css       # Global styles
│
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
│
├── context/
│   └── CartContext.tsx   # Cart state management
│
├── data/
│   └── products.ts      # Static product data
│
├── screenshots/
│   └── (add screenshots here)
│
└── README.md
```
---

## 🔴 Home Page

<img width="1892" height="867" alt="Screenshot 2026-01-09 113043" src="https://github.com/user-attachments/assets/6e9fd2fd-838f-4b44-bf10-8a0a4141a3ba" />

## 🔴 Live Project Links

- 🌐 **Live Website (Vercel):**
-    https://whatbytes-frontend-assignment-eight.vercel.app/

- 💻 **GitHub Repository:**
- https://github.com/raj2201641540078/whatbytes-frontend-assignment

---

## 🙏 Thank You

Thank you for providing me with the opportunity to complete this frontend assessment.
This assignment allowed me to demonstrate my understanding of frontend development principles, component-based architecture, and user interface design. I appreciate the time and consideration taken to review my work.
I look forward to your feedback and the possibility of discussing this project further.
