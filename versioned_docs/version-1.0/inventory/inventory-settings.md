---
sidebar_position: 8
toc_max_heading_level: 2
---

# Inventory Settings

Configure warehouse-specific display and permission settings through the Inventory tab in your dashboard settings.

## ⚙️ **Accessing Inventory Settings**

### From Dashboard Settings

1. Navigate to your dashboard
2. Click on **Settings** in the top navigation
3. Select the **Inventory** tab
4. Choose a warehouse from the dropdown to configure its settings

### Available Settings

The inventory settings page provides three main configuration options for each warehouse:

## 🏪 **Warehouse Selection**

Select which warehouse you want to configure from the dropdown menu. Settings apply only to the selected warehouse.

## 👁️ **Display Settings**

### Show Stores

Toggle whether stores are visible in the inventory interface:

- **Checked**: Store-level organization appears throughout inventory pages
- **Unchecked**: Simplified warehouse-level view only
- **Changes apply immediately** when toggled

### Default Warehouse

Set the selected warehouse as your branch's default:

- **Radio button**: Select to make this warehouse the default for your branch
- **One default per branch**: Only one warehouse can be marked as default
- **Navigation impact**: Affects default landing pages and shortcuts

## 🔐 **Auto Accept Permissions**

### Enable Auto Accept

Bypass approval workflows for trusted entities:

- **Checkbox**: Enable/disable automatic approval for check-in/check-out operations
- **Tooltip**: "Warehouses and accounts you add here will not be asked for permission to checkin or checkout"
- **Security consideration**: Only enable for completely trusted entities

### Permission Configuration

When Auto Accept is enabled, configure trusted entities:

#### Warehouses

Multi-select dropdown to add other warehouses that can access this warehouse without approval.

#### Accounts

Multi-select dropdown to add specific user accounts (admins) that can access this warehouse without approval.

### Saving Changes

- **Save button appears** when you've added or removed entities
- **Click Save** to apply permission changes
- **Changes are logged** for audit purposes

## 📱 **Interface Behavior**

### Real-time Updates

- **Display settings** (Show Stores, Default Warehouse) apply immediately
- **Auto Accept toggle** applies immediately
- **Permission changes** require clicking Save button

### Permission Requirements

- **Manager access**: Full control over warehouse settings
- **Worker access**: Limited to warehouses they can manage
- **Context awareness**: Settings are warehouse-specific

## ⚠️ **Important Notes**

### Security Considerations

Auto Accept permissions bypass approval workflows. Only add entities you completely trust, as they gain automatic access to inventory operations.

### Troubleshooting

**Settings not saving**: Ensure you have permission to modify the selected warehouse.

**Changes not applying**: Try refreshing the page or switching warehouses and back.

**Auto Accept not working**: Verify entities are correctly added and still exist.

:::info Need Help?
Our support team is available **24/7** in Hindi and English. Contact us for assistance with replacement transfers, customer inventory management, serial number exchanges, or RMA processing.
:::
