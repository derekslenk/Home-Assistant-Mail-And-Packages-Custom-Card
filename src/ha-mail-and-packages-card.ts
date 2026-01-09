import { LitElement, html, css, PropertyValues, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant, MailAndPackagesCardConfig, ConfigForm } from './types';

const CARD_VERSION = '0.7.0';

// Fire event helper
const fireEvent = (
  node: HTMLElement,
  type: string,
  detail?: Record<string, unknown>,
  options?: { bubbles?: boolean; cancelable?: boolean; composed?: boolean }
): Event => {
  const event = new CustomEvent(type, {
    bubbles: options?.bubbles ?? true,
    cancelable: options?.cancelable ?? false,
    composed: options?.composed ?? true,
    detail: detail ?? {},
  });
  node.dispatchEvent(event);
  return event;
};

@customElement('ha-mail-and-packages-card')
export class MailAndPackagesCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: MailAndPackagesCardConfig;

  // Schema-based configuration form
  public static getConfigForm(): ConfigForm {
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { name: 'updated', required: true, selector: { entity: { domain: 'sensor' } } },
        { name: 'deliveries_message', selector: { entity: { domain: 'sensor' } } },
        { name: 'packages_delivered', selector: { entity: { domain: 'sensor' } } },
        { name: 'packages_in_transit', selector: { entity: { domain: 'sensor' } } },
        { name: 'usps_mail', selector: { entity: { domain: 'sensor' } } },
        { name: 'usps_packages', selector: { entity: { domain: 'sensor' } } },
        { name: 'ups_packages', selector: { entity: { domain: 'sensor' } } },
        { name: 'fedex_packages', selector: { entity: { domain: 'sensor' } } },
        { name: 'amazon_packages', selector: { entity: { domain: 'sensor' } } },
        { name: 'details', selector: { boolean: {} } },
        { name: 'image', selector: { boolean: {} } },
        { name: 'gif_sensor', selector: { entity: { domain: 'sensor' } } },
        { name: 'camera', selector: { boolean: {} } },
        { name: 'camera_entity', selector: { entity: { domain: 'camera' } } },
      ],
    };
  }

  public static getStubConfig(): Partial<MailAndPackagesCardConfig> {
    return {
      name: 'Mail Summary',
      details: true,
      image: false,
      camera: false,
    };
  }

  public setConfig(config: MailAndPackagesCardConfig): void {
    if (!config.updated) {
      throw new Error('You must define the "updated" sensor (e.g., sensor.mail_updated)');
    }
    this._config = {
      details: true,
      image: false,
      camera: false,
      ...config,
    };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config')) {
      return true;
    }

    if (!this._config || !this.hass) {
      return false;
    }

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass) {
      return true;
    }

    // Check if any of our configured entities changed
    const entities = [
      this._config.updated,
      this._config.deliveries_message,
      this._config.packages_delivered,
      this._config.packages_in_transit,
      this._config.usps_mail,
      this._config.usps_packages,
      this._config.ups_packages,
      this._config.fedex_packages,
      this._config.amazon_packages,
      this._config.gif_sensor,
      this._config.camera_entity,
    ].filter(Boolean) as string[];

    return entities.some(
      (entity) => this.hass.states[entity] !== oldHass.states[entity]
    );
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.updated];

    if (!stateObj) {
      return html`
        <ha-card>
          <div class="not-found">
            Entity not available: ${this._config.updated}
          </div>
        </ha-card>
      `;
    }

    return html`
      <ha-card @click="${this._handleClick}">
        ${this._config.details !== false ? this._renderDetails() : ''}
        ${this._config.image !== false ? this._renderImage() : ''}
        ${this._config.camera !== false ? this._renderCamera() : ''}
        <span class="update-info">v${CARD_VERSION} | Updated: ${stateObj.state}</span>
      </ha-card>
    `;
  }

  private _getEntityState(entityId: string | undefined): string | false {
    if (!entityId) return false;
    const entity = this.hass.states[entityId];
    return entity ? entity.state : false;
  }

  private _renderDetails(): TemplateResult {
    const deliveriesMessage = this._getEntityState(this._config.deliveries_message);
    const packagesDelivered = this._getEntityState(this._config.packages_delivered);
    const packagesInTransit = this._getEntityState(this._config.packages_in_transit);
    const fedexPackages = this._getEntityState(this._config.fedex_packages);
    const upsPackages = this._getEntityState(this._config.ups_packages);
    const uspsPackages = this._getEntityState(this._config.usps_packages);
    const amazonPackages = this._getEntityState(this._config.amazon_packages);
    const uspsMail = this._getEntityState(this._config.usps_mail);

    const mailIcon = uspsMail && Number(uspsMail) > 0 ? 'mdi:mailbox-open-up' : 'mdi:mailbox-outline';
    const uspsIcon = uspsPackages && Number(uspsPackages) > 0 ? 'mdi:package-variant' : 'mdi:package-variant-closed';
    const upsIcon = upsPackages && Number(upsPackages) > 0 ? 'mdi:package-variant' : 'mdi:package-variant-closed';
    const fedexIcon = fedexPackages && Number(fedexPackages) > 0 ? 'mdi:package-variant' : 'mdi:package-variant-closed';
    const amazonIcon = amazonPackages && Number(amazonPackages) > 0 ? 'mdi:package-variant' : 'mdi:package-variant-closed';

    return html`
      <div class="details">
        ${this._config.name
          ? html`<div class="title">${this._config.name}</div>`
          : ''}

        <ul class="summary-list">
          ${packagesDelivered
            ? html`
                <li>
                  <ha-icon icon="mdi:package"></ha-icon>
                  <span>Deliveries: ${packagesDelivered}</span>
                </li>
              `
            : ''}
          ${packagesInTransit
            ? html`
                <li>
                  <ha-icon icon="mdi:truck-delivery"></ha-icon>
                  <span>In Transit: ${packagesInTransit}</span>
                </li>
              `
            : ''}
        </ul>

        ${deliveriesMessage ? html`<p class="delivery-message">${deliveriesMessage}</p>` : ''}

        <ul class="carriers-list">
          ${uspsMail
            ? html`
                <li class="carrier-item">
                  <ha-icon icon="${mailIcon}"></ha-icon>
                  <a href="https://informeddelivery.usps.com/" target="_blank" rel="noopener noreferrer">
                    Mail: ${uspsMail}
                  </a>
                </li>
              `
            : ''}
          ${uspsPackages
            ? html`
                <li class="carrier-item">
                  <ha-icon icon="${uspsIcon}"></ha-icon>
                  <a href="https://informeddelivery.usps.com/" target="_blank" rel="noopener noreferrer">
                    USPS: ${uspsPackages}
                  </a>
                </li>
              `
            : ''}
          ${upsPackages
            ? html`
                <li class="carrier-item">
                  <ha-icon icon="${upsIcon}"></ha-icon>
                  <a href="https://wwwapps.ups.com/mcdp" target="_blank" rel="noopener noreferrer">
                    UPS: ${upsPackages}
                  </a>
                </li>
              `
            : ''}
          ${fedexPackages
            ? html`
                <li class="carrier-item">
                  <ha-icon icon="${fedexIcon}"></ha-icon>
                  <a href="https://www.fedex.com/apps/fedextracking" target="_blank" rel="noopener noreferrer">
                    FedEx: ${fedexPackages}
                  </a>
                </li>
              `
            : ''}
          ${amazonPackages
            ? html`
                <li class="carrier-item">
                  <ha-icon icon="${amazonIcon}"></ha-icon>
                  <a href="https://www.amazon.com/gp/css/order-history/" target="_blank" rel="noopener noreferrer">
                    Amazon: ${amazonPackages}
                  </a>
                </li>
              `
            : ''}
        </ul>
      </div>
    `;
  }

  private _renderImage(): TemplateResult {
    const gifSensor = this._config.gif_sensor;
    if (!gifSensor) {
      return html``;
    }

    const gifPath = this._getEntityState(gifSensor);
    if (!gifPath) {
      return html``;
    }

    return html`<img class="mail-image" src="${gifPath}" alt="Mail preview" />`;
  }

  private _renderCamera(): TemplateResult {
    const cameraEntity = this._config.camera_entity;
    if (!cameraEntity) {
      return html``;
    }

    const camera = this.hass.states[cameraEntity];
    if (!camera) {
      return html``;
    }

    const cameraUrl = camera.attributes.entity_picture;
    if (!cameraUrl) {
      return html``;
    }

    // Add cache-busting parameter
    const timestamp = Date.now();
    return html`<img class="mail-image" src="${cameraUrl}&_t=${timestamp}" alt="Mail camera" />`;
  }

  private _handleClick(): void {
    fireEvent(this, 'hass-more-info', {
      entityId: this._config.updated,
    });
  }

  public getCardSize(): number {
    return 3;
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-card {
        cursor: pointer;
        padding: 16px;
        box-sizing: border-box;
      }

      .not-found {
        background-color: var(--warning-color, yellow);
        padding: 8px;
        border-radius: 4px;
      }

      .title {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--primary-text-color);
        margin-bottom: 12px;
      }

      .details {
        margin-bottom: 8px;
      }

      .summary-list,
      .carriers-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 16px;
      }

      .summary-list {
        justify-content: space-evenly;
        margin-bottom: 8px;
      }

      .carriers-list {
        justify-content: center;
      }

      .summary-list li,
      .carrier-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .carrier-item {
        white-space: nowrap;
      }

      ha-icon {
        color: var(--paper-item-icon-color, var(--secondary-text-color));
        --mdc-icon-size: 18px;
      }

      a {
        color: var(--secondary-text-color);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .delivery-message {
        margin: 8px 0;
        color: var(--secondary-text-color);
      }

      .mail-image {
        width: 100%;
        height: auto;
        margin-top: 12px;
        border-radius: 4px;
      }

      .update-info {
        display: block;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
        margin-top: 8px;
        text-align: right;
      }
    `;
  }
}

// Register card in Home Assistant card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'ha-mail-and-packages-card',
  name: 'HA Mail and Packages',
  description: 'Display mail and package delivery information from USPS, UPS, FedEx, and Amazon',
  preview: true,
  documentationURL: 'https://github.com/derekslenk/Home-Assistant-Mail-And-Packages-Custom-Card',
});

// Log card info to console
console.info(
  `%c HA-MAIL-AND-PACKAGES-CARD %c v${CARD_VERSION} `,
  'color: white; background: #3498db; font-weight: bold;',
  'color: #3498db; background: white; font-weight: bold;'
);
