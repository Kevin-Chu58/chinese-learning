"use strict";
var main = (function() {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = function(target, all) {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: function(k) {
            return from[k];
          }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  };

  // cf2/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: function() {
      return src_default;
    }
  });
  var src_default = function(event) {
    var domainName = "";
    console.log("event", event);
    var request = event.request;
    var host = request.headers.host;
    var uri = request.uri;
    var querystring = request.querystring;
    if (!host) {
      return {
        statusCode: 400
      };
    }
    var keys = Object.keys(querystring);
    var values = Object.values(querystring);
    if (host.value === domainName || !domainName) {
      request.querystring = {};
      request.headers["x-forwarded-host"] = {
        value: host.value
      };
      keys.forEach(function(key, index) {
        request.querystring[encodeURIComponent(key)] = values[index];
      });
      return request;
    }
    var search = "";
    if (keys.length) {
      search = "?";
      keys.forEach(function(key) {
        var val = querystring[key];
        var value = val.value;
        var multiValue = val.multiValue;
        if (search !== "?") {
          search = search + "&";
        }
        search = search + key + "=" + value;
        if (multiValue) {
          multiValue.forEach(function(value2) {
            search = search + "&" + key + "=" + value2;
          });
        }
      });
    }
    return {
      statusCode: 308,
      headers: {
        location: {
          value: "https://" + domainName + uri + search
        }
      }
    };
  };
  return __toCommonJS(src_exports);
})();
function handler (event) { return main.default(event); }