/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import TrustedComms = require('../TrustedComms');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the CpsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CpsList(version: TrustedComms): CpsListInstance;

interface CpsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CpsContext;
  /**
   * Constructs a cps
   */
  get(): CpsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface CpsPayload extends CpsResource, Page.TwilioResponsePayload {
}

interface CpsResource {
  cps_url: string;
  phone_number: string;
  url: string;
}

interface CpsSolution {
}


declare class CpsContext {
  /**
   * Initialize the CpsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   */
  constructor(version: TrustedComms);

  /**
   * fetch a CpsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CpsInstance) => any): Promise<CpsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CpsInstance extends SerializableClass {
  /**
   * Initialize the CpsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: TrustedComms, payload: CpsPayload);

  private _proxy: CpsContext;
  cpsUrl: string;
  /**
   * fetch a CpsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CpsInstance) => any): void;
  phoneNumber: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class CpsPage extends Page<TrustedComms, CpsPayload, CpsResource, CpsInstance> {
  /**
   * Initialize the CpsPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: TrustedComms, response: Response<string>, solution: CpsSolution);

  /**
   * Build an instance of CpsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CpsPayload): CpsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CpsContext, CpsInstance, CpsList, CpsListInstance, CpsPage, CpsPayload, CpsResource, CpsSolution }
