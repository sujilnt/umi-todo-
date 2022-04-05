/* tslint:disable */
/* eslint-disable */
/**
 * Todos
 * A simple full stack todo app
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A model to record Todo
 * @export
 * @interface Todos
 */
export interface Todos {
  /**
   *
   * @type {string}
   * @memberof Todos
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Todos
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Todos
   */
  description: string;
  /**
   *
   * @type {Date}
   * @memberof Todos
   */
  uploadedTime: Date;
}

export function TodosFromJSON(json: any): Todos {
  return TodosFromJSONTyped(json, false);
}

export function TodosFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Todos {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    title: json['title'],
    description: json['description'],
    uploadedTime: new Date(json['uploadedTime']),
  };
}

export function TodosToJSON(value?: Todos | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    title: value.title,
    description: value.description,
    uploadedTime: value.uploadedTime.toISOString(),
  };
}
