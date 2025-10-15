---
sidebar_position: 4
toc_max_heading_level: 2
---

# Product Management

Manage your inventory products with comprehensive tracking, categorization, and stock control. Learn how to add products, organize them into groups, track serial numbers, and maintain accurate stock levels across your warehouses.

## 📦 **What are Products?**

Products are the individual items you sell, use, or track in your inventory. Each product can have detailed specifications, stock levels, pricing information, and can be organized into categories and stores for efficient management.

**Key Features:**

- **📋 Detailed Product Information**: Name, description, pricing, specifications
- **📊 Stock Tracking**: Real-time inventory levels across stores
- **🏷️ Categorization**: Organize products into groups and categories
- **🔢 Serial Number Support**: Track individual items with unique identifiers
- **🏪 Multi-Store Support**: Different stock levels per store location
- **📈 Analytics Ready**: Integration with reporting and analytics

## 🆕 **Creating Your First Product**

### Prerequisites

- Complete [branch setup](/getting-started/onboarding) in your company
- Create a [warehouse](/inventory/warehouse-management) to store products
- Manager or Admin access level
- Branch access permissions

### Step-by-Step Product Creation

1. **Navigate to Products**
   - Click **"Inventory"** from the dashboard
   - Use the **"Products"** dropdown → Select **"Products"**
   - Click **"Add Stock"** button or press **Ctrl+A** (Cmd+A on Mac)

2. **Choose Product Type**
   - **New Product**: Create a brand new product entry
   - **Existing Product**: Add stock to an existing global product

3. **Enter Basic Information**

   **Product Details:**
   - **📝 Product Name**: Unique identifier for your product (required)
   - **🏷️ Alias**: Alternative names or codes for the product
   - **📂 Categories**: Select relevant categories for organization
   - **📄 Description**: Detailed product description

   **Pricing & Units:**
   - **💰 Rate**: Selling price per unit
   - **⚖️ Unit**: Measurement unit (pieces, kg, liters, etc.)
   - **🏗️ Material**: Mark if this is a raw material

4. **Configure Stock Settings**

   **Stock Parameters:**
   - **📊 Minimum Stock**: Alert threshold for low inventory
   - **🔢 Serializable**: Enable if items have unique serial numbers
   - **📏 Size & Weight**: Physical dimensions and weight specifications

5. **Set Initial Stock**

   **Stock Entry:**
   - **🏪 Store Selection**: Choose which store to add stock to
   - **📦 Quantity**: Initial stock quantity
   - **📅 Date**: Stock entry date
   - **💰 Cost Price**: Purchase cost per unit

6. **Add Serial Numbers (if applicable)**
   - Enter unique serial numbers for trackable items
   - Define custom serial number headings (batch, location, etc.)

7. **Create Product**
   - Click **"Create Product"** button
   - Or press **Ctrl+S** to save
   - Product appears immediately in your inventory

## 📊 **Managing Products**

### Product List Overview

The products page displays:

- **📝 Product Name**: Primary product identifier
- **📦 Stock**: Current quantity across all stores
- **📊 Status**: In stock / Out of stock indicators
- **🏷️ Categories**: Product classification tags
- **🔧 Actions**: View, edit, delete, transaction history

### Advanced Filtering & Search

**Filter Options:**

- **Product Name**: Search by name or alias
- **Serial Numbers**: Find specific tracked items
- **Categories**: Filter by product categories
- **Store-specific**: View stock in particular stores

**Search Modes:**

- **Union Search**: Items matching any filter (OR logic)
- **Intersection Search**: Items matching all filters (AND logic)
- **Inventory Only**: Exclude items in requests/transfers

### Product Actions

#### View Product Details

- Click product row or **"Open product"** action
- View complete product information and specifications
- See stock distribution across stores
- Access transaction history

#### Edit Product Information

1. **Access Edit Mode**
   - Click **"Edit"** from product details
   - Modify product information as needed

2. **Update Stock Levels**
   - Add or remove stock quantities
   - Transfer between stores
   - Update pricing information

3. **Save Changes**
   - Click **"Update Product"** to save
   - Changes reflect immediately in inventory

#### Transaction History

- Click **"Transaction History"** action
- View all stock movements for the product
- Filter by date range, store, or transaction type
- Export transaction reports

#### Delete Product

- Click **"Delete Product"** action
- Confirm deletion in the popup dialog
- ⚠️ **Warning**: Permanently removes product and all stock records

## 📁 **Product Groups**

### What are Product Groups?

Product groups help you organize related products into logical categories for better management and reporting.

**Benefits:**

- **🗂️ Organization**: Group similar products together
- **📊 Reporting**: Analyze performance by category
- **🔍 Filtering**: Quick access to related items
- **👥 Team Access**: Assign group permissions to users

### Creating Product Groups

