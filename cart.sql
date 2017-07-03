-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2017 at 11:04 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cart`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `address`, `created_at`, `updated_at`) VALUES
(1, 1, '301, Sun Nivas Bldg, Sec-12, Plot-12, Vashi, Navi Mumbai, 400703', '2017-05-17 04:28:33', '2017-05-17 04:28:33'),
(2, 1, '795, Folsom Ave, Suite 600, San Francisco, CA , 94107', '2017-05-17 04:45:23', '2017-05-17 04:45:23'),
(8, 2, 'Central Library Building, 1st Floor , Near Y.M.C.A., Plot no. sector 4, Belapur, C.B.D., Navi Mumbai, 400614', '2017-05-17 07:14:26', '2017-05-17 07:14:26'),
(12, 3, 'Hoechst House, 10th Floor, 193 Backbay Reclamation, Nariman Point, Mumbai, 400021', '2017-05-23 03:49:47', '2017-05-23 03:49:47'),
(13, 4, '301, Sun Niwas Bldg, Sec-12, Plot-12, Vashi, Mumbai, 400703', '2017-06-24 17:25:52', '2017-06-24 17:25:52'),
(14, 5, '192A, Neel Siddhi Tower, Nerul East,Near Oriental Bank of Commerce, Navi Mumbai, 400162', '2017-06-25 13:21:22', '2017-06-25 13:21:22'),
(15, 6, 'Skyview Apt., Sec-28, Plot-102, Sanpada, Near Beaverly hills showroom, Navi Mumbai, 894272', '2017-06-25 13:25:23', '2017-06-25 13:25:23'),
(16, 7, '728 Poplar Street Chicago, IL, United States, 60605', '2017-07-03 14:32:43', '2017-07-03 14:32:43');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `product_id`, `user_id`, `count`, `created_at`, `updated_at`) VALUES
(8, 18, 7, 1, '2017-07-03 14:30:45', '2017-07-03 14:30:45'),
(9, 11, 7, 1, '2017-07-03 14:30:58', '2017-07-03 14:30:58'),
(11, 10, 1, 1, '2017-07-03 15:12:46', '2017-07-03 15:12:46');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Running', '', NULL, NULL),
(2, 'Football', '', NULL, NULL),
(3, 'Lifestyle', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(10, '2014_10_12_000000_create_users_table', 1),
(11, '2014_10_12_100000_create_password_resets_table', 1),
(12, '2017_04_16_052409_create_products_table', 1),
(13, '2017_04_22_132438_create_categories_table', 1),
(15, '2017_04_22_132714_create_carts_table', 1),
(16, '2017_04_22_132722_create_wishlists_table', 1),
(19, '2017_05_17_085557_create_user_address_table', 2),
(20, '2017_04_22_132659_create_transactions_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image_url`, `description`, `count`, `category`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Air Max', 45, 'Air Max.png', 'Seamlessly designed with support and breathability right where you need it, the Nike Air Max 2017 Men\'s Running Shoe features a Flymesh upper combined with the plush cushioning of a full-length Max Air unit.', 0, 1, NULL, NULL, NULL),
(2, 'Free RN', 69, 'Free RN.png', 'The Nike Free RN Flyknit 2017 Men\'s Running Shoe brings you miles of comfort with an exceptionally flexible outsole for the ultimate natural ride. Flyknit fabric wraps your foot for a snug, supportive fit while a tri-star outsole expands and flexes to let your foot move naturally.', 50, 1, NULL, NULL, NULL),
(3, 'Lunar Epic', 59, 'Lunar Epic.png', 'The Nike LunarEpic Low Flyknit 2 Men\'s Running Shoe improves on its predecessor with an updated slip-on design for a snug, seamless fit. The same luxurious cushioning and targeted support remain to help you tackle your longest distances.', 99, 1, NULL, NULL, NULL),
(4, 'Zoom Flyknit', 99, 'Zoom Flyknit.png', 'The Nike Zoom Flyknit Streak Unisex Racing Shoe delivers ultralight support and responsive cushioning to help you fly by the competition.', 19, 1, NULL, NULL, NULL),
(5, 'Mercurial Vortex', 89, 'Mercurial Vortex.png', 'The Nike Mercurial Vortex III CR7 Firm-Ground Football Boot is designed for today\'s fast-paced game on short-grass pitches. Ribbing in the upper provides a textured surface so you can pass, dribble and strike with more precision.', 10, 2, NULL, NULL, NULL),
(6, 'Tiempo Genio', 79, 'Tiempo Genio.png', 'The Nike Tiempo Genio II Leather Firm-Ground Football Boot excels on short-grass pitches with bladed and conical studs placed in strategic locations. A soft, full-grain leather upper offers precise dribbling, passing and striking.', 80, 2, NULL, NULL, NULL),
(7, 'Mercurial X', 49, 'Mercurial X.png', 'The Nike MercurialX Proximo II CR7 Dynamic Fit Indoor/Court Football Shoe features a lightweight, breathable upper and full-length cushioning for comfort during fast-paced play, indoors and on the street.', 180, 2, NULL, NULL, NULL),
(8, 'Hypervenom Phantom', 48, 'Hypervenom Phantom.png', 'The Nike HypervenomX Phade 3 Turf Football Shoe expands your strike zone with an asymmetrical lacing system and offers superb touch with a textured upper.', 20, 2, NULL, NULL, NULL),
(9, 'Air Force', 39, 'Air Force.png', 'The legend lives on in the Nike Air Force 1 \'07 Men\'s Shoe, a modern take on the icon that blends classic style and fresh, crisp details.', 90, 3, NULL, NULL, NULL),
(10, 'Air Max', 69, 'Air Maxx.png', 'The Nike Air Max LD-Zero Unisex Shoe fuses an LD-1000 upper with full-length Max Air cushioning to deliver a truly unique, modern icon. It pulls inspiration from the original design by Hiroshi Fujiwara, long-time Nike collaborator and designer behind the fashion label fragment.', 190, 3, NULL, NULL, NULL),
(11, 'Air Presto', 39, 'Air Presto.png', 'The Nike Air Presto Ultra Breathe Men\'s Shoe takes Nike Presto\'s famous T-Shirt-like fit and delivers a soft, breathable material for maximum airflow with minimum weight.', 70, 3, NULL, NULL, NULL),
(12, 'Aqua Sock', 39, 'Aqua Sock.png', 'The Nike Air Sock Racer Ultra Flyknit Men\'s Shoe resurrects the racing legend as a lifestyle sneaker, modernised with Nike Flyknit fabric for an ultralight feel.', 0, 3, NULL, NULL, NULL),
(13, 'Roshe Two', 25, 'Roshe Two.png', 'As light and flexible as the original, the Nike Roshe Two Men\'s Shoe features triple-layer cushioning for a soft underfoot feel and a breathable, stretchy upper that contours to your foot for a custom fit.', 10, 3, NULL, NULL, NULL),
(15, 'Magista Obra', 99, 'Magista Obra.png', 'The Nike Magista Obra II FG Firm-Ground Football Boot provides precise touch and an enhanced fit to help you perform playmaking moves on the pitch. Its firm-ground (FG) studs are designed for use on short-grass pitches that may be slightly wet but rarely muddy.', 30, 3, NULL, '2017-05-29 06:28:19', '2017-05-29 06:28:19'),
(17, 'SB Zoom', 79, 'SB Zoom.png', 'Designed with insights from a legendary athlete, the Nike SB Zoom Stefan Janoski OG Men\'s Skateboarding Shoe features a premium suede upper and low-profile cushioning for a clean, classic look and responsive impact protection. A flexible rubber outsole with herringbone traction offers exceptional grip and boardfeel.', 4, 1, NULL, '2017-05-29 07:18:56', '2017-05-29 07:18:56'),
(18, 'Sock Dart', 89, 'Sock Dart.png', 'The Nike Sock Dart Unisex Shoe knocks your socks off with a soft upper that surrounds your foot in comfort and just enough structure to add stability.', 5, 1, NULL, '2017-07-03 11:38:24', '2017-07-03 11:38:24'),
(19, 'HyperDunk', 149, 'HyperDunk.png', 'Designed for unstoppable playmaking on the pitch, the Magista football boot gets re-engineered for the street in the Nike Lunar Magista II Flyknit FC Men\'s Shoe with a Flyknit upper and a lightweight sole.', 10, 3, NULL, '2017-07-03 13:58:10', '2017-07-03 13:58:10');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `product_id`, `status`, `count`, `address`, `created_at`, `updated_at`) VALUES
(1, 3, 9, 'Pending', 1, 12, '2017-05-23 03:51:09', '2017-05-23 03:51:09'),
(2, 3, 7, 'Pending', 1, 12, '2017-05-23 03:51:09', '2017-05-23 03:51:09'),
(3, 1, 2, 'Pending', 1, 2, '2017-05-28 01:19:00', '2017-05-28 01:19:00'),
(4, 1, 8, 'Pending', 1, 1, '2017-06-22 14:53:08', '2017-06-22 14:53:08'),
(5, 1, 12, 'Pending', 1, 1, '2017-06-22 14:53:08', '2017-06-22 14:53:08'),
(6, 4, 6, 'Pending', 1, 13, '2017-06-24 17:25:56', '2017-06-24 17:25:56'),
(7, 5, 17, 'Pending', 1, 14, '2017-06-25 13:21:38', '2017-06-25 13:21:38'),
(8, 5, 8, 'Pending', 1, 14, '2017-06-25 13:21:39', '2017-06-25 13:21:39'),
(9, 6, 7, 'Pending', 1, 15, '2017-06-25 13:25:30', '2017-06-25 13:25:30'),
(10, 1, 9, 'Delivered', 1, 1, '2017-06-30 03:15:16', '2017-06-30 03:15:16'),
(11, 1, 15, 'Pending', 1, 2, '2017-07-03 11:03:32', '2017-07-03 11:03:32'),
(12, 6, 18, 'Pending', 1, 15, '2017-07-03 13:02:32', '2017-07-03 13:02:32'),
(13, 7, 18, 'Pending', 1, 16, '2017-07-03 14:32:46', '2017-07-03 14:32:46'),
(14, 7, 11, 'Pending', 1, 16, '2017-07-03 14:32:46', '2017-07-03 14:32:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Chetan', 'chetankalra11@gmail.com', '863225', NULL, '2017-05-17 03:51:39', '2017-05-17 03:51:39'),
(2, 'Admin', 'admin@itlh.in', '863225', NULL, '2017-05-17 07:12:28', '2017-05-17 07:12:28'),
(3, 'Joey', 'joey@gmail.com', '863225', NULL, '2017-05-23 03:42:46', '2017-05-23 03:42:46'),
(4, 'Shivam', 'shivrocks@gmail.com', '863225', NULL, '2017-06-24 16:17:05', '2017-06-24 16:17:05'),
(5, 'Clay', 'clayjen@gmail.com', '863225', NULL, '2017-06-25 13:17:01', '2017-06-25 13:17:01'),
(6, 'Jonathan Ross', 'jross@gmail.com', '863225', NULL, '2017-06-25 13:23:19', '2017-06-25 13:23:19'),
(7, 'Parth Desai', 'pdesai@gmail.com', '863225', NULL, '2017-07-03 14:26:55', '2017-07-03 14:26:55'),
(8, 'Dipesh thali', 'dipesh@gmail.com', 'i_am_dipesh', NULL, '2017-07-03 15:00:18', '2017-07-03 15:00:18');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(13, 3, 8, '2017-05-23 04:01:26', '2017-05-23 04:01:26'),
(26, 5, 4, '2017-06-25 13:18:33', '2017-06-25 13:18:33'),
(27, 5, 1, '2017-06-25 13:18:41', '2017-06-25 13:18:41'),
(28, 6, 17, '2017-06-25 13:26:34', '2017-06-25 13:26:34'),
(29, 1, 4, '2017-06-26 04:39:24', '2017-06-26 04:39:24'),
(30, 1, 8, '2017-06-30 03:11:06', '2017-06-30 03:11:06'),
(32, 7, 20, '2017-07-03 14:30:22', '2017-07-03 14:30:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
