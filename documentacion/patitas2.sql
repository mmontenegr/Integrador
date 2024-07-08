-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-mmontenegr.alwaysdata.net
-- Generation Time: Jul 08, 2024 at 02:32 AM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mmontenegr_patitas2`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `profesionales_activos`
-- (See below for the actual view)
--
CREATE TABLE `profesionales_activos` (
`id_profesional` int(11)
,`x_cargo` varchar(200)
,`id_persona` int(11)
,`nombre` varchar(100)
,`apellido` varchar(500)
,`imagen` varchar(500)
);

-- --------------------------------------------------------

--
-- Table structure for table `ttipos_mascotas`
--

CREATE TABLE `ttipos_mascotas` (
  `id_tipo_mascota` int(11) NOT NULL,
  `tipo_mascota` varchar(45) DEFAULT NULL,
  `x_tipo_mascota` varchar(500) DEFAULT NULL,
  `f_insert` date DEFAULT NULL,
  `u_insert` varchar(45) DEFAULT current_timestamp(),
  `f_update` date DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` date DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_clientes`
--

CREATE TABLE `t_clientes` (
  `id_cliente` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='Base de Clientes de la veterinaria';

-- --------------------------------------------------------

--
-- Table structure for table `t_contactos`
--

CREATE TABLE `t_contactos` (
  `id_contacto` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `tipo_contacto` varchar(45) DEFAULT NULL,
  `x_contacto` varchar(2000) DEFAULT NULL,
  `f_insert` datetime DEFAULT current_timestamp(),
  `u_insert` varchar(45) DEFAULT 'current_user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL,
  `medio_contacto` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_especialidades`
--

