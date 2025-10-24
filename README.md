# Food Management System

Hệ thống quản lý thực phẩm với React frontend và Node.js backend, tương thích với Node.js 22.

## Yêu cầu hệ thống

- Node.js >= 18.0.0 (khuyến nghị Node.js 22)
- MongoDB Atlas (hoặc MongoDB local)

## Cài đặt và chạy

### 1. Cài đặt Backend

```bash
cd backend
npm install
npm start
```

Backend sẽ chạy trên http://localhost:3000

### 2. Cài đặt Frontend

```bash
cd react-food-frontend
npm install
npm start
```

Frontend sẽ chạy trên http://localhost:3001

## Tính năng

- Thêm món ăn mới
- Xem danh sách món ăn
- Cập nhật thông tin món ăn
- Xóa món ăn

## Cấu trúc dự án

```
├── backend/
│   ├── models/
│   │   └── food.js
│   ├── routes/
│   │   └── foodRoutes.js
│   ├── package.json
│   └── server.js
├── react-food-frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── styles/
│   ├── package.json
│   └── public/
└── README.md
```

## API Endpoints

- `GET /food` - Lấy danh sách món ăn
- `POST /food` - Thêm món ăn mới
- `PATCH /food/:id` - Cập nhật món ăn
- `DELETE /food/:id` - Xóa món ăn

## Cập nhật từ phiên bản cũ

Dự án đã được cập nhật để tương thích với Node.js 22:

- React 17 → React 18
- React Router v5 → v6
- Axios 0.21.1 → 1.6.0
- react-scripts 4.0.3 → 5.0.1
- Cập nhật cách render trong React 18
- Sửa lỗi trong backend routes
- Thêm CORS support
