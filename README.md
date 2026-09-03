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

### 1. User/Member Service (`user-service`)
* **Role:** Profile management and Auth database.
* **Port:** Dynamic (Internal Routing Map: `8001`)
* **Database:** PostgreSQL (JPA / Hibernate)
* **Key Operations:**
  * Handles member and user profiles, credentials, security validations, and assigned roles.
  * Exposes profiles and user data to other microservices via REST endpoints.

### 2. Salon Service (`salon-service`)
* **Role:** Salon management, media handling, and image uploads.
* **Port:** Dynamic (Internal Routing Map: `8002`)
* **Database:** PostgreSQL (Production), MySQL (Dev)
* **Key Operations:**
  * Fetches member records from the User Service and service details using Spring RestClient (via load-balanced HTTP requests).
  * Implements salon image uploading, saving salon pictures and media directly to the GCS bucket under the virtual folder `salon-images/`.
  * Exposes salon details and image URLs to other microservices via REST endpoints.

### 3. Appointment Service (`appoinment-service`)
* **Role:** Routine definitions, booking records, and user-to-salon appointment management.
* **Port:** Dynamic (Internal Routing Map: `8083`)
* **Database:** MongoDB (via Spring Data MongoDB document repository)
* **Key Operations:**
  * Manages appointments allowing users to seamlessly book slots with specific salons.
  * Handles service definitions, scheduling, time slots, and categories.
  * Validates user and salon interactions across services via inter-service communication.

---

## 🚀 Getting Started

To build and run the core services locally or within the platform environment, use Maven:

```bash
cd user-service
./mvnw spring-boot:run