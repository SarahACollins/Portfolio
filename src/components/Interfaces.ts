import React from "react";

export interface ICard {
    title: string,
    date: string,
    label: string,
    detail: string,
}

export interface IProjectCard extends ICard {
    badges?: string[],
}

export interface IExperienceCard extends ICard {
    extraDetail?: string,
}

export interface ICareerAndEducationSection extends ICard {
    extraDetail?: string,
    projects?: IProjectCard[];
}
 
export enum Direction {
    Up,
    Down,
    Left,
    Right
}