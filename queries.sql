-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName FROM Product AS p
JOIN Category AS c ON p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName, o.OrderDate FROM [order] AS o
JOIN Shipper AS s ON o.ShipVia = s.Id
WHERE o.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT od.Quantity, p.ProductName FROM OrderDetail as od
JOIN Product as p ON od.ProductId = p.Id
WHERE od.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id, c.CompanyName AS "Company", e.LastName As "Employee Name" FROM [Order] AS o
JOIN Customer AS c ON o.CustomerId = c.Id
JOIN Employee AS e ON o.EmployeeId = e.Id;

-- Stretch --

--Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.--
SELECT c.CategoryName, Count(p.CategoryId) AS "Count" FROM Category AS c
JOIN Product AS p ON c.Id = p.CategoryId
GROUP BY c.CategoryName;

--Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.--
SELECT OrderId, Sum(Quantity) AS "ItemCount" FROM OrderDetail
GROUP BY OrderId;

