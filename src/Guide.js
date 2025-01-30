// src/Guide.js

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Optional: Only if you have other GFM features
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const guideContent = `
# 🚀 RBAC Demo Guide

Welcome to the **RBAC Demo Guide**! This guide will walk you through showcasing Role-Based Access Control (RBAC) to your customers using our application. Follow the steps below to demonstrate how different user roles can access specific courses and how permissions are managed securely.

## 📋 Table of Contents

1. [Test User Credentials](#test-user-credentials)
2. [Demo Overview](#demo-overview)
3. [Additional Resources](#additional-resources)
4. [Coming Soon](#coming-soon)

---

## 🧑‍💻 1. Test User Credentials

To effectively demonstrate RBAC, we'll use two test **Student** users and two test **Instructor** users. Below are their credentials:

### **Student Users**

- **Student 1**
  - **Username:** \`alice@atko.email\`
  - **Password:** \`Secur3P@ss2\`

- **Student 2**
  - **Username:** \`bob@atko.email\`
  - **Password:** \`Secur3P@ss2\`

### **Instructor Users**

- **Instructor 1**
  - **Username:** \`charlie@atko.email\`
  - **Password:** \`Instruct0r3!\`

- **Instructor 2**
  - **Username:** \`diana@atko.email\`
  - **Password:** \`Instruct0r3!\`

> **Note:** These are test accounts intended for demonstration purposes only. 

---

## 🔍 2. Demo Overview

This demo showcases how different user roles interact with the application, accessing specific courses based on their permissions.

### 🔹 For Student Users

1. **Login:**
   - Navigate to the application URL: \`https://oktackle-university-rbac.vercel.app\`
   - Click on the **Login** button.
   - Enter the credentials for **Student 1** or **Student 2**.

2. **Accessing Student Courses:**
   - Upon successful login, you'll see a **"Student Course"** button.
   - Click on the **"Student Course"** button to view available student courses.
   - These courses are tailored based on the student's permissions.

3. **Inspecting Access Tokens:**
   - Open **Chrome Developer Tools** (\`F12\` or \`Ctrl + Shift + I\`).
   - Navigate to the **Network** tab.
   - Refresh the page and initiate the login process again.
   - Locate the network request for authentication (usually to \`/token\`).
   - Find the **Access Token** in the response.
   - Copy the token and paste it into [JWT.io](https://jwt.io/) to inspect its payload.
   - Observe the **permissions** associated with the student's role.

###### 🔹 Repeat the same with the Instructor's credentials as well. Note that, **Instructor Charlie has access to only an Instructor's course** and **Instructor Diana has access to both Instructors and Students courses**. So you can tailor your demo accordingly.
---

## 📚 3. Additional Resources

- **Auth0 RBAC Documentation:** [https://auth0.com/docs/authorization/rbac](https://auth0.com/docs/authorization/rbac)
- **JWT.io:** [https://jwt.io/](https://jwt.io/)

---

## 📝 4. Coming Soon

Stay tuned! A detailed blog post will be available soon, diving deeper into RBAC implementation.

---

## 👏 Thank You!

I hope this guide enhances your ability to demonstrate RBAC effectively. Should you have any questions or need further assistance, feel free to reach out. Happy demonstrating! 🚀

---
`;

const Guide = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        
      </Typography>
      <ReactMarkdown children={guideContent} remarkPlugins={[remarkGfm]} />
    </Container>
  );
};

export default Guide;
