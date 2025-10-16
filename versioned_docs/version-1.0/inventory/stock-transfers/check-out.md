---
sidebar_position: 3
toc_max_heading_level: 2
---

# Check-Out Transfers

Process check-out transfers to issue stock from your inventory to customers, other warehouses, or internal stores. The check-out system supports barcode scanning, serial number tracking, offline operation, and comprehensive validation for different transfer types.

## 🎯 **What are Check-Out Transfers?**

Check-out transfers remove stock from your inventory when issuing products for sales, cross-warehouse transfers, or internal store movements. This includes customer sales, inter-warehouse transfers, and store-to-store movements.

## 📤 **When to Use Check-Outs**

- **Customer Sales**: Issuing products to customers for purchase
- **Cross-Warehouse Transfers**: Moving stock between warehouses
- **Store Transfers**: Internal transfers between warehouse stores
- **Manufacturing**: Issuing raw materials to production
- **Returns Processing**: Moving items back to suppliers (reverse check-in)

## 🚀 **Creating a Check-Out Transfer**

### Step 1: Access Check-Out Transfers

1. **Navigate to Inventory Module**
   - Click **📦 Inventory** from your dashboard
   - Select your source warehouse from the dropdown

2. **Access Check-Out**
   - Click **Transfer** → **Check-Out** from top navigation bar

<!-- ![Accessing Check-Out Transfers](/img/inventory/checkout-access.gif) -->

> Navigating to the check-out transfer interface

### Step 2: Configure Transfer Details

#### Select Recipient/Destination

1. **Choose Recipient Type**
   - **Customer**: For sales or issuing to external recipients
   - **Warehouse**: For cross-warehouse transfers
   - **Store**: For internal store-to-store transfers

2. **Search and Select**
   - Use the dropdown to find customers, warehouses, or stores
   - Create new customers if needed (creatable option)
   - Edit existing customer details inline
   - For warehouse/store transfers, select destination location

3. **Transfer Type Detection**
   - System automatically detects transfer type based on recipient
   - Customer recipients: Sales transactions
   - Warehouse recipients: Cross-warehouse transfers (CWT)
   - Store recipients: Internal store transfers

#### Enter Reference Information

- **Reference ID**: Sales order, invoice, transfer request, or internal reference
- **Date**: When the goods are physically issued (backdate if needed)

<!-- ![Configuring Transfer Details](/img/inventory/checkout-details.gif) -->

> Setting up recipient and reference information

### Step 3: Add Products to Transfer

#### Product Table Structure

The check-out table includes:

- **🗑️ Delete**: Remove product lines (Ctrl+Z to undo)
- **📦 Product Name**: Select or search for products
- **🏪 Store**: Select source store location (if stores enabled)
- **🔢 Quantity**: Number of items to issue
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
   - Select source store with available inventory
   - Shows current stock quantities in each store
   - System validates sufficient stock before allowing transfer

4. **Quantity and Notes**
   - Enter quantity to issue (validated against available stock)
   - Add optional reason notes (sale, transfer, manufacturing, etc.)

<!-- ![Adding Products to Check-Out](/img/inventory/checkout-products.gif) -->

> Adding products and configuring quantities for check-out

### Step 4: Handle Serial Numbers (if applicable)

For serializable products, the system automatically opens a serial number modal:

#### Serial Modal Features

1. **Grid Interface**
   - **Primary Column**: Main serial number field (required)
   - **Custom Columns**: Additional fields like batch, location, warranty
   - **Row-based Entry**: One row per serial number

2. **Serial Validation Rules**
   - **Customer Sales**: Can issue any available serials
   - **Store Transfers**: Only existing serials in source store allowed
   - **Uniqueness**: Serials must exist in source inventory
   - **Quantity Match**: Number of serials must match product quantity

3. **Auto-Population**
   - Shows available serials in selected source store
   - Highlights existing serials with additional data
   - Prevents selection of unavailable serials

4. **Additional Fields**
   - Supports custom serial columns (batch, warranty, etc.)
   - Copies additional data when serial is selected
   - Maintains serial history and audit trail

<!-- ![Managing Serial Numbers](/img/inventory/checkout-serials.gif) -->

> Selecting serial numbers for issued items

### Step 5: Submit Transfer

1. **Review Transfer**
   - Verify recipient, reference, and date
   - Check all products, quantities, and source stores
   - Ensure serial numbers are valid and available
   - Confirm sufficient stock in source locations

