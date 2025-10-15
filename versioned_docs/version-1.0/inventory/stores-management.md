---
sidebar_position: 3
toc_max_heading_level: 2
---

# Stores Management

Organize your warehouse inventory with stores - sub-sections within warehouses for better organization and management.

## 🏪 **What are Stores?**

Stores are sub-sections within your warehouses that help you organize inventory more granularly. Think of stores as different areas or departments within a warehouse, such as "Electronics Section", "Cold Storage", or "Main Aisle".

**Key Benefits:**

- **Better Organization**: Group related products together
- **Efficient Picking**: Staff can quickly locate items
- **Stock Control**: Monitor inventory by specific areas
- **Reporting**: Get insights by store performance

## 📋 **Store Management Features**

| Feature                 | Description                          | Access Level |
| ----------------------- | ------------------------------------ | ------------ |
| **Create Stores**       | Add new store sections to warehouses | Managers+    |
| **Edit Stores**         | Update store names and locations     | Managers+    |
| **Delete Stores**       | Remove unused store sections         | Managers+    |
| **View Products**       | See products assigned to each store  | All Users    |
| **Transaction History** | Track all store-related movements    | All Users    |

## 🆕 **Creating Your First Store**

### Prerequisites

- Complete [branch setup](/getting-started/onboarding) in your company
- Create a [warehouse](/inventory/warehouse-management) to organize stores
- [Show stores should be enabled](/inventory/warehouse-management#-store-organization-optional) for stores functionality
- Manager or Admin access level
- Branch access permissions

### Step-by-Step Process

1. **Access Store Creation**
   - Navigate to the **"Stores"** section using the Products dropdown menu
   - Click **"Create new store"** button
   - Or press **Ctrl+A** (Cmd+A on Mac) as keyboard shortcut

2. **Enter Store Information**

   **Store Name** (Required)
   - Enter a descriptive name for the store section
   - Examples: "Electronics Section", "Cold Storage Unit", "Main Aisle"

   **Store Location** (Required)
   - Specify the physical location within the warehouse
   - Examples: "Aisle 1-3", "Refrigerated Unit 2", "Back Warehouse"

3. **Create Store**
   - Click **"Create Store"** button
   - Or press **Ctrl+S** to save
   - Store appears immediately in the list

<!-- ![Creating Store](/img/inventory/store-creation.gif) -->

> Setting up a new store section within your warehouse

## 📊 **Managing Stores**

### Viewing Store List

The stores list shows:

- **Store Name**: The display name of the store
- **Location**: Physical location description
- **Actions**: Available operations for each store

### Editing Store Information

1. **Access Store Details**
   - Click on any store row in the table
   - Or click **"View Store"** from the actions menu

2. **Enter Edit Mode**
   - Click the **"Edit"** button in store details
   - Modify store name or location as needed

3. **Save Changes**
   - Click **"Update Store"** to save changes
   - Changes apply immediately

<!-- ![Editing Store](/img/inventory/store-editing.gif) -->

> Modifying store information and location details

### Store Actions

#### View Store Details

- Click on store row or **"View Store"** action
- See store information and assigned products

#### Transaction History

- Click **"Transaction History"** action
- View all inventory movements for the store
- Filter by date range and product type

#### Delete Store

- Click **"Delete"** action (available for non-reserve stores)
- Confirm deletion in the popup dialog
- ⚠️ **Warning**: This permanently removes the store and all associations

## 🔒 **Store Restrictions**

### Reserve Store Protection

- **Reserve Store** cannot be deleted
- This is a system-protected store for special operations
- Used for internal inventory management

### Permission Requirements

- **Read Access**: View stores and their products
- **Write Access**: Create, edit, and delete stores
- **Manager Role**: Required for store management operations

## 💡 **Best Practices for Stores**

### 🏷️ **Naming Conventions**

- **Descriptive Names**: Use clear, meaningful names
- **Location-Based**: Include location hints when helpful
- **Consistent Format**: Follow your organization's naming standards

**Good Examples:**

- ✅ "Electronics Section - Aisle 1-3"
- ✅ "Cold Storage Unit"
- ✅ "Reserve Store" (system default)

### 📍 **Location Management**

- **Physical Mapping**: Document actual warehouse locations
- **Accessibility**: Note picking routes and accessibility
- **Storage Conditions**: Include temperature/humidity requirements

### 🏗️ **Organizational Strategy**

**By Product Category:**

```text
Warehouse: Main Store
├── Electronics Section
├── Clothing Department
├── Food & Beverage
└── Reserve Store
```

**By Storage Type:**

```text
Warehouse: Distribution Center
├── Ambient Storage
├── Refrigerated Storage
├── Frozen Storage
└── Hazardous Materials
```

## 🔗 **Store Integration Points**

### 📦 **Product Assignment**

- Products are assigned to specific stores during creation
- Each product belongs to one store within a warehouse
- Store filtering available in product search

### 🔄 **Inventory Transfers**

- Move products between stores within the same warehouse
- Transfer products across different warehouses
- Track movement history by store

### 📊 **Reporting & Analytics**

- Store-specific inventory reports
- Performance metrics by store section
- Stock level monitoring per store

## 🚨 **Troubleshooting**

### Common Issues

#### ❌ Cannot Create Store

- Verify you have manager permissions
- Check that warehouse exists and is active
- Ensure store name is unique within warehouse

#### ❌ Store Not Appearing

- Refresh the warehouse details page
- Check your branch access permissions
- Verify the warehouse has stores enabled

#### ❌ Cannot Delete Store

- Reserve Store cannot be deleted (system protection)
- Check if store has active products assigned
- Verify you have delete permissions

#### ❌ Edit Button Not Available

- Confirm you have write permissions for the warehouse
- Check if another user is currently editing
- Refresh the page and try again

## 💡 **Pro Tips**

- Start with 3–5 stores per warehouse; expand as needed.
- Group stores by product type, storage needs, or picking frequency.
- Use the Reserve Store for quarantine, damaged, or special items.
- Use a consistent naming format (e.g., "Electronics - A1").
- Perform monthly audits to confirm locations and counts.
- Train staff on store layout and procedures.
- Monitor picking efficiency by store to identify improvements.

:::info Need Help?
Our support team is available **24/7** in Hindi and English. Contact us for assistance with warehouse setup or complex multi-location configurations.
:::
