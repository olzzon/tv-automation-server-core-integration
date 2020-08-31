import { DeviceConfigManifest } from './configManifest';
/**
 * Note: This file contains a copy of the typings from meteor/lib/api/peripheralDevice.ts in Core
 */
export declare namespace PeripheralDeviceAPI {
    enum StatusCode {
        /** Unknown status, could be due to parent device connected etc.. */
        UNKNOWN = 0,
        /** All good and green */
        GOOD = 1,
        /** Everything is not OK, but normal operation should not be affected. An optional/backup service might be offline, etc. */
        WARNING_MINOR = 2,
        /** Everything is not OK, operation might be affected. Like when having switched to a backup, or have taken action to fix an error. */
        WARNING_MAJOR = 3,
        /** Not good. Operation is affected. Will be able to recover on it's own when the situation changes. */
        BAD = 4,
        /** Not good. Operation is affected. Will NOT be able to to recover from this, manual intervention will be required. */
        FATAL = 5
    }
    interface StatusObject {
        statusCode: StatusCode;
        messages?: Array<string>;
    }
    enum DeviceCategory {
        INGEST = "ingest",
        PLAYOUT = "playout",
        MEDIA_MANAGER = "media_manager"
    }
    /**
     * Deprecated and should not be used in new integrations.
     */
    enum DeviceType {
        MOS = "mos",
        SPREADSHEET = "spreadsheet",
        INEWS = "inews",
        PLAYOUT = "playout",
        MEDIA_MANAGER = "media_manager"
    }
    type DeviceSubType = SUBTYPE_PROCESS | TSR_DeviceType | MOS_DeviceType | Spreadsheet_DeviceType | string;
    /** SUBTYPE_PROCESS means that the device is NOT a sub-device, but a (parent) process. */
    type SUBTYPE_PROCESS = '_process';
    const SUBTYPE_PROCESS: SUBTYPE_PROCESS;
    type MOS_DeviceType = 'mos_connection';
    type Spreadsheet_DeviceType = 'spreadsheet_connection';
    type TSR_DeviceType = number;
    interface InitOptions {
        category: DeviceCategory;
        type?: DeviceType | string;
        subType?: DeviceSubType;
        name: string;
        connectionId: string;
        parentDeviceId?: string;
        versions?: {
            [libraryName: string]: string;
        };
        configManifest?: DeviceConfigManifest;
    }
    type TimelineTriggerTimeResult = Array<{
        id: string;
        time: number;
    }>;
    interface PartPlaybackStartedResult {
        rundownId: string;
        partId: string;
        time: number;
    }
    type PartPlaybackStoppedResult = PartPlaybackStartedResult;
    interface PiecePlaybackStartedResult {
        rundownId: string;
        pieceId: string;
        time: number;
    }
    type PiecePlaybackStoppedResult = PiecePlaybackStartedResult;
    enum methods {
        'functionReply' = "peripheralDevice.functionReply",
        'testMethod' = "peripheralDevice.testMethod",
        'setStatus' = "peripheralDevice.status",
        'ping' = "peripheralDevice.ping",
        'initialize' = "peripheralDevice.initialize",
        'unInitialize' = "peripheralDevice.unInitialize",
        'getPeripheralDevice' = "peripheralDevice.getPeripheralDevice",
        'pingWithCommand' = "peripheralDevice.pingWithCommand",
        'killProcess' = "peripheralDevice.killProcess",
        'determineDiffTime' = "systemTime.determineDiffTime",
        'getTimeDiff' = "systemTime.getTimeDiff",
        'getTime' = "systemTime.getTime",
        'timelineTriggerTime' = "peripheralDevice.timeline.setTimelineTriggerTime",
        'partPlaybackStarted' = "peripheralDevice.rundown.partPlaybackStarted",
        'partPlaybackStopped' = "peripheralDevice.rundown.partPlaybackStopped",
        'piecePlaybackStarted' = "peripheralDevice.rundown.piecePlaybackStarted",
        'piecePlaybackStopped' = "peripheralDevice.rundown.piecePlaybackStopped",
        'reportCommandError' = "peripheralDevice.playout.reportCommandError",
        'mosRoCreate' = "peripheralDevice.mos.roCreate",
        'mosRoReplace' = "peripheralDevice.mos.roReplace",
        'mosRoDelete' = "peripheralDevice.mos.roDelete",
        'mosRoDeleteForce' = "peripheralDevice.mos.roDeleteForce",
        'mosRoMetadata' = "peripheralDevice.mos.roMetadata",
        'mosRoStatus' = "peripheralDevice.mos.roStatus",
        'mosRoStoryStatus' = "peripheralDevice.mos.roStoryStatus",
        'mosRoItemStatus' = "peripheralDevice.mos.roItemStatus",
        'mosRoStoryInsert' = "peripheralDevice.mos.roStoryInsert",
        'mosRoStoryReplace' = "peripheralDevice.mos.roStoryReplace",
        'mosRoStoryMove' = "peripheralDevice.mos.roStoryMove",
        'mosRoStoryDelete' = "peripheralDevice.mos.roStoryDelete",
        'mosRoStorySwap' = "peripheralDevice.mos.roStorySwap",
        'mosRoItemInsert' = "peripheralDevice.mos.roItemInsert",
        'mosRoItemReplace' = "peripheralDevice.mos.roItemReplace",
        'mosRoItemMove' = "peripheralDevice.mos.roItemMove",
        'mosRoItemDelete' = "peripheralDevice.mos.roItemDelete",
        'mosRoItemSwap' = "peripheralDevice.mos.roItemSwap",
        'mosRoReadyToAir' = "peripheralDevice.mos.roReadyToAir",
        'mosRoFullStory' = "peripheralDevice.mos.roFullStory",
        'dataRundownDelete' = "peripheralDevice.rundown.rundownDelete",
        'dataRundownCreate' = "peripheralDevice.rundown.rundownCreate",
        'dataRundownUpdate' = "peripheralDevice.rundown.rundownUpdate",
        'dataSegmentDelete' = "peripheralDevice.rundown.segmentDelete",
        'dataSegmentCreate' = "peripheralDevice.rundown.segmentCreate",
        'dataSegmentUpdate' = "peripheralDevice.rundown.segmentUpdate",
        'dataPartDelete' = "peripheralDevice.rundown.partDelete",
        'dataPartCreate' = "peripheralDevice.rundown.partCreate",
        'dataPartUpdate' = "peripheralDevice.rundown.partUpdate",
        'resyncRundown' = "peripheralDevice.mos.roResync",
        'getMediaObjectRevisions' = "peripheralDevice.mediaScanner.getMediaObjectRevisions",
        'updateMediaObject' = "peripheralDevice.mediaScanner.updateMediaObject",
        'clearMediaObjectCollection' = "peripheralDevice.mediaScanner.clearMediaObjectCollection",
        'getMediaWorkFlowRevisions' = "peripheralDevice.mediaManager.getMediaWorkFlowRevisions",
        'updateMediaWorkFlow' = "peripheralDevice.mediaManager.updateMediaWorkFlow",
        'getMediaWorkFlowStepRevisions' = "peripheralDevice.mediaManager.getMediaWorkFlowStepRevisions",
        'updateMediaWorkFlowStep' = "peripheralDevice.mediaManager.updateMediaWorkFlowStep",
        'requestUserAuthToken' = "peripheralDevice.spreadsheet.requestUserAuthToken",
        'storeAccessToken' = "peripheralDevice.spreadsheet.storeAccessToken"
    }
    type initialize = (id: string, token: string, options: InitOptions) => Promise<string>;
    type unInitialize = (id: string, token: string, status: StatusObject) => Promise<StatusObject>;
    type setStatus = (id: string, token: string, status: StatusObject) => Promise<StatusObject>;
    type executeFunction = (deviceId: string, cb: (err: any, result: any) => void, functionName: string, ...args: any[]) => void;
}
