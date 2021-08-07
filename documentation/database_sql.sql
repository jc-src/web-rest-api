-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rest_api
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rest_api
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rest_api` DEFAULT CHARACTER SET utf8 ;
USE `rest_api` ;

-- -----------------------------------------------------
-- Table `rest_api`.`virtual_machine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rest_api`.`virtual_machine` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(175) NOT NULL,
  `cpu` SMALLINT(4) UNSIGNED NOT NULL DEFAULT 1,
  `ram` SMALLINT(4) UNSIGNED NULL DEFAULT 1,
  `disk` SMALLINT(4) UNSIGNED NULL DEFAULT 1,
  `disk_type` SMALLINT(4) UNSIGNED NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rest_api`.`virtual_volume`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rest_api`.`virtual_volume` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(175) NOT NULL,
  `disk` SMALLINT(4) UNSIGNED NOT NULL DEFAULT 1,
  `disk_type` SMALLINT(4) UNSIGNED NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rest_api`.`virtual_machine_volumes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rest_api`.`virtual_machine_volumes` (
  `virtual_machine_id` INT UNSIGNED NOT NULL,
  `virtual_volume_id` INT UNSIGNED NOT NULL,
  INDEX `fk_virtual_machine_volumes_virtual_machine_idx` (`virtual_machine_id` ASC) VISIBLE,
  INDEX `fk_virtual_machine_volumes_virtual_volume1_idx` (`virtual_volume_id` ASC) VISIBLE,
  UNIQUE INDEX `unq_virtual_machine_vol` (`virtual_machine_id` ASC, `virtual_volume_id` ASC) VISIBLE,
  CONSTRAINT `fk_virtual_machine_volumes_virtual_machine`
    FOREIGN KEY (`virtual_machine_id`)
    REFERENCES `rest_api`.`virtual_machine` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_virtual_machine_volumes_virtual_volume1`
    FOREIGN KEY (`virtual_volume_id`)
    REFERENCES `rest_api`.`virtual_volume` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
