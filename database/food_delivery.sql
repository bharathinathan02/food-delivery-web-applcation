-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2024 at 01:07 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agro_culture`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uname` varchar(40) NOT NULL,
  `pass` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uname` varchar(40) NOT NULL,
  `pass` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `uname`, `pass`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(3, '2024_01_04_065525_create_rt_retailer_table', 1),
(5, '2024_01_04_075005_create_admins_table', 2),
(6, '2024_01_04_100326_create_rt_category_table', 2),
(7, '2024_01_04_114816_create_rt_product_table', 3),
(8, '2024_01_06_044920_create_rt_cart_table', 4),
(9, '2024_01_07_072144_create_rt_review_table', 5),
(10, '2024_01_08_065913_create_rt_forum_table', 6),
(11, '2024_01_08_070114_create_rt_answer_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rt_answer`
--

CREATE TABLE `rt_answer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `postedby` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `question` varchar(100) NOT NULL,
  `answer` varchar(1000) NOT NULL,
  `answerby` varchar(100) NOT NULL,
  `rdate` varchar(100) NOT NULL,
  `catid` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `rt_cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uname` varchar(100) NOT NULL,
  `pid` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `rdate` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL,
  `uqut` varchar(100) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `pname` varchar(100) NOT NULL,
  `pimage` varchar(100) NOT NULL,
  `retailer` varchar(100) NOT NULL,
  `deli_mode` varchar(100) NOT NULL,
  `shipping_address` varchar(100) NOT NULL,
  `d_status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `rt_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `retailer` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `rt_forum` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` varchar(100) NOT NULL,
  `subcategory` varchar(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `rdate` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `rt_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `retailer` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `product` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `details` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `required_qty` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `rt_retailer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(60) NOT NULL,
  `city` varchar(60) NOT NULL,
  `mobile` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `proof` varchar(60) NOT NULL,
  `uname` varchar(60) NOT NULL,
  `pass` varchar(60) NOT NULL,
  `create_date` varchar(60) NOT NULL,
  `status` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `rt_review` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uname` varchar(100) NOT NULL,
  `pid` varchar(100) NOT NULL,
  `review` varchar(100) NOT NULL,
  `cid` varchar(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `rdate` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `otp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `rt_answer`
--
ALTER TABLE `rt_answer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rt_cart`
--
ALTER TABLE `rt_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rt_category`
--
ALTER TABLE `rt_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rt_forum`
--
ALTER TABLE `rt_forum`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rt_product`
--
ALTER TABLE `rt_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rt_retailer`
--
ALTER TABLE `rt_retailer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rt_review`
--
ALTER TABLE `rt_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rt_answer`
--
ALTER TABLE `rt_answer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rt_cart`
--
ALTER TABLE `rt_cart`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rt_category`
--
ALTER TABLE `rt_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rt_forum`
--
ALTER TABLE `rt_forum`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rt_product`
--
ALTER TABLE `rt_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rt_retailer`
--
ALTER TABLE `rt_retailer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rt_review`
--
ALTER TABLE `rt_review`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
