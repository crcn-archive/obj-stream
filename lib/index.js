var Readable = require("./readable");
var Writable = require("./writable");
var Stream   = require("./stream");
var through  = require("./through");
var wrap     = require("./wrap");

exports.Readable = Readable;
exports.readable = Readable;

exports.Writable = Writable;
exports.writable = Writable;

exports.Stream = Stream;
exports.stream = Stream;

exports.through = through;

exports.wrap    = wrap;
