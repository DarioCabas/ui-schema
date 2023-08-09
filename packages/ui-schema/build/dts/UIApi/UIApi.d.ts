export function useProgress(): [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export const PROGRESS_NONE: false;
export const PROGRESS_START: "start";
export const PROGRESS_DONE: true;
export const PROGRESS_ERROR: "error";
export const UIApiContext: React.Context<{}>;
export function useUIApi(): {};
export const schemaLocalCachePath: string;
export function isLoaded(schemas: any, ref: any, version: any): any;
export function UIApiProvider({ loadSchema, noCache, children }: {
    loadSchema: any;
    noCache: any;
    children: any;
}): JSX.Element;
import React from "react";
