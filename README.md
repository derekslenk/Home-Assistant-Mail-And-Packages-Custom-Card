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

The [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) provides these sensor types. **Note:** Entity IDs depend on your integration configuration. Common prefixes are `mail_`, `zpackages_`, or custom names.

**Aggregate Sensors (Total Across All Carriers):**
- Delivered today: `sensor.mail_packages_delivered` or `sensor.zpackages_delivered`
- In transit today: `sensor.mail_packages_in_transit` or `sensor.zpackages_transit`

**Per-Carrier Sensors:**
- USPS: `sensor.mail_usps_packages` (total), `sensor.mail_usps_delivered`, `sensor.mail_usps_delivering`
- UPS: `sensor.mail_ups_packages` (total), `sensor.mail_ups_delivered`, `sensor.mail_ups_delivering`
- FedEx: `sensor.mail_fedex_packages` (total), `sensor.mail_fedex_delivered`, `sensor.mail_fedex_delivering`
- Amazon: `sensor.mail_amazon_packages` (total), `sensor.mail_amazon_packages_delivered`

**USPS Mail:**
- `sensor.mail_usps_mail` - Mail piece count from USPS Informed Delivery

**Mail Images:**
- `sensor.mail_image_url` - Web-accessible URL to mail image
- `sensor.mail_image_system_path` - Local file system path to mail image

> **Tip:** Use Developer Tools → States to find your exact entity IDs. Entity names vary based on integration configuration.

### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `name` | string | No | - | Card title |
| `updated` | entity | **Yes** | - | Mail updated sensor (`sensor.mail_updated`) |
| `details` | boolean | No | `true` | Show package counts section |
| `image` | boolean | No | `false` | Show mail GIF image |
| `camera` | boolean | No | `false` | Show camera entity image |
| `deliveries_message` | entity | No | - | Optional template sensor for custom delivery summary |
| `packages_delivered` | entity | No | - | **Aggregate:** Total delivered today from all carriers (e.g., `sensor.mail_packages_delivered`) |
| `packages_in_transit` | entity | No | - | **Aggregate:** Total in transit today from all carriers (e.g., `sensor.mail_packages_in_transit`) |
| `usps_mail` | entity | No | - | USPS mail piece count (e.g., `sensor.mail_usps_mail`) |
| `usps_packages` | entity | No | - | USPS package total (e.g., `sensor.mail_usps_packages`) |
| `ups_packages` | entity | No | - | UPS package total (e.g., `sensor.mail_ups_packages`) |
| `fedex_packages` | entity | No | - | FedEx package total (e.g., `sensor.mail_fedex_packages`) |
| `amazon_packages` | entity | No | - | Amazon package total (e.g., `sensor.mail_amazon_packages`) |
| `gif_sensor` | entity | No | - | Mail image sensor (e.g., `sensor.mail_image_url` or `sensor.mail_image_system_path`) |
| `camera_entity` | entity | No | - | Primary camera entity (e.g., generic delivery camera) |
| `camera_entity_2` | entity | No | - | Optional second camera entity (stacks vertically below primary) |

### Full Example

```yaml
type: custom:ha-mail-and-packages-card
name: Mail Summary
updated: sensor.mail_updated
deliveries_message: sensor.mail_deliveries_message  # Optional custom template sensor
packages_delivered: sensor.mail_packages_delivered  # Aggregate - all carriers delivered today
packages_in_transit: sensor.mail_packages_in_transit # Aggregate - all carriers in transit today
usps_mail: sensor.mail_usps_mail                    # USPS mail pieces
usps_packages: sensor.mail_usps_packages            # USPS total packages
ups_packages: sensor.mail_ups_packages              # UPS total packages
fedex_packages: sensor.mail_fedex_packages          # FedEx total packages
amazon_packages: sensor.mail_amazon_packages        # Amazon total packages
details: true
image: true
gif_sensor: sensor.mail_image_system_path           # Or sensor.mail_image_url
camera: false
```

## Mail Image Display

You can display USPS Informed Delivery images using either method:

### Option 1: GIF Sensor
Set `image: true` and configure `gif_sensor` to point to a sensor containing the path to your `mail_today.gif` file. The GIF must be in your `www` folder (e.g., `/local/mail_today.gif`).

### Option 2: Camera Entity
Set `camera: true` and configure `camera_entity` to point to a [local file camera](https://www.home-assistant.io/integrations/local_file/) entity.

**Multiple Cameras:** You can display two camera feeds stacked vertically by configuring both `camera_entity` and `camera_entity_2`. This is useful for showing different delivery cameras (e.g., generic delivery camera and carrier-specific cameras).

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
