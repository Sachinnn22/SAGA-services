module.exports = {
    apps: [
        {
            name: "cloud-sql-auth-proxy",
            script: "./cloud-sql-proxy",
            args: "directed-post-506508-i4:asia-south1:postgres-ins --private-ip",
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
            name: "appointment-service",
            script: "java",
            args: "-jar ./appointment-service/target/appointment-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/appointment-service.log",
            instances: 2,
        }
    ]
};