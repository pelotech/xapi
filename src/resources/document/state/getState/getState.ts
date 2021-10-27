import { AxiosPromise } from "axios";
import { Resources } from "../../../../constants";
import XAPI from "../../../../XAPI";
import { GetStateParams } from "./GetStateParams";

export function getState(
  this: XAPI,
  params: GetStateParams
): AxiosPromise<Document> {
  return this.requestResource({
    resource: Resources.STATE,
    queryParams: {
      agent: params.agent,
      activityId: params.activityId,
      stateId: params.stateId,
      ...(!!params.registration && { registration: params.registration }),
    },
    requestOptions: { useCacheBuster: params.useCacheBuster },
  });
}
