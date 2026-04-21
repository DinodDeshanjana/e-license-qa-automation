# 🚀 E-License QA Automation Testing Project

A complete **QA Automation Testing framework** built using **Playwright** to validate core workflows of an E-License Management System.

---

## 📌 Project Overview

This project focuses on automating key workflows of an E-License system, covering both **user interactions** and **admin operations**.

It includes **end-to-end automation of the core license application workflow**, from user application submission to final license issuance.

---

## 🧪 Test Coverage & Metrics

The automation suite includes **9 test cases** across 3 main modules:

### 🔐 Authentication Module (4 Test Cases)

* User registration with dynamic email generation
* User login validation (redirect to dashboard)
* Admin login validation (redirect to admin panel)
* Invalid login handling and error validation

### 🧾 User Application Module (4 Test Cases)

* Successful exam application submission
* Prevention of duplicate applications
* Form validation for empty submissions
* Route protection for unauthenticated users

### 🛠️ Admin End-to-End Workflow (1 Test Case)

Covers the complete lifecycle:

* Approve exam application
* Assign exam date
* Update result (Pass/Fail)
* Issue license
* Update license status

📌 Includes **end-to-end testing of the core workflow** from application to license issuance.

---

## ⚙️ Execution & Environment

* 🌐 Target Environment
* 🧹 Clean browser state before each test (cookies cleared)
* ⚡ Parallel test execution (Chromium)
* 📄 HTML Reporter enabled for test results

---

## 🛠️ Tech Stack

* **Language:** JavaScript
* **Framework:** Playwright (@playwright/test)
* **Runtime:** Node.js

---

## 🎯 Purpose

This project eliminates repetitive manual testing by automating functional verification of key workflows.

It ensures that new changes do not break existing functionality and helps maintain system reliability.

---

## 💡 Key Learnings

* Building a QA automation framework from scratch
* Writing maintainable and scalable test cases
* Designing end-to-end test scenarios
* Testing role-based systems (User & Admin)
* Handling validation, authentication, and workflows

---

## 📈 Future Improvements

* Add user profile management test coverage
* Add admin user management scenarios
* Expand negative and edge case testing
* Integrate CI/CD pipeline for automated test execution

---

## 🎯 Career Objective

I am actively seeking **QA Engineer Internship opportunities** to apply and expand my automation testing skills.

---

## 🔗 Repository

GitHub: [https://github.com/DinodDeshanjana/e-license-qa-automation.git](https://github.com/DinodDeshanjana/e-license-qa-automation.git)

---

## 🏷️ Tags

QA • Automation Testing • Playwright • JavaScript • Node.js • Software Testing • End-to-End Testing
