CREATE DATABASE IF NOT EXISTS `b9dw0vobstpr7etg0eho`;

USE `b9dw0vobstpr7etg0eho`;

CCREATE TABLE IF NOT EXISTS `b9dw0vobstpr7etg0eho`.`pomvideo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NULL,
  `descripcion` VARCHAR(100) NULL,
  `url` VARCHAR(300) NULL,
  `estado` TINYINT NULL,
  `usuario` VARCHAR(50) NULL,
  `fecha` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

DESCRIBE `b9dw0vobstpr7etg0eho`;

INSERT INTO b9dw0vobstpr7etg0eho.pomvideo VALUES
(3,'prueba nombre','prueba decripción', 'prueba ruta', 1,'prueba usuario', '2022-11-17')

CREATE TABLE IF NOT EXISTS `b9dw0vobstpr7etg0eho`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(100) NULL,
  `pass` VARCHAR(10) NULL,
  `roleId` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


INSERT INTO `b9dw0vobstpr7etg0eho`.`user` values
(2,'CHINI','chini','Admin');




select * from `b9dw0vobstpr7etg0eho`.`user`

