# EquiLab Inventory Tracker Upgraded

A comprehensive laboratory inventory management system designed for the **Eulogio ‘Amang’ Rodriguez Institute of Science and Technology (EARIST)**. This application streamlines the tracking of laboratory equipment, manages borrowing requests, and generates insightful reports for efficient lab resource management.

---

## 📋 Overview

EquiLab is a multi-purpose inventory tracking solution built to address the unique needs of academic laboratory environments. The system provides a centralized platform for managing equipment inventory, handling borrowing transactions, and monitoring equipment usage patterns.

### Key Benefits
- **Centralized Equipment Database**: Maintain a single source of truth for all laboratory assets
- **Streamlined Borrowing Process**: Simplify equipment request and approval workflows
- **Data-Driven Insights**: Generate comprehensive reports for informed decision-making
- **Academic-Focused Design**: Tailored specifically for educational institution requirements

---

## ✨ Features

### Equipment Management
- Complete equipment catalog with detailed specifications
- Real-time availability tracking
- Equipment condition monitoring
- Maintenance scheduling and history

### Borrowing System
- User-friendly request submission interface
- Automated approval workflows
- Due date tracking and reminders
- Return processing and condition verification

### Reporting & Analytics
- Equipment utilization reports
- Borrowing frequency analysis
- Department-wise usage statistics
- Inventory valuation and depreciation tracking

### User Management
- Role-based access control (Admin, Faculty, Staff, Students)
- User profile management
- Authentication and authorization
- Activity logging and audit trails

---

## 🛠 Technology Stack

| Component | Technology |
|-----------|------------|
| **Backend** | Python |
| **Database** | SQL (Schema initialized with equipment table) |
| **Testing** | Pytest |
| **Documentation** | Markdown |

---

## 📁 Project Structure

```
Equilab-Inventory-Tracker-Upgraded/
│
├── main.py                 # Application entry point
├── schema.sql              # Database schema definition
├── test_main.py            # Unit tests
├── README.md               # Project documentation
└── requirements.txt        # (Coming soon) Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8 or higher
- SQL database (MySQL/PostgreSQL/SQLite)
- pip package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Equilab-Inventory-Tracker-Upgraded.git
   cd Equilab-Inventory-Tracker-Upgraded
   ```

2. **Set up virtual environment** (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Initialize the database**
   ```bash
   # Run the schema.sql file in your database management tool
   # Or use command line:
   mysql -u username -p database_name < schema.sql
   ```

5. **Run the application**
   ```bash
   python main.py
   ```

---

## 💾 Database Schema

The system currently includes a foundational `equipment` table:

```sql
CREATE TABLE equipment (
    id INT PRIMARY KEY, 
    name VARCHAR(100)
);
```

*Additional tables for users, borrow requests, and reports will be implemented in upcoming releases.*

---

## 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
pytest test_main.py -v
```

Current test coverage includes placeholder verification to confirm the testing framework is properly configured.

---

## 📊 Future Enhancements

- [ ] Complete database schema with all required tables
- [ ] RESTful API development
- [ ] Web-based user interface
- [ ] Mobile-responsive design
- [ ] Barcode/QR code integration
- [ ] Email notification system
- [ ] Advanced reporting dashboard
- [ ] Integration with institutional systems

---

## 👥 Contributing

We welcome contributions from the EARIST community and beyond! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and includes appropriate tests.

---

## 📄 License

This project is developed for educational purposes at the Eulogio ‘Amang’ Rodriguez Institute of Science and Technology. All rights reserved.

---

## 📞 Contact & Support

- **Project Maintainers**: EARIST Department of Computer Studies
- **Email**: [department-email@earist.edu.ph](mailto:department-email@earist.edu.ph)
- **Issue Tracker**: [GitHub Issues](https://github.com/yourusername/Equilab-Inventory-Tracker-Upgraded/issues)

---

## 🙏 Acknowledgments

- Faculty and staff of EARIST for their valuable input
- Students who participated in requirements gathering
- Open-source community for inspiration and tools

---

*Last Updated: March 2026*

---

**EquiLab Inventory Tracker Upgraded** — Empowering EARIST's laboratories with efficient inventory management.
