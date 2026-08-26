module.exports = {
    apps: [
        {
            name: "cloud-sql-auth-proxy",
            script: "./cloud-sql-proxy",
            args: "fitbuddy-505618:asia-south1:mysql-ins fitbuddy-505618:asia-south1:postgres-ins --private-ip",
            log_file: "./logs/cloud-sql-proxy.log",
        },
        {
            name: "user-service",
            script: "java",
            args: "-jar ./user-service/target/user-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/user-service.log",
            instances: 2,
        },
        {
            name: "salon-service",
            script: "java",
            args: "-jar ./salon-service/target/salon-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/salon-service.log",
            instances: 2,
        },
        {
            name: "appoinment-service",
            script: "java",
            args: "-jar ./appoinment-service/target/appoinment-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/appoinment-service.log",
            instances: 2,
        }
    ]
};