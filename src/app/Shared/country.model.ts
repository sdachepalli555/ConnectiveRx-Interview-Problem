export class Country {
    name: string;
    alpha2Code: string;
    alpha3code: string;
    region: string;
    subregion: string;
    population: number;
    timezones: string[];


    constructor(name, alpha2code, alpha3code, region, subregion, population, timezones) {
        this.name = name;
        this.alpha2Code = alpha2code;
        this.alpha3code = alpha3code;
        this.region = region;
        this.subregion = subregion;
        this.population = population;
        this.timezones = timezones;
    }
}