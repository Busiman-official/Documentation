---
sidebar_position: 2
toc_max_heading_level: 2
---

# Check-In Transfers

Process check-in transfers to receive new stock into your inventory from suppliers, customers, or other warehouses. The check-in system supports barcode scanning, serial number tracking, offline operation, and comprehensive validation.

## 🎯 **What are Check-In Transfers?**

Check-in transfers add new stock to your inventory when receiving products from external sources or internal transfers. This includes supplier deliveries, customer returns, manufacturing output, and inter-warehouse movements.

## 📥 **When to Use Check-Ins**

- **Supplier Deliveries**: Receiving purchased goods from vendors
- **Customer Returns**: Items being returned to inventory
- **Manufacturing Output**: Finished goods from production
- **Inter-Warehouse Transfers**: Stock moving into your warehouse
- **Store Transfers**: Internal transfers between warehouse stores

## 🚀 **Creating a Check-In Transfer**

### Step 1: Access Check-In Transfers

1. **Navigate to Inventory Module**
   - Click **📦 Inventory** from your dashboard
   - Select your target warehouse from the dropdown

2. **Access Check-In**
   - Click **Transfer** → **Check-In** from top navigation bar

<!-- ![Accessing Check-In Transfers](/img/inventory/checkin-access.gif) -->

> Navigating to the check-in transfer interface

### Step 2: Configure Transfer Details

#### Select Supplier/Source

1. **Choose Supplier Type**
   - **Customer**: For supplier deliveries, returns, or external receipts
   - **Store**: For inter-warehouse or inter-store transfers

2. **Search and Select**
   - Use the dropdown to find customers or stores
   - Create new customers if needed (creatable option)
   - Edit existing customer details inline
   - For store transfers, select source warehouse/store

3. **Automatic Inventory Loading**
   - System loads available inventory when supplier is selected
   - For customers: Shows their current inventory (for returns)
   - For stores: Shows available stock in selected store

#### Enter Reference Information

- **Reference ID**: Purchase order, invoice, delivery note, or internal reference
- **Date**: When the goods were physically received (backdate if needed)

<!-- ![Configuring Transfer Details](/img/inventory/checkin-details.gif) -->

> Setting up supplier and reference information

### Step 3: Add Products to Transfer

#### Product Table Structure

The check-in table includes:

- **🗑️ Delete**: Remove product lines (Ctrl+Z to undo)
- **📦 Product Name**: Select or search for products
- **🏪 Store**: Assign to specific store location (if stores enabled)
- **🔢 Quantity**: Number of items received
- **📝 Reason**: Optional notes for the transfer

#### Adding Products

1. **Manual Addition**
   - Click **"+ Add product"** button
   - Or press **Ctrl+A** to add new product lines
   - Use **+ Add product** button at the bottom

2. **Product Selection**
   - Search by product alias or name
   - Products are grouped by Products and Groups
   - Shows available stock levels by store

3. **Store Assignment**
   - Automatically suggests Reserve Store or first available store
   - Shows current stock quantities in each store
   - Can assign to different stores per product line

4. **Quantity and Notes**
   - Enter received quantity
   - Add optional reason notes (damaged, replacement, etc.)

<!-- ![Adding Products to Check-In](/img/inventory/checkin-products.gif) -->

> Adding products and configuring quantities for check-in

### Step 4: Handle Serial Numbers (if applicable)

For serializable products, the system automatically opens a serial number modal:

#### Serial Modal Features

1. **Grid Interface**
   - **Primary Column**: Main serial number field (required)
   - **Custom Columns**: Additional fields like batch, location, warranty
   - **Row-based Entry**: One row per serial number

2. **Serial Validation Rules**
   - **Customer Receipts**: Can add new serial numbers
   - **Store Transfers**: Only existing serials in source store allowed
   - **Uniqueness**: Serials must be unique within inventory
   - **Quantity Match**: Number of serials must match product quantity

3. **Auto-Population**
   - For store transfers: Shows available serials in source store
   - For customer receipts: Can enter new serials or select existing
   - Highlights new serials (yellow background)
   - Prevents duplicate selection

4. **Additional Fields**
   - Supports custom serial columns (batch, warranty, etc.)
   - Copies additional data when serial is selected
   - Maintains serial history and audit trail

<!-- ![Managing Serial Numbers](/img/inventory/checkin-serials.gif) -->

> Entering serial numbers for tracked items

### Step 5: Submit Transfer

1. **Review Transfer**
   - Verify supplier, reference, and date
   - Check all products, quantities, and store assignments
   - Ensure serial numbers are complete and valid
   - Confirm available inventory levels

2. **Validation Checks**
   - **Required Fields**: Supplier and reference ID mandatory
   - **Quantity Validation**: Must be positive numbers
   - **Serial Matching**: Serial count must match quantity
   - **Store Availability**: Sufficient stock for store transfers
   - **Duplicate Serials**: No repeated serial numbers

