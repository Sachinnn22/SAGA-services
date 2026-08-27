# SAGA Core Services 🚀

Welcome to the core business services repository for the **SAGA** ecosystem. This directory houses the core domain services, inter-service communication handlers, and cloud storage integrations.

---

## 👤 Student Information

* **Student Name:** Sachindu Chirau
* **Student ID:** `241711023`
* **GCP Project ID:** `directed-post-506508-i4`

---

## 🛠️ Common Services Stack

* **Programming Language:** Java 25
* **Core Framework:** Spring Boot 4.0.1 / 4.1.0
* **Service Coordination:** Spring Cloud 2025.1.2 & Spring RestClient
* **Cloud Storage SDK:** Google Cloud Storage (GCS) Libraries BOM (26.86.0)
* **Build System:** Maven

---

## 📦 Domain Service Child Repositories

The platform consists of three core business domain services:

### 1. User/Member Service (`user-service` / `user-service`)
* **Role:** Profile management, Auth database, and Avatar/Media uploads.
* **Port:** Dynamic (Internal Routing Map: `8082`)
* **Database:** PostgreSQL (JPA / Hibernate)
* **Key Operations:**
  * Handles member and user profiles, credentials, security validations, and assigned roles.
  * Implements image uploading, saving profile pictures directly to the GCS bucket root (`directed-post-506508-i4-assets` or similar bucket).
  * Exposes profiles and user data to other microservices via REST endpoints.

### 2. Fitness Service (`salon-service`)
* **Role:** Progress reporting, PDF compiler, and cloud report uploads.
* **Port:** Dynamic (Internal Routing Map: `8081`)
* **Database:** PostgreSQL (Production), MySQL (Dev)
* **Key Operations:**
  * Fetches member records from the User Service and workout details using Spring RestClient (via load-balanced HTTP requests).
  * Uses OpenPDF to construct progress graphs and reports directly in-memory (returning a raw byte stream).
  * Uploads generated PDF files to the bucket under the GCS virtual folder `fitness-report/`.
  * Downloads and streams the PDFs as a standard Spring `Resource`.

### 3. Workout Service (`appoinment-service`)
* **Role:** Routine definitions, set records, and progress trackers.
* **Port:** Dynamic (Internal Routing Map: `8083`)
* **Database:** MongoDB (via Spring Data MongoDB document repository)
* **Key Operations:**
  * Manages routines, exercises, difficulties, set sizes, and target muscle groups.
  * Tracks routine completion rates and logs individual member history metrics.

---

## 🚀 Getting Started

To build and run the core services locally or within the platform environment, use Maven:

```bash
cd user-service
./mvnw spring-boot:run