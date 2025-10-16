---
sidebar_position: 5
toc_max_heading_level: 2
---

# Internal Transfers

Process internal transfers to move stock between stores within the same warehouse. Internal transfers support serial number tracking, immediate processing, and comprehensive validation for store-to-store movements.

## 🎯 **What are Internal Transfers?**

Internal transfers move inventory between different stores within the same warehouse. This includes reorganizing stock, moving items between storage areas, or reallocating inventory for operational needs.

## 🔄 **When to Use Internal Transfers**

- **Store Reorganization**: Moving stock between storage locations
- **Inventory Rebalancing**: Redistributing stock across stores
- **Operational Needs**: Moving items for picking, packing, or processing
- **Space Optimization**: Clearing space in one store by moving to another
- **Quality Control**: Moving items to quarantine or inspection areas

:::info Alternative Methods
**Store transfers can also be performed through:**

- **Check-In Page**: Select "Store" as supplier type to receive from another store
- **Check-Out Page**: Select "Store" as recipient type to issue to another store

The Internal Transfer page is the dedicated interface for store-to-store movements within the same warehouse, offering streamlined validation and immediate processing.
:::

## 🚀 **Creating an Internal Transfer**

### Step 1: Access Internal Transfers

1. **Navigate to Inventory Module**
   - Click **📦 Inventory** from your dashboard
   - Select your target warehouse from the dropdown

2. **Access Internal Transfers**
   - Click **Transfer** → **Internal** from top navigation bar

<!-- ![Accessing Internal Transfers](/img/inventory/internal-access.gif) -->

> Navigating to the internal transfer interface

### Step 2: Configure Transfer Details

#### Select Source and Destination Stores

1. **Choose Source Store**
   - Select the store where items are currently located
   - System loads available inventory from selected source store

2. **Choose Destination Store**
   - Select the store where items will be moved
   - Cannot be the same as source store

3. **Date Selection**
   - Set the date when the transfer physically occurred
   - Can be backdated if needed

<!-- ![Configuring Transfer Details](/img/inventory/internal-details.gif) -->

> Setting up source and destination stores

### Step 3: Add Products to Transfer

#### Product Table Structure

The internal transfer table includes:

- **🗑️ Delete**: Remove product lines (Ctrl+Z to undo)
- **📦 Product Name**: Select or search for products
- **🔢 Quantity**: Number of items to transfer
- **📝 Reason**: Optional notes for the transfer

#### Adding Products

1. **Manual Addition**
   - Click **"+ Add product"** button
   - Or press **Ctrl+A** to add new product lines
   - Use **+ Add product** button at the bottom

2. **Product Selection**
   - Search by product alias or name
   - Products are grouped by Products and Groups
   - Shows available stock levels in source store

3. **Quantity Validation**
   - Enter quantity to transfer (validated against source store stock)
   - Cannot exceed available quantity in source store

4. **Reason Notes**
   - Add optional notes (reorganization, quality check, etc.)

<!-- ![Adding Products to Internal Transfer](/img/inventory/internal-products.gif) -->

> Adding products and configuring quantities for internal transfer

### Step 4: Handle Serial Numbers (if applicable)

For serializable products, the system automatically opens a serial number modal:

#### Serial Modal Features

1. **Grid Interface**
   - **Primary Column**: Main serial number field (required)
   - **Custom Columns**: Additional fields like batch, location, warranty
   - **Row-based Entry**: One row per serial number

2. **Serial Validation Rules**
   - **Required Serials**: Must provide exact serial count matching quantity
   - **Source Availability**: Serials must exist in source store
   - **Uniqueness**: Each serial can only be transferred once
   - **Complete Data**: All serial fields must be properly filled

3. **Serial Selection**
   - Shows available serials in selected source store
   - Can select multiple serials for bulk transfers
   - Maintains serial history and audit trail

4. **Additional Fields**
   - Supports custom serial columns (batch, warranty, etc.)
   - Copies additional data when serial is selected

#### Define Serial Later Option

For products with "define serial later" enabled:

