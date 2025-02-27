declare module '@/data/zipcodes.json' {
  export interface RawZipData {
    // Metropolitan Statistical Area (MSA)
    area: string;
    city: string | string[];
    county: string;
    zip: string;
  }
  const data: Record<string, RawZipData>;
  export default data;
}
