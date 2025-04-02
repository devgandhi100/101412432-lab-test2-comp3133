export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    launch_success: boolean;
    rocket: {
      rocket_name: string;
      rocket_type: string;
      second_stage: {
        payloads: {
          payload_id: string;
          payload_type: string;
          manufacturer: string;
          nationality: string;
          orbit: string;
          payload_mass_kg: number;
        }[];
      };
    };
    launch_site: {
      site_name: string;
      site_name_long: string;
    };
    links: {
      mission_patch: string;
      mission_patch_small: string;
      article_link: string;
      wikipedia: string;
      video_link: string;
    };
  }
  