CREATE TABLE `t_especialidades` (
  `id_especialidad` int(11) NOT NULL,
  `x_especialidad` varchar(200) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='Datos de especialidades veterinarias';

-- --------------------------------------------------------

--
-- Table structure for table `t_mascotas`
--

CREATE TABLE `t_mascotas` (
  `id_mascota` int(11) NOT NULL,
  `id_dueño` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `raza` varchar(50) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL,
  `id_tipo_mascota` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='mascotas de planes de Salud de la veterinaria';

-- --------------------------------------------------------

--
-- Table structure for table `t_personas`
--

CREATE TABLE `t_personas` (
  `id_persona` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(500) NOT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `mail` varchar(1000) DEFAULT NULL,
  `f_insert` datetime DEFAULT current_timestamp(),
  `f_baja` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_planes`
--

CREATE TABLE `t_planes` (
  `id_plan` int(11) NOT NULL,
  `codigo_plan` varchar(50) NOT NULL,
  `x_plan` varchar(20) NOT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='Planes de salud de la veterinaria';

-- --------------------------------------------------------

--
-- Table structure for table `t_profesionales`
--

CREATE TABLE `t_profesionales` (
  `id_profesional` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `x_cargo` varchar(200) NOT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='Base de profesionales de la veterinaria';

-- --------------------------------------------------------

--
-- Table structure for table `t_profesionales_especialidades`
--

CREATE TABLE `t_profesionales_especialidades` (
  `id_profesional` int(11) NOT NULL,
  `id_especialidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_profesionales_servicios`
--

CREATE TABLE `t_profesionales_servicios` (
  `id_profesional` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_servicios`
--

CREATE TABLE `t_servicios` (
  `id_servicios` int(11) NOT NULL,
  `x_servicio` varchar(200) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='Datos de Servicios brindados en la veterinaria';

-- --------------------------------------------------------

--
-- Table structure for table `t_socios_planes`
--

CREATE TABLE `t_socios_planes` (
  `id_socio` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_plan` int(11) NOT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='Socios de planes de Salud de la veterinaria';

-- --------------------------------------------------------

--
-- Table structure for table `t_usuarios`
--

CREATE TABLE `t_usuarios` (
  `id_usuario` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  `recordatorio_contraseña` varchar(150) DEFAULT NULL,
  `f_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `u_insert` varchar(45) NOT NULL DEFAULT 'user()',
  `f_update` datetime DEFAULT NULL,
  `u_update` varchar(45) DEFAULT NULL,
  `f_baja` datetime DEFAULT NULL,
  `u_baja` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci COMMENT='Base de usuarios de la veterinaria';

-- --------------------------------------------------------

--
-- Structure for view `profesionales_activos`
--
DROP TABLE IF EXISTS `profesionales_activos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`362814_patitas`@`%` SQL SECURITY DEFINER VIEW `profesionales_activos`  AS SELECT `pr`.`id_profesional` AS `id_profesional`, `pr`.`x_cargo` AS `x_cargo`, `p`.`id_persona` AS `id_persona`, `p`.`nombre` AS `nombre`, `p`.`apellido` AS `apellido`, `pr`.`imagen` AS `imagen` FROM (`t_personas` `p` join `t_profesionales` `pr`) WHERE `p`.`id_persona` = `pr`.`id_persona` AND `p`.`f_baja` is null AND `pr`.`f_baja` is null ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ttipos_mascotas`
--
ALTER TABLE `ttipos_mascotas`
  ADD PRIMARY KEY (`id_tipo_mascota`),
  ADD UNIQUE KEY `id_tipo_mascota_UNIQUE` (`id_tipo_mascota`),
  ADD UNIQUE KEY `tipo_mascota_UNIQUE` (`tipo_mascota`);

--
-- Indexes for table `t_clientes`
--
ALTER TABLE `t_clientes`
  ADD PRIMARY KEY (`id_cliente`),
  ADD KEY `clientes_persona_fk_idx` (`id_persona`);

--
-- Indexes for table `t_contactos`
--
ALTER TABLE `t_contactos`
  ADD PRIMARY KEY (`id_contacto`),
  ADD KEY `contactos_personas_fk` (`id_persona`);

--
-- Indexes for table `t_especialidades`
--
ALTER TABLE `t_especialidades`
  ADD PRIMARY KEY (`id_especialidad`),
  ADD UNIQUE KEY `x_especialidad_UNIQUE` (`x_especialidad`);

--
-- Indexes for table `t_mascotas`
--
ALTER TABLE `t_mascotas`
  ADD PRIMARY KEY (`id_mascota`),
  ADD KEY `mascotas_cliente_fk_idx` (`id_dueño`),
  ADD KEY `mascotas_tipo_mascota_fk_idx` (`id_tipo_mascota`);

--
-- Indexes for table `t_personas`
--
ALTER TABLE `t_personas`
  ADD PRIMARY KEY (`id_persona`);

--
-- Indexes for table `t_planes`
--
ALTER TABLE `t_planes`
  ADD PRIMARY KEY (`id_plan`);

--
-- Indexes for table `t_profesionales`
--
ALTER TABLE `t_profesionales`
  ADD PRIMARY KEY (`id_profesional`),
  ADD KEY `profesionales_persona_fk_idx` (`id_persona`);

--
-- Indexes for table `t_profesionales_especialidades`
--
ALTER TABLE `t_profesionales_especialidades`
  ADD KEY `profesional_especialidad_fk` (`id_especialidad`),
  ADD KEY `especialidad_profesional_fk` (`id_profesional`);

--
-- Indexes for table `t_profesionales_servicios`
--
ALTER TABLE `t_profesionales_servicios`
  ADD UNIQUE KEY `id_profesional_UNIQUE` (`id_profesional`),
  ADD UNIQUE KEY `id_servicio_UNIQUE` (`id_servicio`);

--
-- Indexes for table `t_servicios`
--
ALTER TABLE `t_servicios`
  ADD PRIMARY KEY (`id_servicios`),
  ADD UNIQUE KEY `x_servicio_UNIQUE` (`x_servicio`);

--
-- Indexes for table `t_socios_planes`
--
ALTER TABLE `t_socios_planes`
  ADD PRIMARY KEY (`id_socio`),
  ADD KEY `socios_planes_fk_idx` (`id_plan`),
  ADD KEY `socios_cliente_fk_idx` (`id_cliente`);

--
-- Indexes for table `t_usuarios`
--
ALTER TABLE `t_usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `usuarios_persona_fk_idx` (`id_persona`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ttipos_mascotas`
--
ALTER TABLE `ttipos_mascotas`
  MODIFY `id_tipo_mascota` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_clientes`
--
ALTER TABLE `t_clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_contactos`
--
ALTER TABLE `t_contactos`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_especialidades`
--
ALTER TABLE `t_especialidades`
  MODIFY `id_especialidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_mascotas`
--
ALTER TABLE `t_mascotas`
  MODIFY `id_mascota` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_personas`
--
ALTER TABLE `t_personas`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_planes`
--
ALTER TABLE `t_planes`
  MODIFY `id_plan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_profesionales`
--
ALTER TABLE `t_profesionales`
  MODIFY `id_profesional` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_servicios`
--
ALTER TABLE `t_servicios`
  MODIFY `id_servicios` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_socios_planes`
--
ALTER TABLE `t_socios_planes`
  MODIFY `id_socio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_usuarios`
--
ALTER TABLE `t_usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `t_clientes`
--
ALTER TABLE `t_clientes`
  ADD CONSTRAINT `clientes_persona_fk` FOREIGN KEY (`id_persona`) REFERENCES `t_personas` (`id_persona`);

--
-- Constraints for table `t_contactos`
--
ALTER TABLE `t_contactos`
  ADD CONSTRAINT `contactos_personas_fk` FOREIGN KEY (`id_persona`) REFERENCES `t_personas` (`id_persona`);

--
-- Constraints for table `t_mascotas`
--
ALTER TABLE `t_mascotas`
  ADD CONSTRAINT `mascotas_cliente_fk` FOREIGN KEY (`id_dueño`) REFERENCES `t_clientes` (`id_cliente`),
  ADD CONSTRAINT `mascotas_tipo_mascota_fk` FOREIGN KEY (`id_tipo_mascota`) REFERENCES `ttipos_mascotas` (`id_tipo_mascota`);

--
-- Constraints for table `t_profesionales`
--
ALTER TABLE `t_profesionales`
  ADD CONSTRAINT `profesionales_persona_fk` FOREIGN KEY (`id_persona`) REFERENCES `t_personas` (`id_persona`);

--
-- Constraints for table `t_profesionales_especialidades`
--
ALTER TABLE `t_profesionales_especialidades`
  ADD CONSTRAINT `especialidad_profesional_fk` FOREIGN KEY (`id_profesional`) REFERENCES `t_profesionales` (`id_profesional`),
  ADD CONSTRAINT `profesional_especialidad_fk` FOREIGN KEY (`id_especialidad`) REFERENCES `t_especialidades` (`id_especialidad`);

--
-- Constraints for table `t_profesionales_servicios`
--
ALTER TABLE `t_profesionales_servicios`
  ADD CONSTRAINT `profesional_servicio_fk` FOREIGN KEY (`id_servicio`) REFERENCES `t_servicios` (`id_servicios`),
  ADD CONSTRAINT `servicio_profesional_fk` FOREIGN KEY (`id_profesional`) REFERENCES `t_profesionales` (`id_profesional`);

--
-- Constraints for table `t_socios_planes`
--
ALTER TABLE `t_socios_planes`
  ADD CONSTRAINT `socios_cliente_fk` FOREIGN KEY (`id_cliente`) REFERENCES `t_clientes` (`id_cliente`),
  ADD CONSTRAINT `socios_planes_fk` FOREIGN KEY (`id_plan`) REFERENCES `t_planes` (`id_plan`);

--
-- Constraints for table `t_usuarios`
--
ALTER TABLE `t_usuarios`
  ADD CONSTRAINT `usuarios_persona_fk` FOREIGN KEY (`id_persona`) REFERENCES `t_personas` (`id_persona`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