2. **Validation Checks**
   - **Required Fields**: Recipient and reference ID mandatory
   - **Quantity Validation**: Must be positive and not exceed available stock
   - **Serial Matching**: Serial count must match quantity
   - **Store Availability**: Sufficient stock in selected source store
   - **Serial Availability**: All selected serials must exist in source

3. **Submit for Processing**
   - Click **"Check Out"** button
   - Or press **Ctrl+S** to save
   - Transfer is validated and queued for processing

4. **Processing Results**
   - **Customer Sales**: Transfer processes immediately and updates inventory
   - **Cross-Warehouse Transfers**: Transfer request sent to destination warehouse for approval
   - **Store Transfers**: Internal transfer processed immediately
   - **Offline**: All transfers queue for sync when connection restored

:::info Cross-Warehouse Transfer Approval
Cross-warehouse transfers require approval from the receiving warehouse. The transfer will only complete after the destination warehouse accepts the request. If rejected, the stock remains with the sender.
:::

<!-- ![Submitting Check-Out Transfer](/img/inventory/checkout-submit.gif) -->

> Reviewing and submitting the check-out transfer

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
   - **Validation**: Checks against available inventory in source store
   - **Auto-Fill**: Populates additional serial fields automatically

<!-- ![Mobile Check-Out Processing](/img/inventory/checkout-mobile.gif) -->

> Using mobile devices and barcode scanning for check-outs

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

## 🔄 **Transfer Types & Processing**

### Customer Sales

- **Recipient**: External customers
- **Processing**: Immediate inventory update
- **Serial Validation**: Any available serials can be issued
- **Use Case**: Point of sale, customer orders, external shipments

### Cross-Warehouse Transfers (CWT)

- **Recipient**: Other warehouses in your company
- **Processing**: Transfer request sent to destination warehouse for approval
- **Approval Workflow**: Receiving warehouse must approve before transfer completes
- **Rejection Handling**: If rejected, stock reverts back to sender warehouse
- **Request Management**: View and manage pending requests in the Requests section
- **Use Case**: Inter-warehouse stock movement requiring mutual agreement

:::info Cross-Warehouse Transfer Requests
For detailed information on managing cross-warehouse transfer requests, including how to approve, reject, or track pending transfers, see the **Requests Management** documentation.
:::

### Store Transfers

- **Recipient**: Internal stores within same warehouse
- **Processing**: Immediate internal transfer
- **Serial Validation**: Serials must exist in source store
- **Use Case**: Store-to-store movement, internal reorganization

## 💡 **Best Practices for Check-Outs**

### Preparation

- **Stock Verification**: Check available inventory before creating transfers
- **Recipient Confirmation**: Verify customer/warehouse/store details
- **Reference Documents**: Have sales orders or transfer requests ready

### Processing

- **Accurate Issuing**: Issue exact quantities and correct serial numbers
- **Quality Control**: Inspect items before transfer to customers
- **Documentation**: Include all reference numbers and delivery details
- **Serial Tracking**: Ensure correct serial assignment for traceability

### Organization

- **Priority Handling**: Process urgent customer orders first
- **Batch Processing**: Group similar transfers for efficiency
- **Regular Reconciliation**: Compare issued vs received quantities

## 🔧 **Troubleshooting**

### Common Issues

#### Insufficient Stock

- Check available quantity in selected source store
- Verify store assignment is correct
- Consider alternative sourcing locations or backorders

#### Serial Not Available

- For store transfers: Verify serial exists in source store
- Check serial number accuracy
- Review serial assignment in inventory

#### Recipient Not Found

- Check customer/warehouse/store setup in your company
- Verify user permissions for recipient access
- Create new recipients if legitimately missing

#### Processing Failures

- Check validation errors and correct data
- Verify internet connection for online processing
- Review queue panel for failed transfers

#### Transfer Conflicts

- Check for concurrent transfers affecting same inventory
- Review transfer history for recent changes
- Contact support for complex conflicts

#### Cross-Warehouse Transfer Issues

- Check request status in the Requests section
- Verify receiving warehouse has approved the transfer
- Contact destination warehouse if approval is delayed
- Monitor for automatic rejection timeouts

#### Barcode Scanning Problems

- Ensure good lighting and clean barcodes
- Check scanner connection and settings
- Verify camera permissions for mobile scanning

:::info Need Help?
Our support team is available **24/7** in Hindi and English. Contact us for assistance with check-out transfers, transfer types, mobile setup, barcode configuration, or offline synchronization.
:::
