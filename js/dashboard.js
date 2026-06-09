(function () {
  'use strict';

  var FM = window.FreshMart;

  var CUSTOMER_DATA = {
    stats: [
      { label: 'Active Orders', value: '3', change: '+1 this week', trend: 'up', icon: 'green' },
      { label: 'Saved Items', value: '24', change: '6 on sale now', trend: 'up', icon: 'orange' },
      { label: 'Wallet Credits', value: '$12.50', change: 'Expires Dec 2026', trend: 'up', icon: 'gold' },
      { label: 'Next Delivery', value: 'Today', change: '2:00 PM – 4:00 PM', trend: 'up', icon: 'green' }
    ],
    deals: [
      { name: 'Organic Avocados', category: 'Produce', price: 3.99, oldPrice: 4.99, discount: '-20%', color: 'produce-green', icon: 'avocado' },
      { name: 'Fresh Strawberries', category: 'Berries', price: 4.49, oldPrice: 5.99, discount: '-25%', color: 'produce-red', icon: 'berry' },
      { name: 'Whole Wheat Bread', category: 'Bakery', price: 2.99, oldPrice: 3.49, discount: '-14%', color: 'produce-cream', icon: 'bread' },
      { name: 'Farm Fresh Eggs', category: 'Dairy', price: 5.49, oldPrice: 6.49, discount: '-15%', color: 'produce-yellow', icon: 'egg' },
      { name: 'Baby Spinach', category: 'Leafy Greens', price: 2.79, oldPrice: 3.49, discount: '-20%', color: 'produce-green', icon: 'leaf' },
      { name: 'Orange Juice', category: 'Beverages', price: 3.29, oldPrice: 4.29, discount: '-23%', color: 'produce-orange', icon: 'juice' }
    ],
    orders: [
      { id: 'FM-2847', items: 'Avocados, Bread, Milk', status: 'Out for Delivery', total: 28.47, date: 'Jun 8, 2026' },
      { id: 'FM-2831', items: 'Chicken, Rice, Vegetables', status: 'Packed', total: 45.92, date: 'Jun 7, 2026' },
      { id: 'FM-2819', items: 'Fruits, Yogurt, Granola', status: 'Delivered', total: 32.15, date: 'Jun 5, 2026' },
      { id: 'FM-2802', items: 'Pasta, Sauce, Cheese', status: 'Delivered', total: 18.76, date: 'Jun 3, 2026' }
    ],
    reorder: ['Organic Milk 1L', 'Bananas (6 ct)', 'Greek Yogurt', 'Whole Grain Cereal'],
    favorites: [
      { name: 'Organic Honey', price: 8.99, color: 'produce-yellow' },
      { name: 'Almond Butter', price: 7.49, color: 'produce-cream' },
      { name: 'Coconut Water', price: 3.99, color: 'produce-green' },
      { name: 'Dark Chocolate', price: 4.29, color: 'produce-purple' }
    ],
    addresses: [
      { label: 'Home', address: '742 Evergreen Terrace, Springfield, IL 62704', default: true },
      { label: 'Office', address: '100 Commerce Blvd, Suite 200, Springfield, IL 62701', default: false }
    ],
    cart: [
      { name: 'Organic Avocados (3 ct)', unit: 'Produce', price: 3.99, color: 'produce-green' },
      { name: 'Fresh Salmon Fillet', unit: 'Seafood', price: 12.99, color: 'produce-orange' },
      { name: 'Greek Yogurt 32oz', unit: 'Dairy', price: 5.49, color: 'produce-cream' }
    ],
    notifications: [
      { type: 'order', text: 'Your order FM-2847 is out for delivery!', time: '10 min ago' },
      { type: 'deal', text: '20% off organic produce — today only!', time: '1 hour ago' },
      { type: 'order', text: 'Order FM-2831 has been packed.', time: '3 hours ago' }
    ]
  };

  var ADMIN_DATA = {
    stats: [
      { label: "Today's Orders", value: '47', change: '+12% vs yesterday', trend: 'up', icon: 'green' },
      { label: 'Low Stock Items', value: '8', change: 'Needs attention', trend: 'down', icon: 'red' },
      { label: 'Revenue Today', value: '$3,842', change: '+8.5% vs avg', trend: 'up', icon: 'gold' },
      { label: 'Pending Deliveries', value: '15', change: '6 due by 2 PM', trend: 'up', icon: 'orange' }
    ],
    orders: [
      { id: 'FM-2847', customer: 'Sarah Johnson', items: 5, status: 'Out for Delivery', total: 28.47 },
      { id: 'FM-2846', customer: 'Mike Chen', items: 8, status: 'Packed', total: 67.32 },
      { id: 'FM-2845', customer: 'Emily Davis', items: 3, status: 'Pending', total: 15.89 },
      { id: 'FM-2844', customer: 'James Wilson', items: 12, status: 'Delivered', total: 94.50 },
      { id: 'FM-2843', customer: 'Lisa Park', items: 6, status: 'Pending', total: 42.18 },
      { id: 'FM-2842', customer: 'Robert Brown', items: 4, status: 'Packed', total: 31.75 }
    ],
    lowStock: [
      { name: 'Organic Bananas', sku: 'PRD-1042', stock: 12, min: 50 },
      { name: 'Whole Milk 1 Gallon', sku: 'DRY-0201', stock: 8, min: 30 },
      { name: 'Free-Range Eggs (12 ct)', sku: 'DRY-0315', stock: 5, min: 25 },
      { name: 'Sourdough Bread', sku: 'BKY-0088', stock: 3, min: 20 }
    ],
    chart: [
      { day: 'Mon', value: 62, amount: '$2,480' },
      { day: 'Tue', value: 78, amount: '$3,120' },
      { day: 'Wed', value: 55, amount: '$2,200' },
      { day: 'Thu', value: 85, amount: '$3,400' },
      { day: 'Fri', value: 92, amount: '$3,680' },
      { day: 'Sat', value: 100, amount: '$4,000' },
      { day: 'Sun', value: 70, amount: '$2,800' }
    ],
    products: [
      { name: 'Organic Avocados', category: 'Produce', price: 3.99, stock: 145, status: 'In Stock' },
      { name: 'Fresh Salmon', category: 'Seafood', price: 12.99, stock: 32, status: 'In Stock' },
      { name: 'Organic Bananas', category: 'Produce', price: 0.69, stock: 12, status: 'Low Stock' },
      { name: 'Whole Milk', category: 'Dairy', price: 4.29, stock: 8, status: 'Low Stock' }
    ],
    customers: [
      { name: 'Sarah Johnson', email: 'sarah.j@email.com', orders: 24, spent: '$892.40' },
      { name: 'Mike Chen', email: 'mike.chen@email.com', orders: 18, spent: '$654.20' },
      { name: 'Emily Davis', email: 'emily.d@email.com', orders: 31, spent: '$1,124.80' }
    ],
    notifications: [
      { type: 'alert', text: 'Organic Bananas stock below minimum threshold.', time: '5 min ago' },
      { type: 'order', text: 'New order FM-2847 received — $28.47', time: '12 min ago' },
      { type: 'order', text: 'Order FM-2844 marked as delivered.', time: '45 min ago' }
    ]
  };

  var productIcons = {
    avocado: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="14" rx="7" ry="8"/><circle cx="12" cy="14" r="3" fill="rgba(255,255,255,0.3)"/></svg>',
    berry: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="10" r="4"/><circle cx="14" cy="8" r="3.5"/><circle cx="16" cy="14" r="4"/><circle cx="10" cy="16" r="3"/></svg>',
    bread: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 14c0-4 3.5-8 8-8s8 4 8 8v2H4v-2z"/><rect x="4" y="16" width="16" height="3" rx="1.5"/></svg>',
    egg: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="13" rx="7" ry="9"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.04-2.44C8.14 16.87 11.07 13 17 13V8z"/></svg>',
    juice: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="8" y="2" width="8" height="3" rx="1"/><path d="M7 5h10l-1.5 17H8.5L7 5z"/></svg>',
    default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>'
  };

  var statIcons = {
    green: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>',
    orange: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    gold: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    red: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
  };

  function getStatusClass(status) {
    var map = {
      'Pending': 'status-pending',
      'Packed': 'status-packed',
      'Out for Delivery': 'status-delivery',
      'Delivered': 'status-delivered',
      'In Stock': 'status-delivered',
      'Low Stock': 'status-pending'
    };
    return map[status] || 'status-pending';
  }

  function protectRoute(expectedRole) {
    var role = sessionStorage.getItem('freshmart_role');
    if (!role) {
      window.location.href = 'login.html';
      return false;
    }
    if (role !== expectedRole) {
      window.location.href = role === 'admin' ? 'dashboard-admin.html' : 'dashboard-customer.html';
      return false;
    }
    return true;
  }

  function initUserProfile() {
    var name = sessionStorage.getItem('freshmart_user_name') || 'FreshMart User';
    var email = sessionStorage.getItem('freshmart_user_email') || 'user@freshmart.com';
    var initials = FM.getInitials(name);

    document.querySelectorAll('[data-user-name]').forEach(function (el) {
      el.textContent = name;
    });

    document.querySelectorAll('[data-user-firstname]').forEach(function (el) {
      el.textContent = FM.getFirstName(name);
    });

    document.querySelectorAll('[data-user-email]').forEach(function (el) {
      el.textContent = email;
    });

    document.querySelectorAll('[data-user-initials]').forEach(function (el) {
      el.textContent = initials;
    });
  }

  function initSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    var toggle = document.getElementById('sidebarToggle');

    if (toggle && sidebar) {
      toggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
      });
    }

    if (overlay && sidebar) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }

    document.querySelectorAll('.sidebar-nav-link[data-section]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var section = link.getAttribute('data-section');
        switchSection(section);

        document.querySelectorAll('.sidebar-nav-link').forEach(function (l) {
          l.classList.remove('active');
        });
        link.classList.add('active');

        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
      });
    });

    document.querySelectorAll('[data-goto-section]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var section = btn.getAttribute('data-goto-section');
        switchSection(section);

        document.querySelectorAll('.sidebar-nav-link[data-section]').forEach(function (l) {
          l.classList.toggle('active', l.getAttribute('data-section') === section);
        });
      });
    });
  }

  function switchSection(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(function (section) {
      section.classList.remove('active');
    });
    var target = document.getElementById('section-' + sectionId);
    if (target) target.classList.add('active');
  }

  function initDropdowns() {
    var notifBtn = document.getElementById('notificationBtn');
    var notifDropdown = document.getElementById('notificationDropdown');
    var profileBtn = document.getElementById('profileBtn');
    var profileWrap = document.querySelector('.profile-wrap');
    var profileDropdown = document.getElementById('profileDropdown');

    if (notifBtn && notifDropdown) {
      notifBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        notifDropdown.classList.toggle('open');
        if (profileDropdown) profileDropdown.classList.remove('open');
        if (profileWrap) profileWrap.classList.remove('open');
      });
    }

    if (profileBtn && profileDropdown && profileWrap) {
      profileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('open');
        profileWrap.classList.toggle('open');
        if (notifDropdown) notifDropdown.classList.remove('open');
      });
    }

    document.addEventListener('click', function () {
      if (notifDropdown) notifDropdown.classList.remove('open');
      if (profileDropdown) profileDropdown.classList.remove('open');
      if (profileWrap) profileWrap.classList.remove('open');
    });

    document.querySelectorAll('.logout-btn, .logout-link, .logout-item').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        sessionStorage.clear();
        window.location.href = 'login.html';
      });
    });
  }

  function renderStats(containerId, stats) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = stats.map(function (stat) {
      return '<div class="stat-card">' +
        '<div class="stat-card-header">' +
          '<div class="stat-icon ' + stat.icon + '">' + (statIcons[stat.icon] || statIcons.green) + '</div>' +
        '</div>' +
        '<div class="stat-value">' + stat.value + '</div>' +
        '<div class="stat-label">' + stat.label + '</div>' +
        '<div class="stat-change ' + stat.trend + '">' + stat.change + '</div>' +
      '</div>';
    }).join('');
  }

  function renderProductCards(containerId, products) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(function (p) {
      var icon = productIcons[p.icon] || productIcons.default;
      return '<div class="product-card">' +
        (p.discount ? '<span class="discount-badge">' + p.discount + '</span>' : '') +
        '<div class="product-image ' + p.color + '">' + icon + '</div>' +
        '<div class="product-body">' +
          '<div class="product-category">' + p.category + '</div>' +
          '<div class="product-name">' + p.name + '</div>' +
          '<div class="product-price-row">' +
            '<span class="product-price">' + FM.formatCurrency(p.price) + '</span>' +
            (p.oldPrice ? '<span class="product-price-old">' + FM.formatCurrency(p.oldPrice) + '</span>' : '') +
          '</div>' +
          '<div class="product-actions">' +
            '<button type="button" class="btn btn-primary btn-sm" onclick="window.location.href=\'404.html\'">Add to Cart</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    bindSectionButtons(container);
  }

  function renderCustomerOrders(containerId, orders) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = orders.map(function (o) {
      return '<div class="order-item">' +
        '<div class="order-id">' + o.id + '</div>' +
        '<div class="order-details">' +
          '<h4>' + o.items + '</h4>' +
          '<p>' + o.date + '</p>' +
        '</div>' +
        '<span class="status-pill ' + getStatusClass(o.status) + '">' + o.status + '</span>' +
        '<div class="order-meta">' +
          '<div class="order-total">' + FM.formatCurrency(o.total) + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderReorder(containerId, items) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(function (item) {
      return '<span class="reorder-chip">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>' +
        item +
      '</span>';
    }).join('');
  }

  function renderNotifications(containerId, notifications) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = notifications.map(function (n) {
      return '<div class="notification-item">' +
        '<div class="notification-icon ' + n.type + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>' +
        '</div>' +
        '<div class="notification-content">' +
          '<p>' + n.text + '</p>' +
          '<span>' + n.time + '</span>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderAdminOrders(containerId, orders) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '<div class="data-table-wrap"><table class="data-table">' +
      '<thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Status</th><th>Total</th></tr></thead>' +
      '<tbody>' +
      orders.map(function (o) {
        return '<tr>' +
          '<td><strong>' + o.id + '</strong></td>' +
          '<td>' + o.customer + '</td>' +
          '<td>' + o.items + '</td>' +
          '<td><span class="status-pill ' + getStatusClass(o.status) + '">' + o.status + '</span></td>' +
          '<td><strong>' + FM.formatCurrency(o.total) + '</strong></td>' +
        '</tr>';
      }).join('') +
      '</tbody></table></div>';
  }

  function renderLowStock(containerId, items) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(function (item) {
      return '<div class="alert-item">' +
        '<div class="alert-item-icon">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
        '</div>' +
        '<div class="alert-item-info">' +
          '<h4>' + item.name + '</h4>' +
          '<p>SKU: ' + item.sku + ' &middot; Min: ' + item.min + ' units</p>' +
        '</div>' +
        '<span class="alert-stock">' + item.stock + ' left</span>' +
      '</div>';
    }).join('');
  }

  function renderChart(containerId, data) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(function (d, i) {
      var highlight = i === data.length - 2 ? ' highlight' : '';
      return '<div class="chart-bar-group">' +
        '<span class="chart-value">' + d.amount + '</span>' +
        '<div class="chart-bar' + highlight + '" style="height:' + d.value + '%"></div>' +
        '<span class="chart-label">' + d.day + '</span>' +
      '</div>';
    }).join('');
  }

  function renderFavorites(containerId, items) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(function (f) {
      return '<div class="favorite-item">' +
        '<div class="favorite-icon ' + f.color + '">' + productIcons.leaf + '</div>' +
        '<div class="favorite-info">' +
          '<h4>' + f.name + '</h4>' +
          '<p>' + FM.formatCurrency(f.price) + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderAddresses(containerId, addresses) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = addresses.map(function (a) {
      return '<div class="address-card' + (a.default ? ' default' : '') + '">' +
        (a.default ? '<span class="address-badge">Default</span>' : '') +
        '<h4>' + a.label + '</h4>' +
        '<p>' + a.address + '</p>' +
      '</div>';
    }).join('');
  }

  function renderCart(containerId, items) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var subtotal = items.reduce(function (sum, item) { return sum + item.price; }, 0);
    var delivery = 4.99;
    var total = subtotal + delivery;

    container.innerHTML = items.map(function (item) {
      return '<div class="cart-item">' +
        '<div class="cart-item-image ' + item.color + '">' + productIcons.leaf + '</div>' +
        '<div class="cart-item-info">' +
          '<h4>' + item.name + '</h4>' +
          '<p>' + item.unit + '</p>' +
        '</div>' +
        '<div class="cart-item-price">' + FM.formatCurrency(item.price) + '</div>' +
      '</div>';
    }).join('') +
    '<div class="cart-summary">' +
      '<div class="cart-summary-row"><span>Subtotal</span><span>' + FM.formatCurrency(subtotal) + '</span></div>' +
      '<div class="cart-summary-row"><span>Delivery Fee</span><span>' + FM.formatCurrency(delivery) + '</span></div>' +
      '<div class="cart-summary-row total"><span>Total</span><span>' + FM.formatCurrency(total) + '</span></div>' +
      '<button type="button" class="btn btn-primary btn-block" style="margin-top:16px" onclick="window.location.href=\'404.html\'">Proceed to Checkout</button>' +
    '</div>';
  }

  function renderAdminProducts(containerId, products) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '<div class="data-table-wrap"><table class="data-table">' +
      '<thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead>' +
      '<tbody>' +
      products.map(function (p) {
        return '<tr>' +
          '<td><strong>' + p.name + '</strong></td>' +
          '<td>' + p.category + '</td>' +
          '<td>' + FM.formatCurrency(p.price) + '</td>' +
          '<td>' + p.stock + '</td>' +
          '<td><span class="status-pill ' + getStatusClass(p.status) + '">' + p.status + '</span></td>' +
        '</tr>';
      }).join('') +
      '</tbody></table></div>';
  }

  function renderAdminCustomers(containerId, customers) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '<div class="data-table-wrap"><table class="data-table">' +
      '<thead><tr><th>Name</th><th>Email</th><th>Orders</th><th>Total Spent</th></tr></thead>' +
      '<tbody>' +
      customers.map(function (c) {
        return '<tr>' +
          '<td><strong>' + c.name + '</strong></td>' +
          '<td>' + c.email + '</td>' +
          '<td>' + c.orders + '</td>' +
          '<td><strong>' + c.spent + '</strong></td>' +
        '</tr>';
      }).join('') +
      '</tbody></table></div>';
  }

  function bindSectionButtons(container) {
    if (!container) container = document;
    container.querySelectorAll('[data-goto-section]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var section = btn.getAttribute('data-goto-section');
        switchSection(section);
        document.querySelectorAll('.sidebar-nav-link[data-section]').forEach(function (l) {
          l.classList.toggle('active', l.getAttribute('data-section') === section);
        });
        var notifDropdown = document.getElementById('notificationDropdown');
        var profileDropdown = document.getElementById('profileDropdown');
        var profileWrap = document.querySelector('.profile-wrap');
        if (notifDropdown) notifDropdown.classList.remove('open');
        if (profileDropdown) profileDropdown.classList.remove('open');
        if (profileWrap) profileWrap.classList.remove('open');
        var sidebar = document.getElementById('sidebar');
        var overlay = document.getElementById('sidebarOverlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
      });
    });
  }

  function initQuickActions() {
    document.querySelectorAll('.quick-action-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var action = btn.getAttribute('data-action');
        var messages = {
          'add-product': 'Product form opened — ready to add new inventory.',
          'update-stock': 'Stock update panel loaded successfully.',
          'export-report': 'Report exported — check your downloads folder.'
        };
        FM.showToast(messages[action] || 'Action completed.', 'success');
      });
    });
  }

  function initCustomerDashboard() {
    if (!protectRoute('customer')) return;

    initUserProfile();
    initSidebar();
    initDropdowns();
    bindSectionButtons();

    renderStats('statsGrid', CUSTOMER_DATA.stats);
    renderProductCards('dealsGrid', CUSTOMER_DATA.deals);
    renderCustomerOrders('recentOrders', CUSTOMER_DATA.orders);
    renderReorder('reorderItems', CUSTOMER_DATA.reorder);
    renderNotifications('notificationList', CUSTOMER_DATA.notifications);
    renderFavorites('favoritesGrid', CUSTOMER_DATA.favorites);
    renderAddresses('addressGrid', CUSTOMER_DATA.addresses);
    renderCart('cartList', CUSTOMER_DATA.cart);
    renderCustomerOrders('allOrdersList', CUSTOMER_DATA.orders);
    renderProductCards('allDealsGrid', CUSTOMER_DATA.deals);
  }

  function initAdminDashboard() {
    if (!protectRoute('admin')) return;

    initUserProfile();
    initSidebar();
    initDropdowns();
    initQuickActions();

    renderStats('statsGrid', ADMIN_DATA.stats);
    renderAdminOrders('ordersTable', ADMIN_DATA.orders);
    renderLowStock('lowStockList', ADMIN_DATA.lowStock);
    renderChart('salesChart', ADMIN_DATA.chart);
    renderNotifications('notificationList', ADMIN_DATA.notifications);
    renderAdminOrders('allOrdersTable', ADMIN_DATA.orders);
    renderAdminProducts('productsTable', ADMIN_DATA.products);
    renderAdminCustomers('customersTable', ADMIN_DATA.customers);
    renderLowStock('inventoryAlerts', ADMIN_DATA.lowStock);
    renderChart('reportsChart', ADMIN_DATA.chart);
  }

  function init404() {
    var dashBtn = document.getElementById('goToDashboard');
    if (dashBtn) {
      dashBtn.addEventListener('click', function () {
        var role = sessionStorage.getItem('freshmart_role');
        if (role === 'admin') {
          window.location.href = 'dashboard-admin.html';
        } else if (role === 'customer') {
          window.location.href = 'dashboard-customer.html';
        } else {
          window.location.href = 'login.html';
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page');
    if (page === 'customer') initCustomerDashboard();
    else if (page === 'admin') initAdminDashboard();
    else if (page === '404') init404();
  });
})();
