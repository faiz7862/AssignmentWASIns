# logoipsum Travel Insurance - Website Prototype

A responsive, feature-rich travel insurance website prototype built with HTML5, CSS3, and vanilla JavaScript.

## Project Overview

This is a modern travel insurance website prototype showcasing a professional insurance platform with an intuitive navigation system, responsive design, and interactive components.

## File Structure

```
figma-prototype/
├── index.html              # Home page with quote form
├── services.html           # Emergency Assistance & Services page
├── contact.html            # Customer Service & Contact form
├── css/style.css          # Main stylesheet
├── js/script.js           # JavaScript interactions
└── README.md
```

## Key Features

### Navigation Drawer (Mobile)
- Fixed drawer panel (280px) that slides in from left
- Expandable menu items with smooth animations
- Overlay dim when drawer is open
- Travel Insurance submenu with 5 items
- Customer Service submenu
- Emergency Assistance direct link

### Home Page
- Travel insurance quote form
- Destination input with removable tags
- Date pickers for departure/return
- Age counter with +/- buttons
- Yellow "GET A QUOTE" CTA button
- Responsive hero section

### Services Page
- Blue gradient hero section
- 6 service cards in responsive grid:
  - Medical Emergency, Travel Crisis Support, 24/7 Support
  - Financial Protection, Personal Safety, Global Network
- Service icons and descriptions
- Call-to-action section

### Contact Page
- Customer service contact form
- Name, email, message fields
- Form validation and error messages
- Success feedback

## Color Scheme

- **Brand Blue**: #1a4d8f
- **Golden Yellow**: #ffc107
- **Orange**: #ff9800
- **Light Blue BG**: #e6f4fa

## Responsive Design

- Mobile-first approach
- Breakpoint: 900px
- Services grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Drawer navigation on mobile only

## Running Locally

```bash
python -m http.server 8080
# Open http://localhost:8080
```

## Navigation Drawer Usage

### Open Drawer
- Click "Menu" button in header

### Menu Items
- **Travel Insurance** (Expandable)
  - Plans, Upgrades, Traveller Type, Trip Type, Benefits
- **Emergency Assistance** (Link to services.html)
- **Customer Service** (Expandable)
  - Contact Us, Support

### Close Drawer
- Click close button (×)
- Click overlay
- Navigate to another page

## Accessibility

- Semantic HTML5
- ARIA attributes (aria-hidden, aria-expanded, aria-label)
- Keyboard navigation support
- Form validation with error messages
- Focus indicators

## Browser Support

- Chrome/Edge, Firefox, Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

- Backend form submission
- Plan comparison tool
- Multi-language support
- Payment integration
- Live chat widget

---

**Version**: 2.0.0
**Built with**: HTML5, CSS3, Vanilla JavaScript
