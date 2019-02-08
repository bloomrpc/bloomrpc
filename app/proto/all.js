/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Properties of a protobuf.
         * @memberof google
         * @interface Iprotobuf
         */

        /**
         * Constructs a new protobuf.
         * @memberof google
         * @classdesc Represents a protobuf.
         * @implements Iprotobuf
         * @constructor
         * @param {google.Iprotobuf=} [properties] Properties to set
         */
        function protobuf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new protobuf instance using the specified properties.
         * @function create
         * @memberof google.protobuf
         * @static
         * @param {google.Iprotobuf=} [properties] Properties to set
         * @returns {google.protobuf} protobuf instance
         */
        protobuf.create = function create(properties) {
            return new protobuf(properties);
        };

        /**
         * Encodes the specified protobuf message. Does not implicitly {@link google.protobuf.verify|verify} messages.
         * @function encode
         * @memberof google.protobuf
         * @static
         * @param {google.Iprotobuf} message protobuf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        protobuf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified protobuf message, length delimited. Does not implicitly {@link google.protobuf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof google.protobuf
         * @static
         * @param {google.Iprotobuf} message protobuf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        protobuf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a protobuf message from the specified reader or buffer.
         * @function decode
         * @memberof google.protobuf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {google.protobuf} protobuf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        protobuf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a protobuf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof google.protobuf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {google.protobuf} protobuf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        protobuf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a protobuf message.
         * @function verify
         * @memberof google.protobuf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        protobuf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a protobuf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof google.protobuf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {google.protobuf} protobuf
         */
        protobuf.fromObject = function fromObject(object) {
            if (object instanceof $root.google.protobuf)
                return object;
            return new $root.google.protobuf();
        };

        /**
         * Creates a plain object from a protobuf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof google.protobuf
         * @static
         * @param {google.protobuf} message protobuf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        protobuf.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this protobuf to JSON.
         * @function toJSON
         * @memberof google.protobuf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        protobuf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [typeUrl] Any typeUrl
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any typeUrl.
             * @member {string} typeUrl
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.typeUrl = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.typeUrl != null && message.hasOwnProperty("typeUrl"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.typeUrl);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.typeUrl = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.typeUrl != null && message.hasOwnProperty("typeUrl"))
                    if (!$util.isString(message.typeUrl))
                        return "typeUrl: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.typeUrl != null)
                    message.typeUrl = String(object.typeUrl);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.typeUrl = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.typeUrl != null && message.hasOwnProperty("typeUrl"))
                    object.typeUrl = message.typeUrl;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Duration} Duration
             */
            Duration.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Duration)
                    return object;
                var message = new $root.google.protobuf.Duration();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.Duration} message Duration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Duration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Duration to JSON.
             * @function toJSON
             * @memberof google.protobuf.Duration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Duration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Duration;
        })();

        return protobuf;
    })();

    google.rpc = (function() {

        /**
         * Properties of a rpc.
         * @memberof google
         * @interface Irpc
         */

        /**
         * Constructs a new rpc.
         * @memberof google
         * @classdesc Represents a rpc.
         * @implements Irpc
         * @constructor
         * @param {google.Irpc=} [properties] Properties to set
         */
        function rpc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new rpc instance using the specified properties.
         * @function create
         * @memberof google.rpc
         * @static
         * @param {google.Irpc=} [properties] Properties to set
         * @returns {google.rpc} rpc instance
         */
        rpc.create = function create(properties) {
            return new rpc(properties);
        };

        /**
         * Encodes the specified rpc message. Does not implicitly {@link google.rpc.verify|verify} messages.
         * @function encode
         * @memberof google.rpc
         * @static
         * @param {google.Irpc} message rpc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        rpc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified rpc message, length delimited. Does not implicitly {@link google.rpc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof google.rpc
         * @static
         * @param {google.Irpc} message rpc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        rpc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a rpc message from the specified reader or buffer.
         * @function decode
         * @memberof google.rpc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {google.rpc} rpc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        rpc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a rpc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof google.rpc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {google.rpc} rpc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        rpc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a rpc message.
         * @function verify
         * @memberof google.rpc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        rpc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a rpc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof google.rpc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {google.rpc} rpc
         */
        rpc.fromObject = function fromObject(object) {
            if (object instanceof $root.google.rpc)
                return object;
            return new $root.google.rpc();
        };

        /**
         * Creates a plain object from a rpc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof google.rpc
         * @static
         * @param {google.rpc} message rpc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        rpc.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this rpc to JSON.
         * @function toJSON
         * @memberof google.rpc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        rpc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Code enum.
         * @name google.rpc.Code
         * @enum {string}
         * @property {number} OK=0 OK value
         * @property {number} CANCELLED=1 CANCELLED value
         * @property {number} UNKNOWN=2 UNKNOWN value
         * @property {number} INVALID_ARGUMENT=3 INVALID_ARGUMENT value
         * @property {number} DEADLINE_EXCEEDED=4 DEADLINE_EXCEEDED value
         * @property {number} NOT_FOUND=5 NOT_FOUND value
         * @property {number} ALREADY_EXISTS=6 ALREADY_EXISTS value
         * @property {number} PERMISSION_DENIED=7 PERMISSION_DENIED value
         * @property {number} UNAUTHENTICATED=16 UNAUTHENTICATED value
         * @property {number} RESOURCE_EXHAUSTED=8 RESOURCE_EXHAUSTED value
         * @property {number} FAILED_PRECONDITION=9 FAILED_PRECONDITION value
         * @property {number} ABORTED=10 ABORTED value
         * @property {number} OUT_OF_RANGE=11 OUT_OF_RANGE value
         * @property {number} UNIMPLEMENTED=12 UNIMPLEMENTED value
         * @property {number} INTERNAL=13 INTERNAL value
         * @property {number} UNAVAILABLE=14 UNAVAILABLE value
         * @property {number} DATA_LOSS=15 DATA_LOSS value
         */
        rpc.Code = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "CANCELLED"] = 1;
            values[valuesById[2] = "UNKNOWN"] = 2;
            values[valuesById[3] = "INVALID_ARGUMENT"] = 3;
            values[valuesById[4] = "DEADLINE_EXCEEDED"] = 4;
            values[valuesById[5] = "NOT_FOUND"] = 5;
            values[valuesById[6] = "ALREADY_EXISTS"] = 6;
            values[valuesById[7] = "PERMISSION_DENIED"] = 7;
            values[valuesById[16] = "UNAUTHENTICATED"] = 16;
            values[valuesById[8] = "RESOURCE_EXHAUSTED"] = 8;
            values[valuesById[9] = "FAILED_PRECONDITION"] = 9;
            values[valuesById[10] = "ABORTED"] = 10;
            values[valuesById[11] = "OUT_OF_RANGE"] = 11;
            values[valuesById[12] = "UNIMPLEMENTED"] = 12;
            values[valuesById[13] = "INTERNAL"] = 13;
            values[valuesById[14] = "UNAVAILABLE"] = 14;
            values[valuesById[15] = "DATA_LOSS"] = 15;
            return values;
        })();

        rpc.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof google.rpc
             * @interface IStatus
             * @property {number|null} [code] Status code
             * @property {string|null} [message] Status message
             * @property {Array.<google.protobuf.IAny>|null} [details] Status details
             */

            /**
             * Constructs a new Status.
             * @memberof google.rpc
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {google.rpc.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                this.details = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Status code.
             * @member {number} code
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.code = 0;

            /**
             * Status message.
             * @member {string} message
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.message = "";

            /**
             * Status details.
             * @member {Array.<google.protobuf.IAny>} details
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.details = $util.emptyArray;

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus=} [properties] Properties to set
             * @returns {google.rpc.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.details != null && message.details.length)
                    for (var i = 0; i < message.details.length; ++i)
                        $root.google.protobuf.Any.encode(message.details[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Status();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        if (!(message.details && message.details.length))
                            message.details = [];
                        message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.details != null && message.hasOwnProperty("details")) {
                    if (!Array.isArray(message.details))
                        return "details: array expected";
                    for (var i = 0; i < message.details.length; ++i) {
                        var error = $root.google.protobuf.Any.verify(message.details[i]);
                        if (error)
                            return "details." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.Status)
                    return object;
                var message = new $root.google.rpc.Status();
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.message != null)
                    message.message = String(object.message);
                if (object.details) {
                    if (!Array.isArray(object.details))
                        throw TypeError(".google.rpc.Status.details: array expected");
                    message.details = [];
                    for (var i = 0; i < object.details.length; ++i) {
                        if (typeof object.details[i] !== "object")
                            throw TypeError(".google.rpc.Status.details: object expected");
                        message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.details = [];
                if (options.defaults) {
                    object.code = 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.details && message.details.length) {
                    object.details = [];
                    for (var j = 0; j < message.details.length; ++j)
                        object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
                }
                return object;
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof google.rpc.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Status;
        })();

        rpc.RetryInfo = (function() {

            /**
             * Properties of a RetryInfo.
             * @memberof google.rpc
             * @interface IRetryInfo
             * @property {google.protobuf.IDuration|null} [retryDelay] RetryInfo retryDelay
             */

            /**
             * Constructs a new RetryInfo.
             * @memberof google.rpc
             * @classdesc Represents a RetryInfo.
             * @implements IRetryInfo
             * @constructor
             * @param {google.rpc.IRetryInfo=} [properties] Properties to set
             */
            function RetryInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RetryInfo retryDelay.
             * @member {google.protobuf.IDuration|null|undefined} retryDelay
             * @memberof google.rpc.RetryInfo
             * @instance
             */
            RetryInfo.prototype.retryDelay = null;

            /**
             * Creates a new RetryInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.IRetryInfo=} [properties] Properties to set
             * @returns {google.rpc.RetryInfo} RetryInfo instance
             */
            RetryInfo.create = function create(properties) {
                return new RetryInfo(properties);
            };

            /**
             * Encodes the specified RetryInfo message. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.IRetryInfo} message RetryInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RetryInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.retryDelay != null && message.hasOwnProperty("retryDelay"))
                    $root.google.protobuf.Duration.encode(message.retryDelay, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RetryInfo message, length delimited. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.IRetryInfo} message RetryInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RetryInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RetryInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.RetryInfo} RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RetryInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.RetryInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retryDelay = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RetryInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.RetryInfo} RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RetryInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RetryInfo message.
             * @function verify
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RetryInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.retryDelay != null && message.hasOwnProperty("retryDelay")) {
                    var error = $root.google.protobuf.Duration.verify(message.retryDelay);
                    if (error)
                        return "retryDelay." + error;
                }
                return null;
            };

            /**
             * Creates a RetryInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.RetryInfo} RetryInfo
             */
            RetryInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.RetryInfo)
                    return object;
                var message = new $root.google.rpc.RetryInfo();
                if (object.retryDelay != null) {
                    if (typeof object.retryDelay !== "object")
                        throw TypeError(".google.rpc.RetryInfo.retryDelay: object expected");
                    message.retryDelay = $root.google.protobuf.Duration.fromObject(object.retryDelay);
                }
                return message;
            };

            /**
             * Creates a plain object from a RetryInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.RetryInfo} message RetryInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RetryInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.retryDelay = null;
                if (message.retryDelay != null && message.hasOwnProperty("retryDelay"))
                    object.retryDelay = $root.google.protobuf.Duration.toObject(message.retryDelay, options);
                return object;
            };

            /**
             * Converts this RetryInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.RetryInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RetryInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RetryInfo;
        })();

        rpc.DebugInfo = (function() {

            /**
             * Properties of a DebugInfo.
             * @memberof google.rpc
             * @interface IDebugInfo
             * @property {Array.<string>|null} [stackEntries] DebugInfo stackEntries
             * @property {string|null} [detail] DebugInfo detail
             */

            /**
             * Constructs a new DebugInfo.
             * @memberof google.rpc
             * @classdesc Represents a DebugInfo.
             * @implements IDebugInfo
             * @constructor
             * @param {google.rpc.IDebugInfo=} [properties] Properties to set
             */
            function DebugInfo(properties) {
                this.stackEntries = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DebugInfo stackEntries.
             * @member {Array.<string>} stackEntries
             * @memberof google.rpc.DebugInfo
             * @instance
             */
            DebugInfo.prototype.stackEntries = $util.emptyArray;

            /**
             * DebugInfo detail.
             * @member {string} detail
             * @memberof google.rpc.DebugInfo
             * @instance
             */
            DebugInfo.prototype.detail = "";

            /**
             * Creates a new DebugInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.IDebugInfo=} [properties] Properties to set
             * @returns {google.rpc.DebugInfo} DebugInfo instance
             */
            DebugInfo.create = function create(properties) {
                return new DebugInfo(properties);
            };

            /**
             * Encodes the specified DebugInfo message. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.IDebugInfo} message DebugInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DebugInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stackEntries != null && message.stackEntries.length)
                    for (var i = 0; i < message.stackEntries.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.stackEntries[i]);
                if (message.detail != null && message.hasOwnProperty("detail"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.detail);
                return writer;
            };

            /**
             * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.IDebugInfo} message DebugInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DebugInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DebugInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.DebugInfo} DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DebugInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.DebugInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.stackEntries && message.stackEntries.length))
                            message.stackEntries = [];
                        message.stackEntries.push(reader.string());
                        break;
                    case 2:
                        message.detail = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.DebugInfo} DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DebugInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DebugInfo message.
             * @function verify
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DebugInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stackEntries != null && message.hasOwnProperty("stackEntries")) {
                    if (!Array.isArray(message.stackEntries))
                        return "stackEntries: array expected";
                    for (var i = 0; i < message.stackEntries.length; ++i)
                        if (!$util.isString(message.stackEntries[i]))
                            return "stackEntries: string[] expected";
                }
                if (message.detail != null && message.hasOwnProperty("detail"))
                    if (!$util.isString(message.detail))
                        return "detail: string expected";
                return null;
            };

            /**
             * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.DebugInfo} DebugInfo
             */
            DebugInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.DebugInfo)
                    return object;
                var message = new $root.google.rpc.DebugInfo();
                if (object.stackEntries) {
                    if (!Array.isArray(object.stackEntries))
                        throw TypeError(".google.rpc.DebugInfo.stackEntries: array expected");
                    message.stackEntries = [];
                    for (var i = 0; i < object.stackEntries.length; ++i)
                        message.stackEntries[i] = String(object.stackEntries[i]);
                }
                if (object.detail != null)
                    message.detail = String(object.detail);
                return message;
            };

            /**
             * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.DebugInfo} message DebugInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DebugInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.stackEntries = [];
                if (options.defaults)
                    object.detail = "";
                if (message.stackEntries && message.stackEntries.length) {
                    object.stackEntries = [];
                    for (var j = 0; j < message.stackEntries.length; ++j)
                        object.stackEntries[j] = message.stackEntries[j];
                }
                if (message.detail != null && message.hasOwnProperty("detail"))
                    object.detail = message.detail;
                return object;
            };

            /**
             * Converts this DebugInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.DebugInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DebugInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DebugInfo;
        })();

        rpc.QuotaFailure = (function() {

            /**
             * Properties of a QuotaFailure.
             * @memberof google.rpc
             * @interface IQuotaFailure
             * @property {Array.<google.rpc.QuotaFailure.IViolation>|null} [violations] QuotaFailure violations
             */

            /**
             * Constructs a new QuotaFailure.
             * @memberof google.rpc
             * @classdesc Represents a QuotaFailure.
             * @implements IQuotaFailure
             * @constructor
             * @param {google.rpc.IQuotaFailure=} [properties] Properties to set
             */
            function QuotaFailure(properties) {
                this.violations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QuotaFailure violations.
             * @member {Array.<google.rpc.QuotaFailure.IViolation>} violations
             * @memberof google.rpc.QuotaFailure
             * @instance
             */
            QuotaFailure.prototype.violations = $util.emptyArray;

            /**
             * Creates a new QuotaFailure instance using the specified properties.
             * @function create
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.IQuotaFailure=} [properties] Properties to set
             * @returns {google.rpc.QuotaFailure} QuotaFailure instance
             */
            QuotaFailure.create = function create(properties) {
                return new QuotaFailure(properties);
            };

            /**
             * Encodes the specified QuotaFailure message. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.IQuotaFailure} message QuotaFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuotaFailure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.violations != null && message.violations.length)
                    for (var i = 0; i < message.violations.length; ++i)
                        $root.google.rpc.QuotaFailure.Violation.encode(message.violations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QuotaFailure message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.IQuotaFailure} message QuotaFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuotaFailure.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.QuotaFailure} QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuotaFailure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.QuotaFailure();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.violations && message.violations.length))
                            message.violations = [];
                        message.violations.push($root.google.rpc.QuotaFailure.Violation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.QuotaFailure} QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuotaFailure.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QuotaFailure message.
             * @function verify
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QuotaFailure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.violations != null && message.hasOwnProperty("violations")) {
                    if (!Array.isArray(message.violations))
                        return "violations: array expected";
                    for (var i = 0; i < message.violations.length; ++i) {
                        var error = $root.google.rpc.QuotaFailure.Violation.verify(message.violations[i]);
                        if (error)
                            return "violations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a QuotaFailure message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.QuotaFailure} QuotaFailure
             */
            QuotaFailure.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.QuotaFailure)
                    return object;
                var message = new $root.google.rpc.QuotaFailure();
                if (object.violations) {
                    if (!Array.isArray(object.violations))
                        throw TypeError(".google.rpc.QuotaFailure.violations: array expected");
                    message.violations = [];
                    for (var i = 0; i < object.violations.length; ++i) {
                        if (typeof object.violations[i] !== "object")
                            throw TypeError(".google.rpc.QuotaFailure.violations: object expected");
                        message.violations[i] = $root.google.rpc.QuotaFailure.Violation.fromObject(object.violations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a QuotaFailure message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.QuotaFailure} message QuotaFailure
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QuotaFailure.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.violations = [];
                if (message.violations && message.violations.length) {
                    object.violations = [];
                    for (var j = 0; j < message.violations.length; ++j)
                        object.violations[j] = $root.google.rpc.QuotaFailure.Violation.toObject(message.violations[j], options);
                }
                return object;
            };

            /**
             * Converts this QuotaFailure to JSON.
             * @function toJSON
             * @memberof google.rpc.QuotaFailure
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QuotaFailure.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            QuotaFailure.Violation = (function() {

                /**
                 * Properties of a Violation.
                 * @memberof google.rpc.QuotaFailure
                 * @interface IViolation
                 * @property {string|null} [subject] Violation subject
                 * @property {string|null} [description] Violation description
                 */

                /**
                 * Constructs a new Violation.
                 * @memberof google.rpc.QuotaFailure
                 * @classdesc Represents a Violation.
                 * @implements IViolation
                 * @constructor
                 * @param {google.rpc.QuotaFailure.IViolation=} [properties] Properties to set
                 */
                function Violation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Violation subject.
                 * @member {string} subject
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @instance
                 */
                Violation.prototype.subject = "";

                /**
                 * Violation description.
                 * @member {string} description
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @instance
                 */
                Violation.prototype.description = "";

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.IViolation=} [properties] Properties to set
                 * @returns {google.rpc.QuotaFailure.Violation} Violation instance
                 */
                Violation.create = function create(properties) {
                    return new Violation(properties);
                };

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.QuotaFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.QuotaFailure.Violation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.subject = reader.string();
                            break;
                        case 2:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.QuotaFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Violation message.
                 * @function verify
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Violation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        if (!$util.isString(message.subject))
                            return "subject: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.QuotaFailure.Violation} Violation
                 */
                Violation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.QuotaFailure.Violation)
                        return object;
                    var message = new $root.google.rpc.QuotaFailure.Violation();
                    if (object.subject != null)
                        message.subject = String(object.subject);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.Violation} message Violation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Violation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.subject = "";
                        object.description = "";
                    }
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        object.subject = message.subject;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this Violation to JSON.
                 * @function toJSON
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Violation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Violation;
            })();

            return QuotaFailure;
        })();

        rpc.PreconditionFailure = (function() {

            /**
             * Properties of a PreconditionFailure.
             * @memberof google.rpc
             * @interface IPreconditionFailure
             * @property {Array.<google.rpc.PreconditionFailure.IViolation>|null} [violations] PreconditionFailure violations
             */

            /**
             * Constructs a new PreconditionFailure.
             * @memberof google.rpc
             * @classdesc Represents a PreconditionFailure.
             * @implements IPreconditionFailure
             * @constructor
             * @param {google.rpc.IPreconditionFailure=} [properties] Properties to set
             */
            function PreconditionFailure(properties) {
                this.violations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PreconditionFailure violations.
             * @member {Array.<google.rpc.PreconditionFailure.IViolation>} violations
             * @memberof google.rpc.PreconditionFailure
             * @instance
             */
            PreconditionFailure.prototype.violations = $util.emptyArray;

            /**
             * Creates a new PreconditionFailure instance using the specified properties.
             * @function create
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.IPreconditionFailure=} [properties] Properties to set
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure instance
             */
            PreconditionFailure.create = function create(properties) {
                return new PreconditionFailure(properties);
            };

            /**
             * Encodes the specified PreconditionFailure message. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.IPreconditionFailure} message PreconditionFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PreconditionFailure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.violations != null && message.violations.length)
                    for (var i = 0; i < message.violations.length; ++i)
                        $root.google.rpc.PreconditionFailure.Violation.encode(message.violations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PreconditionFailure message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.IPreconditionFailure} message PreconditionFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PreconditionFailure.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PreconditionFailure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.PreconditionFailure();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.violations && message.violations.length))
                            message.violations = [];
                        message.violations.push($root.google.rpc.PreconditionFailure.Violation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PreconditionFailure.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PreconditionFailure message.
             * @function verify
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PreconditionFailure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.violations != null && message.hasOwnProperty("violations")) {
                    if (!Array.isArray(message.violations))
                        return "violations: array expected";
                    for (var i = 0; i < message.violations.length; ++i) {
                        var error = $root.google.rpc.PreconditionFailure.Violation.verify(message.violations[i]);
                        if (error)
                            return "violations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PreconditionFailure message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure
             */
            PreconditionFailure.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.PreconditionFailure)
                    return object;
                var message = new $root.google.rpc.PreconditionFailure();
                if (object.violations) {
                    if (!Array.isArray(object.violations))
                        throw TypeError(".google.rpc.PreconditionFailure.violations: array expected");
                    message.violations = [];
                    for (var i = 0; i < object.violations.length; ++i) {
                        if (typeof object.violations[i] !== "object")
                            throw TypeError(".google.rpc.PreconditionFailure.violations: object expected");
                        message.violations[i] = $root.google.rpc.PreconditionFailure.Violation.fromObject(object.violations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PreconditionFailure message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.PreconditionFailure} message PreconditionFailure
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PreconditionFailure.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.violations = [];
                if (message.violations && message.violations.length) {
                    object.violations = [];
                    for (var j = 0; j < message.violations.length; ++j)
                        object.violations[j] = $root.google.rpc.PreconditionFailure.Violation.toObject(message.violations[j], options);
                }
                return object;
            };

            /**
             * Converts this PreconditionFailure to JSON.
             * @function toJSON
             * @memberof google.rpc.PreconditionFailure
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PreconditionFailure.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PreconditionFailure.Violation = (function() {

                /**
                 * Properties of a Violation.
                 * @memberof google.rpc.PreconditionFailure
                 * @interface IViolation
                 * @property {string|null} [type] Violation type
                 * @property {string|null} [subject] Violation subject
                 * @property {string|null} [description] Violation description
                 */

                /**
                 * Constructs a new Violation.
                 * @memberof google.rpc.PreconditionFailure
                 * @classdesc Represents a Violation.
                 * @implements IViolation
                 * @constructor
                 * @param {google.rpc.PreconditionFailure.IViolation=} [properties] Properties to set
                 */
                function Violation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Violation type.
                 * @member {string} type
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 */
                Violation.prototype.type = "";

                /**
                 * Violation subject.
                 * @member {string} subject
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 */
                Violation.prototype.subject = "";

                /**
                 * Violation description.
                 * @member {string} description
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 */
                Violation.prototype.description = "";

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.IViolation=} [properties] Properties to set
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation instance
                 */
                Violation.create = function create(properties) {
                    return new Violation(properties);
                };

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.subject);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.PreconditionFailure.Violation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.string();
                            break;
                        case 2:
                            message.subject = reader.string();
                            break;
                        case 3:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Violation message.
                 * @function verify
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Violation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        if (!$util.isString(message.subject))
                            return "subject: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation
                 */
                Violation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.PreconditionFailure.Violation)
                        return object;
                    var message = new $root.google.rpc.PreconditionFailure.Violation();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.subject != null)
                        message.subject = String(object.subject);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.Violation} message Violation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Violation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = "";
                        object.subject = "";
                        object.description = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        object.subject = message.subject;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this Violation to JSON.
                 * @function toJSON
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Violation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Violation;
            })();

            return PreconditionFailure;
        })();

        rpc.BadRequest = (function() {

            /**
             * Properties of a BadRequest.
             * @memberof google.rpc
             * @interface IBadRequest
             * @property {Array.<google.rpc.BadRequest.IFieldViolation>|null} [fieldViolations] BadRequest fieldViolations
             */

            /**
             * Constructs a new BadRequest.
             * @memberof google.rpc
             * @classdesc Represents a BadRequest.
             * @implements IBadRequest
             * @constructor
             * @param {google.rpc.IBadRequest=} [properties] Properties to set
             */
            function BadRequest(properties) {
                this.fieldViolations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BadRequest fieldViolations.
             * @member {Array.<google.rpc.BadRequest.IFieldViolation>} fieldViolations
             * @memberof google.rpc.BadRequest
             * @instance
             */
            BadRequest.prototype.fieldViolations = $util.emptyArray;

            /**
             * Creates a new BadRequest instance using the specified properties.
             * @function create
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.IBadRequest=} [properties] Properties to set
             * @returns {google.rpc.BadRequest} BadRequest instance
             */
            BadRequest.create = function create(properties) {
                return new BadRequest(properties);
            };

            /**
             * Encodes the specified BadRequest message. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.IBadRequest} message BadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BadRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fieldViolations != null && message.fieldViolations.length)
                    for (var i = 0; i < message.fieldViolations.length; ++i)
                        $root.google.rpc.BadRequest.FieldViolation.encode(message.fieldViolations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BadRequest message, length delimited. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.IBadRequest} message BadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BadRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BadRequest message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.BadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.BadRequest} BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BadRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.BadRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.fieldViolations && message.fieldViolations.length))
                            message.fieldViolations = [];
                        message.fieldViolations.push($root.google.rpc.BadRequest.FieldViolation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BadRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.BadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.BadRequest} BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BadRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BadRequest message.
             * @function verify
             * @memberof google.rpc.BadRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BadRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fieldViolations != null && message.hasOwnProperty("fieldViolations")) {
                    if (!Array.isArray(message.fieldViolations))
                        return "fieldViolations: array expected";
                    for (var i = 0; i < message.fieldViolations.length; ++i) {
                        var error = $root.google.rpc.BadRequest.FieldViolation.verify(message.fieldViolations[i]);
                        if (error)
                            return "fieldViolations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BadRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.BadRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.BadRequest} BadRequest
             */
            BadRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.BadRequest)
                    return object;
                var message = new $root.google.rpc.BadRequest();
                if (object.fieldViolations) {
                    if (!Array.isArray(object.fieldViolations))
                        throw TypeError(".google.rpc.BadRequest.fieldViolations: array expected");
                    message.fieldViolations = [];
                    for (var i = 0; i < object.fieldViolations.length; ++i) {
                        if (typeof object.fieldViolations[i] !== "object")
                            throw TypeError(".google.rpc.BadRequest.fieldViolations: object expected");
                        message.fieldViolations[i] = $root.google.rpc.BadRequest.FieldViolation.fromObject(object.fieldViolations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BadRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.BadRequest} message BadRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BadRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.fieldViolations = [];
                if (message.fieldViolations && message.fieldViolations.length) {
                    object.fieldViolations = [];
                    for (var j = 0; j < message.fieldViolations.length; ++j)
                        object.fieldViolations[j] = $root.google.rpc.BadRequest.FieldViolation.toObject(message.fieldViolations[j], options);
                }
                return object;
            };

            /**
             * Converts this BadRequest to JSON.
             * @function toJSON
             * @memberof google.rpc.BadRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BadRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            BadRequest.FieldViolation = (function() {

                /**
                 * Properties of a FieldViolation.
                 * @memberof google.rpc.BadRequest
                 * @interface IFieldViolation
                 * @property {string|null} [field] FieldViolation field
                 * @property {string|null} [description] FieldViolation description
                 */

                /**
                 * Constructs a new FieldViolation.
                 * @memberof google.rpc.BadRequest
                 * @classdesc Represents a FieldViolation.
                 * @implements IFieldViolation
                 * @constructor
                 * @param {google.rpc.BadRequest.IFieldViolation=} [properties] Properties to set
                 */
                function FieldViolation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FieldViolation field.
                 * @member {string} field
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @instance
                 */
                FieldViolation.prototype.field = "";

                /**
                 * FieldViolation description.
                 * @member {string} description
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @instance
                 */
                FieldViolation.prototype.description = "";

                /**
                 * Creates a new FieldViolation instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.IFieldViolation=} [properties] Properties to set
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation instance
                 */
                FieldViolation.create = function create(properties) {
                    return new FieldViolation(properties);
                };

                /**
                 * Encodes the specified FieldViolation message. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.IFieldViolation} message FieldViolation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldViolation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.field != null && message.hasOwnProperty("field"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.field);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified FieldViolation message, length delimited. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.IFieldViolation} message FieldViolation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldViolation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldViolation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.BadRequest.FieldViolation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.field = reader.string();
                            break;
                        case 2:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldViolation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FieldViolation message.
                 * @function verify
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldViolation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.field != null && message.hasOwnProperty("field"))
                        if (!$util.isString(message.field))
                            return "field: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a FieldViolation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                 */
                FieldViolation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.BadRequest.FieldViolation)
                        return object;
                    var message = new $root.google.rpc.BadRequest.FieldViolation();
                    if (object.field != null)
                        message.field = String(object.field);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a FieldViolation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.FieldViolation} message FieldViolation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldViolation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.field = "";
                        object.description = "";
                    }
                    if (message.field != null && message.hasOwnProperty("field"))
                        object.field = message.field;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this FieldViolation to JSON.
                 * @function toJSON
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldViolation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FieldViolation;
            })();

            return BadRequest;
        })();

        rpc.RequestInfo = (function() {

            /**
             * Properties of a RequestInfo.
             * @memberof google.rpc
             * @interface IRequestInfo
             * @property {string|null} [requestId] RequestInfo requestId
             * @property {string|null} [servingData] RequestInfo servingData
             */

            /**
             * Constructs a new RequestInfo.
             * @memberof google.rpc
             * @classdesc Represents a RequestInfo.
             * @implements IRequestInfo
             * @constructor
             * @param {google.rpc.IRequestInfo=} [properties] Properties to set
             */
            function RequestInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestInfo requestId.
             * @member {string} requestId
             * @memberof google.rpc.RequestInfo
             * @instance
             */
            RequestInfo.prototype.requestId = "";

            /**
             * RequestInfo servingData.
             * @member {string} servingData
             * @memberof google.rpc.RequestInfo
             * @instance
             */
            RequestInfo.prototype.servingData = "";

            /**
             * Creates a new RequestInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.IRequestInfo=} [properties] Properties to set
             * @returns {google.rpc.RequestInfo} RequestInfo instance
             */
            RequestInfo.create = function create(properties) {
                return new RequestInfo(properties);
            };

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.IRequestInfo} message RequestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
                if (message.servingData != null && message.hasOwnProperty("servingData"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.servingData);
                return writer;
            };

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.IRequestInfo} message RequestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.RequestInfo} RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.RequestInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.requestId = reader.string();
                        break;
                    case 2:
                        message.servingData = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.RequestInfo} RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestInfo message.
             * @function verify
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isString(message.requestId))
                        return "requestId: string expected";
                if (message.servingData != null && message.hasOwnProperty("servingData"))
                    if (!$util.isString(message.servingData))
                        return "servingData: string expected";
                return null;
            };

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.RequestInfo} RequestInfo
             */
            RequestInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.RequestInfo)
                    return object;
                var message = new $root.google.rpc.RequestInfo();
                if (object.requestId != null)
                    message.requestId = String(object.requestId);
                if (object.servingData != null)
                    message.servingData = String(object.servingData);
                return message;
            };

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.RequestInfo} message RequestInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = "";
                    object.servingData = "";
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.servingData != null && message.hasOwnProperty("servingData"))
                    object.servingData = message.servingData;
                return object;
            };

            /**
             * Converts this RequestInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.RequestInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestInfo;
        })();

        rpc.ResourceInfo = (function() {

            /**
             * Properties of a ResourceInfo.
             * @memberof google.rpc
             * @interface IResourceInfo
             * @property {string|null} [resourceType] ResourceInfo resourceType
             * @property {string|null} [resourceName] ResourceInfo resourceName
             * @property {string|null} [owner] ResourceInfo owner
             * @property {string|null} [description] ResourceInfo description
             */

            /**
             * Constructs a new ResourceInfo.
             * @memberof google.rpc
             * @classdesc Represents a ResourceInfo.
             * @implements IResourceInfo
             * @constructor
             * @param {google.rpc.IResourceInfo=} [properties] Properties to set
             */
            function ResourceInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResourceInfo resourceType.
             * @member {string} resourceType
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.resourceType = "";

            /**
             * ResourceInfo resourceName.
             * @member {string} resourceName
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.resourceName = "";

            /**
             * ResourceInfo owner.
             * @member {string} owner
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.owner = "";

            /**
             * ResourceInfo description.
             * @member {string} description
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.description = "";

            /**
             * Creates a new ResourceInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.IResourceInfo=} [properties] Properties to set
             * @returns {google.rpc.ResourceInfo} ResourceInfo instance
             */
            ResourceInfo.create = function create(properties) {
                return new ResourceInfo(properties);
            };

            /**
             * Encodes the specified ResourceInfo message. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.IResourceInfo} message ResourceInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceType);
                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceName);
                if (message.owner != null && message.hasOwnProperty("owner"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.owner);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
                return writer;
            };

            /**
             * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.IResourceInfo} message ResourceInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.ResourceInfo} ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.ResourceInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.resourceType = reader.string();
                        break;
                    case 2:
                        message.resourceName = reader.string();
                        break;
                    case 3:
                        message.owner = reader.string();
                        break;
                    case 4:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.ResourceInfo} ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResourceInfo message.
             * @function verify
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResourceInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                    if (!$util.isString(message.resourceType))
                        return "resourceType: string expected";
                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                    if (!$util.isString(message.resourceName))
                        return "resourceName: string expected";
                if (message.owner != null && message.hasOwnProperty("owner"))
                    if (!$util.isString(message.owner))
                        return "owner: string expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };

            /**
             * Creates a ResourceInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.ResourceInfo} ResourceInfo
             */
            ResourceInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.ResourceInfo)
                    return object;
                var message = new $root.google.rpc.ResourceInfo();
                if (object.resourceType != null)
                    message.resourceType = String(object.resourceType);
                if (object.resourceName != null)
                    message.resourceName = String(object.resourceName);
                if (object.owner != null)
                    message.owner = String(object.owner);
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };

            /**
             * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.ResourceInfo} message ResourceInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResourceInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.resourceType = "";
                    object.resourceName = "";
                    object.owner = "";
                    object.description = "";
                }
                if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                    object.resourceType = message.resourceType;
                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                    object.resourceName = message.resourceName;
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };

            /**
             * Converts this ResourceInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.ResourceInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResourceInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResourceInfo;
        })();

        rpc.Help = (function() {

            /**
             * Properties of a Help.
             * @memberof google.rpc
             * @interface IHelp
             * @property {Array.<google.rpc.Help.ILink>|null} [links] Help links
             */

            /**
             * Constructs a new Help.
             * @memberof google.rpc
             * @classdesc Represents a Help.
             * @implements IHelp
             * @constructor
             * @param {google.rpc.IHelp=} [properties] Properties to set
             */
            function Help(properties) {
                this.links = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Help links.
             * @member {Array.<google.rpc.Help.ILink>} links
             * @memberof google.rpc.Help
             * @instance
             */
            Help.prototype.links = $util.emptyArray;

            /**
             * Creates a new Help instance using the specified properties.
             * @function create
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.IHelp=} [properties] Properties to set
             * @returns {google.rpc.Help} Help instance
             */
            Help.create = function create(properties) {
                return new Help(properties);
            };

            /**
             * Encodes the specified Help message. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.IHelp} message Help message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Help.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.links != null && message.links.length)
                    for (var i = 0; i < message.links.length; ++i)
                        $root.google.rpc.Help.Link.encode(message.links[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Help message, length delimited. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.IHelp} message Help message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Help.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Help message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.Help
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.Help} Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Help.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Help();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.links && message.links.length))
                            message.links = [];
                        message.links.push($root.google.rpc.Help.Link.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Help message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.Help
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.Help} Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Help.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Help message.
             * @function verify
             * @memberof google.rpc.Help
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Help.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.links != null && message.hasOwnProperty("links")) {
                    if (!Array.isArray(message.links))
                        return "links: array expected";
                    for (var i = 0; i < message.links.length; ++i) {
                        var error = $root.google.rpc.Help.Link.verify(message.links[i]);
                        if (error)
                            return "links." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Help message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.Help
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.Help} Help
             */
            Help.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.Help)
                    return object;
                var message = new $root.google.rpc.Help();
                if (object.links) {
                    if (!Array.isArray(object.links))
                        throw TypeError(".google.rpc.Help.links: array expected");
                    message.links = [];
                    for (var i = 0; i < object.links.length; ++i) {
                        if (typeof object.links[i] !== "object")
                            throw TypeError(".google.rpc.Help.links: object expected");
                        message.links[i] = $root.google.rpc.Help.Link.fromObject(object.links[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Help message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.Help} message Help
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Help.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.links = [];
                if (message.links && message.links.length) {
                    object.links = [];
                    for (var j = 0; j < message.links.length; ++j)
                        object.links[j] = $root.google.rpc.Help.Link.toObject(message.links[j], options);
                }
                return object;
            };

            /**
             * Converts this Help to JSON.
             * @function toJSON
             * @memberof google.rpc.Help
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Help.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Help.Link = (function() {

                /**
                 * Properties of a Link.
                 * @memberof google.rpc.Help
                 * @interface ILink
                 * @property {string|null} [description] Link description
                 * @property {string|null} [url] Link url
                 */

                /**
                 * Constructs a new Link.
                 * @memberof google.rpc.Help
                 * @classdesc Represents a Link.
                 * @implements ILink
                 * @constructor
                 * @param {google.rpc.Help.ILink=} [properties] Properties to set
                 */
                function Link(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Link description.
                 * @member {string} description
                 * @memberof google.rpc.Help.Link
                 * @instance
                 */
                Link.prototype.description = "";

                /**
                 * Link url.
                 * @member {string} url
                 * @memberof google.rpc.Help.Link
                 * @instance
                 */
                Link.prototype.url = "";

                /**
                 * Creates a new Link instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.ILink=} [properties] Properties to set
                 * @returns {google.rpc.Help.Link} Link instance
                 */
                Link.create = function create(properties) {
                    return new Link(properties);
                };

                /**
                 * Encodes the specified Link message. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.ILink} message Link message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Link.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.description);
                    if (message.url != null && message.hasOwnProperty("url"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                    return writer;
                };

                /**
                 * Encodes the specified Link message, length delimited. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.ILink} message Link message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Link.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Link message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.Help.Link} Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Link.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Help.Link();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.description = reader.string();
                            break;
                        case 2:
                            message.url = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Link message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.Help.Link} Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Link.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Link message.
                 * @function verify
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Link.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.url != null && message.hasOwnProperty("url"))
                        if (!$util.isString(message.url))
                            return "url: string expected";
                    return null;
                };

                /**
                 * Creates a Link message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.Help.Link} Link
                 */
                Link.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.Help.Link)
                        return object;
                    var message = new $root.google.rpc.Help.Link();
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.url != null)
                        message.url = String(object.url);
                    return message;
                };

                /**
                 * Creates a plain object from a Link message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.Link} message Link
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Link.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.description = "";
                        object.url = "";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    return object;
                };

                /**
                 * Converts this Link to JSON.
                 * @function toJSON
                 * @memberof google.rpc.Help.Link
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Link.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Link;
            })();

            return Help;
        })();

        rpc.LocalizedMessage = (function() {

            /**
             * Properties of a LocalizedMessage.
             * @memberof google.rpc
             * @interface ILocalizedMessage
             * @property {string|null} [locale] LocalizedMessage locale
             * @property {string|null} [message] LocalizedMessage message
             */

            /**
             * Constructs a new LocalizedMessage.
             * @memberof google.rpc
             * @classdesc Represents a LocalizedMessage.
             * @implements ILocalizedMessage
             * @constructor
             * @param {google.rpc.ILocalizedMessage=} [properties] Properties to set
             */
            function LocalizedMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LocalizedMessage locale.
             * @member {string} locale
             * @memberof google.rpc.LocalizedMessage
             * @instance
             */
            LocalizedMessage.prototype.locale = "";

            /**
             * LocalizedMessage message.
             * @member {string} message
             * @memberof google.rpc.LocalizedMessage
             * @instance
             */
            LocalizedMessage.prototype.message = "";

            /**
             * Creates a new LocalizedMessage instance using the specified properties.
             * @function create
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.ILocalizedMessage=} [properties] Properties to set
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage instance
             */
            LocalizedMessage.create = function create(properties) {
                return new LocalizedMessage(properties);
            };

            /**
             * Encodes the specified LocalizedMessage message. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.ILocalizedMessage} message LocalizedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LocalizedMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.locale != null && message.hasOwnProperty("locale"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified LocalizedMessage message, length delimited. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.ILocalizedMessage} message LocalizedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LocalizedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LocalizedMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.LocalizedMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.locale = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LocalizedMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LocalizedMessage message.
             * @function verify
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LocalizedMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.locale != null && message.hasOwnProperty("locale"))
                    if (!$util.isString(message.locale))
                        return "locale: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a LocalizedMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage
             */
            LocalizedMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.LocalizedMessage)
                    return object;
                var message = new $root.google.rpc.LocalizedMessage();
                if (object.locale != null)
                    message.locale = String(object.locale);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a LocalizedMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.LocalizedMessage} message LocalizedMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LocalizedMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.locale = "";
                    object.message = "";
                }
                if (message.locale != null && message.hasOwnProperty("locale"))
                    object.locale = message.locale;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this LocalizedMessage to JSON.
             * @function toJSON
             * @memberof google.rpc.LocalizedMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LocalizedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LocalizedMessage;
        })();

        return rpc;
    })();

    return google;
})();

module.exports = $root;
