export interface hotels {
    result: string;
    data: Data;
  }
  export interface Data {
    body: Body;
    common: Common;
  }
  export interface Body {
    header: string;
    query: Query;
    searchResults: SearchResults;
    sortResults: SortResults;
    filters: Filters;
    pointOfSale: PointOfSale;
    miscellaneous: Miscellaneous;
    pageInfo: PageInfo;
  }
  export interface Query {
    destination: Destination;
  }
  export interface Destination {
    id: string;
    value: string;
    resolvedLocation: string;
  }
  export interface SearchResults {
    totalCount: number;
    results?: (ResultsEntity)[] | null;
    pagination: Pagination;
  }
  export interface ResultsEntity {
    id: number;
    name: string;
    thumbnailUrl: string;
    starRating: number;
    urls: UrlsOrDealsOrMessagingOrBadging;
    address: Address;
    landmarks?: (LandmarksEntity)[] | null;
    ratePlan: RatePlan;
    neighbourhood: string;
    deals: UrlsOrDealsOrMessagingOrBadging;
    messaging: UrlsOrDealsOrMessagingOrBadging;
    badging: UrlsOrDealsOrMessagingOrBadging;
    coordinate: Coordinate;
    providerType: string;
    supplierHotelId: number;
    vrBadge: string;
    isAlternative: boolean;
    guestReviews?: GuestReviews | null;
    pimmsAttributes?: string | null;
  }
  export interface UrlsOrDealsOrMessagingOrBadging {
  }
  export interface Address {
    streetAddress: string;
    extendedAddress: string;
    locality: string;
    postalCode: string;
    region: string;
    countryName: string;
    countryCode: string;
  }
  export interface LandmarksEntity {
    label: string;
    distance: string;
  }
  export interface RatePlan {
    price: Price;
    features: Features;
  }
  export interface Price {
    current: string;
    exactCurrent: number;
    old?: string | null;
  }
  export interface Features {
    paymentPreference: boolean;
    noCCRequired: boolean;
  }
  export interface Coordinate {
    lat: number;
    lon: number;
  }
  export interface GuestReviews {
    unformattedRating: number;
    rating: string;
    total: number;
    scale: number;
    badge?: string | null;
    badgeText?: string | null;
  }
  export interface Pagination {
    currentPage: number;
    pageGroup: string;
    nextPageStartIndex: number;
    nextPageNumber: number;
    nextPageGroup: string;
  }
  export interface SortResults {
    options?: (OptionsEntity)[] | null;
    distanceOptionLandmarkId: number;
  }
  export interface OptionsEntity {
    label: string;
    itemMeta: string;
    choices?: (ChoicesEntity)[] | null;
    enhancedChoices?: (EnhancedChoicesEntity | null)[] | null;
    selectedChoiceLabel?: string | null;
  }
  export interface ChoicesEntity {
    label: string;
    value: string;
    selected: boolean;
  }
  export interface EnhancedChoicesEntity {
    label: string;
    itemMeta: string;
    choices?: (ChoicesEntity1)[] | null;
  }
  export interface ChoicesEntity1 {
    label: string;
    id: number;
  }
  export interface Filters {
    applied: boolean;
    name: Name;
    starRating: StarRating;
    guestRating: GuestRating;
    landmarks: Landmarks;
    neighbourhood: Neighbourhood;
    accommodationType: AccommodationTypeOrFacilitiesOrAccessibilityOrThemesAndTypes;
    facilities: AccommodationTypeOrFacilitiesOrAccessibilityOrThemesAndTypes;
    accessibility: AccommodationTypeOrFacilitiesOrAccessibilityOrThemesAndTypes;
    themesAndTypes: AccommodationTypeOrFacilitiesOrAccessibilityOrThemesAndTypes;
    price: Price1;
    paymentPreference: PaymentPreference;
    welcomeRewards: WelcomeRewards;
  }
  export interface Name {
    item: Item;
    autosuggest: Autosuggest;
  }
  export interface Item {
    value: string;
  }
  export interface Autosuggest {
    additionalUrlParams: AdditionalUrlParams;
  }
  export interface AdditionalUrlParams {
    resolvedlocation: string
    qdestination: string
    destinationid: number
  }
  export interface StarRating {
    applied: boolean;
    items?: (ItemsEntity)[] | null;
  }
  export interface ItemsEntity {
    value: number;
  }
  export interface GuestRating {
    range: Range;
  }
  export interface Range {
    min: MinOrMax;
    max: MinOrMax;
  }
  export interface MinOrMax {
    defaultValue: number;
  }
  export interface Landmarks {
    selectedOrder?: (null)[] | null;
    items?: (ItemsEntity1)[] | null;
    distance?: (null)[] | null;
  }
  export interface ItemsEntity1 {
    label: string;
    value: string;
  }
  export interface Neighbourhood {
    applied: boolean;
    items?: (ItemsEntity2)[] | null;
  }
  export interface ItemsEntity2 {
    label: string;
    value: number;
  }
  export interface AccommodationTypeOrFacilitiesOrAccessibilityOrThemesAndTypes {
    applied: boolean;
    items?: (ItemsEntity1)[] | null;
  }
  export interface Price1 {
    label: string;
    range: Range1;
    multiplier: number;
  }
  export interface Range1 {
    min: MinOrMax;
    max: MinOrMax;
    increments: number;
  }
  export interface PaymentPreference {
    items?: (ItemsEntity1)[] | null;
  }
  export interface WelcomeRewards {
    label: string;
    items?: (ItemsEntity1)[] | null;
  }
  export interface PointOfSale {
    currency: Currency;
  }
  export interface Currency {
    code: string;
    symbol: string;
    separators: string;
    format: string;
  }
  export interface Miscellaneous {
    pageViewBeaconUrl: string;
  }
  export interface PageInfo {
    pageType: string;
  }
  export interface Common {
    pointOfSale: PointOfSale1;
    tracking: Tracking;
  }
  export interface PointOfSale1 {
    numberSeparators: string;
    brandName: string;
  }
  export interface Tracking {
    omniture: Omniture;
  }
  export interface Omniture {
    sprop33 : string;
    sprop32 : string;
    sprop74: string;
    sproducts: string;
    seVar16: string;
    seVar40: string;
    seVar41: string;
    seVar63: string;
    seVar42: string;
    seVar4: string;
    seVar43: string;
    seVar2: string;
    seVar24: string;
    seVar7: string;
    sserver: string;
    seVar6: string;
    sprop29: string;
    sprop27: string;
    seVar9: string;
    seVar69: string;
    scurrencyCode: string;
    seVar29: string;
    sprop9: string;
    sprop8: string;
    seVar95: string;
    sprop7: string;
    seVar31: string;
    seVar32: string;
    seVar33: string;
    seVar34: string;
    seVar13: string;
    sprop18: string;
    sprop5: string;
    sprop15: string;
    sprop3: string;
    sprop14: string;
    sprop36: string;
    seVar93: string;
    sprop2: string;
  }
  