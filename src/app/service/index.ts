import { YoutubeSearch } from './youtube.search';
import { GapiLoader } from './gapi-loader.service';
import { Authorization } from './authorization.service';
import { YoutubeDataApi } from './youtube-data-api.service';
import { SearchSharedService } from './search-shared.service';

export * from './youtube.search';
export * from './gapi-loader.service';
export * from './authorization.service';

export const APP_SERVICES = [
  { provide: YoutubeSearch, useClass: YoutubeSearch },
  { provide: GapiLoader, useClass: GapiLoader },
  { provide: Authorization, useClass: Authorization },
  { provide: YoutubeDataApi, useClass: YoutubeDataApi },
  { provide: SearchSharedService, useClass: SearchSharedService }
];
