# HA Mail and Packages Card

A modernized custom Lovelace card to display mail and package delivery information from the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages).

> **Note:** This is a fork of [moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card) updated to work with Home Assistant 2024+.

<img src="https://github.com/derekslenk/Home-Assistant-Mail-And-Packages-Custom-Card/blob/master/img/card-image.png?raw=true" alt="Preview of card" />

## Installation

### HACS (Recommended)

1. Install [HACS](https://hacs.xyz) if you haven't already
2. Add this repository as a custom repository:
   - URL: `https://github.com/derekslenk/Home-Assistant-Mail-And-Packages-Custom-Card`
   - Category: **Dashboard**
3. Search for "HA Mail and Packages" in HACS Frontend
4. Click Install
5. Refresh your browser (clear cache if needed)

### Manual Installation

1. Download `ha-mail-and-packages-card.js` from the [latest release](https://github.com/derekslenk/Home-Assistant-Mail-And-Packages-Custom-Card/releases)
2. Copy to your Home Assistant config: `config/www/ha-mail-and-packages-card.js`
3. Add the resource in Home Assistant:
   - Go to **Settings → Dashboards → Resources** (or **3-dot menu → Resources**)
   - Add Resource:
     ```
     URL: /local/ha-mail-and-packages-card.js
     Type: JavaScript Module
     ```
4. Refresh your browser

## Card Configuration

### Using the Visual Editor

1. Edit your dashboard
2. Click **+ Add Card**
3. Search for "HA Mail and Packages"
4. Configure using the visual editor with helpful labels and descriptions

### YAML Configuration

```yaml
type: custom:ha-mail-and-packages-card
name: Mail Summary
updated: sensor.mail_updated
details: true
image: false
camera: false
```

### Available Sensors from Mail and Packages Integration

The [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) provides these sensor types:

**Aggregate Sensors:**
- `sensor.zpackages_delivered` - Total packages delivered today (all carriers)
- `sensor.zpackages_transit` - Total packages in transit today (all carriers)

**Per-Carrier Sensors:**
- `sensor.usps_packages` - Total USPS packages
- `sensor.usps_delivered` - USPS packages delivered today
- `sensor.usps_delivering` - USPS packages in transit today
- `sensor.ups_packages` - Total UPS packages
- `sensor.ups_delivered` - UPS packages delivered today
- `sensor.ups_delivering` - UPS packages in transit today
- `sensor.fedex_packages` - Total FedEx packages
- `sensor.fedex_delivered` - FedEx packages delivered today
- `sensor.fedex_delivering` - FedEx packages in transit today
- `sensor.amazon_packages` - Total Amazon packages
- `sensor.amazon_delivered` - Amazon packages delivered today

**USPS Mail:**
- `sensor.usps_mail` - Mail piece count from USPS Informed Delivery

**Mail Images:**
- `sensor.mail_image_url` - Web-accessible URL to mail image
- `sensor.mail_image_system_path` - Local file system path to mail image

### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `name` | string | No | - | Card title |
| `updated` | entity | **Yes** | - | Mail updated sensor (`sensor.mail_updated`) |
| `details` | boolean | No | `true` | Show package counts section |
| `image` | boolean | No | `false` | Show mail GIF image |
| `camera` | boolean | No | `false` | Show camera entity image |
| `deliveries_message` | entity | No | - | Optional template sensor for custom delivery summary |
| `packages_delivered` | entity | No | - | **Aggregate:** `sensor.zpackages_delivered` - total delivered today (all carriers) |
| `packages_in_transit` | entity | No | - | **Aggregate:** `sensor.zpackages_transit` - total in transit today (all carriers) |
| `usps_mail` | entity | No | - | USPS mail piece count (`sensor.usps_mail`) |
| `usps_packages` | entity | No | - | USPS package total (`sensor.usps_packages`, or use `usps_delivered`/`usps_delivering`) |
| `ups_packages` | entity | No | - | UPS package total (`sensor.ups_packages`, or use `ups_delivered`/`ups_delivering`) |
| `fedex_packages` | entity | No | - | FedEx package total (`sensor.fedex_packages`, or use `fedex_delivered`/`fedex_delivering`) |
| `amazon_packages` | entity | No | - | Amazon package total (`sensor.amazon_packages`) |
| `gif_sensor` | entity | No | - | Mail image sensor (`sensor.mail_image_url` or `sensor.mail_image_system_path`) |
| `camera_entity` | entity | No | - | Local file camera entity for mail image |

### Full Example

```yaml
type: custom:ha-mail-and-packages-card
name: Mail Summary
updated: sensor.mail_updated
deliveries_message: sensor.mail_deliveries_message  # Optional custom template sensor
packages_delivered: sensor.zpackages_delivered      # Aggregate - all carriers delivered today
packages_in_transit: sensor.zpackages_transit       # Aggregate - all carriers in transit today
usps_mail: sensor.usps_mail                         # USPS mail pieces
usps_packages: sensor.usps_packages                 # USPS total packages
ups_packages: sensor.ups_packages                   # UPS total packages
fedex_packages: sensor.fedex_packages               # FedEx total packages
amazon_packages: sensor.amazon_packages             # Amazon total packages
details: true
image: true
gif_sensor: sensor.mail_image_url                   # Or sensor.mail_image_system_path
camera: false
```

## Mail Image Display

You can display USPS Informed Delivery images using either method:

### Option 1: GIF Sensor
Set `image: true` and configure `gif_sensor` to point to a sensor containing the path to your `mail_today.gif` file. The GIF must be in your `www` folder (e.g., `/local/mail_today.gif`).

### Option 2: Camera Entity
Set `camera: true` and configure `camera_entity` to point to a [local file camera](https://www.home-assistant.io/integrations/local_file/) entity.

## Development

### Prerequisites
- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/derekslenk/Home-Assistant-Mail-And-Packages-Custom-Card.git
cd Home-Assistant-Mail-And-Packages-Custom-Card

# Install dependencies
npm install

# Build for production
npm run build

# Development with watch mode
npm run dev
```

### Project Structure

```
├── src/
│   ├── ha-mail-and-packages-card.ts  # Main card component
│   └── types.ts                       # TypeScript interfaces
├── dist/
│   └── ha-mail-and-packages-card.js  # Built output
├── package.json
├── rollup.config.mjs
└── tsconfig.json
```

## Changelog

### v0.7.0
- Modernized to work with Home Assistant 2024+
- Migrated to TypeScript with bundled Lit
- Replaced custom editor with schema-based configuration
- Card now appears in the card picker
- Improved performance with proper reactive updates
- Renamed to `ha-mail-and-packages-card`

### v0.06 (Original)
- Legacy version from original repository

## Related Projects

- [Mail and Packages Integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) - The integration that provides the sensors for this card
- [Original Card](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card) - The original card this is forked from
