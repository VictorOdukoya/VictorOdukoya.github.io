import { ScullyRoute } from "@scullyio/ng-lib";

export interface CustomScullyRoute extends ScullyRoute{
    description: string;
    author: string;
    tags: Array<string>;
    image: string;
    createdAt: string;
}