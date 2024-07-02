---
title: "Document"
meta_title: ""
description: "this is meta description"
draft: false
---

### Getting Started 

Adopting cloud-based development models for applications aims to globally enhance their mission support. A "cloud-native" application is easier to update, less prone to errors, and quicker to resolve them. This translates into economic benefits and greater customer satisfaction due to faster responses. It is also more robust, designed to withstand issues by leveraging infrastructure features, and more open, allowing applications to interact regardless of the technology used. However, the wide range of available technologies, as highlighted by numerous projects from the Cloud Native Computing Foundation, makes composing the "technology stack" a complex task, influenced by design and organizational choices. This complexity can become a hurdle in creating mission-critical software. To address this, we propose Navarcos, a product that serves as the crossroads for creating such applications in a simple, scalable, secure, and easily maintainable environment. 

### Target 

We analyze Navarcos architecture, platforms, and the entire operational context surrounding this product. Additionally, we propose best practices for designing, implementing, and managing the lifecycle of applications. 

 

### Project Introduction 

Navarcos is the environment where the PaaS is created and managed. We use the same technologies and processes for our software engineering that we recommend to our clients. 

This environment supports the entire lifecycle of the platform, from its creation to its maintenance. By using the same technologies and methodologies recommended to clients, Navarcos ensures consistency and cohesion between the development of the PaaS and the recommended practices. This homogeneous approach allows developers to work in a familiar and optimized environment, reducing the time and effort required to implement and manage the PaaS. 

Navarcos offers a robust and flexible infrastructure designed to support the dynamic needs of cloud-based applications. This ecosystem provides tools and resources to automate complex processes, ensuring efficiency and scalability. Additionally, it facilitates collaboration between multidisciplinary teams, enabling clear communication and efficient resource sharing. Thanks to its modular nature, Navarcos can be adapted and extended to meet the specific needs of various applications and industrial sectors. 

Navarcos' approach to PaaS creation and management is based on principles of agility and continuous innovation. This ecosystem fosters rapid and iterative development, allowing developers to quickly adapt to changing project requirements and new technological trends. Through the implementation of DevOps practices and automated continuous integration and continuous deployment (CI/CD) processes, Navarcos supports a fast and reliable development cycle. Finally, Navarcos is designed to be highly reliable and secure, ensuring data protection and operational continuity of applications hosted on the platform. 

 

### Architecture 

We can divide the architecture of Navarcos into several categories: 

#### Preconditions  

#### Infra Components  

#### Service Components  

#### Components 

Preconditions include all the preliminary conditions necessary for the implementation and operation of Navarcos. This might involve hardware and software requirements, network and security configurations, as well as other external dependencies necessary to ensure the proper functioning of the ecosystem. 

Infra Components encompass all the infrastructure components that form the foundation of Navarcos. These might include servers, storage, networks, databases, and other infrastructure services needed to support the execution of applications on the platform. 

Service Components comprise the various services and functionalities offered by Navarcos to support the development, deployment, and management of applications. This might include container orchestration services, monitoring services, identity and access management services, as well as other services related to the application lifecycle management. 

Components is the most generic category and includes a wide range of specific components used within Navarcos. 

For each category, we can analyze the components: 

Preconditions 

DNS 

C.A. Certificates 

Infra Components 

Tigera 

Calico 

ClusterAPI 

KubeVip 

vSphere CSI 

vSphere CPI 

Service Components 

Prometheus 

OpenSearch 

KubeVip 

Components 

Keycloak 

 

#### What is the Navarcos Workflow? 

The Navarcos workflow is designed to provide a smooth and efficient experience in developing, deploying, and managing cloud-native applications. Through an integrated and automated approach, Navarcos simplifies complex development and management operations, allowing developers to focus on creating value for customers. 

#### Preparation 

Filling out the values.yaml file 

Generating Linkerd certificates 

Cluster Setup 

Creating local ClusterAPI 

Creating remote cluster (via local clusterapi) 

Installing "Tigera Operator" 

Installing "Service Components" 

Installing local ClusterAPI from remote 

Migrating remote management cluster 

Installing Navarcos 

Installing components 

Cert Manager 

Keycloak 

Creating Navarcos realm 

Creating clients for each component that requires OIDC 

Installing components (that require OIDC) 

 

#### Navarcos GUI? There is PLANCIA! 

To provide an optimal experience to customers, Skafos offers an intuitive and user-friendly graphical interface known as "plancia." This platform serves as an essential bridge for managing Skafos resources, providing users with complete control and a clear view of their operations. The interface is designed to be easily accessible and understandable, even for less experienced users, facilitating interaction with the platform and reducing the learning curve. Through the plancia, users can monitor the status of their Skafos instances, view metrics and activity logs, and manage resources intuitively and efficiently. 

The plancia offers a range of advanced features, including configuration management, resource scalability, and access control. Users can easily configure and customize their Skafos instances, adapting them to the specific needs of their applications. Thanks to granular controls and role-based authorizations, the plancia ensures the security and integrity of Skafos resources, protecting sensitive data and preventing unauthorized access. 

Additionally, the plancia provides an interactive interface for monitoring application performance and troubleshooting issues. Users can view resource usage metrics in real-time, identify performance issues, and take immediate action to resolve them. With integrated logging and tracing tools, users can trace the origin of errors and analyze diagnostic data to continuously improve the performance of their applications. 

Finally, the plancia promotes collaboration and communication among users, allowing them to share information, documentation, and best practices. Through discussion forums, chat, and online support, users can get immediate assistance and share knowledge with the Skafos community. In this way, the plancia becomes not only a resource management tool but also a meeting and exchange point for Skafos users, contributing to creating an active and collaborative community. 