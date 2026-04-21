# 🚗 E-License QA Automation (Playwright)

A complete **QA Automation Testing Project** for an E-License Management System.
This project demonstrates **end-to-end testing, and admin workflows** using Playwright.

---

## 📌 Project Overview

This system simulates a real-world **E-License Management Platform**, where:

* Users can register and apply for exams
* Admins can approve applications
* Admins can add exam results
* Admins can issue and manage licenses

👉 This QA project automates the **entire workflow**

---

## 🧪 Testing Scope

### ✅ Automated Test Coverage

* 🔐 Authentication (Login / Signup)
* 🧾 Exam Application Process
* 🛠️ Admin Approval Workflow
* 📊 Exam Result Management
* 🎫 License Issuing & Status Updates

---

## 🔁 End-to-End Flow Tested

1. User registers & logs in
2. User applies for exam
3. Admin approves application
4. Admin adds exam result (Pass/Fail)
5. Admin issues license
6. Admin updates license status

---

## 🛠️ Tech Stack

* 🎭 Playwright (Automation)
* 🌐 PHP (Backend)
* 🗄️ MySQL (Database)
* 🎨 Bootstrap (Frontend)
* ⚙️ GitHub Actions (CI/CD)

---

## 📁 Project Structure

```
e-license-qa-automation/
│
├── tests/
│   ├── authentication/
│   │   ├── login.spec.js
│   │   ├── signup.spec.js
│   │
│   ├── user/
│   │   ├── applyExam.spec.js
│   │
│   ├── admin/
│   │   ├── admin-flow.spec.js
│
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/e-license-qa-automation.git
cd e-license-qa-automation
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Install Playwright Browsers

```
npx playwright install
```

---

### 4️⃣ Run Tests

```
npx playwright test
```

---


## 📊 Test Reports

After running tests:

```
npx playwright show-report
```

---

## 🌐 Test Environment

```
https://deshan.wuaze.com
```

---

## 🧠 QA Concepts Covered

* Functional Testing
* End-to-End Testing (E2E)
* Role-Based Access Control (RBAC)
* Negative Testing
* Data Validation
* Database Integrity Testing

---

## 📌 Future Improvements

* 🔥 Page Object Model (POM)
* 🔥 Allure Reporting
* 🔥 Parallel Test Execution
* 🔥 Test Data Management

---

## 👨‍💻 Author

**Dinod Deshanjana**
BSc. in Management Information Technology (MIT)

---

## ⭐ Support

If you like this project:

👉 Give it a ⭐ on GitHub
👉 Share it on LinkedIn

---

## 📢 Note

This project is built for **learning and portfolio purposes** to demonstrate real-world QA automation skills.
