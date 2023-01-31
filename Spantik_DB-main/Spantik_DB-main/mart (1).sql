-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2022 at 03:35 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mart`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `subCatId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `totalPrice` double NOT NULL,
  `item_total` double NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` varchar(200) NOT NULL,
  `imageUrl` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `imageUrl`, `status`) VALUES
(1, 'Electronics', 'Buy Home Appliances online shopping at best prices in Pakistan.', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1664367127138-apple-iphone-14-pro-max-.jpg?alt=media&token=6018249b-1d0c-456c-b72e-f0bce161d054', 0),
(2, 'Grocery', 'low-price online supermarket that allows you to order products ', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663789036102-Grocery_05c9b248-4192-4e07-b417-5fc1417bb91d_450x.webp?alt=media&token=74956cc3-3a50-4a7d-9a93-aa8417d72965', 1),
(3, 'Fruits & Vegetables', 'Fruits, Vegetables, Potato, Tomato, Brocoli, Onion, Banana', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663789451552-download.jpg?alt=media&token=6be51d5c-94be-4a1f-b149-30fa6da4a0d7', 1),
(4, 'Fresh Meat', 'Mutton, Beef, Chicken, Fish', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1664366207030-grocerapp-chicken-61e92dd43796d.jpeg?alt=media&token=059fe11d-7aaa-43e8-a582-ef0f7a456637', 1);

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `id` int(10) NOT NULL,
  `userId` int(11) NOT NULL,
  `catId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(10) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL,
  `subCatId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`id`, `orderId`, `productId`, `quantity`, `price`, `subCatId`) VALUES
(1, 1, 8, 3, 122999, 6),
(2, 2, 5, 2, 600, 3),
(3, 2, 1, 3, 12, 2),
(4, 3, 3, 2, 399, 1),
(5, 4, 1, 1, 12, 2),
(6, 5, 1, 1, 12, 2),
(7, 5, 3, 1, 399, 1),
(8, 5, 5, 1, 600, 3),
(9, 5, 7, 1, 122999, 6),
(10, 5, 8, 1, 122999, 6),
(11, 6, 8, 4, 122999, 6),
(12, 7, 8, 1, 122999, 6),
(13, 7, 9, 1, 122999, 6),
(14, 8, 8, 1, 122999, 6),
(15, 9, 8, 2, 122999, 6),
(16, 10, 1, 1, 12, 2),
(17, 11, 9, 1, 122999, 6),
(18, 12, 1, 1, 12, 2),
(19, 12, 3, 1, 399, 1),
(20, 13, 6, 1, 600, 3),
(21, 14, 6, 1, 600, 3),
(22, 15, 3, 1, 399, 1),
(23, 16, 7, 6, 122999, 6),
(24, 17, 1, 2, 12, 2),
(25, 18, 1, 4, 12, 2),
(26, 18, 7, 4, 122999, 6),
(27, 19, 1, 1, 12, 2),
(28, 19, 3, 1, 399, 1),
(29, 20, 3, 1, 399, 1),
(30, 21, 8, 1, 122999, 6),
(31, 21, 8, 1, 122999, 6),
(32, 21, 8, 1, 122999, 6),
(33, 22, 8, 3, 122999, 6),
(34, 22, 9, 3, 122999, 6),
(35, 22, 10, 1, 122999, 6),
(36, 22, 6, 1, 600, 3),
(37, 22, 5, 1, 600, 3),
(38, 22, 3, 3, 399, 1),
(39, 22, 1, 2, 12, 2),
(40, 22, 9, 4, 122999, 6),
(41, 22, 1, 7, 12, 2),
(42, 22, 3, 3, 399, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `userId` int(11) NOT NULL,
  `totalPrice` double NOT NULL,
  `status` varchar(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `shipDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `productName` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `price` float NOT NULL,
  `isAvailable` tinyint(1) NOT NULL,
  `sku` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `productName`, `category`, `description`, `price`, `isAvailable`, `sku`) VALUES
(1, '', '', 'fsdjkag aesgsakrtu uesrt', 90000, 0, 'sadasdas'),
(2, '', '', '', 0, 0, ''),
(3, '', '', '', 0, 0, ''),
(4, '', '', '', 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `name_ur` varchar(150) NOT NULL,
  `imageUrl` varchar(200) NOT NULL,
  `subcatId` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `description` varchar(200) NOT NULL,
  `sku` varchar(200) NOT NULL,
  `price` double NOT NULL,
  `unit` varchar(200) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `name_ur`, `imageUrl`, `subcatId`, `status`, `description`, `sku`, `price`, `unit`, `quantity`) VALUES
