-- Dumping database structure for burgers_db
CREATE DATABASE IF NOT EXISTS `burgers_db`;
USE `burgers_db`;

-- Dumping structure for table burgers_db.burgers
CREATE TABLE IF NOT EXISTS `burgers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(50) NOT NULL DEFAULT '0',
  `devoured` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
