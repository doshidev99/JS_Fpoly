-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 15, 2021 at 06:43 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblPosts`
--

CREATE TABLE `tblPosts` (
  `postId` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblPosts`
--

INSERT INTO `tblPosts` (`postId`, `title`, `content`, `create_date`) VALUES
(13, 'truong', '1', '2021-04-15 18:35:21'),
(14, 'truong', '2', '2021-04-15 18:35:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblPosts`
--
ALTER TABLE `tblPosts`
  ADD PRIMARY KEY (`postId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblPosts`
--
ALTER TABLE `tblPosts`
  MODIFY `postId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