(1, 'Mint Leaves ', 'پودینہ', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790347910-grocerapp-mint-leaves--628ca71c821be.webp?alt=media&token=1a412398-afeb-45e6-b67a-6fa31b79b42d', 2, 1, 'Buy Mint Leaves - پودینہ Online from GrocerApp. Mint Leaves - پودینہ Price in Pakistan is Rs. 12 at GrocerApp. Shop Mint Leaves - پودینہ Online & Get delivery in Lahore, Islamabad, Rawalpindi and Fais', '23', 12, 'kg', 100),
(3, 'Pomegranate Red ', ' انار', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790458592-grocerapp-pomegranate-red--6232ebcdcafa1.webp?alt=media&token=60893dd5-ce55-483f-ae43-96895a77b9b3', 1, 1, 'Buy Pomegranate Red - انار Online from GrocerApp. Pomegranate Red - انار Price in Pakistan is Rs. 399 at GrocerApp. Shop Pomegranate Red - انار Online & Get delivery in Lahore, Islamabad, Rawalpindi a', '23', 399, 'kg', 100),
(5, 'Dalda Banaspati Ghee 1Kg Pouch', 'Ghee', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790570829-grocerapp-dalda-banaspati-pouch-1-5e6ced86c844a.webp?alt=media&token=502838dc-5c1a-4616-89c2-a5e4ec19f4e3', 3, 1, 'Buy Dalda Banaspati Ghee 1Kg Pouch Online from GrocerApp. Dalda Banaspati Ghee 1Kg Pouch Price in Pakistan is Rs. 549 at GrocerApp. Shop Dalda Banaspati Ghee 1Kg Pouch Online & Get delivery in Lahore,', '23', 600, 'kg', 100),
(6, 'Dalda Banaspati Ghee 1Kg Pouch', 'Ghee', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790458592-grocerapp-pomegranate-red--6232ebcdcafa1.webp?alt=media&token=60893dd5-ce55-483f-ae43-96895a77b9b3', 3, 1, 'Buy Dalda Banaspati Ghee 1Kg Pouch Online from GrocerApp. Dalda Banaspati Ghee 1Kg Pouch Price in Pakistan is Rs. 549 at GrocerApp. Shop Dalda Banaspati Ghee 1Kg Pouch Online & Get delivery in Lahore,', '23', 600, 'kg', 100),
(7, 'Samsung Galaxy A7', 'Galaxy', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790347910-grocerapp-mint-leaves--628ca71c821be.webp?alt=media&token=1a412398-afeb-45e6-b67a-6fa31b79b42d', 6, 1, 'Samsung Galaxy A73 price in Pakistan is Rs. 122,999. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.', '', 122999, '', 100),
(8, 'Samsung Galaxy A7', 'Galaxy', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790458592-grocerapp-pomegranate-red--6232ebcdcafa1.webp?alt=media&token=60893dd5-ce55-483f-ae43-96895a77b9b3', 6, 1, 'Samsung Galaxy A73 price in Pakistan is Rs. 122,999. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.', '', 122999, '', 100),
(9, 'Samsung Galaxy A7', 'Galaxy', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790697373-SamsungGalaxyA73-b.webp?alt=media&token=d81df99b-9845-4283-a68e-cc1d071b5799', 6, 1, 'Samsung Galaxy A73 price in Pakistan is Rs. 122,999. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.', '', 122999, '', 100),
(10, 'Samsung Galaxy A7', 'Galaxy', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790570829-grocerapp-dalda-banaspati-pouch-1-5e6ced86c844a.webp?alt=media&token=502838dc-5c1a-4616-89c2-a5e4ec19f4e3', 6, 1, 'Samsung Galaxy A73 price in Pakistan is Rs. 122,999. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.', '', 122999, '', 100),
(11, 'Chicken', 'Chicken', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1664366411102-grocerapp-chicken-61e92dd43796d.jpeg?alt=media&token=b4967bfa-9e45-41a2-addf-f53a33747f5c', 8, 1, 'Chicken', '23', 500, 'kg', 100),
(12, '(850-1000- GM) Whole Chicken - ثابت چکن', 'ثابت چکن', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1664366710432-grocerapp-850-1000-gm-whole-chicken--627fa0cf324f8.jpeg?alt=media&token=2926f7e0-3039-465a-aea2-637deecc1455', 8, 1, '(850-1000- GM) Whole Chicken - ثابت چکن', '23', 1000, 'kg', 100),
(13, 'Apple iPhone 14 Pro Max', 'Apple iPhone 14 Pro Max', 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1664366903474-apple-iphone-14-pro-max-.jpg?alt=media&token=86002219-8a83-46ce-843c-1ee600fd6479', 6, 1, 'Apple iPhone 14 Pro Max', '23', 1200000, '', 100);

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(10) NOT NULL,
  `userName` varchar(200) NOT NULL,
  `cnicName` varchar(200) NOT NULL,
  `cnicNumber` bigint(20) NOT NULL,
  `phoneNumber` bigint(20) NOT NULL,
  `storeName` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `otp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `userName`, `cnicName`, `cnicNumber`, `phoneNumber`, `storeName`, `location`, `password`, `isAdmin`, `otp`) VALUES
(1, 'Ahsan', 'Ahsan Farooq', 23545432134234, 23647823, 'Apple Store', 'Lahore', '$2b$06$Ak1KW9PRWlntL6cClJVbm..IenbkDgUd8z.Z0JHtmV8fiBr.73AVC', 0, 0),
(2, 'ateeq', 'ateeq', 234567, 12345, 'Ateeq Store', 'lahore', '123', 0, 0),
(3, 'Ateeq', '', 123, 123, 'shop', 'lahore', '$2b$06$RkhTj5FytQRMFpU/ieSTEeSQbuL1iD1EKqn9u4cAvw9RK5KctWt0q', 1, 0),
(4, 'Test', '', 0, 1122, 'Test', 'Teast', '$2b$06$3rD9ZckalLlDxeP7IM/ea.p5RQa70gApaA4OA5I1f.mTtae1oOIMu', 0, 331014),
(5, 'ateeq', '', 0, 3114900152, 'ateeq', 'ateeq', '$2b$06$f7YKzKOwpG3akyugBBWuRuuT9MZL54UOHHb4LVzpqPAsK4PBHfhy6', 0, 961051);

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

CREATE TABLE `subcategory` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `catId` int(11) NOT NULL,
  `name_ur` varchar(150) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `imageUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`id`, `name`, `catId`, `name_ur`, `status`, `imageUrl`) VALUES
(1, 'fruits', 3, 'پھل', 0, 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663789684173-grocerapp-fruits-61e92d02735bb.webp?alt=media&token=e81e7841-8262-4c17-9900-32355a7446ca'),
(2, 'vegetables', 3, 'سبزیاں', 0, 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663789762282-grocerapp-vegetables-61e92cb8bb657.webp?alt=media&token=c4fdd2df-aa7e-4bb3-a5c1-7da5b42a8fdd'),
(3, 'Oil & Ghee', 2, '', 0, 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663789762282-grocerapp-vegetables-61e92cb8bb657.webp?alt=media&token=c4fdd2df-aa7e-4bb3-a5c1-7da5b42a8fdd'),
(4, 'Oil & Ghee', 2, '', 0, 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790020893-grocerapp-dalda-banaspati-pouch-1-5e6ced86c844a.webp?alt=media&token=9ba75259-012b-4560-9f3f-ac0862a74375'),
(6, 'Mobile Phones', 1, '', 0, 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1663790125611-download%20(1).jpg?alt=media&token=9178e14a-eef6-4e2e-885b-22ada70b0116'),
(8, 'Chicken', 4, 'Chicken', 0, 'https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1664366330941-grocerapp-chicken-61e92dd43796d.jpeg?alt=media&token=6827e653-6dc3-4575-b350-7d9e222dfbf7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catId` (`subCatId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catId` (`catId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `subCatId` (`subCatId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subcatId` (`subcatId`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catId` (`catId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`subCatId`) REFERENCES `subcategory` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `register` (`id`);

--
-- Constraints for table `favourite`
--
ALTER TABLE `favourite`
  ADD CONSTRAINT `favourite_ibfk_1` FOREIGN KEY (`catId`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `favourite_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `register` (`id`),
  ADD CONSTRAINT `favourite_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `orderdetails_ibfk_3` FOREIGN KEY (`subCatId`) REFERENCES `subcategory` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`subcatId`) REFERENCES `subcategory` (`id`);

--
-- Constraints for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`catId`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
