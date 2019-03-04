import * as SiteWhere from "sitewhere-rest-api";
import { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import { Store } from "vuex";
import { SiteWhereUiSettings } from "../store";
import { createCoreApiCall, loaderWrapper } from "./sitewhere-api-wrapper";
import {
  IDeviceCreateRequest,
  IDevice,
  IDeviceSearchCriteria,
  IDeviceResponseFormat
} from "sitewhere-rest-api/dist/model/devices-model";
import { ISearchCriteria } from "sitewhere-rest-api/dist/model/common-model";
import {
  IDeviceAssignmentResponseFormat,
  IDeviceAssignment
} from "sitewhere-rest-api/dist/model/device-assignments-model";

/**
 * Create a device.
 * @param store
 * @param request
 */
export function createDevice(
  store: Store<SiteWhereUiSettings>,
  request: IDeviceCreateRequest
): Promise<AxiosResponse<IDevice>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<IDevice> = SiteWhere.API.Devices.createDevice(
    axios,
    request
  );
  return loaderWrapper(store, api);
}

/**
 * Get a device by token.
 * @param store
 * @param token
 */
export function getDevice(
  store: Store<SiteWhereUiSettings>,
  token: string
): Promise<AxiosResponse<IDevice>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<IDevice> = SiteWhere.API.Devices.getDevice(
    axios,
    token
  );
  return loaderWrapper(store, api);
}

/**
 * Update an existing device.
 * @param store
 * @param token
 * @param request
 */
export function updateDevice(
  store: Store<SiteWhereUiSettings>,
  token: string,
  request: IDeviceCreateRequest
): Promise<AxiosResponse<IDevice>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<IDevice> = SiteWhere.API.Devices.updateDevice(
    axios,
    token,
    request
  );
  return loaderWrapper(store, api);
}

/**
 * List devices that match criteria.
 * @param store
 * @param criteria
 * @param format
 */
export function listDevices(
  store: Store<SiteWhereUiSettings>,
  criteria: IDeviceSearchCriteria,
  format: IDeviceResponseFormat
): Promise<AxiosResponse<IDevice[]>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<IDevice[]> = SiteWhere.API.Devices.listDevices(
    axios,
    criteria,
    format
  );
  return loaderWrapper(store, api);
}

/**
 * List assignment history for a device.
 * @param store
 * @param token
 * @param criteria
 * @param format
 */
export function listDeviceAssignmentHistory(
  store: Store<SiteWhereUiSettings>,
  token: string,
  criteria: ISearchCriteria,
  format: IDeviceAssignmentResponseFormat
): Promise<AxiosResponse<IDeviceAssignment[]>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<
    IDeviceAssignment[]
  > = SiteWhere.API.Devices.listDeviceAssignmentHistory(
    axios,
    token,
    criteria,
    format
  );
  return loaderWrapper(store, api);
}

/**
 * Delete an existing device.
 * @param store
 * @param token
 */
export function deleteDevice(
  store: Store<SiteWhereUiSettings>,
  token: string
): Promise<AxiosResponse<IDevice>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<IDevice> = SiteWhere.API.Devices.deleteDevice(
    axios,
    token
  );
  return loaderWrapper(store, api);
}
