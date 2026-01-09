// Home Assistant types
export interface HomeAssistant {
  states: { [entityId: string]: HassEntity };
  callService: (domain: string, service: string, data?: object) => Promise<void>;
  selectedLanguage?: string;
  language: string;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    entity_picture?: string;
    [key: string]: unknown;
  };
  last_changed: string;
  last_updated: string;
}

// Card configuration
export interface MailAndPackagesCardConfig {
  type: string;
  name?: string;
  updated: string;
  deliveries_message?: string;
  packages_delivered?: string;
  packages_in_transit?: string;
  fedex_packages?: string;
  ups_packages?: string;
  usps_packages?: string;
  amazon_packages?: string;
  usps_mail?: string;
  gif_sensor?: string;
  camera_entity?: string;
  details?: boolean;
  image?: boolean;
  camera?: boolean;
}

// Schema types for getConfigForm
export interface ConfigFormSchema {
  name: string;
  required?: boolean;
  label?: string;
  helper?: string;
  selector: {
    text?: object;
    entity?: { domain?: string };
    boolean?: object;
  };
}

export interface ConfigForm {
  schema: ConfigFormSchema[];
}

// Window augmentation for custom cards
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description?: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}