1. **Access Groups**
   - Use **"Products"** dropdown → Select **"Groups"**
   - Click **"Create new group"** button

2. **Define Group Details**
   - **📝 Group Name**: Descriptive name for the category
   - **📍 Location**: Optional physical location hint
   - **👥 Access Control**: Set user permissions for the group

3. **Add Products to Group**
   - Select products to include in the group
   - Products can belong to multiple groups

### Managing Groups

- **View Group Contents**: See all products in a group
- **Edit Group Settings**: Modify name, location, permissions
- **Remove Products**: Unassign products from groups
- **Delete Groups**: Remove unused group categories

## 🔢 **Serial Number Tracking**

### When to Use Serial Numbers

Enable serial number tracking for:

- **💎 High-value items**: Jewelry, electronics, equipment
- **📋 Regulatory requirements**: Medical devices, pharmaceuticals
- **🔍 Traceability needs**: Warranty tracking, recalls
- **🏷️ Unique identification**: Custom or branded products

### Setting Up Serial Numbers

1. **Enable Serialization**
   - Check **"Serializable"** during product creation
   - Define custom serial number headings

2. **Custom Headings**
   - **Batch Number**: Manufacturing batch identification
   - **Location**: Current or original location
   - **Warranty**: Expiration or coverage information
   - **Custom Fields**: Any additional tracking data

3. **Adding Serial Numbers**
   - Enter unique identifiers for each item
   - Associate with specific stock entries
   - Track movement history per serial number

### Serial Number Management

- **🔍 Search by Serial**: Find specific items quickly
- **📊 Detailed Tracking**: Complete history of each item
- **🔄 Transfer Tracking**: Follow items across locations
- **📈 Analytics**: Serial-level reporting and insights

## 🏪 **Multi-Store Stock Management**

### Store-Specific Stock

When stores are enabled:

- **📦 Separate Inventories**: Different stock levels per store
- **🔄 Inter-Store Transfers**: Move stock between locations
- **📊 Store Analytics**: Performance tracking by location
- **👥 Staff Assignment**: Different access per store

### Stock Operations

#### Adding Stock to Stores

1. **Select Target Store**
   - Choose store location during stock entry
   - Specify quantity and cost per store

2. **Bulk Stock Entry**
   - Add stock to multiple stores simultaneously
   - Maintain separate cost tracking per location

#### Inter-Store Transfers

- Move products between warehouse stores
- Track transfer history and approvals
- Maintain accurate stock levels across locations

## 💡 **Best Practices for Product Management**

### 🏷️ **Product Naming Conventions**

- **Descriptive Names**: Include key identifying features
- **Consistent Format**: Follow organizational standards
- **Search-Friendly**: Use terms customers would search for

**Good Examples:**

- ✅ "Dell Inspiron 15 Laptop - Core i5"
- ✅ "Organic Brown Rice - 5kg Bag"
- ✅ "Steel Pipe - 2" Diameter x 6ft"

### 📊 **Stock Level Management**

- **Safety Stock**: Maintain buffer stock above minimum levels
- **Reorder Points**: Set automatic reorder triggers
- **ABC Analysis**: Classify products by value and movement
- **Regular Audits**: Monthly stock verification processes

### 🔢 **Serial Number Strategies**

- **Standardization**: Consistent serial number formats
- **Automation**: Use barcode scanners for entry
- **Integration**: Connect with ERP or POS systems
- **Backup**: Maintain off-system serial number records

### 👥 **Team Collaboration**

- **Clear Roles**: Define responsibilities for product management
- **Training**: Regular training on product procedures
- **Communication**: Clear channels for product updates
- **Documentation**: Maintain product setup guides

## 🚨 **Troubleshooting**

### Common Product Issues

#### ❌ Cannot Create Product

- Verify warehouse and store setup
- Check user permissions for product creation
- Ensure unique product names within warehouse

#### ❌ Stock Not Updating

- Refresh the products page
- Check for pending transfer approvals
- Verify store selection during stock entry

#### ❌ Serial Numbers Not Saving

- Confirm serialization is enabled for the product
- Check serial number format requirements
- Verify unique serial numbers across inventory

#### ❌ Product Not Appearing in Search

- Check category assignments
- Verify store permissions
- Clear search filters and try again

#### ❌ Cannot Edit Product

- Confirm write permissions for the product
- Check if another user is editing simultaneously
- Verify product is not in a locked state

## 💡 **Pro Tips**

- Start with core products first, then expand your catalog gradually.
- Use consistent naming conventions from day one to avoid confusion.
- Enable serialization for high-value or regulated items.
- Set up automated alerts for low stock levels.
- Regularly audit your product catalog for accuracy.
- Train your team on proper product entry procedures.
- Use product groups to organize reporting and analysis.

:::info Need Help?
Our support team is available **24/7** in Hindi and English. Contact us for assistance with product setup, inventory optimization, or complex multi-location management.
:::
