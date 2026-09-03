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
            script: "/home/thenujarathnayaka9/.sdkman/candidates/java/current/bin/java",
            args: "-Xms128m -Xmx256m -jar ./user-service/target/user-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/user-service.log",
            instances: 1,
        },
        {
            name: "salon-service",
            script: "/home/thenujarathnayaka9/.sdkman/candidates/java/current/bin/java",
            args: "-Xms128m -Xmx256m -jar ./salon-service/target/salon-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/salon-service.log",
            instances: 1,
        },
        {
            name: "appoinment-service",
            script: "/home/thenujarathnayaka9/.sdkman/candidates/java/current/bin/java",
            args: "-Xms128m -Xmx256m -jar ./appoinment-service/target/appointment-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/appointment-service.log",
            instances: 1,
        }
    ]
};