- **Mixed Transfer**: Can transfer both serialized and non-serialized items
- **Flexible Quantity**: Total quantity can exceed available serialized items
- **Partial Serials**: Only some items need serial numbers
- **Validation**: Non-serialized quantity cannot exceed available non-serialized stock

<!-- ![Managing Serial Numbers](/img/inventory/internal-serials.gif) -->

> Selecting serial numbers for internal transfer

### Step 5: Submit Transfer

1. **Review Transfer**
   - Verify source and destination stores are different
   - Check all products, quantities, and serial numbers
   - Ensure sufficient stock in source store
   - Confirm serial numbers are valid and available

2. **Validation Checks**
   - **Store Validation**: Source and destination must be different
   - **Required Fields**: Both stores and date must be selected
   - **Quantity Validation**: Cannot exceed available stock in source
   - **Serial Matching**: Serial count must match quantity for serializable items
   - **Serial Availability**: All selected serials must exist in source store

3. **Submit for Processing**
   - Click **"Transfer"** button
   - Or press **Ctrl+S** to save
   - Transfer processes immediately and updates inventory

4. **Processing Results**
   - **Immediate Processing**: Transfer executes immediately
   - **Inventory Update**: Stock moves from source to destination store
   - **Confirmation**: Shows success message with transfer details

<!-- ![Submitting Internal Transfer](/img/inventory/internal-submit.gif) -->

> Reviewing and submitting the internal transfer

## ⌨️ **Keyboard Shortcuts**

- **Ctrl+A**: Add new product line
- **Ctrl+Z**: Undo last action (remove product line)
- **Ctrl+S**: Submit transfer
- **Tab/Shift+Tab**: Navigate between fields
- **Enter**: Confirm selections

## 🔄 **Transfer Types & Validation**

### Standard Serializable Products

- **Serial Requirement**: Must provide exact serial count matching quantity
- **Source Validation**: Serials must exist in source store
- **Complete Transfer**: All items must have serial numbers

### Define Serial Later Products

- **Flexible Serials**: Can mix serialized and non-serialized items
- **Partial Tracking**: Only some items require serial numbers
- **Quantity Calculation**: Total = serialized items + non-serialized items
- **Stock Validation**: Non-serialized quantity cannot exceed available non-serialized stock

## 💡 **Best Practices for Internal Transfers**

### Planning

- **Stock Assessment**: Check current store levels before planning transfers
- **Reason Documentation**: Always include clear reasons for transfers
- **Bulk Operations**: Group similar transfers to minimize processing time

### Execution

- **Accurate Counting**: Double-check quantities before submission
- **Serial Verification**: Ensure correct serial assignment for tracked items
- **Immediate Processing**: Process transfers as soon as items are physically moved

### Organization

- **Store Naming**: Use clear, descriptive store names for easy identification
- **Regular Audits**: Review transfer history to identify patterns
- **Space Planning**: Use transfers to optimize warehouse space utilization

## 🔧 **Troubleshooting**

### Common Issues

#### Same Source and Destination

- Ensure source and destination stores are different
- Check store selection dropdown for correct options

#### Insufficient Stock

- Verify available quantity in source store
- Check for concurrent transfers affecting stock levels
- Refresh product list to get latest inventory data

#### Serial Number Issues

- For standard serializable: ensure exact serial count matches quantity
- For define serial later: check that non-serialized quantity doesn't exceed available stock
- Verify serials exist in source store and aren't already transferred

#### Product Not Available

- Check product exists in selected source store
- Verify user permissions for accessing the store
- Refresh product list if inventory was recently updated

#### Processing Failures

- Check validation errors and correct data
- Verify store selections are valid
- Contact support for persistent processing issues

#### Cache Issues

- Refresh the page if inventory data seems outdated
- Check for recent transfers that may have affected stock levels
- Clear browser cache if problems persist

:::info Need Help?
Our support team is available **24/7** in Hindi and English. Contact us for assistance with internal transfers, store management, serial number tracking, or inventory reorganization.
:::
