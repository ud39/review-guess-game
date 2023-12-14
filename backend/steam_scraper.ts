/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "scraper_steamreviews";

export interface GameNameRequest {
  gameName: string;
}

export interface AppIdRequest {
  appId: string;
}

export interface NReviewsRequest {
  appId: string;
  n: number;
}

export interface NAppIdsRequest {
  n: number;
  filterBy: string;
}

export interface AppInfoResponse {
  appId: string;
  title: string;
}

export interface ReviewsResponse {
  review: Review[];
}

export interface ReviewsWithTitleResponse {
  title: string;
  review: Review[];
}

export interface Review {
  steamId: string;
  review: string;
  votedUp: boolean;
  votesUp: number;
  votesFunny: number;
  playtimeForever: number;
}

export interface AppIdsResponse {
  appId: string[];
}

function createBaseGameNameRequest(): GameNameRequest {
  return { gameName: "" };
}

export const GameNameRequest = {
  encode(
    message: GameNameRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gameName !== "") {
      writer.uint32(10).string(message.gameName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameNameRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gameName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameNameRequest {
    return {
      gameName: isSet(object.gameName)
        ? globalThis.String(object.gameName)
        : "",
    };
  },

  toJSON(message: GameNameRequest): unknown {
    const obj: any = {};
    if (message.gameName !== "") {
      obj.gameName = message.gameName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameNameRequest>, I>>(
    base?: I,
  ): GameNameRequest {
    return GameNameRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameNameRequest>, I>>(
    object: I,
  ): GameNameRequest {
    const message = createBaseGameNameRequest();
    message.gameName = object.gameName ?? "";
    return message;
  },
};

function createBaseAppIdRequest(): AppIdRequest {
  return { appId: "" };
}

export const AppIdRequest = {
  encode(
    message: AppIdRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appId !== "") {
      writer.uint32(10).string(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppIdRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppIdRequest {
    return {
      appId: isSet(object.appId) ? globalThis.String(object.appId) : "",
    };
  },

  toJSON(message: AppIdRequest): unknown {
    const obj: any = {};
    if (message.appId !== "") {
      obj.appId = message.appId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppIdRequest>, I>>(
    base?: I,
  ): AppIdRequest {
    return AppIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AppIdRequest>, I>>(
    object: I,
  ): AppIdRequest {
    const message = createBaseAppIdRequest();
    message.appId = object.appId ?? "";
    return message;
  },
};

function createBaseNReviewsRequest(): NReviewsRequest {
  return { appId: "", n: 0 };
}

export const NReviewsRequest = {
  encode(
    message: NReviewsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appId !== "") {
      writer.uint32(10).string(message.appId);
    }
    if (message.n !== 0) {
      writer.uint32(16).int32(message.n);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NReviewsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNReviewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.n = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NReviewsRequest {
    return {
      appId: isSet(object.appId) ? globalThis.String(object.appId) : "",
      n: isSet(object.n) ? globalThis.Number(object.n) : 0,
    };
  },

  toJSON(message: NReviewsRequest): unknown {
    const obj: any = {};
    if (message.appId !== "") {
      obj.appId = message.appId;
    }
    if (message.n !== 0) {
      obj.n = Math.round(message.n);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NReviewsRequest>, I>>(
    base?: I,
  ): NReviewsRequest {
    return NReviewsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NReviewsRequest>, I>>(
    object: I,
  ): NReviewsRequest {
    const message = createBaseNReviewsRequest();
    message.appId = object.appId ?? "";
    message.n = object.n ?? 0;
    return message;
  },
};

function createBaseNAppIdsRequest(): NAppIdsRequest {
  return { n: 0, filterBy: "" };
}

export const NAppIdsRequest = {
  encode(
    message: NAppIdsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.n !== 0) {
      writer.uint32(8).int32(message.n);
    }
    if (message.filterBy !== "") {
      writer.uint32(18).string(message.filterBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NAppIdsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNAppIdsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.n = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filterBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NAppIdsRequest {
    return {
      n: isSet(object.n) ? globalThis.Number(object.n) : 0,
      filterBy: isSet(object.filterBy)
        ? globalThis.String(object.filterBy)
        : "",
    };
  },

  toJSON(message: NAppIdsRequest): unknown {
    const obj: any = {};
    if (message.n !== 0) {
      obj.n = Math.round(message.n);
    }
    if (message.filterBy !== "") {
      obj.filterBy = message.filterBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NAppIdsRequest>, I>>(
    base?: I,
  ): NAppIdsRequest {
    return NAppIdsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NAppIdsRequest>, I>>(
    object: I,
  ): NAppIdsRequest {
    const message = createBaseNAppIdsRequest();
    message.n = object.n ?? 0;
    message.filterBy = object.filterBy ?? "";
    return message;
  },
};

function createBaseAppInfoResponse(): AppInfoResponse {
  return { appId: "", title: "" };
}

export const AppInfoResponse = {
  encode(
    message: AppInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appId !== "") {
      writer.uint32(10).string(message.appId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppInfoResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppInfoResponse {
    return {
      appId: isSet(object.appId) ? globalThis.String(object.appId) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
    };
  },

  toJSON(message: AppInfoResponse): unknown {
    const obj: any = {};
    if (message.appId !== "") {
      obj.appId = message.appId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppInfoResponse>, I>>(
    base?: I,
  ): AppInfoResponse {
    return AppInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AppInfoResponse>, I>>(
    object: I,
  ): AppInfoResponse {
    const message = createBaseAppInfoResponse();
    message.appId = object.appId ?? "";
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseReviewsResponse(): ReviewsResponse {
  return { review: [] };
}

export const ReviewsResponse = {
  encode(
    message: ReviewsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.review) {
      Review.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.review.push(Review.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReviewsResponse {
    return {
      review: globalThis.Array.isArray(object?.review)
        ? object.review.map((e: any) => Review.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ReviewsResponse): unknown {
    const obj: any = {};
    if (message.review?.length) {
      obj.review = message.review.map((e) => Review.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewsResponse>, I>>(
    base?: I,
  ): ReviewsResponse {
    return ReviewsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReviewsResponse>, I>>(
    object: I,
  ): ReviewsResponse {
    const message = createBaseReviewsResponse();
    message.review = object.review?.map((e) => Review.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReviewsWithTitleResponse(): ReviewsWithTitleResponse {
  return { title: "", review: [] };
}

export const ReviewsWithTitleResponse = {
  encode(
    message: ReviewsWithTitleResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    for (const v of message.review) {
      Review.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ReviewsWithTitleResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewsWithTitleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.review.push(Review.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReviewsWithTitleResponse {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      review: globalThis.Array.isArray(object?.review)
        ? object.review.map((e: any) => Review.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ReviewsWithTitleResponse): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.review?.length) {
      obj.review = message.review.map((e) => Review.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewsWithTitleResponse>, I>>(
    base?: I,
  ): ReviewsWithTitleResponse {
    return ReviewsWithTitleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReviewsWithTitleResponse>, I>>(
    object: I,
  ): ReviewsWithTitleResponse {
    const message = createBaseReviewsWithTitleResponse();
    message.title = object.title ?? "";
    message.review = object.review?.map((e) => Review.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReview(): Review {
  return {
    steamId: "",
    review: "",
    votedUp: false,
    votesUp: 0,
    votesFunny: 0,
    playtimeForever: 0,
  };
}

export const Review = {
  encode(
    message: Review,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamId !== "") {
      writer.uint32(10).string(message.steamId);
    }
    if (message.review !== "") {
      writer.uint32(18).string(message.review);
    }
    if (message.votedUp === true) {
      writer.uint32(24).bool(message.votedUp);
    }
    if (message.votesUp !== 0) {
      writer.uint32(32).int32(message.votesUp);
    }
    if (message.votesFunny !== 0) {
      writer.uint32(40).int32(message.votesFunny);
    }
    if (message.playtimeForever !== 0) {
      writer.uint32(48).int32(message.playtimeForever);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Review {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.steamId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.review = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.votedUp = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.votesUp = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.votesFunny = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.playtimeForever = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Review {
    return {
      steamId: isSet(object.steamId) ? globalThis.String(object.steamId) : "",
      review: isSet(object.review) ? globalThis.String(object.review) : "",
      votedUp: isSet(object.votedUp)
        ? globalThis.Boolean(object.votedUp)
        : false,
      votesUp: isSet(object.votesUp) ? globalThis.Number(object.votesUp) : 0,
      votesFunny: isSet(object.votesFunny)
        ? globalThis.Number(object.votesFunny)
        : 0,
      playtimeForever: isSet(object.playtimeForever)
        ? globalThis.Number(object.playtimeForever)
        : 0,
    };
  },

  toJSON(message: Review): unknown {
    const obj: any = {};
    if (message.steamId !== "") {
      obj.steamId = message.steamId;
    }
    if (message.review !== "") {
      obj.review = message.review;
    }
    if (message.votedUp === true) {
      obj.votedUp = message.votedUp;
    }
    if (message.votesUp !== 0) {
      obj.votesUp = Math.round(message.votesUp);
    }
    if (message.votesFunny !== 0) {
      obj.votesFunny = Math.round(message.votesFunny);
    }
    if (message.playtimeForever !== 0) {
      obj.playtimeForever = Math.round(message.playtimeForever);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Review>, I>>(base?: I): Review {
    return Review.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Review>, I>>(object: I): Review {
    const message = createBaseReview();
    message.steamId = object.steamId ?? "";
    message.review = object.review ?? "";
    message.votedUp = object.votedUp ?? false;
    message.votesUp = object.votesUp ?? 0;
    message.votesFunny = object.votesFunny ?? 0;
    message.playtimeForever = object.playtimeForever ?? 0;
    return message;
  },
};

function createBaseAppIdsResponse(): AppIdsResponse {
  return { appId: [] };
}

export const AppIdsResponse = {
  encode(
    message: AppIdsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.appId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppIdsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppIdsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppIdsResponse {
    return {
      appId: globalThis.Array.isArray(object?.appId)
        ? object.appId.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: AppIdsResponse): unknown {
    const obj: any = {};
    if (message.appId?.length) {
      obj.appId = message.appId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppIdsResponse>, I>>(
    base?: I,
  ): AppIdsResponse {
    return AppIdsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AppIdsResponse>, I>>(
    object: I,
  ): AppIdsResponse {
    const message = createBaseAppIdsResponse();
    message.appId = object.appId?.map((e) => e) || [];
    return message;
  },
};

export interface SteamService {
  GetAppId(request: GameNameRequest): Promise<AppInfoResponse>;
  GetAppTitle(request: AppIdRequest): Promise<AppInfoResponse>;
  GetReviews(request: AppIdRequest): Promise<ReviewsResponse>;
  GetNReviews(request: NReviewsRequest): Promise<ReviewsWithTitleResponse>;
  GetNAppIds(request: NAppIdsRequest): Promise<AppIdsResponse>;
}

export const SteamServiceServiceName = "scraper_steamreviews.SteamService";
export class SteamServiceClientImpl implements SteamService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SteamServiceServiceName;
    this.rpc = rpc;
    this.GetAppId = this.GetAppId.bind(this);
    this.GetAppTitle = this.GetAppTitle.bind(this);
    this.GetReviews = this.GetReviews.bind(this);
    this.GetNReviews = this.GetNReviews.bind(this);
    this.GetNAppIds = this.GetNAppIds.bind(this);
  }
  GetAppId(request: GameNameRequest): Promise<AppInfoResponse> {
    const data = GameNameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAppId", data);
    return promise.then((data) =>
      AppInfoResponse.decode(_m0.Reader.create(data)),
    );
  }

  GetAppTitle(request: AppIdRequest): Promise<AppInfoResponse> {
    const data = AppIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAppTitle", data);
    return promise.then((data) =>
      AppInfoResponse.decode(_m0.Reader.create(data)),
    );
  }

  GetReviews(request: AppIdRequest): Promise<ReviewsResponse> {
    const data = AppIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetReviews", data);
    return promise.then((data) =>
      ReviewsResponse.decode(_m0.Reader.create(data)),
    );
  }

  GetNReviews(request: NReviewsRequest): Promise<ReviewsWithTitleResponse> {
    const data = NReviewsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNReviews", data);
    return promise.then((data) =>
      ReviewsWithTitleResponse.decode(_m0.Reader.create(data)),
    );
  }

  GetNAppIds(request: NAppIdsRequest): Promise<AppIdsResponse> {
    const data = NAppIdsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNAppIds", data);
    return promise.then((data) =>
      AppIdsResponse.decode(_m0.Reader.create(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
