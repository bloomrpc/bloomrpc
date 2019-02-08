import { ResponseError } from './responseError';
import { ServiceError } from 'grpc';
import { google } from '../proto/all';

export class GrpcErrorParser {
  /**
   * Parses ServiceError to ResponseError
   * @param {ServiceError} serviceError
   * @returns {ResponseError}
   * @throws {Error} If serviceError does not contain metadata or there was a problem parsing it
   */
  public static parse(serviceError: ServiceError): ResponseError {
    if (!serviceError.metadata) {
      throw new Error('Service error does not contain metadata');
    }
    const statusDetailsBinary = serviceError.metadata.get('grpc-status-details-bin')[0] as Uint8Array;
    if (!statusDetailsBinary) {
      throw new Error('grpc-status-details-bin is missing');
    }
    const status = google.rpc.Status.decode(statusDetailsBinary);
    status.details = status.details.map((detailsEntry) => {
      try {
        return GrpcErrorParser.decodeDetailsEntry(detailsEntry)
      } catch(e) {
        // In case of error return detailsEntry as is
        return detailsEntry;
      }
    });
    const { code, message, details } = status;
    return { code, message, details };
  }

  /**
   * Decodes google.rpc.* entry to a human-readable form
   * @param {google.protobuf.IAny} entry with a google.rpc.* type
   * @returns {any} decoded entry value
   * @throws {Error} If entry type is of unknown google.rpc.* type
   */
  private static decodeDetailsEntry(entry: google.protobuf.IAny): any {
    const name = entry.typeUrl || '';
    const objName = name.split('.').pop() || '';
    if (!objName || !name.includes('google.rpc.') || !google.rpc.hasOwnProperty(objName)) {
      throw new Error(`Unknown type ${entry.typeUrl}`);
    }
    const rpcElement = (google.rpc as any)[objName];
    return rpcElement.decode(entry.value);
  }
}