3. **Submit for Processing**
   - Click **"Check In"** button
   - Or press **Ctrl+S** to save
   - Transfer is validated and queued for processing

4. **Processing Results**
   - **Online**: Transfer processes immediately and updates inventory
   - **Offline**: Transfer queues for sync when connection restored
   - **Confirmation**: Shows the processing results whether succeeded or failed

<!-- ![Submitting Check-In Transfer](/img/inventory/checkin-submit.gif) -->

> Reviewing and submitting the check-in transfer

## 📱 **Barcode Scanning & Mobile Operations**

### Barcode Scanning Methods

#### Keyboard Wedge Scanner

- **Hardware Setup**: Connect barcode scanner as keyboard input
- **Automatic Detection**: Processes SKU and serial scans in real-time
- **Deduplication**: Prevents duplicate scans within 800ms window
- **Context Aware**: Routes scans to appropriate fields

#### Camera Scanning with Picture-in-Picture

- **Mobile Support**: Works on phones and tablets
- **PiP Mode**: Camera view opens in separate window for continuous scanning
- **ZXing Integration**: Advanced barcode recognition
- **Real-time Processing**: Instant product/serial lookup and entry

### Scanning Workflows

1. **SKU Scanning**
   - **Single Match**: Automatically adds product to transfer
   - **Multiple Matches**: Opens selection modal for SKU conflicts
   - **New Products**: Can create products from scanned SKUs

2. **Serial Scanning**
   - **Modal Context**: Scans route to serial entry when modal is open
   - **Validation**: Checks against available inventory
   - **Auto-Fill**: Populates additional serial fields automatically

<!-- ![Mobile Check-In Processing](/img/inventory/checkin-mobile.gif) -->

> Using mobile devices and barcode scanning for check-ins

## 🔄 **Queue System & Offline Processing**

### Queue Management

- **Automatic Queuing**: Transfers queue when offline or during processing
- **Background Sync**: Automatic sync when connection restored
- **Queue Panel**: View pending transfers and sync status
- **Error Handling**: Failed transfers retry automatically
- **Status Updates**: Real-time sync progress indicators

### Offline Features

- **Continue Working**: Create transfers without internet
- **Data Persistence**: All entered data saved locally
- **Conflict Resolution**: Handles sync conflicts automatically
- **Sequential Processing**: Processes queued transfers in order

### Online Processing

- **Immediate Sync**: Online transfers process immediately
- **Batch Processing**: Handles multiple queued transfers
- **Error Recovery**: Automatic retry for failed submissions
- **Cache Updates**: Refreshes inventory data after successful sync

## ⌨️ **Keyboard Shortcuts**

- **Ctrl+A**: Add new product line
- **Ctrl+Z**: Undo last action (remove product line)
- **Ctrl+S**: Submit transfer
- **Tab/Shift+Tab**: Navigate between fields
- **Enter**: Confirm selections

## 💡 **Best Practices for Check-Ins**

### Preparation

- **Pre-Announce Deliveries**: Notify team of expected receipts
- **Clear Receiving Area**: Ensure space for inspection and processing
- **Reference Documents**: Have purchase orders ready for verification

### Processing

- **Immediate Processing**: Process deliveries as soon as received
- **Quality Inspection**: Check all items for damage or defects
- **Accurate Documentation**: Include all reference numbers and notes
- **Serial Verification**: Confirm serial numbers match documentation

### Organization

- **Supplier Communication**: Confirm delivery details in advance
- **Team Coordination**: Assign clear receiving responsibilities
- **Regular Audits**: Review check-in processes periodically

## 🔧 **Troubleshooting**

### Common Issues

#### Supplier Not Available

- Check customer/store setup in your company
- Verify user permissions for supplier access
- Create new supplier if missing

#### Product Not Found

- Verify product exists in catalog and in inventory stock
- Check SKU/barcode accuracy
- Add product if legitimately missing

#### Serial Number Conflicts

- Ensure serials are unique within inventory
- For store transfers: Verify serial exists in source
- Check serial number format requirements

#### Insufficient Store Stock

- For store transfers: Check available quantity in source store
- Verify store assignment is correct
- Consider alternative sourcing locations

#### Processing Failures

- Check validation errors and correct data
- Verify internet connection for online processing
- Review queue panel for failed transfers

#### Offline Sync Issues

- Check internet connection status
- Review queue panel for sync errors
- Contact support for persistent sync problems

#### Barcode Scanning Problems

- Ensure good lighting and clean barcodes
- Check scanner connection and settings
- Verify camera permissions for mobile scanning

:::info Need Help?
Our support team is available **24/7** in Hindi and English. Contact us for assistance with check-in transfers, mobile setup, barcode configuration, or offline synchronization.
:::
