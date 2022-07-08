import ExperienceDTO from "./dto";

export default class Experience implements ExperienceDTO{
    constructor(

            public title: string,
            public id?: number,
            public img?: string,
            public description?: string,
            public ubication?: Array<string>,
            public duration?: number,
            public transport?: string,
            

        ) {};

}

