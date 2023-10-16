-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 28, 2023 lúc 07:51 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tony4men`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payment`
--

CREATE TABLE `payment` (
  `customer_name` varchar(255) DEFAULT NULL,
  `contact_phone` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `order_details` text DEFAULT NULL,
  `payment` enum('Tiền mặt','Chuyển khoản') DEFAULT NULL,
  `data_product` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data_product`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `payment`
--

INSERT INTO `payment` (`customer_name`, `contact_phone`, `email`, `order_details`, `payment`, `data_product`) VALUES
('long2323123@gmail.com', '0342223605', 'long2323123@gmail.com', '123123', 'Tiền mặt', '[{\"id\":\"2\",\"name\":\"Áo Jacket Bò\",\"price\":400000,\"image\":\"images/10.jpg\",\"quantity\":1,\"total\":400000}]'),
('long2323123@gmail.com', '0342223605', 'long2323123@gmail.com', '123123', 'Tiền mặt', '[{\"id\":\"2\",\"name\":\"Áo Jacket Bò\",\"price\":400000,\"image\":\"images/10.jpg\",\"quantity\":1,\"total\":400000}]'),
('long2323123@gmail.com', '0342223605', 'long2323123@gmail.com', '123123', 'Chuyển khoản', '[{\"id\":\"2\",\"name\":\"Áo Jacket Bò\",\"price\":400000,\"image\":\"images/10.jpg\",\"quantity\":1,\"total\":400000},{\"id\":\"1\",\"name\":\"Áo Sơ Mi V.Ver V07\",\"price\":250000,\"image\":\"images/10.jpg\",\"quantity\":1,\"total\":250000}]'),
('lethanglong2807@gmail.com', '0342223605', 'long2323123@gmail.com', 'test', 'Tiền mặt', '[{\"id\":\"2\",\"name\":\"Áo Jacket Bò\",\"price\":400000,\"image\":\"images/10.jpg\",\"quantity\":1,\"total\":400000},{\"id\":\"1\",\"name\":\"Áo Sơ Mi V.Ver V07\",\"price\":250000,\"image\":\"images/10.jpg\",\"quantity\":2,\"total\":500000}]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `product_type` enum('áo nam','quần nam','phụ kiện','hàng mới') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `image2`, `image3`, `product_type`) VALUES
(1, 'Áo Sơ Mi V.Ver V07', 250000, 'images/4.jpg', 'images/6.jpg', 'images/7.jpg', 'áo nam'),
(2, 'Áo Jacket Bò', 400000, 'images/5.jpg', '', '', 'áo nam'),
(3, 'Áo Pull Wax T61182', 245000, 'images/6.jpg', '', '', 'áo nam'),
(4, 'Áo Bomber Bin F875', 365000, 'images/7.jpg', '', '', 'áo nam'),
(5, 'Áo Hoodie B.C 1712', 340000, 'images/8.jpg', '', '', 'áo nam'),
(6, 'Áo Pull B.C 1703', 310000, 'images/9.jpg', '', '', 'áo nam'),
(7, 'Áo Pull B.C 1706', 295000, 'images/10.jpg', '', '', 'áo nam'),
(8, 'Quần Jeans Côn G8111', 320000, 'images/15.jpg', '', '', 'quần nam'),
(9, 'Áo Sơ Mi 603', 300000, 'images/16.jpg', '', '', 'áo nam'),
(10, 'Áo Sơ Mi 604', 315000, 'images/17.jpg', '', '', 'áo nam'),
(11, 'Áo Bomber Tejia 603', 525000, 'images/18.jpg', '', '', 'áo nam');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `phone_number`, `address`) VALUES
(1, 'nguyenvanA', '', 'hashed_password_1', '1234567890', '123 Main Street, Hanoi'),
(2, 'lethiB', '', 'hashed_password_2', '9876543210', '456 Elm Street, Ho Chi Minh City'),
(3, 'user', '123123@gmail.com', '123123', '1234567891', '123123');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
